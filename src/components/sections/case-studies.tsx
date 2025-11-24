"use client";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

export default function CaseStudiesSection() {
    const beforeImage = PlaceHolderImages.find(p => p.id === 'case-study-before-1');
    const afterImage = PlaceHolderImages.find(p => p.id === 'case-study-after-1');

    if (!beforeImage || !afterImage) {
        return null;
    }

    return (
        <section id="case-studies" className="bg-secondary py-20 sm:py-32">
            <div className="container px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="mx-auto max-w-2xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">From Digital to Tangible</h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        Our state-of-the-art printing process transforms your digital designs into stunning, high-fidelity physical products. See the difference for yourself.
                    </p>
                </motion.div>
                <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <motion.div
                        className="lg:pr-12 text-center lg:text-left"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >

                        <p className="mt-4 text-muted-foreground">
                            Drag the slider to compare the original design file with the final printed result. Notice the enhanced color vibrancy, sharpness, and texture that only professional printing can achieve.
                        </p>
                    </motion.div>
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <BeforeAfterSlider
                            beforeImage={{
                                src: beforeImage.imageUrl,
                                alt: beforeImage.description,
                                hint: beforeImage.imageHint,
                            }}
                            afterImage={{
                                src: afterImage.imageUrl,
                                alt: afterImage.description,
                                hint: afterImage.imageHint,
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
