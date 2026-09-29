import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import heroPortrait from "@/assets/hero-portrait.png";
import bridal1 from "@/assets/transformations/bridal-1.png";
import bridal2 from "@/assets/transformations/bridal-2.png";
import bridal3 from "@/assets/transformations/bridal-3.png";
import OffersPopup from "@/components/OffersPopup";

// ── Reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Counter hook ─────────────────────────────────────────────────────
function useCounter(target: number, suffix = "", decimals = 0) {
  const [val, setVal] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const dur = 1800;
      const animate = (now: number) => {
        const progress = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setVal((target * ease).toFixed(decimals) + suffix);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, suffix, decimals]);
  return { val, ref };
}

// ── Hero ──────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section
    className="hero-section"
    style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "8rem 0 4rem",
      overflow: "hidden",
    }}
  >
    {/* Background image + overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <img
        src={heroPortrait}
        alt="Beautiful bridal makeup by Priyanka Makeover"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 25%",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(36,24,32,0.75) 0%, rgba(36,24,32,0.38) 50%, rgba(36,24,32,0.12) 100%), linear-gradient(180deg, rgba(36,24,32,0.75) 0%, transparent 22%)",
        }}
      />
    </div>

    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 1.5rem",
        width: "100%",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: "640px" }}>
        <span
          className="pm-eyebrow"
          style={{ color: "var(--pm-gold-soft)" }}
        >
          Beauty Salon · Est. 2015
        </span>
        <h1
          className="hero-title"
          style={{
            fontFamily: "var(--pm-serif)",
            fontSize: "clamp(2.4rem, 5.2vw, 4.4rem)",
            color: "#fff",
            fontWeight: 500,
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Where beauty becomes{" "}
          <span className="pm-serif-accent">your signature.</span>
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.9)",
            marginBottom: "2.3rem",
            maxWidth: "44ch",
            lineHeight: 1.75,
          }}
        >
          Premium bridal makeup, skincare rituals, hair treatments, and
          complete beauty services in Manesar, Gurugram. Your beauty is our
          passion.
        </p>
        <div className="hero-buttons" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
          <Link
            to="/contact#book-appointment"
            className="pm-btn pm-btn-primary"
            style={{ textDecoration: "none" }}
          >
            Book an Appointment
          </Link>
          <Link
            to="/services"
            className="pm-btn pm-btn-outline"
            style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", textDecoration: "none" }}
          >
            View Services
          </Link>
        </div>

        {/* Stats strip */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            marginTop: "3.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            flexWrap: "wrap",
          }}
        >
          {[
            { val: "5★", label: "200+ reviews" },
            { val: "15+", label: "Years of experience" },
            { val: "500+", label: "Happy brides" },
          ].map(({ val, label }) => (
            <div key={label}>
              <span
                style={{
                  fontFamily: "var(--pm-serif)",
                  fontSize: "1.9rem",
                  color: "var(--pm-gold-soft)",
                  display: "block",
                  lineHeight: 1,
                }}
              >
                {val}
              </span>
              <small
                style={{
                  fontSize: "0.74rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {label}
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Floating card */}
    <div
      style={{
        position: "absolute",
        right: "2rem",
        bottom: "8%",
        zIndex: 2,
        background: "rgba(250,245,242,0.95)",
        backdropFilter: "blur(6px)",
        borderRadius: "var(--pm-radius-lg)",
        padding: "1.6rem 1.8rem",
        maxWidth: "260px",
        boxShadow: "var(--pm-shadow)",
      }}
      className="hero-card-hide"
    >
      <div style={{ color: "var(--pm-gold)", marginBottom: "0.5rem", letterSpacing: "2px" }}>★★★★★</div>
      <h4 style={{ fontFamily: "var(--pm-serif)", fontSize: "1.1rem", marginBottom: "0.4rem", color: "var(--pm-ink)" }}>
        Walk-ins welcome
      </h4>
      <p style={{ fontSize: "0.86rem", color: "var(--pm-mauve)", margin: 0, lineHeight: 1.5 }}>
        Open Mon–Sun, 10 AM–8 PM. Same-day appointments often available — just call ahead.
      </p>
    </div>

    <style>{`
      .hero-section { min-height: 100svh !important; }
      @media (max-width: 1199px) { .hero-card-hide { display: none; } }
      @media (max-width: 767px) { 
        .hero-section { padding: 7rem 0 7rem !important; } 
        .hero-title { font-size: 2.8rem !important; line-height: 1.1 !important; }
        .hero-buttons { flex-direction: column; align-items: stretch; }
        .hero-buttons .pm-btn { width: 100%; justify-content: center; }
      }
    `}</style>
  </section>
);

// ── Services Showcase ───────────────────────────────────────────────
const ServicesSection = () => {
  useReveal();
  return (
    <section className="pm-section pm-bg-cream" id="services">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "end",
            marginBottom: "3.5rem",
          }}
          className="services-head-grid"
        >
          <div className="reveal">
            <span className="pm-eyebrow">Curated Services</span>
            <h2 className="pm-h2">Beauty rituals crafted for<br />your natural radiance.</h2>
          </div>
          <div className="reveal reveal-d1">
            <p className="pm-lead">
              Caring hands, premium-grade products, and personalized attention. Every service
              is tailored to your unique skin type, personal style, and occasion.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="services-menu-grid">
          {/* Left column */}
          <div>
            <div className="pm-menu-group reveal">
              <h3><span style={{ color: "var(--pm-rose)", marginRight: "0.6rem" }}>✿</span> Bridal &amp; Party Makeup</h3>
              <p className="pm-menu-note">Flawless bridal preparation including HD makeup, skin prep, and draping.</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {[
                  { name: "Classic Bridal", desc: "HD makeup, full bridal glam, and long-lasting radiance" },
                  { name: "Party Glam Makeup", desc: "Glamorous evening styling with precision contouring and lashes" },
                  { name: "Engagement & Reception", desc: "Dewy, luminous looks crafted for your milestone celebrations" },
                ].map((item) => (
                  <li key={item.name} style={{ padding: "0.9rem 0", borderBottom: "1px solid var(--pm-line-soft)" }}>
                    <div style={{ fontWeight: 500, color: "var(--pm-ink)", fontSize: "1.05rem", fontFamily: "var(--pm-serif)" }}>{item.name}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--pm-mauve)", marginTop: "0.25rem", lineHeight: 1.45 }}>{item.desc}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pm-menu-group reveal reveal-d1">
              <h3><span style={{ color: "var(--pm-rose)", marginRight: "0.6rem" }}>✿</span> Facial &amp; Skin Care</h3>
              <p className="pm-menu-note">Rejuvenate and glow with our curated therapeutic facial rituals.</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {[
                  { name: "Korean Glass Skin Ritual", desc: "Deep hydration & luminous glow K-beauty treatment" },
                  { name: "Gold & Diamond Radiance", desc: "Luxury brightening and skin-rejuvenating facial therapy" },
                  { name: "Insta Glow & De-Tan Therapy", desc: "Sun repair, gentle exfoliation, and instant brightness renewal" },
                ].map((item) => (
                  <li key={item.name} style={{ padding: "0.9rem 0", borderBottom: "1px solid var(--pm-line-soft)" }}>
                    <div style={{ fontWeight: 500, color: "var(--pm-ink)", fontSize: "1.05rem", fontFamily: "var(--pm-serif)" }}>{item.name}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--pm-mauve)", marginTop: "0.25rem", lineHeight: 1.45 }}>{item.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="pm-menu-group reveal reveal-d2">
              <h3><span style={{ color: "var(--pm-rose)", marginRight: "0.6rem" }}>✿</span> Hair Styling &amp; Care</h3>
              <p className="pm-menu-note">From sleek smoothening treatments to elaborate bridal hair artistry.</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {[
                  { name: "Keratin & Smoothening", desc: "Silky, frizz-free treatments for long-lasting gloss and control" },
                  { name: "Bridal & Festive Hairdos", desc: "Intricate traditional and contemporary hair artistry with styling accessories" },
                  { name: "Hair Spa & Scalp Therapy", desc: "Deep nourishing rituals with L'Oréal & Schwarzkopf professional formulations" },
                ].map((item) => (
                  <li key={item.name} style={{ padding: "0.9rem 0", borderBottom: "1px solid var(--pm-line-soft)" }}>
                    <div style={{ fontWeight: 500, color: "var(--pm-ink)", fontSize: "1.05rem", fontFamily: "var(--pm-serif)" }}>{item.name}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--pm-mauve)", marginTop: "0.25rem", lineHeight: 1.45 }}>{item.desc}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pm-menu-group reveal reveal-d3">
              <h3><span style={{ color: "var(--pm-rose)", marginRight: "0.6rem" }}>✿</span> Waxing &amp; Nail Care</h3>
              <p className="pm-menu-note">Complete body care with hygienic tools and gentle techniques.</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {[
                  { name: "Rica & Chocolate Waxing", desc: "Gentle, skin-friendly waxing for effortless, silky smoothness" },
                  { name: "Gel Extensions & Nail Art", desc: "Custom nail shapes, durable gel polish, and bespoke artistic designs" },
                  { name: "Threading & Facial Grooming", desc: "Precise eyebrow shaping and delicate facial hair grooming" },
                ].map((item) => (
                  <li key={item.name} style={{ padding: "0.9rem 0", borderBottom: "1px solid var(--pm-line-soft)" }}>
                    <div style={{ fontWeight: 500, color: "var(--pm-ink)", fontSize: "1.05rem", fontFamily: "var(--pm-serif)" }}>{item.name}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--pm-mauve)", marginTop: "0.25rem", lineHeight: 1.45 }}>{item.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3.5rem" }} className="reveal">
          <Link to="/services" className="pm-btn pm-btn-primary" style={{ textDecoration: "none" }}>
            Explore All Services
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .services-head-grid { grid-template-columns: 1fr !important; }
          .services-menu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ── Gallery ───────────────────────────────────────────────────────────
const GallerySection = () => {
  const galleryItems = [
    { src: bridal1, style: "Bridal", caption: "Classic Bridal Look" },
    { src: bridal2, style: "Party", caption: "Party Glam Makeup" },
    { src: bridal3, style: "Bridal", caption: "Soft Dewy Bridal" },
  ];
  return (
    <section className="pm-section pm-bg-blush" id="gallery">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="pm-head pm-head-center reveal">
          <span className="pm-eyebrow pm-eyebrow-center">The Lookbook</span>
          <h2 className="pm-h2">Transformations from our salon</h2>
          <p className="pm-lead">
            Real looks created for real clients. Every transformation tailored to bring out your unique beauty.
          </p>
        </div>

        <div className="pm-gallery reveal reveal-d1">
          {galleryItems.map((item, i) => (
            <div key={i} className="pm-gallery-item">
              <img src={item.src} alt={item.caption} loading="lazy" />
              <div className="pm-gallery-cap">
                <span>{item.style}</span>
                <strong>{item.caption}</strong>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal">
          <Link to="/gallery" className="pm-btn pm-btn-outline" style={{ textDecoration: "none" }}>
            View full gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

// ── Why us ────────────────────────────────────────────────────────────
const WhySection = () => {
  const cards = [
    { ico: "✦", title: "Premium Products Only", body: "We use dermatologically-tested, cruelty-free brands — safe for all skin types, including sensitive." },
    { ico: "✿", title: "Expert Artistry", body: "Our artists specialize in bridal looks, party glam, and everyday beauty — trained in HD and airbrush techniques." },
    { ico: "◷", title: "On-Time, Every Time", body: "We respect your schedule. Bridal and pre-booked services always start on time with zero compromise on quality." },
    { ico: "★", title: "Hygiene First", body: "Single-use applicators, sterilised tools, and hospital-grade cleanliness protocols — your skin's safety is paramount." },
  ];
  return (
    <section className="pm-section pm-bg-cream" id="why">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="pm-head pm-head-center reveal">
          <span className="pm-eyebrow pm-eyebrow-center">Why Priyanka Makeover</span>
          <h2 className="pm-h2">Boutique care, without the compromise</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }} className="why-grid">
          {cards.map((c, i) => (
            <div key={i} className={`pm-why-card reveal${i > 0 ? ` reveal-d${i}` : ""}`}>
              <div className="pm-why-ico">{c.ico}</div>
              <h4 style={{ fontSize: "1.15rem", marginBottom: "0.55rem", fontFamily: "var(--pm-serif)" }}>{c.title}</h4>
              <p style={{ fontSize: "0.92rem", color: "var(--pm-mauve)", margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 991px) { .why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 575px) { .why-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
};

// ── Stats ─────────────────────────────────────────────────────────────
const StatsBar = () => {
  const stats = [
    { target: 15, suffix: "+", label: "Years of expertise", decimals: 0 },
    { target: 1500, suffix: "+", label: "Happy Clients", decimals: 0 },
    { target: 4.9, suffix: "", label: "Average rating", decimals: 1 },
    { target: 30, suffix: "+", label: "Beauty services", decimals: 0 },
  ];
  const counters = [
    useCounter(stats[0].target, stats[0].suffix, stats[0].decimals),
    useCounter(stats[1].target, stats[1].suffix, stats[1].decimals),
    useCounter(stats[2].target, stats[2].suffix, stats[2].decimals),
    useCounter(stats[3].target, stats[3].suffix, stats[3].decimals),
  ];
  return (
    <section className="pm-section-sm pm-bg-blush" style={{ borderTop: "1px solid var(--pm-line-soft)", borderBottom: "1px solid var(--pm-line-soft)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-around" }}>
          {stats.map((s, i) => (
            <div key={s.label} className="pm-stat">
              <span ref={counters[i].ref} className="pm-stat-num">{counters[i].val}</span>
              <small style={{ fontSize: "0.76rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--pm-mauve)", marginTop: "0.35rem", display: "block" }}>
                {s.label}
              </small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Packages & Bundles (Saved for later - uncomment in Index to display) ─
export const PackagesSection = () => (
  <section className="pm-section pm-bg-plum" id="packages">
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
      <div className="pm-head pm-head-center reveal">
        <span className="pm-eyebrow pm-eyebrow-center">Packages &amp; Bundles</span>
        <h2 className="pm-h2">Save every visit with a Priyanka plan</h2>
        <p className="pm-lead">
          Prepaid packages and bridal bundles. Great value, priority booking, and VIP treatment — every time.
        </p>
      </div>

      <div className="pm-pkg reveal reveal-d1">
        {[
          {
            name: "Glow Starter",
            sub: "For the monthly treat",
            price: "₹2,999",
            per: "/mo",
            items: ["One classic facial per month", "10% off all makeup services", "Priority weekday booking", "Birthday month upgrade"],
            btn: "pm-btn-outline",
          },
          {
            name: "Bridal Devotee",
            sub: "Complete bridal package",
            price: "₹12,999",
            per: "/pkg",
            items: ["Bridal + pre-bridal makeup", "Hair styling &amp; draping", "Engagement look included", "One facial &amp; waxing session", "Double loyalty stamps"],
            featured: true,
            btn: "pm-btn-gold",
          },
          {
            name: "The Full Glow",
            sub: "Hands, face & hair, covered",
            price: "₹5,499",
            per: "/mo",
            items: ["Two facials + full waxing", "One hair styling session", "20% off nail art &amp; add-ons", "Guest pass to share"],
            btn: "pm-btn-outline",
          },
        ].map((pkg) => (
          <div key={pkg.name} className={`pm-pkg-card${pkg.featured ? " is-featured" : ""}`}>
            {pkg.featured && <span className="pm-pkg-tag">Most popular</span>}
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0.35rem", color: "#fff" }}>{pkg.name}</h3>
            <p style={{ fontSize: "0.84rem", color: "var(--pm-mauve-soft)", marginBottom: "1.4rem" }}>{pkg.sub}</p>
            <div className="pm-pkg-price">
              {pkg.price}<small style={{ fontSize: "0.9rem", color: "var(--pm-mauve-soft)", fontFamily: "var(--pm-sans)" }}>{pkg.per}</small>
            </div>
            <ul className="pm-pkg-list">
              {pkg.items.map((item) => (
                <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <Link
              to="/contact#book-appointment"
              className={`pm-btn ${pkg.btn} pm-btn-block`}
              style={{ textDecoration: "none", marginTop: "auto" }}
            >
              Choose {pkg.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Testimonials ─────────────────────────────────────────────────────
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const testimonials = [
    { name: "Komal Yadav", service: "Bridal Makeup", text: "I felt like an absolute queen on my wedding day. The bridal look was exactly what I envisioned — flawless and long-lasting throughout the entire ceremony." },
    { name: "Neha Sharma", service: "Keratin Treatment", text: "Got my keratin done here and my hair has never looked this smooth or shiny. Professional service, amazing results. Highly recommend!" },
    { name: "Mahi Chauhan", service: "Korean Glass Skin Facial", text: "The facial left my skin glowing for weeks. The staff is incredibly knowledgeable and the salon is spotless. My go-to beauty destination in Manesar." },
  ];
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  return (
    <section className="pm-section pm-bg-plum" id="reviews">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="pm-head pm-head-center reveal">
          <span className="pm-eyebrow pm-eyebrow-center">Kind Words</span>
          <h2 className="pm-h2">Loved by our clients</h2>
        </div>

        <div className="pm-testi reveal reveal-d1">
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                display: i === active ? "block" : "none",
                textAlign: "center",
              }}
            >
              <div className="pm-testi-stars">★★★★★</div>
              <p className="pm-testi-quote">"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.9rem" }}>
                <div
                  style={{
                    width: 52, height: 52,
                    borderRadius: "50%",
                    background: "var(--pm-rose-deep)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--pm-serif)",
                    fontSize: "1.2rem",
                    color: "#fff",
                    fontWeight: 500,
                    flexShrink: 0,
                  }}
                >
                  {t.name[0]}
                </div>
                <div style={{ textAlign: "left" }}>
                  <strong style={{ display: "block", fontFamily: "var(--pm-serif)", fontSize: "1.05rem", color: "#fff", fontWeight: 500 }}>{t.name}</strong>
                  <span style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--pm-mauve-soft)" }}>{t.service}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem", marginTop: "2.2rem" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Review ${i + 1}`}
                style={{
                  width: 9, height: 9,
                  borderRadius: "50%",
                  border: "1px solid var(--pm-mauve-soft)",
                  background: i === active ? "var(--pm-rose)" : "transparent",
                  borderColor: i === active ? "var(--pm-rose)" : "var(--pm-mauve-soft)",
                  transform: i === active ? "scale(1.2)" : "scale(1)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.25s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Visit / Hours ─────────────────────────────────────────────────────
const VisitSection = () => (
  <section className="pm-section pm-bg-cream" id="visit">
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "stretch" }} className="visit-grid">
        <div className="reveal">
          <span className="pm-eyebrow">Hours &amp; Location</span>
          <h2 className="pm-h2">Come and see us</h2>
          <p className="pm-lead">
            Located in Manesar, Gurugram — in Computer Gali, near NSG Campus.
            Easily accessible from NH-48.
          </p>

          <ul className="pm-hours-list" style={{ marginTop: "2rem" }}>
            {[
              { day: "Monday – Sunday", time: "10:00 AM – 8:00 PM" },
            ].map(({ day, time }) => (
              <li key={day}>
                <span className="pm-hours-day">{day}</span>
                <span className="pm-hours-time">{time}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "2rem" }}>
            <div className="pm-contact-line">
              <span className="pm-ci">📍</span>
              <div>
                <strong>Salon Location</strong>
                Computer Gali, near NSG Campus, Sector 1B, Manesar, Gurugram 122051
              </div>
            </div>
            <div className="pm-contact-line">
              <span className="pm-ci">📞</span>
              <div>
                <strong>Call or WhatsApp</strong>
                <a href="tel:9650061103" style={{ color: "var(--pm-rose-deep)" }}>+91 96500 61103</a>
              </div>
            </div>
            <div className="pm-contact-line">
              <span className="pm-ci">📸</span>
              <div>
                <strong>Instagram</strong>
                <a href="https://www.instagram.com/priyanka__makeover____/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--pm-rose-deep)" }}>@priyanka__makeover____</a>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal reveal-d1" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div
            style={{
              borderRadius: "var(--pm-radius-lg)",
              overflow: "hidden",
              background: "var(--pm-cream-2)",
              flex: 1,
              minHeight: "340px",
              position: "relative",
            }}
          >
            <iframe
              title="Priyanka Makeover Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.405479316859!2d76.93657467527811!3d28.346588275822192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8304deb977702d31%3A0xd254ed6fb05051b0!2sPriyanka%20Makeover!5e0!3m2!1sen!2sin!4v1768041011222!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "340px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://maps.app.goo.gl/iXNcSGwJK7DcQ6VA8"
            target="_blank"
            rel="noopener noreferrer"
            className="pm-btn pm-btn-primary"
            style={{ textDecoration: "none", justifyContent: "center" }}
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 991px) { .visit-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
    `}</style>
  </section>
);

// ── CTA ───────────────────────────────────────────────────────────────
const CTASection = () => (
  <section className="pm-section pm-bg-plum" id="cta">
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 2, textAlign: "center" }}>
      <span className="pm-eyebrow pm-eyebrow-center" style={{ color: "var(--pm-gold-soft)", justifyContent: "center" }}>
        Get In Touch
      </span>
      <h2
        style={{
          fontFamily: "var(--pm-serif)",
          fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
          color: "#fff",
          marginBottom: "1rem",
        }}
      >
        Ready to enhance your beauty?
      </h2>
      <p style={{ color: "rgba(255,255,255,0.82)", maxWidth: "48ch", margin: "0 auto 2rem", fontSize: "1.08rem" }}>
        Book your appointment today and let us bring out your natural beauty with our premium services.
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a
          href="https://wa.me/919650061103?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Priyanka%20Makeover."
          target="_blank"
          rel="noopener noreferrer"
          className="pm-btn pm-btn-gold"
          style={{ textDecoration: "none" }}
        >
          Book on WhatsApp
        </a>
        <a
          href="tel:9650061103"
          className="pm-btn pm-btn-outline"
          style={{ textDecoration: "none" }}
        >
          Call Now
        </a>
      </div>
    </div>
  </section>
);

// ── Seasonal Offers Banner ─────────────────────────────────────────────
const SeasonalOffersBanner = () => (
  <section className="pm-section-sm bg-[var(--pm-cream-2)] border-t border-b border-[var(--pm-line-soft)]" id="seasonal-offers">
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 md:p-8 rounded-2xl border border-[var(--pm-gold-soft)] shadow-[0_4px_20px_-10px_rgba(200,169,106,0.3)]">
        <div className="flex-1 text-center md:text-left">
          <span className="pm-eyebrow !mb-2" style={{ justifyContent: "center" }}>Festive Season Special</span>
          <h3 className="font-serif text-2xl md:text-3xl text-[var(--pm-ink)] mb-2">
            Exclusive Wedding & Beauty Offers
          </h3>
          <p className="text-[var(--pm-mauve)] max-w-xl mx-auto md:mx-0">
            Get ready for the season with our specially curated bridal and beauty packages. Limited time discounts on premium services.
          </p>
        </div>
        <div className="shrink-0 w-full md:w-auto">
          <Link 
            to="/offers" 
            className="pm-btn pm-btn-gold pm-btn-block md:inline-flex md:w-auto"
            style={{ textDecoration: "none" }}
          >
            View All Offers &rarr;
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// ── Page ──────────────────────────────────────────────────────────────
const Index = () => {
  useReveal();
  return (
    <>
      <OffersPopup />
      <HeroSection />
      <ServicesSection />
      <SeasonalOffersBanner />
      <GallerySection />
      <WhySection />
      <StatsBar />
      {/* ── Packages & Bundles (Uncomment below to display on website) ── */}
      {/* <PackagesSection /> */}
      <TestimonialsSection />
      <VisitSection />
      <CTASection />
    </>
  );
};

export default Index;
