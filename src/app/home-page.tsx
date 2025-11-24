"use client";

import type { Product } from "@/components/sections/products";
import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import ProductsSection from "@/components/sections/products";
import CaseStudiesSection from "@/components/sections/case-studies";
import MaterialsSection from "@/components/sections/materials";
import PrintConfigurator from "@/components/print-configurator";

export default function HomePage() {
  const [configuratorOpen, setConfiguratorOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenConfigurator = (product: Product | null) => {
    setSelectedProduct(product);
    setConfiguratorOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header onGetQuote={() => handleOpenConfigurator(null)} />
      <main className="flex-1">
        <HeroSection onGetQuote={() => handleOpenConfigurator(null)} onUploadFiles={() => handleOpenConfigurator(null)}/>
        <ProductsSection onProductSelect={handleOpenConfigurator} />
        <CaseStudiesSection />
        <MaterialsSection />
      </main>
      <Footer />
      <PrintConfigurator
        isOpen={configuratorOpen}
        onOpenChange={setConfiguratorOpen}
        product={selectedProduct}
      />
    </div>
  );
}
