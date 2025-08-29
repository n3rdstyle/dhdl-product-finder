import React, { useState } from 'react';
import { Button } from './ui/button';
import { Download, FileCode, FileText, FileSpreadsheet } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { GoogleMerchantFeedGenerator } from '../services/googleMerchantFeed';
import { DummyProduct } from '../services/productMapper';
import { toast } from 'sonner';

interface GoogleMerchantExportProps {
  products: DummyProduct[];
}

export const GoogleMerchantExport: React.FC<GoogleMerchantExportProps> = ({ products }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async (format: 'xml' | 'csv' | 'tsv') => {
    setIsExporting(true);
    
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
      toast.error('Export fehlgeschlagen', {
        description: 'Beim Exportieren der Produkte ist ein Fehler aufgetreten'
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          disabled={products.length === 0 || isExporting}
          className="gap-2"
        >
          <Download className="h-4 w-4" />
          Google Merchant Feed
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Format auswählen</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={() => handleExport('xml')}
          className="gap-2"
        >
          <FileCode className="h-4 w-4" />
          XML Feed (.xml)
          <span className="ml-auto text-xs text-muted-foreground">Empfohlen</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleExport('csv')}
          className="gap-2"
        >
          <FileText className="h-4 w-4" />
          CSV Feed (.csv)
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleExport('tsv')}
          className="gap-2"
        >
          <FileSpreadsheet className="h-4 w-4" />
          TSV Feed (.tsv)
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled className="text-xs text-muted-foreground">
          {products.length} Produkte verfügbar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};