"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useApp } from "@/app/app-provider";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const { handleOpenConfigurator } = useApp();

  return (
    <section className="relative w-full overflow-hidden bg-background pt-20 lg:pt-0 p-10 min-h-[90vh] flex flex-col justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-grid -z-10" />

      <div className="container relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-12 lg:py-0">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:gap-8 text-center order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mx-auto"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Premium Commercial Printing
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-industrial font-bold tracking-tight text-foreground leading-[1.1]">
                Precision Printing for <span className="text-primary">Industry Leaders</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Elevate your brand with high-fidelity offset and digital printing.
                From large-scale marketing materials to intricate packaging, we deliver
                quality that speaks for itself.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300"
                onClick={() => handleOpenConfigurator(null)}
              >
                Get a Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/50"
              >
                View Our Portfolio
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>24h Turnaround Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Eco-Friendly Inks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Volume Discounts</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] lg:aspect-square w-full max-w-md lg:max-w-none mx-auto">
              {/* Main Image */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 bg-muted">
                <Image
                  src="/images/hero-industrial.png"
                  alt="Industrial Offset Printing Press"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 80vw"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 lg:bottom-10 lg:-left-10 bg-card p-4 rounded-2xl shadow-xl border border-border/50 max-w-[200px] hidden sm:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</span>
                </div>
                <p className="font-bold text-lg leading-tight">Operational & Ready for Orders</p>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary/10 rounded-[2rem] hidden lg:block" />
              <div className="absolute -z-20 -top-10 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -z-20 bottom-10 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t bg-background/50 backdrop-blur-sm py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              {["OFFSET PRINTING", "DIGITAL PRINTING", "LARGE FORMAT", "PACKAGING", "BRANDING", "DESIGN", "OFFSET PRINTING", "DIGITAL PRINTING", "LARGE FORMAT", "PACKAGING", "BRANDING", "DESIGN"].map((text, index) => (
                <span key={index} className="text-lg font-industrial font-bold text-muted-foreground/40 tracking-widest uppercase">
                  {text} <span className="mx-4 text-primary/40">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}