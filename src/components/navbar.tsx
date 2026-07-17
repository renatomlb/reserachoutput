import Image from "next/image";
import Link from "next/link";

import lunexLogo from "@/assets/brand/lunex-logo.png";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" aria-label="LUNEX home">
          <Image src={lunexLogo} alt="LUNEX" className="h-6 w-auto" priority />
        </Link>

        <nav className="flex items-center gap-3" aria-label="Page sections">
          <Button asChild variant="ghost" size="sm">
            <a href="#samurai">Project Outputs</a>
          </Button>
          <Button asChild size="sm">
            <a href="#research-outputs">Research Outputs</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
