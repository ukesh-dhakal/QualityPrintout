"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Slider } from "@/components/ui/slider";
import { Grip } from "lucide-react";

type BeforeAfterSliderProps = {
  beforeImage: { src: string; alt: string; hint: string; };
  afterImage: { src: string; alt: string; hint: string; };
};

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg shadow-2xl">
      {/* After Image */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={afterImage.src}
          alt={afterImage.alt}
          fill
          className="object-cover"
          data-ai-hint={afterImage.hint}
        />
        <div className="absolute top-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            AFTER
        </div>
      </div>

      {/* Before Image */}
      <div className="relative w-full h-full">
        <Image
          src={beforeImage.src}
          alt={beforeImage.alt}
          fill
          className="object-cover"
          data-ai-hint={beforeImage.hint}
        />
        <div className="absolute top-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            BEFORE
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 w-1 bg-white/80 cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground">
          <Grip className="h-6 w-6" />
        </div>
      </div>

      {/* Slider Input */}
      <Slider
        value={[sliderPosition]}
        onValueChange={(value) => setSliderPosition(value[0])}
        max={100}
        step={0.1}
        className="absolute inset-0 w-full opacity-0 cursor-ew-resize"
        aria-label="Image comparison slider"
      />
    </div>
  );
}
