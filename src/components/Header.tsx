import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/aceint-logo.png";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/20 bg-background/95 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="AceInt" className="h-10 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#challenges" className="text-sm font-medium text-foreground/70 hover:text-primary transition-all hover:scale-105">
            Challenges
          </a>
          <a href="#why-choose" className="text-sm font-medium text-foreground/70 hover:text-primary transition-all hover:scale-105">
            Why Choose AceInt
          </a>
        </nav>
        
        <ThemeToggle />
      </div>
    </header>
  );
}
