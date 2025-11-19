import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

import logo from "@/assets/aceint-logo.png";
import logoDark from "@/assets/aceint-logo-black.png";

const GlobalNavbar = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const element = document.querySelector(id);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/20 bg-background/95 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={theme === "dark" ? logoDark : logo}
            alt="AceInt"
            className="h-10 w-auto transition-all duration-300"
          />
        </Link>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => handleScroll('#challenges')} 
              className="text-base font-medium text-foreground/70 hover:text-primary transition-all hover:scale-105 cursor-pointer bg-transparent border-none"
            >
              Challenges
            </button>
            <button 
              onClick={() => handleScroll('#why-choose')} 
              className="text-base font-medium text-foreground/70 hover:text-primary transition-all hover:scale-105 cursor-pointer bg-transparent border-none"
            >
              Why Choose AceInt
            </button>
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="relative overflow-hidden group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
              <span className="relative z-10">Sign Up 🎮</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlobalNavbar;