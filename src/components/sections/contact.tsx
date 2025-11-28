"use client";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/50 to-transparent -z-10" />

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
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <a href="tel:01-5347730" className="text-muted-foreground hover:text-primary mt-1 block transition-colors">01-5347730</a>
                <a href="tel:01-5340118" className="text-muted-foreground hover:text-primary transition-colors">01-5340118</a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
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
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 blur-2xl -z-10 rounded-full transform scale-90" />
            <form className="space-y-6 bg-card p-8 rounded-3xl border shadow-lg">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your Name" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your Email" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Subject" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your Message" rows={6} className="bg-background resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg h-12">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
