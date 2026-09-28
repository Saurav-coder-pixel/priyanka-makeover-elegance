import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CalendarDays, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Offers", path: "/offers" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === "/";
  const isSolid = scrolled || isOpen || !isHomePage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1030,
          padding: scrolled ? "0.85rem 0" : "1.4rem 0",
          background: isSolid ? "rgba(250,245,242,0.94)" : "transparent",
          backdropFilter: isSolid ? "blur(14px)" : "none",
          WebkitBackdropFilter: isSolid ? "blur(14px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(42,29,37,0.07), 0 12px 30px -24px rgba(58,40,48,0.5)" : "none",
          transition: "background 0.35s cubic-bezier(0.22,0.61,0.36,1), padding 0.35s cubic-bezier(0.22,0.61,0.36,1), box-shadow 0.35s cubic-bezier(0.22,0.61,0.36,1)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand */}
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.85rem",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="Priyanka Makeover Logo"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                objectFit: "cover",
                border: `2px solid ${isSolid ? "rgba(200, 169, 106, 0.55)" : "rgba(255, 255, 255, 0.45)"}`,
                boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                flexShrink: 0,
                transition: "border-color 0.3s",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "var(--pm-serif)",
                  fontSize: "1.45rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  color: isSolid ? "var(--pm-ink)" : "#fff",
                  lineHeight: 1.1,
                  transition: "color 0.3s",
                }}
              >
                Priyanka<span style={{ color: "var(--pm-rose)" }}>.</span>
              </span>
              <small
                style={{
                  fontFamily: "var(--pm-sans)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.38em",
                  textTransform: "uppercase",
                  color: isSolid ? "var(--pm-mauve)" : "rgba(255,255,255,0.75)",
                  marginTop: "0.2rem",
                  fontWeight: 500,
                  display: "block",
                  transition: "color 0.3s",
                }}
              >
                Makeover
              </small>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" style={{ display: "flex", alignItems: "center", gap: "2.1rem" }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: "var(--pm-sans)",
                  fontWeight: 400,
                  fontSize: "0.82rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: isSolid
                    ? isActive(link.path) ? "var(--pm-rose-deep)" : "var(--pm-ink)"
                    : isActive(link.path) ? "var(--pm-gold-soft)" : "rgba(255,255,255,0.9)",
                  position: "relative",
                  padding: "0.25rem 0",
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
                className="nav-link-hover"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <Link
              to="/contact#book-appointment"
              className="pm-btn pm-btn-sm pm-btn-primary hidden-mobile"
              style={{ fontFamily: "var(--pm-sans)", textDecoration: "none" }}
            >
              <CalendarDays size={14} />
              Book Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              style={{
                display: "none",
                width: "46px",
                height: "46px",
                border: `1px solid ${isSolid ? "var(--pm-line)" : "rgba(255,255,255,0.4)"}`,
                borderRadius: "50%",
                background: "transparent",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                color: isSolid ? "var(--pm-ink)" : "#fff",
                transition: "border-color 0.3s",
              }}
              id="mobile-nav-toggle"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Inline nav link hover styles */}
        <style>{`
          .nav-link-hover::after {
            content: "";
            position: absolute;
            left: 0; bottom: -2px;
            width: 0; height: 1px;
            background: var(--pm-rose);
            transition: width 0.28s cubic-bezier(0.22,0.61,0.36,1);
          }
          .nav-link-hover:hover::after,
          .nav-link-hover.active::after { width: 100%; }
          @media (max-width: 768px) {
            nav[aria-label="Primary"] { display: none !important; }
            .hidden-mobile { display: none !important; }
            #mobile-nav-toggle { display: inline-flex !important; }
          }
        `}</style>
      </header>

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--pm-cream)",
          zIndex: 1029,
          padding: "6.5rem 2rem 2rem",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.22,0.61,0.36,1)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link.path} style={{ borderBottom: "1px solid var(--pm-line-soft)" }}>
              <Link
                to={link.path}
                style={{
                  display: "block",
                  fontFamily: "var(--pm-serif)",
                  fontSize: "1.8rem",
                  padding: "1rem 0",
                  color: isActive(link.path) ? "var(--pm-rose-deep)" : "var(--pm-ink)",
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact#book-appointment"
          className="pm-btn pm-btn-primary pm-btn-block"
          style={{ marginTop: "2rem", textDecoration: "none", justifyContent: "center" }}
        >
          <CalendarDays size={16} />
          Book an Appointment
        </Link>
      </div>
    </>
  );
};

export default Navbar;
