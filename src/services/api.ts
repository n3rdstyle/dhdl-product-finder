export interface ApiProduct {
  id: string | number;
  version?: number;
  score: number;
  payload: {
    name: string;
    product_url: string;
    image_url: string;
    description?: string;
    category?: string;
    price?: number | string;
    brand?: string;
    material?: string;
    size?: string[];
    staffel?: string;
    datum?: string;
    context_file?: string;
    [key: string]: any;
  };
}

export interface ApiSearchResponse {
  success: boolean;
  session_id: string;
  processing_time: number;
  processing_mode: string;
  intent_analysis?: {
    strategy: {
      type: string;
      strategy: string;
      confidence: number;
      reasoning: string;
    };
    spatial?: object;
    properties?: object;
    negations?: object;
  };
  results: ApiProduct[];
  message: string | null;
  error: string | null;
  performance_stats?: object | null;
}

export interface SearchRequest {
  text?: string;
  image?: string;
  session_id?: string | null;
  user_id?: string | null;
  chat_id?: string | null;
  use_async?: boolean | null;
  hasImage?: boolean | null;
  limit?: number | null;
  count?: number | null;
  max_results?: number | null;
  size?: number | null;
}

const API_BASE_URL = import.meta.env.DEV ? '' : 'https://search-a.shop';

export class ApiService {
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  async searchMultimodal(request: SearchRequest): Promise<ApiSearchResponse> {
    if (!request.text && !request.image) {
      throw new Error('Either text or image is required');
    }

    const requestBody: SearchRequest = {
      ...request,
      session_id: request.session_id || this.sessionId,
    };


    try {
      const response = await fetch(`${API_BASE_URL}/api/search/multimodal`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiSearchResponse = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API search error:', error);
      throw error;
    }
  }

  async searchByText(text: string, minScore: number = 0, limit?: number): Promise<ApiSearchResponse> {
    const request: SearchRequest = { 
      text,
      // Test multiple possible parameter names for result limit
      limit: limit || 25,
      count: limit || 25, 
      max_results: limit || 25,
      size: limit || 25
    };
    
    const response = await this.searchMultimodal(request);
    
    // Filter results by minimum score if specified
    if (minScore > 0 && response.results) {
      response.results = response.results.filter(result => result.score >= minScore);
    }
    
    return response;
  }

  async searchByImage(imageBase64: string, minScore: number = 0): Promise<ApiSearchResponse> {
    const response = await this.searchMultimodal({ text: "", image: imageBase64 });
    
    // Filter results by minimum score if specified
    if (minScore > 0 && response.results) {
      response.results = response.results.filter(result => result.score >= minScore);
    }
    
    return response;
  }

  async searchByTextAndImage(text: string, imageBase64: string, minScore: number = 0): Promise<ApiSearchResponse> {
    const response = await this.searchMultimodal({ text, image: imageBase64 });
    
    // Filter results by minimum score if specified
    if (minScore > 0 && response.results) {
      response.results = response.results.filter(result => result.score >= minScore);
    }
    
    return response;
  }

  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      // Create a canvas to resize the image if it's too large
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Limit image size to max 800x600 to reduce payload
        const maxWidth = 800;
        const maxHeight = 600;
        let { width, height } = img;
        
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
        
        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(img, 0, 0, width, height);
        
        // Convert to base64 with reduced quality
        const base64 = canvas.toDataURL('image/jpeg', 0.7);
        resolve(base64);
      };
      
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  }

  getSessionId(): string {
    return this.sessionId;
  }

  setSessionId(sessionId: string): void {
    this.sessionId = sessionId;
  }
}

export const apiService = new ApiService();