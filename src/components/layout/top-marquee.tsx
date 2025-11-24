"use client";

import { Phone, MapPin, Star, Clock } from "lucide-react";

export function TopMarquee() {
    return (
        <div className="w-full bg-primary text-primary-foreground py-2 overflow-hidden border-b border-white/10">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 mx-4">
                        <div className="flex items-center gap-2">
                            <Phone className="h-3 w-3 text-primary-foreground" />
                            <span className="text-xs font-bold uppercase tracking-widest">Call us: 01-5347730</span>
                        </div>
                        <span className="text-primary-foreground/50">•</span>

                        <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3 text-primary-foreground" />
                            <span className="text-xs font-bold uppercase tracking-widest">Putalisadak, Kathmandu</span>
                        </div>
                        <span className="text-primary-foreground/50">•</span>

                        <div className="flex items-center gap-2">
                            <Star className="h-3 w-3 text-primary-foreground" />
                            <span className="text-xs font-bold uppercase tracking-widest">Premium Quality Printing</span>
                        </div>
                        <span className="text-primary-foreground/50">•</span>

                        <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3 text-primary-foreground" />
                            <span className="text-xs font-bold uppercase tracking-widest">24h Turnaround Available</span>
                        </div>
                        <span className="text-primary-foreground/50">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
