"use client";
import ProductsSection from "@/components/sections/products";
import PrintConfigurator from "@/components/print-configurator";
import { useState } from "react";
import type { Product } from "@/components/sections/products";

export default function ProductsPage() {
  const [configuratorOpen, setConfiguratorOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenConfigurator = (product: Product | null) => {
    setSelectedProduct(product);
    setConfiguratorOpen(true);
  };

  return (
    <>
      <ProductsSection onProductSelect={handleOpenConfigurator} />
      <PrintConfigurator
        isOpen={configuratorOpen}
        onOpenChange={setConfiguratorOpen}
        product={selectedProduct}
      />
    </>
  );
}
