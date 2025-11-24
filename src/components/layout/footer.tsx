import { QualityPrintoutLogo } from "@/components/print-pro-logo";
import { FileCheck2, Phone, MapPin, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/LogoTransparent.png";

export default function Footer() {
  return (
    <footer id="footer" className="bg-secondary border-t">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2 lg:grid-cols-4 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Image src={Logo} alt="Quality Printout Logo" width={150} height={50} className="h-24 w-auto object-contain" />
            <p className="mt-4 text-sm text-muted-foreground">
              Top-quality advertising prints.
            </p>
          </div>
          <div>
            <h3 className="font-semibold tracking-tight">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary">Case Studies</Link></li>
              <li><Link href="/materials" className="text-muted-foreground hover:text-primary">Materials</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-tight">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:01-5347730" className="text-muted-foreground hover:text-primary">01-5347730</a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:01-5340118" className="text-muted-foreground hover:text-primary">01-5340118</a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Putalisadak, Kathmandu</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start mt-2">
                <a href="https://www.facebook.com/qualityprintoutktm/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <Facebook className="h-4 w-4" />
                  <span>Follow us on Facebook</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full h-full min-h-[200px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4104092059783!2d85.3225059!3d27.704612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a83cfd8117%3A0xeeab44c780d9d67f!2sQuality%20Printout!5e0!3m2!1sen!2snp!4v1763788400828!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '200px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Quality Printout Location"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Quality Printout Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
