import Link from "next/link";
import Image from "next/image";

export function QualityPrintoutLogo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Quality Printout Home">
      <Image 
        src="/logo.png" 
        alt="Quality Printout Logo" 
        width={40} 
        height={40}
        className="h-10 w-auto"
      />
      <span className="text-2xl font-black tracking-tight text-foreground">
        QUALITY PRINTOUT
      </span>
    </Link>
  );
}
