"use client";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <section id="products" className="relative py-20 sm:py-32 bg-secondary/30">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-dot-grid opacity-20 -z-10" />

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Our Products</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We offer a wide range of printing services to meet your needs. Explore our most popular products below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {products.map((product, index) => {
            const image = PlaceHolderImages.find(p => p.id === product.imageId);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-sm h-full"
              >
                <Card
                  className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50 h-full flex flex-col"
                  onClick={() => onProductSelect(product)}
                >
                  <CardContent className="p-0 relative overflow-hidden aspect-[3/2]">
                    {image && (
                      <>
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          data-ai-hint={image.imageHint}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </>
                    )}
                  </CardContent>
                  <CardHeader className="flex-1">
                    <CardTitle className="flex items-center justify-between text-xl">
                      {product.name}
                      <div className="p-2 rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
