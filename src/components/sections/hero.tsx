"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useApp } from "@/app/app-provider";
import { Star } from "lucide-react";




import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const products = [
  "Business",
  "Brochures",
  "Marketing",
  "Events",
  "Startups",

];

export default function HeroSection() {
  const { handleOpenConfigurator } = useApp();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left h-auto w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-headline text-center text-3xl h-auto w-auto font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.1]">
              Quality Printing for <br />
              <span className="relative inline-block">
                <span
                  className="text-3xl sm:text-5xl lg:text-6xl opacity-0 pointer-events-none"
                  aria-hidden="true"
                >
                  Business Cards
                </span>

                <span className="absolute top-0 left-0 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={products[index]}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                      className="block text-3xl sm:text-5xl lg:text-6xl leading-[1.1] text-center text-primary"
                    >
                      {products[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Professional printing and branding solutions designed to make
              your business unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                onClick={() => handleOpenConfigurator(null)}
              >
                Get A Quote
              </Button>

            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <Image src={`https://picsum.photos/seed/avatar${i}/100/100`} alt="Avatar" width={32} height={32} />
                  </div>
                ))}
              </div>
              <p>Trusted by 500+ local businesses</p>
            </div>
          </motion.div>

          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0">

            {/* Main Image */}
            <motion.div
              className="relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="https://picsum.photos/seed/voteman/400/500"
                alt="Man holding a t-shirt that says VOTE NOW"
                width={400}
                height={500}
                className="rounded-full object-cover shadow-2xl w-64 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[500px]"
                data-ai-hint="man t-shirt"
              />
            </motion.div>

            {/* Decorative Arc */}
            <div className="absolute bottom-0 h-3/4 w-[150%] rounded-t-[100%] bg-gradient-to-t from-primary/10 via-primary/5 to-transparent" />

            {/* Floating Product Images - Hidden on mobile, visible on larger screens */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute top-0 left-0 lg:top-10 lg:left-10 z-20 hidden sm:block"
            >
              <Image
                src="https://picsum.photos/seed/totebag/200/200"
                alt="Tote bag with world map"
                width={150}
                height={150}
                className="rounded-xl shadow-lg transform -rotate-12 w-24 lg:w-[150px]"
                data-ai-hint="tote bag"
              />
            </motion.div>

            

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-10 right-0 lg:top-16 lg:right-10 z-20 hidden sm:block"
            >
              <Image
                src="https://picsum.photos/seed/mugs/200/150"
                alt="Two custom printed mugs"
                width={150}
                height={112}
                className="rounded-xl shadow-lg transform rotate-6 w-24 lg:w-[150px]"
                data-ai-hint="custom mugs"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-10 right-0 lg:right-5 z-20 hidden md:block"
            >
              <Image
                src="https://picsum.photos/seed/waxseal/200/150"
                alt="Envelope with a wax seal"
                width={160}
                height={120}
                className="rounded-xl shadow-lg transform -rotate-3 w-28 lg:w-[160px]"
                data-ai-hint="wax seal"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-10 left-0 lg:left-5 z-20 hidden md:block"
            >
              <Image
                src="https://picsum.photos/seed/giftbox/150/150"
                alt="Gift box with a card"
                width={120}
                height={120}
                className="rounded-full shadow-lg w-20 lg:w-[120px]"
                data-ai-hint="gift box"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}