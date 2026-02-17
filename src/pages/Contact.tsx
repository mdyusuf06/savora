
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import cafeExterior from "@/assets/cafe-exterior.webp";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you shortly!",
    });
  };

  return (
    <div className="min-h-screen bg-savora-cream">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-16 bg-savora-navy text-white text-center px-4">
        <span className="savora-tagline text-white/60 mb-4 block">Visit Us</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold">Contact & Location</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="font-display text-3xl font-bold text-savora-navy mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a question about our flavors, want to book a table, or just want to say hello, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-card p-3 rounded-full shadow-sm text-foreground">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-savora-navy mb-1">Visit Us</h3>
                    <a 
                      href="https://maps.app.goo.gl/dG5Sw2QKcZkDSQs58" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      Devaram Complex, 27th Cross Road,<br/>
                      Jayanagar 3rd Block, Bangalore - 560011
                    </a>
                  </div>

                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-card p-3 rounded-full shadow-sm text-foreground">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-savora-navy mb-1">Call Us</h3>
                    <a 
                      href="tel:+919876543210"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      +91 98765 43210
                    </a>
                  </div>

                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-card p-3 rounded-full shadow-sm text-foreground">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-savora-navy mb-1">Email Us</h3>
                    <p className="text-muted-foreground">hello@savora.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-card p-3 rounded-full shadow-sm text-foreground">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-savora-navy mb-1">Opening Hours</h3>
                    <p className="text-muted-foreground">Mon - Sun: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 bg-muted rounded-2xl overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5866874408665!2d77.58332457507577!3d12.93425668737766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b18f844781%3A0xc66517e4f944f378!2sJayanagar%203rd%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709664583624!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form & Exterior Image */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <img 
                src={cafeExterior} 
                alt="Savora Exterior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="font-display text-2xl font-bold text-savora-navy mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input placeholder="John Doe" required className="bg-background border-border focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <Input placeholder="+91 99999 99999" required className="bg-background border-border focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="john@example.com" required className="bg-background border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea placeholder="Your message..." className="min-h-[120px] bg-background border-border focus:border-primary" />
                </div>
                <Button type="submit" className="w-full bg-savora-navy text-white hover:bg-savora-navy/90 h-12 text-lg rounded-xl">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
