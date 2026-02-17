
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

export const Footer = () => {
  return (
    <footer className="bg-savora-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img 
              src={logoFull} 
              alt="Savora Logo" 
              className="w-40 mb-6 brightness-0 invert opacity-90" 
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bangalore's most indulgent gelato and coffee destination. 
              Crafting happiness, one scoop at a time.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <MapPin size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link to="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-display text-lg font-semibold mb-6">Our Offerings</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/menu" className="hover:text-white transition-colors">Artisanal Gelato</Link></li>
              <li><Link to="/menu" className="hover:text-white transition-colors">Specialty Coffee</Link></li>
              <li><Link to="/menu" className="hover:text-white transition-colors">Premium Desserts</Link></li>
              <li><Link to="/menu" className="hover:text-white transition-colors">Waffles & Sundaes</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/JbNPRsDMni1SRPtY7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Devaram Complex, 27th Cross Road, Jayanagar 3rd Block, Bangalore
                </a>

              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <a 
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:underline"
                >
                  +91 98765 43210
                </a>
              </li>


              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>hello@savora.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Savora Gelato & Coffee. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
