"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Facebook } from "lucide-react";
import { useState } from "react";
import { QualityPrintoutLogo } from "@/components/print-pro-logo";
import Image from 'next/image'
import Logo from '@/assets/LogoTransparent.png'


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/materials", label: "Materials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-20 lg:h-28 items-center justify-between px-2 sm:px-4 lg:px-6">
        <div className="flex items-center lg:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="py-6 px-6">
                <Image src={Logo} alt="Quality Printout Logo" width={150} height={50} className="h-10 w-auto object-contain" />
              </div>
              <nav className="grid gap-4 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-4 px-6 text-muted-foreground hover:text-foreground"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto px-6 pb-6">
                <a href="tel:01-5347730" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">01-5347730</span>
                </a>
                <a href="https://www.facebook.com/qualityprintoutktm/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mt-4">
                  <Facebook className="h-5 w-5" />
                  <span className="font-medium">Follow us on Facebook</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-start">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary uppercase tracking-wide group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex-shrink-0 mx-auto">
          <Link href="/">
            <Image src={Logo} alt="Quality Printout Logo" className="h-16 lg:h-28 w-auto object-contain" />
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 justify-end items-center">
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/qualityprintoutktm/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <div className="h-8 w-[1px] bg-border" />
            <a href="tel:01-5347730" className="flex items-center gap-3 group">
              <div className="p-2.5 rounded-full bg-primary text-primary-foreground shadow-md group-hover:scale-110 transition-transform">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Call Us For Inquiry</p>
                <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">01-5347730</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
