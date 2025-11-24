"use client";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export type Product = {
  id: string;
  name: string;
  description: string;
  imageId: string;
};

const products: Product[] = [
  { id: 'business_cards', name: "Business Cards", description: "Make a lasting impression.", imageId: "product-business-cards" },
  { id: 'brochures', name: "Brochures", description: "Tell your story in detail.", imageId: "product-brochures" },
  { id: 'flyers', name: "Flyers", description: "Promote your events and sales.", imageId: "product-flyers" },
  { id: 'stickers', name: "Stickers", description: "Vibrant colors and sharp details.", imageId: "product-stickers" },
  { id: 'banners', name: "Banners & Billboards", description: "Go big with vinyl banners.", imageId: "product-banners" },
];

type ProductsSectionProps = {
  onProductSelect: (product: Product) => void;
};

export default function ProductsSection({ onProductSelect }: ProductsSectionProps) {
  return (
    <section id="products" className="py-20 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Our Products</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We offer a wide range of printing services to meet your needs. Explore our most popular products below.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
          {products.map((product, index) => {
            const image = PlaceHolderImages.find(p => p.id === product.imageId);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-sm"
              >
                <Card
                  className="group cursor-pointer overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 h-full"
                  onClick={() => onProductSelect(product)}
                >
                  <CardContent className="p-0">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="aspect-[3/2] w-full object-cover transition-transform group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {product.name}
                      <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
