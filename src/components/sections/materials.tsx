import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const materials = [
  { name: "Premium Matte", imageId: "material-matte" },
  { name: "High Gloss UV", imageId: "material-glossy" },
  { name: "100% Recycled", imageId: "material-recycled" },
  { name: "Classic Linen", imageId: "material-linen" },
];

export default function MaterialsSection() {
  return (
    <section id="materials" className="py-20 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Quality You Can Feel</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            The right material makes all the difference. We offer a curated selection of premium paper stocks and finishes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((material) => {
            const image = PlaceHolderImages.find(p => p.id === material.imageId);
            return (
              <Card key={material.name} className="overflow-hidden">
                <CardContent className="relative aspect-[3/2] w-full p-0">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={`Texture of ${material.name}`}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-semibold text-white">{material.name}</h3>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
