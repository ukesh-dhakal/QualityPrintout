
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Krish Mudbhari",
    role: "Customer",
    avatar: "KM",
    rating: 5,
    quote: "Great place to print, friendly staff, affordable price. Quick service, recommended for everyone looking out for decent place to print.",
  },
  {
    name: "Prijun Koirala",
    role: "Local Guide",
    avatar: "PK",
    rating: 5,
    quote: "The service is quick and good.. never let down once....",
  },
  {
    name: "Arati Baskota",
    role: "Customer",
    avatar: "AB",
    rating: 5,
    quote: "Professional, responsive and friendly staffs. Very Satisfying!",
  },
  {
    name: "Anup Shrestha",
    role: "Local Guide",
    avatar: "AS",
    rating: 5,
    quote: "Best quality for desktop print work.",
  },
];

export default function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section id="testimonials" className="relative bg-secondary py-20 sm:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 -z-10" />
      <div className="absolute -top-20 -left-20 text-primary/5">
        <Quote size={300} />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We take pride in our work, but don't just take our word for it. Here's what our clients have to say.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full mt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card key={testimonial.name} className="flex flex-col h-full transition-all hover:shadow-xl hover:-translate-y-1 border-primary/10">
                      <CardContent className="flex-1 p-6">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                          ))}
                        </div>
                        <blockquote className="text-foreground italic relative">
                          <span className="text-primary/20 text-4xl absolute -top-4 -left-2">“</span>
                          <span className="relative z-10">{testimonial.quote}</span>
                        </blockquote>
                      </CardContent>
                      <CardHeader className="p-6 pt-0 mt-auto">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 border-2 border-primary/20">
                            <AvatarFallback className="bg-primary/10 text-primary font-bold">{testimonial.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base font-semibold">{testimonial.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 h-12 w-12 border-2" />
            <CarouselNext className="hidden sm:flex -right-12 h-12 w-12 border-2" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
