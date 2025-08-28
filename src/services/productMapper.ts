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
  product_url?: string;
  tags: string[];
  context?: string;
}

export class ProductMapper {
  private static defaultSeasons = [
    "Staffel 16",
    "Staffel 15", 
    "Staffel 14",
    "Staffel 13",
    "Staffel 12",
    "Staffel 11"
  ];


  private static getRandomSeason(): string {
    return this.defaultSeasons[Math.floor(Math.random() * this.defaultSeasons.length)];
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
    // Only return category if explicitly provided by API
    // Don't assign random categories since API doesn't support category data
    return payload.category || "";
  }

  private static getBrandPrefix(productName: string): string | null {
    // Define brand-product mappings (exact product names without brand prefix)
    const brandMappings: { [key: string]: string[] } = {
      "ANUUX": [
        "ANUUX 180 Kapseln (1 Monatsdose)",
        "ANUUX 540 Kapseln (3 Monatsbeutel)",
        "ANUUX 90 Kapseln (Probiergröße)",
        "180 Kapseln (1 Monatsdose)",
        "540 Kapseln (3 Monatsbeutel)",
        "90 Kapseln (Probiergröße)"
      ],
      "Aerostiletto": [
        "Aerostiletto Beige",
        "Aerostiletto Black",
        "Aerostiletto Duo Pack",
        "Beige",
        "Black",
        "Duo Pack"
      ],
      "Dogs-Guard": [
        "Dogs-Guard Hundegeschirr",
        "Hundegeschirr"
      ],
      "FYTA": [
        "FYTA Beam Gen 2",
        "FYTA Beam Gen 2 – 3er Pack",
        "FYTA WLAN Hub (Single Hub)",
        "Grove Set + 1 Beam 2.0",
        "Set: 10× Beams + WLAN Hub",
        "Set: 3× Beam + WLAN Hub",
        "Set: 5× Beams + WLAN Hub",
        "Beam Gen 2",
        "Beam Gen 2 – 3er Pack",
        "WLAN Hub (Single Hub)",
        "Grove Set",
        "10× Beams + WLAN Hub",
        "3× Beam + WLAN Hub",
        "5× Beams + WLAN Hub"
      ],
      "Zoltra Sports": [
        "Fußball Socke",
        "Pickup Faszientrainer Bundle",
        "Zoltra Grip Fußball",
        "Grip Fußball",
        "Partner-Bundle",
        "Recycelte Edelstahl-Trinkflasche",
        "Sorglos-Bundle",
        "Zoltra Cleaning Kit",
        "Zoltra Grip Walk",
        "Cleaning Kit",
        "Grip Walk",
        "Edelstahl-Trinkflasche"
      ]
    };

    const productLower = productName.toLowerCase().trim();

    // Quick brand identification based on keywords
    if (productLower.includes("anuux")) return "ANUUX";
    if (productLower.includes("aerostiletto")) return "Aerostiletto";
    if (productLower.includes("dogs-guard") || productLower.includes("dogs guard")) return "Dogs-Guard";
    if (productLower.includes("fyta") || productLower.includes("beam gen") || productLower.includes("grove set")) return "FYTA";
    if (productLower.includes("zoltra")) {
      return "Zoltra Sports";
    }
    
    // Check specific product names
    if (productLower.includes("fußball socke") || productLower.includes("pickup faszientrainer")) {
      return "Zoltra Sports";
    }
    if (productLower.includes("partner-bundle") || 
        productLower.includes("sorglos-bundle") || 
        productLower.includes("cleaning kit") || 
        productLower.includes("grip walk")) {
      return "Zoltra Sports";
    }

    // Check each brand's products for exact matches
    for (const [brand, products] of Object.entries(brandMappings)) {
      for (const product of products) {
        const mappingLower = product.toLowerCase().trim();
        
        // Check for exact match
        if (productLower === mappingLower) {
          return brand;
        }
      }
    }

    return null;
  }

  private static generateTags(payload: ApiProduct['payload'], productName: string, investor: string, category: string): string[] {
    const tags = new Set<string>();
    
    // Basic product info tags
    if (payload.brand) {
      tags.add(payload.brand.toLowerCase());
    }
    if (payload.material) {
      tags.add(payload.material.toLowerCase());
      // Add related German material terms
      if (payload.material.toLowerCase().includes('edelstahl')) {
        tags.add('metall');
        tags.add('rostfrei');
        tags.add('stahl');
        tags.add('langlebig');
      }
      if (payload.material.toLowerCase().includes('baumwolle')) {
        tags.add('textil');
        tags.add('stoff');
        tags.add('natürlich');
        tags.add('weich');
      }
      if (payload.material.toLowerCase().includes('kunststoff') || payload.material.toLowerCase().includes('plastic')) {
        tags.add('kunststoff');
        tags.add('leicht');
        tags.add('pflegeleicht');
      }
      if (payload.material.toLowerCase().includes('glas')) {
        tags.add('glas');
        tags.add('durchsichtig');
        tags.add('zerbrechlich');
      }
    }
    
    // Size-related tags
    if (payload.size && Array.isArray(payload.size)) {
      payload.size.forEach(size => {
        tags.add(size.toLowerCase());
        // Add size category tags
        if (size.match(/\d+/)) {
          tags.add('größe');
        }
      });
    }
    
    // Category-based tags
    const categoryLower = category.toLowerCase();
    tags.add(categoryLower);
    
    // Add related category tags (in German)
    if (categoryLower.includes('gesundheit')) {
      tags.add('wellness');
      tags.add('fitness');
      tags.add('körper');
      tags.add('wohlbefinden');
      tags.add('medizin');
    }
    if (categoryLower.includes('küche')) {
      tags.add('kochen');
      tags.add('haushalt');
      tags.add('essen');
      tags.add('küchengerät');
      tags.add('zubereitung');
    }
    if (categoryLower.includes('sport')) {
      tags.add('training');
      tags.add('bewegung');
      tags.add('aktivität');
      tags.add('übung');
      tags.add('sportgerät');
    }
    if (categoryLower.includes('tech')) {
      tags.add('technologie');
      tags.add('innovation');
      tags.add('digital');
      tags.add('elektronik');
      tags.add('gerät');
    }
    if (categoryLower.includes('fashion')) {
      tags.add('kleidung');
      tags.add('mode');
      tags.add('stil');
      tags.add('bekleidung');
      tags.add('outfit');
    }
    
    // Product name analysis for additional tags
    const nameLower = productName.toLowerCase();
    const nameWords = nameLower.split(/[\s\-–_]+/);
    nameWords.forEach(word => {
      if (word.length > 2) {
        tags.add(word);
        
        // Add related German terms based on product name
        if (word.includes('flasche')) {
          tags.add('trinken');
          tags.add('getränk');
          tags.add('behälter');
          tags.add('wasser');
          tags.add('flüssigkeit');
        }
        if (word.includes('socke') || word.includes('strumpf')) {
          tags.add('füße');
          tags.add('textil');
          tags.add('kleidung');
          tags.add('bekleidung');
          tags.add('strümpfe');
        }
        if (word.includes('kapseln') || word.includes('tabletten')) {
          tags.add('nahrungsergänzung');
          tags.add('gesundheit');
          tags.add('supplement');
          tags.add('vitamine');
          tags.add('medikament');
        }
        if (word.includes('geschirr')) {
          tags.add('hund');
          tags.add('tier');
          tags.add('haustier');
          tags.add('hundeleine');
          tags.add('tierbedarf');
        }
        if (word.includes('beam') || word.includes('sensor')) {
          tags.add('smart');
          tags.add('überwachung');
          tags.add('technologie');
          tags.add('sensor');
          tags.add('intelligenz');
        }
        if (word.includes('schuhe') || word.includes('schuh')) {
          tags.add('füße');
          tags.add('laufen');
          tags.add('schuhwerk');
          tags.add('sohle');
        }
        if (word.includes('cream') || word.includes('creme')) {
          tags.add('haut');
          tags.add('pflege');
          tags.add('kosmetik');
          tags.add('beauty');
        }
        if (word.includes('ball') || word.includes('fußball')) {
          tags.add('sport');
          tags.add('spielen');
          tags.add('training');
          tags.add('ball');
        }
      }
    });
    
    // Context-based tags from description/context
    if (payload.context_file) {
      const contextLower = payload.context_file.toLowerCase();
      const contextWords = contextLower.split(/[\s\-–_.,!?()]+/);
      const germanStopwords = [
        'aber', 'alle', 'als', 'also', 'am', 'an', 'auch', 'auf', 'aus', 'bei', 'beim', 'bin', 'bis', 'bist', 'da', 'das', 
        'dass', 'dem', 'den', 'der', 'des', 'die', 'dies', 'diese', 'diesem', 'diesen', 'dieser', 'dieses', 'du', 'durch',
        'ein', 'eine', 'einem', 'einen', 'einer', 'eines', 'er', 'es', 'für', 'gibt', 'habe', 'haben', 'hat', 'hier', 'ich',
        'ihm', 'ihn', 'ihr', 'ihre', 'ihrem', 'ihren', 'ihrer', 'ihres', 'im', 'in', 'ist', 'ja', 'kann', 'kein', 'keine',
        'keinen', 'mir', 'mit', 'nach', 'nicht', 'noch', 'nun', 'nur', 'oder', 'schon', 'sein', 'seine', 'seinem', 'seinen',
        'seiner', 'seines', 'sich', 'sie', 'sind', 'so', 'über', 'um', 'und', 'uns', 'unser', 'unsere', 'vom', 'von', 'vor',
        'war', 'waren', 'weil', 'wenn', 'wer', 'wird', 'wir', 'wurde', 'wurden', 'zu', 'zum', 'zur', 'zwischen'
      ];
      
      contextWords.forEach(word => {
        if (word.length > 3 && !germanStopwords.includes(word)) {
          tags.add(word);
        }
      });
    }
    
    // Investor-based tags
    if (investor) {
      const investorNames = investor.toLowerCase().split(/[\s&]+/);
      investorNames.forEach(name => {
        if (name.length > 2) {
          tags.add(name);
        }
      });
    }
    
    // Season and episode tags
    if (payload.staffel) {
      tags.add(`staffel${payload.staffel}`);
      tags.add('dhdl');
      tags.add('höhle');
      tags.add('löwen');
    }
    
    return Array.from(tags).filter(tag => tag.length > 1);
  }

  private static getManualInvestorMapping(productName: string): string | null {
    // FYTA products - both Carsten Maschmeyer and Jana Ensthaler invested together
    const fytaProducts = [
      "FYTA Beam Gen 2",
      "FYTA Beam Gen 2 – 3er Pack", 
      "FYTA WLAN Hub (Single Hub)",
      "Grove Set + 1 Beam 2.0",
      "Set: 10× Beams + WLAN Hub",
      "Set: 3× Beam + WLAN Hub",
      "Set: 5× Beams + WLAN Hub"
    ];
    
    // Check if the product name matches any FYTA products
    if (fytaProducts.some(fytaName => productName.includes(fytaName) || fytaName.includes(productName)) || 
        productName.toLowerCase().includes("fyta") || 
        productName.toLowerCase().includes("beam gen") || 
        productName.toLowerCase().includes("grove set")) {
      return "Carsten Maschmeyer & Jana Ensthaler";
    }
    
    // Check if the product name matches any Aerostiletto products (case-insensitive)
    if (productName.toLowerCase().includes("aerostiletto")) {
      return "Ralf Dümmel";
    }
    
    return null;
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
    
    // Only use manual investor mapping, no automatic assignment
    let productName = payload.name || "Unbekanntes Produkt";
    const investor = this.getManualInvestorMapping(productName) || "";
    
    // Apply brand prefix if applicable
    const brandPrefix = this.getBrandPrefix(productName);
    if (brandPrefix && !productName.startsWith(brandPrefix)) {
      productName = `${brandPrefix} – ${productName}`;
    }

    const category = this.extractCategory(payload);
    const tags = this.generateTags(payload, productName, investor, category);

    return {
      id: numericId,
      name: productName,
      description: payload.context_file || `Hochwertiges Produkt aus der Höhle der Löwen`,
      price: price,
      originalPrice: this.generateOriginalPrice(price),
      investor: investor,
      season: payload.staffel ? `Staffel ${payload.staffel}` : this.getRandomSeason(),
      episode: this.getEpisodeFromDate(payload.datum, payload.staffel),
      image: payload.image_url ? payload.image_url.replace(/^http:/, 'https:') : "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      rating: this.generateConsistentRating(numericId),
      reviews: this.generateConsistentReviews(numericId),
      category: category,
      product_url: payload.product_url ? payload.product_url.replace(/^http:/, 'https:') : undefined,
      tags: tags,
      context: payload.context_file
    };
  }

  static mapApiProductsToDummy(apiProducts: ApiProduct[]): DummyProduct[] {
    return apiProducts.map((product, index) => this.mapApiProductToDummy(product, index));
  }
}