import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Download, FileCode, FileText, FileSpreadsheet, RefreshCw, Copy, Check } from 'lucide-react';
import { GoogleMerchantFeedGenerator } from '../services/googleMerchantFeed';
import { DummyProduct } from '../services/productMapper';
import { toast, Toaster } from 'sonner';

interface MerchantExportProps {
  products?: DummyProduct[];
}

export const MerchantExport: React.FC<MerchantExportProps> = ({ products: propProducts }) => {
  const [products, setProducts] = useState<DummyProduct[]>([]);
  const [feedUrl, setFeedUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Try to get products from props, location state, or localStorage
    let productsToUse: DummyProduct[] = [];
    
    if (propProducts && propProducts.length > 0) {
      productsToUse = propProducts;
    } else if (location.state?.products) {
      productsToUse = location.state.products;
    } else {
      // Try to get from localStorage as fallback
      const storedProducts = localStorage.getItem('dhdl_products');
      if (storedProducts) {
        try {
          productsToUse = JSON.parse(storedProducts);
        } catch (e) {
          console.error('Error parsing stored products:', e);
        }
      }
    }

    setProducts(productsToUse);
    
    if (productsToUse.length > 0) {
      toast.success(`${productsToUse.length} Produkte verfügbar`);
    } else {
      toast.error('Keine Produkte gefunden. Bitte zuerst eine Suche in der Hauptapp durchführen.');
    }

    // Generate feed URL based on current domain
    const baseUrl = window.location.origin;
    setFeedUrl(`${baseUrl}/api/merchant-feed.xml`);
  }, [propProducts, location.state]);

  const handleExport = async (format: 'xml' | 'csv' | 'tsv') => {
    if (products.length === 0) {
      toast.error('Keine Produkte zum Exportieren vorhanden');
      return;
    }

    try {
      let content: string;
      let filename: string;
      
      const timestamp = new Date().toISOString().split('T')[0];
      
      switch (format) {
        case 'xml':
          content = GoogleMerchantFeedGenerator.generateXMLFeed(products);
          filename = `google-merchant-feed-${timestamp}.xml`;
          break;
        case 'csv':
          content = GoogleMerchantFeedGenerator.generateCSVFeed(products);
          filename = `google-merchant-feed-${timestamp}.csv`;
          break;
        case 'tsv':
          content = GoogleMerchantFeedGenerator.generateTSVFeed(products);
          filename = `google-merchant-feed-${timestamp}.tsv`;
          break;
      }
      
      GoogleMerchantFeedGenerator.downloadFeed(content, filename, format);
      
      toast.success(`Feed exportiert`, {
        description: `${products.length} Produkte wurden als ${format.toUpperCase()} exportiert`
      });
    } catch (error) {
      console.error('Export error:', error);
      toast.error('Export fehlgeschlagen');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(feedUrl);
    setCopied(true);
    toast.success('Feed URL kopiert');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E12] via-[#10151A] to-[#0A0E12]">
      <Toaster position="top-right" />
      
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Hauptseite
          </Link>
          
          <h1 className="text-3xl font-bold text-white mb-2">
            Google Merchant Center Export
          </h1>
          <p className="text-gray-400">
            Exportiere Produktdaten für Google Shopping
          </p>
        </div>

        {/* Feed URL Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">Feed URL für automatischen Import</h2>
          <p className="text-gray-400 mb-4">
            Verwende diese URL in Google Merchant Center für automatische Updates:
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={feedUrl}
              readOnly
              className="flex-1 px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white font-mono text-sm"
            />
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white transition-colors flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Kopiert' : 'Kopieren'}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Hinweis: Diese URL muss auf deinem Server implementiert werden, um zu funktionieren.
          </p>
        </div>

        {/* Products Overview */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Produkte</h2>
            <Link
              to="/"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Produkte laden
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Gesamt</p>
              <p className="text-2xl font-bold text-white">{products.length}</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Mit Rabatt</p>
              <p className="text-2xl font-bold text-white">
                {products.filter(p => p.originalPrice).length}
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Kategorien</p>
              <p className="text-2xl font-bold text-white">
                {new Set(products.map(p => p.category)).size}
              </p>
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">Export Optionen</h2>
          <p className="text-gray-400 mb-6">
            Wähle das gewünschte Format für den manuellen Upload:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => handleExport('xml')}
              disabled={products.length === 0}
              className="p-6 bg-black/30 hover:bg-black/50 border border-white/10 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <FileCode className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-white font-semibold mb-1">XML Feed</h3>
              <p className="text-xs text-gray-400">Google Shopping Standard</p>
              <div className="mt-4 flex items-center gap-2 text-blue-400 group-hover:text-blue-300">
                <Download className="w-4 h-4" />
                <span className="text-sm">Download XML</span>
              </div>
            </button>

            <button
              onClick={() => handleExport('csv')}
              disabled={products.length === 0}
              className="p-6 bg-black/30 hover:bg-black/50 border border-white/10 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <FileText className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-white font-semibold mb-1">CSV Feed</h3>
              <p className="text-xs text-gray-400">Komma-getrennte Werte</p>
              <div className="mt-4 flex items-center gap-2 text-green-400 group-hover:text-green-300">
                <Download className="w-4 h-4" />
                <span className="text-sm">Download CSV</span>
              </div>
            </button>

            <button
              onClick={() => handleExport('tsv')}
              disabled={products.length === 0}
              className="p-6 bg-black/30 hover:bg-black/50 border border-white/10 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <FileSpreadsheet className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-white font-semibold mb-1">TSV Feed</h3>
              <p className="text-xs text-gray-400">Tab-getrennte Werte</p>
              <div className="mt-4 flex items-center gap-2 text-purple-400 group-hover:text-purple-300">
                <Download className="w-4 h-4" />
                <span className="text-sm">Download TSV</span>
              </div>
            </button>
          </div>
        </div>

        {/* Sample Products Preview */}
        {products.length > 0 && (
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Produkt Vorschau</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 px-4 text-gray-400">Name</th>
                    <th className="text-left py-2 px-4 text-gray-400">Preis</th>
                    <th className="text-left py-2 px-4 text-gray-400">Kategorie</th>
                    <th className="text-left py-2 px-4 text-gray-400">Investor</th>
                  </tr>
                </thead>
                <tbody>
                  {products.slice(0, 5).map((product) => (
                    <tr key={product.id} className="border-b border-white/5">
                      <td className="py-2 px-4 text-white">{product.name}</td>
                      <td className="py-2 px-4 text-white">{product.price} €</td>
                      <td className="py-2 px-4 text-gray-400">{product.category}</td>
                      <td className="py-2 px-4 text-gray-400">{product.investor || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {products.length > 5 && (
                <p className="text-center text-gray-400 text-sm mt-4">
                  ... und {products.length - 5} weitere Produkte
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};