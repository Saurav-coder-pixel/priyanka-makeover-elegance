import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CalendarDays, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50">

      {/* Main Navbar */}
      <nav className="bg-white/97 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-pink-100 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="Priyanka Makeover Logo" className="h-12 w-12 rounded-full object-cover border-2 border-primary/20" />
              <div>
                <h1 className="text-base sm:text-lg font-serif font-bold text-[#6b1a33]">Priyanka Makeover</h1>
                <p className="text-[10px] sm:text-xs text-[#9a3555]/70">Enhancing Your Natural Beauty</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#6b1a33] flex items-center gap-0.5 ${
                    isActive(link.path)
                      ? "text-[#6b1a33] border-b-2 border-[#6b1a33] pb-0.5"
                      : "text-gray-600"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="h-3 w-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/contact#book-appointment" className="inline-block">
                <Button
                  size="sm"
                  className="flex items-center gap-2 bg-[#6b1a33] hover:bg-[#531428] text-white font-medium px-5 py-2 rounded-md shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  <CalendarDays className="h-4 w-4" />
                  Book Appointment
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#6b1a33]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-pink-100 pt-4 animate-fade-in">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium py-2 transition-colors hover:text-[#6b1a33] ${
                      isActive(link.path) ? "text-[#6b1a33]" : "text-gray-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact#book-appointment" onClick={() => setIsOpen(false)}>
                  <Button
                    size="sm"
                    className="mt-2 w-full flex items-center justify-center gap-2 bg-[#6b1a33] hover:bg-[#531428] text-white"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
