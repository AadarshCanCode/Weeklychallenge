import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import logo from "@/assets/aceint-logo.png";
import logoDark from "@/assets/aceint-logo-black.png";

const smoothScrollTo = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export function Header() {
  const { theme } = useTheme();
  
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/20 bg-background/95 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src={theme === "dark" ? logo : logoDark} 
            alt="AceInt" 
            className="h-10 w-auto transition-all duration-300" 
          />
        </div>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#challenges" 
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#challenges'); }}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-all hover:scale-105 cursor-pointer"
            >
              Challenges
            </a>
            <a 
              href="#why-choose" 
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#why-choose'); }}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-all hover:scale-105 cursor-pointer"
            >
              Why Choose AceInt
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button 
              className="relative overflow-hidden group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            >
              <span className="relative z-10">Game On 🎮</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
