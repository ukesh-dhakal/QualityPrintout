"use client";

import HeroSection from "@/components/sections/hero";
import ProductsSection from "@/components/sections/products";
import CaseStudiesSection from "@/components/sections/case-studies";
import MaterialsSection from "@/components/sections/materials";
import ContactSection from "@/components/sections/contact";
import TestimonialsSection from "@/components/sections/testimonials";
import FaqSection from "@/components/sections/faq";
import { useApp } from "./app-provider";


export default function Home() {
  const { handleOpenConfigurator } = useApp();
  return (
    <>
      <HeroSection />
      <ProductsSection onProductSelect={handleOpenConfigurator} />
      <CaseStudiesSection />
      <MaterialsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
