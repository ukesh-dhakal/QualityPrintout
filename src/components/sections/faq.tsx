"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What is your standard turnaround time?",
        answer:
            "Our standard turnaround time for most digital print jobs is 24-48 hours. For larger offset projects, it typically takes 3-5 business days. We also offer rush services for urgent deadlines—please contact us directly for availability.",
    },
    {
        question: "What file formats do you accept?",
        answer:
            "We prefer high-resolution PDF files with fonts outlined and images embedded. We also accept AI, PSD, EPS, and high-quality TIFF or JPG files (300 DPI minimum). For best results, please ensure your files are in CMYK color mode.",
    },
    {
        question: "Do you offer design services?",
        answer:
            "Yes! We have an in-house team of professional graphic designers who can help bring your vision to life. Whether you need a simple layout adjustment or a complete brand identity, we're here to help.",
    },
    {
        question: "What is the difference between digital and offset printing?",
        answer:
            "Digital printing is best for shorter runs and quick turnaround times, offering cost-effectiveness for smaller quantities. Offset printing is ideal for high-volume jobs, providing superior color accuracy and lower cost per unit as the quantity increases.",
    },
    {
        question: "Do you provide proofs before printing?",
        answer:
            "Absolutely. We provide a digital PDF proof for every order to ensure everything looks correct. For color-critical jobs, we can also provide a hard-copy proof upon request for a nominal fee.",
    },
    {
        question: "Can you ship my order to multiple locations?",
        answer:
            "Yes, we offer split-shipping services. Just let us know the quantities and addresses for each location, and we'll handle the logistics for you.",
    },
];

export default function FaqSection() {
    return (
        <section id="faq" className="py-20 sm:py-32 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Header */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 text-primary font-medium mb-4">
                            <HelpCircle className="h-5 w-5" />
                            <span>Common Questions</span>
                        </div>
                        <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
                            Frequently Asked <br /> Questions
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            Got questions about the printing process? We've got answers.
                            If you can't find what you're looking for, feel free to reach out to our support team.
                        </p>
                    </motion.div>

                    {/* Accordion */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/10">
                                    <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
