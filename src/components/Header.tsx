import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/aceint-logo.svg";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="AceInt" className="h-8 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#challenges" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Challenges
          </a>
          <a href="#leaderboard" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Leaderboard
          </a>
          <a href="#progress" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            My Progress
          </a>
        </nav>
        
        <ThemeToggle />
      </div>
    </header>
  );
}
