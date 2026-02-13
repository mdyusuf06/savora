
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import cafeInterior from "@/assets/cafe-interior.webp";
import gelatoCategory from "@/assets/gelato-category.jpg";
import coffeeCategory from "@/assets/coffee-category.jpg";
import dessertCategory from "@/assets/dessert-category.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-savora-cream text-savora-navy font-body">
      <LoadingScreen />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Savora Gelato & Coffee" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-[0.2em] uppercase mb-6">
            Jayanagar, Bangalore
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Indulge in <br/>
            <span className="text-savora-pink italic">Happiness</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Bangalore's most indulgent handcrafted gelato and specialty coffee experience 
            in a premium cozy setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button className="bg-white/10 backdrop-blur-xl border border-white/30 text-white 
              hover:bg-white/20 text-lg px-8 py-6 rounded-full 
              w-full sm:w-auto shadow-[0_8px_32px_rgba(0,0,0,0.25)] 
              transition-all duration-300 hover:scale-105">
                View Menu
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-white/10 backdrop-blur-xl border border-white/30 text-white 
              hover:bg-white/20 text-lg px-8 py-6 rounded-full 
              w-full sm:w-auto shadow-[0_8px_32px_rgba(0,0,0,0.25)] 
              transition-all duration-300 hover:scale-105">
                Visit Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-card relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="savora-tagline text-savora-navy/60">Our Offerings</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-savora-navy">
              Crafted for Perfection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Artisanal Gelato", 
                image: gelatoCategory, 
                desc: "Handcrafted daily with premium ingredients and authentic Italian techniques.",
                link: "/menu#gelato"
              },
              { 
                title: "Specialty Coffee", 
                image: coffeeCategory, 
                desc: "Expertly brewed coffee using the finest beans for the perfect cup.",
                link: "/menu#coffee"
              },
              { 
                title: "Indulgent Desserts", 
                image: dessertCategory, 
                desc: "Waffles, brownies, and sundaes designed to satisfy your deepest cravings.",
                link: "/menu#desserts"
              }
            ].map((item, index) => (
              <Link 
                to={item.link} 
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="font-display text-3xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium tracking-wide uppercase border-b border-white/50 pb-1 group-hover:border-white transition-colors">
                    Explore <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-savora-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={cafeInterior} 
                alt="Savora Interior" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-savora-pink/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-savora-blue/20 rounded-full blur-3xl -z-10" />
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="savora-tagline text-savora-navy/60">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-savora-navy">
              More than just dessert.<br/>It's an experience.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Savora Gelato & Coffee is a boutique dessert destination in Jayanagar offering handcrafted gelato, specialty coffee, and indulgent desserts in a warm and modern setting designed for memorable experiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We believe in the simple joy of high-quality ingredients, artisanal preparation, and a beautiful space to share it all with loved ones.
            </p>
            
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-savora-navy">20+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Flavours</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-savora-navy">4.9</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                  Google Rating <Star size={12} fill="currentColor" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="savora-tagline text-savora-navy/60">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-savora-navy">
              Loved by Bangalore
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The best gelato I've had in Bangalore! The Belgian Chocolate is incredibly rich and smooth. The ambiance is just perfect for evening hangouts.",
                author: "Priya S.",
                rating: 5
              },
              {
                text: "Absolutely stunning place. Their coffee is top-notch and the staff is super friendly. The Biscoff gelato is a must-try!",
                author: "Rahul M.",
                rating: 5
              },
              {
                text: "Premium quality desserts at great prices. The waffle with Nutella and gelato was heavenly. Definitely coming back!",
                author: "Sneha K.",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-savora-cream p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-1 mb-4 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-savora-navy/10 flex items-center justify-center font-bold text-savora-navy">
                    {review.author[0]}
                  </div>
                  <span className="font-medium text-savora-navy">{review.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-savora-navy text-white text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Ready to indulge?
          </h2>
          <p className="text-white/80 text-xl mb-10 font-light">
            Visit us in Jayanagar for a taste of happiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline" className="border-white bg-white text-savora-navy hover:bg-white/10 hover:text-white text-lg px-10 py-6 rounded-full w-full sm:w-auto">
                Get Directions
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline" className="border-white bg-white text-savora-navy hover:bg-white/10 hover:text-white text-lg px-10 py-6 rounded-full w-full sm:w-auto">
                Browse Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
