import { ApiProduct } from './api';

export interface DummyProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice: string | null;
  investor: string;
  season: string;
  episode: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

export class ProductMapper {
  private static defaultInvestors = [
    "Judith Williams",
    "Frank Thelen", 
    "Ralf Dümmel",
    "Carsten Maschmeyer",
    "Dagmar Wöhrl",
    "Nils Glagau",
    "Georg Kofler"
  ];

  private static defaultSeasons = [
    "Staffel 16",
    "Staffel 15", 
    "Staffel 14",
    "Staffel 13",
    "Staffel 12",
    "Staffel 11"
  ];

  private static getRandomInvestor(): string {
    return this.defaultInvestors[Math.floor(Math.random() * this.defaultInvestors.length)];
  }

  private static getRandomSeason(): string {
    return this.defaultSeasons[Math.floor(Math.random() * this.defaultSeasons.length)];
  }

  private static generateRandomRating(): number {
    return Math.round((Math.random() * 1.5 + 3.5) * 10) / 10;
  }

  private static generateRandomReviews(): number {
    return Math.floor(Math.random() * 2000) + 100;
  }

  private static generateConsistentRating(id: number): number {
    // Generate consistent rating based on ID so it doesn't change on reload
    const seed = id % 1000;
    const rating = 3.5 + (seed % 150) / 100; // Range: 3.5 - 5.0
    return Math.round(rating * 10) / 10;
  }

  private static generateConsistentReviews(id: number): number {
    // Generate consistent review count based on ID so it doesn't change on reload
    const seed = id % 10000;
    return 100 + (seed % 1900); // Range: 100 - 2000
  }

  private static getInvestorFromStaffel(staffel?: string): string | null {
    if (!staffel) return null;
    
    // Map staffel to typical investors for that season
    const staffelInvestors: { [key: string]: string[] } = {
      "17": ["Judith Williams", "Carsten Maschmeyer", "Nils Glagau"],
      "16": ["Frank Thelen", "Dagmar Wöhrl", "Ralf Dümmel"],
      "15": ["Georg Kofler", "Judith Williams", "Carsten Maschmeyer"],
      "14": ["Ralf Dümmel", "Frank Thelen", "Nils Glagau"],
      "13": ["Dagmar Wöhrl", "Georg Kofler", "Judith Williams"]
    };
    
    const investors = staffelInvestors[staffel] || this.defaultInvestors;
    return investors[Math.floor(Math.random() * investors.length)];
  }

  private static getEpisodeFromDate(datum?: string, staffel?: string): string {
    if (!datum) return "Folge 1";
    
    // Map known dates to episodes
    // Example: "23.06.2025" -> Folge 8 for Staffel 17
    const dateToEpisode: { [key: string]: { [date: string]: string } } = {
      "17": {
        "23.06.2025": "Folge 8",
        "16.06.2025": "Folge 7",
        "09.06.2025": "Folge 6",
        "02.06.2025": "Folge 5",
        "26.05.2025": "Folge 4",
        "19.05.2025": "Folge 3",
        "12.05.2025": "Folge 2",
        "05.05.2025": "Folge 1"
      }
    };
    
    if (staffel && dateToEpisode[staffel] && dateToEpisode[staffel][datum]) {
      return dateToEpisode[staffel][datum];
    }
    
    // Default fallback - generate episode based on date
    // Assume episodes are weekly starting from first Monday of May
    try {
      const [day, month, year] = datum.split('.');
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      const startDate = new Date(parseInt(year), 4, 1); // May 1st
      const weeksDiff = Math.floor((date.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000));
      return `Folge ${Math.max(1, Math.min(weeksDiff + 1, 12))}`; // Cap at 12 episodes
    } catch {
      return "Folge 1";
    }
  }

  private static formatPrice(price: number | string | undefined): string {
    if (!price) return "0,00";
    
    if (typeof price === 'string') {
      return price;
    }
    
    return price.toFixed(2).replace('.', ',');
  }

  private static generateOriginalPrice(price: string): string | null {
    if (Math.random() > 0.3) return null;
    
    const numPrice = parseFloat(price.replace(',', '.'));
    if (isNaN(numPrice)) return null;
    
    const originalPrice = numPrice * (1 + Math.random() * 0.5 + 0.2);
    return originalPrice.toFixed(2).replace('.', ',');
  }

  private static extractCategory(payload: ApiProduct['payload']): string {
    if (payload.category) return payload.category;
    
    const categories = [
      "Gesundheit & Beauty",
      "Küche & Haushalt", 
      "Sport & Fitness",
      "Tech & Innovation",
      "Food & Drinks",
      "Fashion & Style",
      "Heim & Garten"
    ];
    
    return categories[Math.floor(Math.random() * categories.length)];
  }

  static mapApiProductToDummy(apiProduct: ApiProduct, index: number = 0): DummyProduct {
    const { payload } = apiProduct;
    
    const price = this.formatPrice(payload.price);
    
    // Convert string/number ID to number, using index as fallback
    let numericId: number;
    if (typeof apiProduct.id === 'number') {
      numericId = apiProduct.id;
    } else if (typeof apiProduct.id === 'string') {
      const parsed = parseInt(apiProduct.id);
      numericId = isNaN(parsed) ? Date.now() + index : parsed;
    } else {
      numericId = Date.now() + index;
    }
    
    return {
      id: numericId,
      name: payload.name || "Unbekanntes Produkt",
      description: payload.context_file || `Hochwertiges Produkt aus der Höhle der Löwen`,
      price: price,
      originalPrice: null,
      investor: this.getInvestorFromStaffel(payload.staffel) || this.getRandomInvestor(),
      season: payload.staffel ? `Staffel ${payload.staffel}` : this.getRandomSeason(),
      episode: this.getEpisodeFromDate(payload.datum, payload.staffel),
      image: payload.image_url || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      rating: this.generateConsistentRating(numericId),
      reviews: this.generateConsistentReviews(numericId),
      category: this.extractCategory(payload)
    };
  }

  static mapApiProductsToDummy(apiProducts: ApiProduct[]): DummyProduct[] {
    return apiProducts.map((product, index) => this.mapApiProductToDummy(product, index));
  }
}