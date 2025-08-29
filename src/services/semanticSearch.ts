import { apiService, ApiSearchResponse } from './api';

export interface QueryAnalysis {
  type: 'product_specific' | 'category' | 'intent' | 'investor' | 'season' | 'vague';
  originalQuery: string;
  enhancedQuery: string;
  confidenceThreshold: number;
  fallbackThreshold: number;
}

export class SemanticSearchService {
  
  /**
   * Analyze user query to determine search strategy and optimal configuration
   */
  static analyzeQuery(query: string): QueryAnalysis {
    const queryLower = query.toLowerCase().trim();
    
    // Product-specific queries (high precision needed)
    if (this.isProductSpecificQuery(queryLower)) {
      return {
        type: 'product_specific',
        originalQuery: query,
        enhancedQuery: `Finde das spezifische Produkt: ${query}. Zeige exakte Matches und ähnliche Produkte aus der Höhle der Löwen.`,
        confidenceThreshold: 0.6,
        fallbackThreshold: 0.4
      };
    }
    
    // Intent-based queries (problem/solution oriented)
    if (this.isIntentQuery(queryLower)) {
      return {
        type: 'intent',
        originalQuery: query,
        enhancedQuery: this.enhanceIntentQuery(query),
        confidenceThreshold: 0.6, // Higher threshold for more precision
        fallbackThreshold: 0.3
      };
    }
    
    // Category queries (broader matching needed)
    if (this.isCategoryQuery(queryLower)) {
      return {
        type: 'category',
        originalQuery: query,
        enhancedQuery: `Finde alle Höhle der Löwen Produkte in der Kategorie ${query}. Zeige verwandte und ähnliche Produkte aus dieser Kategorie.`,
        confidenceThreshold: 0.5,
        fallbackThreshold: 0.3
      };
    }
    
    // Investor-related queries
    if (this.isInvestorQuery(queryLower)) {
      return {
        type: 'investor',
        originalQuery: query,
        enhancedQuery: `Welche Höhle der Löwen Produkte hat ${query} unterstützt oder in die investiert wurde? Zeige alle Deals und Investments.`,
        confidenceThreshold: 0.5,
        fallbackThreshold: 0.3
      };
    }
    
    // Season/episode queries
    if (this.isSeasonQuery(queryLower)) {
      return {
        type: 'season',
        originalQuery: query,
        enhancedQuery: `Zeige alle Produkte aus ${query} der Höhle der Löwen. Berücksichtige sowohl Staffel als auch Folge Informationen.`,
        confidenceThreshold: 0.5,
        fallbackThreshold: 0.3
      };
    }
    
    // Vague/general queries (cast wide net)
    return {
      type: 'vague',
      originalQuery: query,
      enhancedQuery: `Zeige relevante Höhle der Löwen Produkte für: ${query}. Berücksichtige verschiedene Interpretationen und verwandte Konzepte.`,
      confidenceThreshold: 0.3,
      fallbackThreshold: 0.1
    };
  }
  
  /**
   * Test raw semantic search without enhancement - let's see what the AI actually does
   */
  static async search(query: string): Promise<ApiSearchResponse> {
    console.log(`🧪 RAW SEMANTIC TEST: Sending original query "${query}" directly to AI`);
    
    try {
      // Send raw query directly to test true semantic capabilities
      const response = await apiService.searchByText(
        query,  // NO enhancement, just the raw user query
        0.5,    // Higher threshold for better relevance
        10      // Reasonable number of results
      );
      
      // Log AI intent analysis if available
      if (response.intent_analysis) {
        console.log(`🤖 AI Raw Analysis:`, {
          strategy: response.intent_analysis.strategy,
          confidence: response.intent_analysis.strategy?.confidence
        });
      }
      
      console.log(`🧪 Raw semantic search returned: ${response.results?.length || 0} results`);
      
      // Log what products we got to analyze semantic quality
      if (response.results) {
        response.results.forEach((result, index) => {
          console.log(`📦 Result ${index + 1}: "${result.payload?.name}" (score: ${result.score})`);
        });
      }
      
      return response;
      
    } catch (error) {
      console.error('Raw semantic search error:', error);
      return await apiService.searchByText(query, 0.1, 10);
    }
  }
  
  // Query type detection methods
  private static isProductSpecificQuery(query: string): boolean {
    const productKeywords = [
      'fyta', 'beam gen', 'aerostiletto', 'dogs-guard', 'dogs guard', 'anuux', 'zoltra',
      'bee cream', 'nailmatic', 'kapseln', 'hundegeschirr', 'grip', 'fußball', 'grove set',
      'wlan hub', 'cleaning kit', 'partner-bundle', 'sorglos-bundle', 'pickup faszientrainer',
      // New brand keywords
      'miss mineva', 'mineva', 'cup wunder', 'suppenwunder', 'fermentiert',
      'mama', 'falafel', 'falafelteig', 'capsello', 'zahnbürste', 'zahnbürstenbox',
      'radanker', 'fahrradständer', 'hey mela', 'schwangerschaftstest',
      'betta salt', 'mineralsalz', 'pflanzensalz', 'mamaye', 'äthiopisch', 'eritreeisch',
      'berbere', 'shiro', 'ades', 'misir', 'silsi'
    ];
    return productKeywords.some(keyword => query.includes(keyword));
  }
  
  private static isIntentQuery(query: string): boolean {
    const intents = [
      'abnehmen', 'training', 'pflege', 'überwachung', 'monitoring', 'gesund', 'fit',
      'praktisch', 'innovativ', 'lösung', 'problem', 'hilft', 'verbessert', 'pflanze',
      'pflanzen', 'hund', 'haustier', 'sport', 'fitness', 'schönheit', 'beauty',
      'gesundheit', 'wellness', 'smart', 'intelligent', 'automatisch',
      // New intent keywords
      'vegan', 'vegetarisch', 'fermentiert', 'instant', 'reise', 'unterwegs',
      'fahrrad', 'bike', 'rad', 'hygiene', 'zahnbürste', 'essen', 'lebensmittel',
      'kochen', 'küche', 'natürlich', 'nachhaltig', 'schwanger', 'baby'
    ];
    return intents.some(intent => query.includes(intent));
  }
  
  private static isCategoryQuery(query: string): boolean {
    const categories = [
      'gesundheit', 'beauty', 'sport', 'fitness', 'tech', 'technologie', 'innovation',
      'küche', 'haushalt', 'fashion', 'mode', 'heim', 'garten', 'tier', 'haustier',
      'elektronik', 'gadget', 'zubehör', 'accessoire',
      // New categories
      'lebensmittel', 'food', 'baby', 'kind', 'hygiene', 'pflege', 'reise'
    ];
    return categories.some(cat => query.includes(cat));
  }
  
  private static isInvestorQuery(query: string): boolean {
    const investors = [
      'judith williams', 'carsten maschmeyer', 'jana ensthaler', 'ralf dümmel',
      'dagmar wöhrl', 'nils glagau', 'frank thelen', 'investor', 'deal', 'investment',
      'thelen', 'williams', 'maschmeyer', 'dümmel', 'ensthaler'
    ];
    return investors.some(inv => query.includes(inv));
  }
  
  private static isSeasonQuery(query: string): boolean {
    return query.includes('staffel') || query.includes('folge') || query.includes('episode') ||
           /staffel\s*\d+|folge\s*\d+/.test(query);
  }


  // Enhanced query generation with semantic keyword mapping
  private static enhanceIntentQuery(query: string): string {
    // Map German intent keywords to semantic concepts including product names
    const intentMappings: { [key: string]: string[] } = {
      'abnehmen': ['abnehmen', 'gewicht verlieren', 'diät', 'schlank', 'fitness', 'gesund', 'supplement', 'nahrungsergänzung', 'ANUUX', 'kapseln', 'Zoltra Sport', 'Betta Salt', 'weniger Natrium'],
      'pflanze': ['pflanzen', 'garten', 'monitoring', 'sensor', 'überwachung', 'smart', 'FYTA', 'pflanzenpflege', 'Beam Gen'],
      'hund': ['hund', 'haustier', 'tier', 'geschirr', 'Dogs-Guard', 'hundegeschirr', 'hundezubehör'],
      'training': ['training', 'sport', 'fitness', 'bewegung', 'Zoltra', 'fußball', 'aktivität', 'grip', 'Radanker', 'Fahrrad'],
      'gesundheit': ['gesundheit', 'wellness', 'pflege', 'beauty', 'supplement', 'ANUUX', 'kapseln', 'Hey Mela', 'Schwangerschaftstest', 'vegan', 'Betta Salt'],
      'smart': ['smart', 'technologie', 'monitoring', 'sensor', 'FYTA', 'überwachung', 'automatisch', 'innovation'],
      'essen': ['essen', 'lebensmittel', 'food', 'küche', 'kochen', 'Miss Mineva', 'fermentiert', 'instant', 'Mama Falafel', 'Mamaye', 'äthiopisch', 'eritreeisch', 'Betta Salt'],
      'vegan': ['vegan', 'pflanzlich', 'vegetarisch', 'Miss Mineva', 'Mama Falafel', 'Hey Mela', 'Mamaye'],
      'reise': ['reise', 'unterwegs', 'travel', 'mobil', 'Capsello', 'Zahnbürste', 'Radanker', 'portabel'],
      'fahrrad': ['fahrrad', 'bike', 'rad', 'Radanker', 'Fahrradständer', 'cycling', 'rennrad', 'gravel', 'mtb'],
      'hygiene': ['hygiene', 'zahnbürste', 'pflege', 'sauber', 'Capsello', 'Zahnbürstenbox']
    };
    
    const queryLower = query.toLowerCase();
    
    // Find the best matching intent and use its semantic concepts
    for (const [intent, concepts] of Object.entries(intentMappings)) {
      if (queryLower.includes(intent)) {
        return `${concepts.join(' ')} Höhle der Löwen`;
      }
    }
    
    // Fallback: add context but keep original query
    return `${query} Höhle der Löwen Produkte`;
  }
}