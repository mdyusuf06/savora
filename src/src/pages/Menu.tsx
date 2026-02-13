
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Import images (placeholder imports for now, would be replaced with real images)
import gelatoCategory from "@/assets/gelato-category.jpg";
import coffeeCategory from "@/assets/coffee-category.jpg";
import dessertCategory from "@/assets/dessert-category.jpg";

const menuItems = {
  gelato: [
    { name: "Belgian Chocolate", price: "₹160", desc: "Rich premium cocoa" },
    { name: "Dark Chocolate", price: "₹170", desc: "Intense 70% dark cocoa" },
    { name: "Pistachio", price: "₹190", desc: "Authentic Sicilian pistachio" },
    { name: "Hazelnut", price: "₹180", desc: "Roasted hazelnut cream" },
    { name: "Nutella", price: "₹200", desc: "Creamy hazelnut chocolate" },
    { name: "Ferrero Rocher", price: "₹220", desc: "Chocolate hazelnut crunch" },
    { name: "Biscoff", price: "₹200", desc: "Spiced caramelized cookie" },
    { name: "Cookies & Cream", price: "₹180", desc: "Vanilla with cookie chunks" },
    { name: "Tiramisu", price: "₹210", desc: "Coffee soaked sponge & mascarpone" },
    { name: "Strawberry Cheesecake", price: "₹200", desc: "Real fruit & cheese" },
    { name: "Blueberry Cheesecake", price: "₹200", desc: "Tangy berry swirl" },
    { name: "Mango Sorbet", price: "₹160", desc: "Alphonso mango (Vegan)" },
    { name: "Mango Chilli Sorbet", price: "₹170", desc: "Sweet with a spicy kick" },
    { name: "Tender Coconut", price: "₹170", desc: "Fresh tender coconut flesh" },
  ],
  coffee: [
    { name: "Espresso", price: "₹110", desc: "Single/Double shot" },
    { name: "Americano", price: "₹130", desc: "Espresso with hot water" },
    { name: "Cappuccino", price: "₹160", desc: "Espresso, steamed milk & foam" },
    { name: "Latte", price: "₹170", desc: "Espresso with steamed milk" },
    { name: "Mocha", price: "₹190", desc: "Espresso, chocolate & milk" },
    { name: "Cold Coffee", price: "₹190", desc: "Classic blended cold coffee" },
    { name: "Iced Latte", price: "₹180", desc: "Espresso over ice & milk" },
    { name: "Cold Brew", price: "₹200", desc: "Steeped for 18 hours" },
    { name: "Spanish Latte", price: "₹200", desc: "Sweet condensed milk latte" },
    { name: "Affogato", price: "₹220", desc: "Espresso over vanilla gelato" },
  ],
  desserts: [
    { name: "Brownie with Gelato", price: "₹240", desc: "Warm brownie & scoop" },
    { name: "Chocolate Waffle", price: "₹220", desc: "Crispy waffle & chocolate" },
    { name: "Nutella Waffle", price: "₹260", desc: "Loaded with Nutella" },
    { name: "Classic Waffle + Gelato", price: "₹250", desc: "Maple syrup & scoop" },
    { name: "Croissant + Gelato", price: "₹230", desc: "Buttery pastry & scoop" },
    { name: "Gelato Sundae", price: "₹260", desc: "3 scoops & toppings" },
  ]
};

const MenuItemCard = ({ item, category }: { item: any, category: string }) => {
  // Select image based on category for this demo
  const image = category === "gelato" ? gelatoCategory : 
                category === "coffee" ? coffeeCategory : dessertCategory;

  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl font-bold text-savora-navy">{item.name}</h3>
          <span className="font-body font-semibold text-savora-navy bg-savora-cream px-3 py-1 rounded-full text-sm">
            {item.price}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
        <div className="w-8 h-1 bg-savora-pink/30 rounded-full group-hover:w-16 group-hover:bg-savora-pink transition-all duration-300" />
      </div>
    </div>
  );
};

const Menu = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-savora-cream">
      <Navbar />
      
      {/* Menu Header */}
      <div className="pt-32 pb-16 bg-savora-navy text-white text-center px-4">
        <span className="savora-tagline text-white/60 mb-4 block">Indulgence Awaits</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold">Our Menu</h1>
        <p className="mt-6 text-white/70 max-w-2xl mx-auto font-light text-lg">
          Handcrafted with passion, served with love. Explore our premium selection.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Gelato Section */}
        <section id="gelato" className="scroll-mt-28">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-savora-navy mb-4">Artisanal Gelato</h2>
            <div className="w-24 h-1 bg-savora-pink mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.gelato.map((item, idx) => (
              <MenuItemCard key={idx} item={item} category="gelato" />
            ))}
          </div>
        </section>

        {/* Coffee Section */}
        <section id="coffee" className="scroll-mt-28">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-savora-navy mb-4">Specialty Coffee</h2>
            <div className="w-24 h-1 bg-savora-navy mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.coffee.map((item, idx) => (
              <MenuItemCard key={idx} item={item} category="coffee" />
            ))}
          </div>
        </section>

        {/* Desserts Section */}
        <section id="desserts" className="scroll-mt-28">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-savora-navy mb-4">Indulgent Desserts</h2>
            <div className="w-24 h-1 bg-savora-blue mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.desserts.map((item, idx) => (
              <MenuItemCard key={idx} item={item} category="desserts" />
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Menu;
