"use client";

import React, { createContext, useState, useContext } from 'react';
import type { Product } from '@/components/sections/products';
import Header from '@/components/layout/header';
import PrintConfigurator from '@/components/print-configurator';

type AppContextType = {
  configuratorOpen: boolean;
  setConfiguratorOpen: (isOpen: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  handleOpenConfigurator: (product: Product | null) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [configuratorOpen, setConfiguratorOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenConfigurator = (product: Product | null) => {
    setSelectedProduct(product);
    setConfiguratorOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        configuratorOpen,
        setConfiguratorOpen,
        selectedProduct,
        setSelectedProduct,
        handleOpenConfigurator,
      }}
    >
      <Header onGetQuote={() => handleOpenConfigurator(null)} />
      {children}
      <PrintConfigurator
        isOpen={configuratorOpen}
        onOpenChange={setConfiguratorOpen}
        product={selectedProduct}
      />
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
