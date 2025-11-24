"use client";
import { FileCheck2, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We&apos;re here to help with all your printing needs.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <Phone className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <a href="tel:01-5347730" className="text-muted-foreground hover:text-primary mt-1 block">01-5347730</a>
                <a href="tel:01-5340118" className="text-muted-foreground hover:text-primary">01-5340118</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold">Location</h3>
                <p className="text-muted-foreground mt-1">Putalisadak, Kathmandu</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={6} />
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
