import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram, Clock } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Priyanka Makeover Logo" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <h3 className="font-serif font-bold text-lg text-primary">Priyanka Makeover</h3>
                <p className="text-sm text-muted-foreground">Enhancing Your Natural Beauty</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted destination for premium bridal makeup, facials, hair treatments, and complete beauty services in Manesar, Gurugram.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/prices" className="text-sm text-muted-foreground hover:text-primary transition-colors">Price List</Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:9650061103" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +91 96500 61103
              </a>
              <a href="tel:7678487189" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +91 76784 87189
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Computer Gali, near NSG Campus, Sector 1B, Manesar, Gurugram, Haryana 122051</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Working Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Mon - Sun: 10:00 AM - 8:00 PM</span>
              </div>
            </div>
            <h4 className="font-semibold text-foreground pt-2">Follow Us</h4>
            <a
              href="https://instagram.com/priyanka_beauty_parl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @priyanka_beauty_parl
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Priyanka Makeover. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
