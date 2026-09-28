import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: "var(--pm-plum-deep)",
        color: "rgba(255,255,255,0.7)",
        padding: "5rem 0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "2rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.95rem",
                marginBottom: "1.25rem",
              }}
            >
              <img
                src={logo}
                alt="Priyanka Makeover Logo"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(200, 169, 106, 0.45)",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--pm-serif)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    color: "#fff",
                    lineHeight: 1.1,
                  }}
                >
                  Priyanka<span style={{ color: "var(--pm-rose)" }}>.</span>
                </div>
                <small
                  style={{
                    fontFamily: "var(--pm-sans)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.38em",
                    textTransform: "uppercase",
                    color: "var(--pm-mauve-soft)",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    display: "block",
                  }}
                >
                  Makeover
                </small>
              </div>
            </div>
            <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.6)", maxWidth: "30ch", lineHeight: 1.7 }}>
              Your trusted destination for premium bridal makeup, facials, hair treatments,
              and complete beauty services in Manesar, Gurugram.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: "0.9rem", marginTop: "1.25rem" }}>
              {[
                { href: "https://www.instagram.com/priyanka__makeover____/", label: "IG" },
                { href: "https://instagram.com/priyanka_beauty_parl", label: "IG2" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: 40, height: 40,
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.75)",
                    transition: "background 0.25s, border-color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--pm-rose-deep)";
                    e.currentTarget.style.borderColor = "var(--pm-rose-deep)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                  }}
                >
                  <Instagram size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5
              style={{
                color: "#fff",
                fontFamily: "var(--pm-sans)",
                fontWeight: 500,
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "1.4rem",
              }}
            >
              Navigation
            </h5>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map(({ name, path }) => (
                <li key={path} style={{ marginBottom: "0.65rem" }}>
                  <Link
                    to={path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    style={{
                      color: "rgba(255,255,255,0.68)",
                      fontSize: "0.92rem",
                      textDecoration: "none",
                      transition: "color 0.25s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--pm-gold-soft)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.68)"; }}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5
              style={{
                color: "#fff",
                fontFamily: "var(--pm-sans)",
                fontWeight: 500,
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "1.4rem",
              }}
            >
              Services
            </h5>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {["Bridal Makeup", "Party Makeup", "Facial & Skin Care", "Hair Styling", "Waxing & Threading", "Nail Art"].map((s) => (
                <li key={s} style={{ marginBottom: "0.65rem" }}>
                  <Link
                    to="/services"
                    style={{
                      color: "rgba(255,255,255,0.68)",
                      fontSize: "0.92rem",
                      textDecoration: "none",
                      transition: "color 0.25s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--pm-gold-soft)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.68)"; }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h5
              style={{
                color: "#fff",
                fontFamily: "var(--pm-sans)",
                fontWeight: 500,
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "1.4rem",
              }}
            >
              Contact Us
            </h5>
            <div style={{ marginBottom: "0.8rem" }}>
              <div style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--pm-mauve-soft)", marginBottom: "0.15rem" }}>Call or WhatsApp</div>
              <a href="tel:9650061103" style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.92rem", textDecoration: "none" }}>+91 96500 61103</a>
            </div>
            <div style={{ marginBottom: "0.8rem" }}>
              <div style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--pm-mauve-soft)", marginBottom: "0.15rem" }}>Salon</div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", margin: 0, lineHeight: 1.5 }}>
                Computer Gali, near NSG Campus,<br />Sector 1B, Manesar, Gurugram 122051
              </p>
            </div>
            <div>
              <div style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--pm-mauve-soft)", marginBottom: "0.15rem" }}>Hours</div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", margin: 0 }}>Mon – Sun: 10 AM – 8 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "3.5rem",
            paddingTop: "1.75rem",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.84rem",
          }}
        >
          <p style={{ margin: 0, color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} Priyanka Makeover. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.84rem" }}>Privacy Policy</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.84rem" }}>Terms</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 575px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
};

export default Footer;
