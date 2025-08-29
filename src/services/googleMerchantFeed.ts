import { DummyProduct } from './productMapper';

export interface GoogleProductFeed {
  id: string;
  title: string;
  description: string;
  link: string;
  image_link: string;
  availability: 'in stock' | 'out of stock' | 'preorder';
  price: string;
  sale_price?: string;
  google_product_category?: string;
  product_type?: string;
  brand: string;
  gtin?: string;
  mpn?: string;
  condition: 'new' | 'refurbished' | 'used';
  adult: boolean;
  shipping?: {
    country: string;
    price: string;
    service?: string;
  }[];
  custom_label_0?: string;
  custom_label_1?: string;
  custom_label_2?: string;
  custom_label_3?: string;
  custom_label_4?: string;
}

export class GoogleMerchantFeedGenerator {
  private static GOOGLE_CATEGORIES: { [key: string]: string } = {
    'Sport & Fitness': '499844',
    'Gesundheit & Nahrungsergänzung': '2915',
    'Haustiere': '2',
    'Mode & Accessoires': '166',
    'Heim & Garten': '536',
    'Beauty & Pflege': '469',
    'Lebensmittel': '422',
    'Haushalt & Küche': '730',
    'Baby & Kind': '537',
    'Sonstiges': '632'
  };

  private static formatPriceForGoogle(price: string): string {
    const numPrice = parseFloat(price.replace(',', '.'));
    return `${numPrice.toFixed(2)} EUR`;
  }

  private static extractBrandFromProduct(product: DummyProduct): string {
    const brandMappings: { [key: string]: string } = {
      'anuux': 'ANUUX',
      'aerostiletto': 'Aerostiletto',
      'dogs-guard': 'Dogs-Guard',
      'dogs guard': 'Dogs-Guard',
      'fyta': 'FYTA',
      'zoltra': 'Zoltra Sports',
      'fußball socke': 'Zoltra Sports',
      'pickup faszientrainer': 'Zoltra Sports',
      'partner-bundle': 'Zoltra Sports',
      'sorglos-bundle': 'Zoltra Sports',
      'cleaning kit': 'Zoltra Sports',
      'grip walk': 'Zoltra Sports'
    };

    const nameLower = product.name.toLowerCase();
    
    for (const [key, brand] of Object.entries(brandMappings)) {
      if (nameLower.includes(key)) {
        return brand;
      }
    }

    const brandMatch = product.name.match(/^([^–\-]+)/);
    if (brandMatch) {
      return brandMatch[1].trim();
    }

    return 'Die Höhle der Löwen';
  }

  static convertToGoogleFeed(product: DummyProduct): GoogleProductFeed {
    const brand = this.extractBrandFromProduct(product);
    
    // Add UTM tracking parameters for organic shopping
    let productLink = product.product_url || `https://search-a.shop/product/${product.id}`;
    const separator = productLink.includes('?') ? '&' : '?';
    productLink += `${separator}utm_source=google&utm_medium=organic&utm_campaign=merchant_feed`;
    
    const googleProduct: GoogleProductFeed = {
      id: `dhdl_${product.id}`,
      title: product.name.substring(0, 150),
      description: product.description.substring(0, 5000),
      link: productLink,
      image_link: product.image,
      availability: 'in stock',
      price: this.formatPriceForGoogle(product.price),
      google_product_category: this.GOOGLE_CATEGORIES[product.category] || '632',
      product_type: product.category,
      brand: brand,
      mpn: `DHDL-${product.id}`,
      condition: 'new',
      adult: false,
      shipping: [{
        country: 'DE',
        price: '4.99 EUR',
        service: 'Standard'
      }],
      custom_label_0: product.season,
      custom_label_1: product.episode,
      custom_label_2: product.investor || undefined,
      custom_label_3: product.category,
      custom_label_4: `Rating: ${product.rating}/5`
    };

    if (product.originalPrice) {
      googleProduct.sale_price = googleProduct.price;
      googleProduct.price = this.formatPriceForGoogle(product.originalPrice);
    }

    return googleProduct;
  }

  static generateXMLFeed(products: DummyProduct[]): string {
    const googleProducts = products.map(p => this.convertToGoogleFeed(p));
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">\n';
    xml += '  <channel>\n';
    xml += '    <title>Die Höhle der Löwen Produktfinder</title>\n';
    xml += '    <link>https://search-a.shop</link>\n';
    xml += '    <description>Produkte aus Die Höhle der Löwen</description>\n';
    
    for (const product of googleProducts) {
      xml += '    <item>\n';
      xml += `      <g:id>${this.escapeXML(product.id)}</g:id>\n`;
      xml += `      <g:title>${this.escapeXML(product.title)}</g:title>\n`;
      xml += `      <g:description>${this.escapeXML(product.description)}</g:description>\n`;
      xml += `      <g:link>${this.escapeXML(product.link)}</g:link>\n`;
      xml += `      <g:image_link>${this.escapeXML(product.image_link)}</g:image_link>\n`;
      xml += `      <g:availability>${product.availability}</g:availability>\n`;
      xml += `      <g:price>${product.price}</g:price>\n`;
      
      if (product.sale_price) {
        xml += `      <g:sale_price>${product.sale_price}</g:sale_price>\n`;
      }
      
      if (product.google_product_category) {
        xml += `      <g:google_product_category>${product.google_product_category}</g:google_product_category>\n`;
      }
      
      if (product.product_type) {
        xml += `      <g:product_type>${this.escapeXML(product.product_type)}</g:product_type>\n`;
      }
      
      xml += `      <g:brand>${this.escapeXML(product.brand)}</g:brand>\n`;
      
      if (product.gtin) {
        xml += `      <g:gtin>${product.gtin}</g:gtin>\n`;
      }
      
      if (product.mpn) {
        xml += `      <g:mpn>${product.mpn}</g:mpn>\n`;
      }
      
      xml += `      <g:condition>${product.condition}</g:condition>\n`;
      xml += `      <g:adult>${product.adult ? 'yes' : 'no'}</g:adult>\n`;
      
      if (product.shipping && product.shipping.length > 0) {
        for (const shipping of product.shipping) {
          xml += '      <g:shipping>\n';
          xml += `        <g:country>${shipping.country}</g:country>\n`;
          xml += `        <g:price>${shipping.price}</g:price>\n`;
          if (shipping.service) {
            xml += `        <g:service>${this.escapeXML(shipping.service)}</g:service>\n`;
          }
          xml += '      </g:shipping>\n';
        }
      }
      
      if (product.custom_label_0) {
        xml += `      <g:custom_label_0>${this.escapeXML(product.custom_label_0)}</g:custom_label_0>\n`;
      }
      if (product.custom_label_1) {
        xml += `      <g:custom_label_1>${this.escapeXML(product.custom_label_1)}</g:custom_label_1>\n`;
      }
      if (product.custom_label_2) {
        xml += `      <g:custom_label_2>${this.escapeXML(product.custom_label_2)}</g:custom_label_2>\n`;
      }
      if (product.custom_label_3) {
        xml += `      <g:custom_label_3>${this.escapeXML(product.custom_label_3)}</g:custom_label_3>\n`;
      }
      if (product.custom_label_4) {
        xml += `      <g:custom_label_4>${this.escapeXML(product.custom_label_4)}</g:custom_label_4>\n`;
      }
      
      xml += '    </item>\n';
    }
    
    xml += '  </channel>\n';
    xml += '</rss>';
    
    return xml;
  }

  static generateCSVFeed(products: DummyProduct[]): string {
    const googleProducts = products.map(p => this.convertToGoogleFeed(p));
    
    const headers = [
      'id',
      'title',
      'description',
      'link',
      'image_link',
      'availability',
      'price',
      'sale_price',
      'google_product_category',
      'product_type',
      'brand',
      'gtin',
      'mpn',
      'condition',
      'adult',
      'shipping',
      'custom_label_0',
      'custom_label_1',
      'custom_label_2',
      'custom_label_3',
      'custom_label_4'
    ];
    
    let csv = headers.join(',') + '\n';
    
    for (const product of googleProducts) {
      const row = [
        this.escapeCSV(product.id),
        this.escapeCSV(product.title),
        this.escapeCSV(product.description),
        this.escapeCSV(product.link),
        this.escapeCSV(product.image_link),
        product.availability,
        product.price,
        product.sale_price || '',
        product.google_product_category || '',
        this.escapeCSV(product.product_type || ''),
        this.escapeCSV(product.brand),
        product.gtin || '',
        product.mpn || '',
        product.condition,
        product.adult ? 'TRUE' : 'FALSE',
        product.shipping ? `${product.shipping[0].country}:${product.shipping[0].price}` : '',
        this.escapeCSV(product.custom_label_0 || ''),
        this.escapeCSV(product.custom_label_1 || ''),
        this.escapeCSV(product.custom_label_2 || ''),
        this.escapeCSV(product.custom_label_3 || ''),
        this.escapeCSV(product.custom_label_4 || '')
      ];
      
      csv += row.join(',') + '\n';
    }
    
    return csv;
  }

  static generateTSVFeed(products: DummyProduct[]): string {
    const googleProducts = products.map(p => this.convertToGoogleFeed(p));
    
    const headers = [
      'id',
      'title',
      'description',
      'link',
      'image_link',
      'availability',
      'price',
      'sale_price',
      'google_product_category',
      'product_type',
      'brand',
      'gtin',
      'mpn',
      'condition',
      'adult',
      'shipping',
      'custom_label_0',
      'custom_label_1',
      'custom_label_2',
      'custom_label_3',
      'custom_label_4'
    ];
    
    let tsv = headers.join('\t') + '\n';
    
    for (const product of googleProducts) {
      const row = [
        product.id,
        product.title,
        product.description.replace(/\t/g, ' ').replace(/\n/g, ' '),
        product.link,
        product.image_link,
        product.availability,
        product.price,
        product.sale_price || '',
        product.google_product_category || '',
        product.product_type || '',
        product.brand,
        product.gtin || '',
        product.mpn || '',
        product.condition,
        product.adult ? 'TRUE' : 'FALSE',
        product.shipping ? `${product.shipping[0].country}:${product.shipping[0].price}` : '',
        product.custom_label_0 || '',
        product.custom_label_1 || '',
        product.custom_label_2 || '',
        product.custom_label_3 || '',
        product.custom_label_4 || ''
      ];
      
      tsv += row.join('\t') + '\n';
    }
    
    return tsv;
  }

  private static escapeXML(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  private static escapeCSV(str: string): string {
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  }

  static downloadFeed(content: string, filename: string, type: 'xml' | 'csv' | 'tsv'): void {
    const mimeTypes = {
      xml: 'text/xml',
      csv: 'text/csv',
      tsv: 'text/tab-separated-values'
    };
    
    const blob = new Blob([content], { type: mimeTypes[type] });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}