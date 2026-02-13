
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";
import logoFull from "@/assets/logo-full.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/#about" },
    { name: "Visit Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src={logoFull} 
              alt="Savora Gelato & Coffee" 
              className={`h-16 md:h-20 object-contain transition-all duration-300 group-hover:scale-105 ${
                !isScrolled ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isScrolled
                    ? (isActive(link.path) ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground")
                    : (isActive(link.path) ? "text-white font-semibold" : "text-white/80 hover:text-white")
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className={`rounded-full px-6 ${
                isScrolled 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-white text-savora-navy hover:bg-white/90"
              }`}>
                Visit Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg p-4 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium py-2 ${
                isActive(link.path) ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full bg-savora-navy text-white hover:bg-savora-navy/90 rounded-full">
              Visit Now
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
