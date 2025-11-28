"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useApp } from "@/app/app-provider";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function HeroSection() {
  const { handleOpenConfigurator } = useApp();

  return (
    <section className="relative w-full overflow-hidden bg-background pt-24 pb-12 lg:pt-32 lg:pb-0 px-4 lg:px-10 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-grid -z-10 opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit mx-auto lg:mx-0 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Premium Commercial Printing
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-industrial font-bold tracking-tight text-foreground leading-[1.1]">
                Precision Printing for <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  Industry Leaders
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Elevate your brand with high-fidelity offset and digital printing.
                From large-scale marketing materials to intricate packaging, we deliver
                quality that speaks for itself.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:scale-105"
                onClick={() => handleOpenConfigurator(null)}
              >
                Get a Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/50 hover:text-primary transition-colors"
              >
                View Our Portfolio
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
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
            className="relative order-1 lg:order-2 flex justify-center lg:block"
          >
            <div className="relative w-full max-w-md lg:max-w-none aspect-square lg:aspect-auto lg:h-[600px]">
              {/* Main Image Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 bg-muted group"
              >
                <Image
                  src="/images/hero-industrial.png"
                  alt="Industrial Offset Printing Press"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Glass Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>

              {/* Floating Badge - Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 lg:bottom-10 lg:-left-10 bg-card/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border/50 max-w-[220px] hidden sm:flex items-center gap-4"
              >
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping opacity-75" />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">System Status</p>
                  <p className="font-bold text-sm leading-tight">Operational & Ready</p>
                </div>
              </motion.div>

              {/* Floating Badge - Rating (New) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-10 -right-6 lg:top-20 lg:-right-10 bg-card/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-border/50 hidden sm:block"
              >
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs font-bold text-center">Trusted by 500+ Clients</p>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-5 -right-5 w-full h-full border-2 border-primary/10 rounded-[2rem] hidden lg:block" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t bg-background/80 backdrop-blur-sm py-3 lg:py-4 z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              {["OFFSET PRINTING", "DIGITAL PRINTING", "LARGE FORMAT", "PACKAGING", "BRANDING", "DESIGN", "OFFSET PRINTING", "DIGITAL PRINTING", "LARGE FORMAT", "PACKAGING", "BRANDING", "DESIGN"].map((text, index) => (
                <span key={index} className="text-sm lg:text-lg font-industrial font-bold text-muted-foreground/40 tracking-widest uppercase">
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