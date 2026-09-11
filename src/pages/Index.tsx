import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight, Star, Sparkles, Heart, Scissors, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatsSection from "@/components/layout/StatsSection";
import heroPortrait from "@/assets/hero-portrait.png";
import bridal1 from "@/assets/transformations/bridal-1.png";
import bridal2 from "@/assets/transformations/bridal-2.png";
import bridal3 from "@/assets/transformations/bridal-3.png";

// ── Feature data ──────────────────────────────────────────────────────
const features = [
  { Icon: Sparkles,    title: "Bridal Expertise",  desc: "Stunning bridal looks tailored to make your day unforgettable." },
  { Icon: Heart,       title: "Premium Products",  desc: "We use only high-quality, dermatologically safe products." },
  { Icon: Scissors,    title: "Personalized Care", desc: "Customized beauty solutions for your unique needs." },
  { Icon: ShieldCheck, title: "Hygiene & Safety",  desc: "Strict hygiene protocols for your complete peace of mind." },
];

// ── Luxury Floating Feature Strip ────────────────────────────────────
const FeatureStrip = () => (
  <div className="relative z-30 flex justify-center">
    {/* ── Desktop ── */}
    <div className="hidden lg:block w-[88%] max-w-[1160px]" style={{ marginTop: "-56px" }}>
      <div
        className="rounded-[24px] overflow-hidden"
        style={{
          background: "#ffffff",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 4px 20px rgba(139,30,79,0.06)",
          border: "1px solid rgba(212,175,55,0.22)",
        }}
      >
        <div className="grid grid-cols-4 divide-x divide-rose-100/60">
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 px-7 py-6 cursor-default"
              style={{ transition: "transform 300ms ease, box-shadow 300ms ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #fce8ef 0%, #fbd5e5 100%)", color: "#8B1E4F" }}
              >
                <Icon className="w-5 h-5" strokeWidth={1.7} />
              </div>
              <div>
                <p
                  className="font-semibold mb-1 transition-colors duration-300 group-hover:text-[#8B1E4F]"
                  style={{ fontSize: "13.5px", color: "#4a1025", fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </p>
                <p style={{ fontSize: "11.5px", color: "#888", lineHeight: 1.6 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Gold accent line */}
        <div style={{ height: "3px", background: "linear-gradient(to right, transparent 0%, #D4AF37 20%, #e8c96a 50%, #D4AF37 80%, transparent 100%)" }} />
      </div>
    </div>

    {/* ── Mobile 2×2 ── */}
    <div className="lg:hidden w-[92%] mt-6">
      <div
        className="grid grid-cols-2 gap-[1px] rounded-[20px] overflow-hidden"
        style={{ background: "rgba(212,175,55,0.2)", boxShadow: "0 16px 48px rgba(0,0,0,0.08)" }}
      >
        {features.map(({ Icon, title, desc }, i) => (
          <div key={i} className="flex items-start gap-3 p-4 bg-white">
            <div
              className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5"
              style={{ background: "#fce8ef", color: "#8B1E4F" }}
            >
              <Icon className="w-4 h-4" strokeWidth={1.7} />
            </div>
            <div>
              <p className="font-semibold text-[12px] mb-0.5" style={{ color: "#4a1025", fontFamily: "'Playfair Display', serif" }}>{title}</p>
              <p className="text-[10.5px] leading-snug text-gray-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: "3px", background: "linear-gradient(to right, #D4AF37, #e8c96a, #D4AF37)", borderRadius: "0 0 20px 20px" }} />
    </div>
  </div>
);

// ── Luxury Hero Section ───────────────────────────────────────────────
const HeroSection = () => (
  <section
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #FFF8FA 0%, #FDF3F6 50%, #FFF8FA 100%)",
      minHeight: "75vh",
    }}
  >
    {/* ── Decorative luxury background shapes ── */}

    {/* Large soft rose blob — top-right */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: "520px", height: "520px",
        top: "-80px", right: "-100px",
        background: "radial-gradient(ellipse at 40% 40%, rgba(243,200,216,0.45) 0%, rgba(237,176,201,0.22) 55%, transparent 80%)",
        borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
        filter: "blur(2px)",
      }}
    />
    {/* Smaller accent blob — bottom-left */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: "320px", height: "320px",
        bottom: "-60px", left: "-80px",
        background: "radial-gradient(ellipse at 60% 60%, rgba(212,175,55,0.12) 0%, transparent 70%)",
        borderRadius: "50% 60% 40% 55%",
        filter: "blur(1px)",
      }}
    />
    {/* Luxury floral line art — far left watermark */}
    <svg
      className="absolute pointer-events-none select-none"
      style={{ left: "-10px", top: "8%", width: "260px", height: "260px", opacity: 0.055 }}
      viewBox="0 0 260 260" fill="none"
    >
      <circle cx="130" cy="130" r="110" stroke="#8B1E4F" strokeWidth="1.5" strokeDasharray="6 4" />
      <circle cx="130" cy="130" r="75"  stroke="#8B1E4F" strokeWidth="1"   strokeDasharray="3 5" />
      <circle cx="130" cy="130" r="40"  stroke="#D4AF37" strokeWidth="1.5" />
      {/* Petals */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <ellipse
          key={i}
          cx={130 + 58 * Math.cos((deg - 90) * Math.PI / 180)}
          cy={130 + 58 * Math.sin((deg - 90) * Math.PI / 180)}
          rx="12" ry="22"
          stroke="#8B1E4F" strokeWidth="1"
          transform={`rotate(${deg} ${130 + 58 * Math.cos((deg - 90) * Math.PI / 180)} ${130 + 58 * Math.sin((deg - 90) * Math.PI / 180)})`}
        />
      ))}
    </svg>
    {/* Thin wave lines — top center */}
    <svg
      className="absolute pointer-events-none select-none hidden lg:block"
      style={{ top: "18px", left: "50%", transform: "translateX(-50%)", width: "400px", height: "75px", opacity: 0.07 }}
      viewBox="0 0 400 40" fill="none"
    >
      <path d="M0 20 Q50 5 100 20 Q150 35 200 20 Q250 5 300 20 Q350 35 400 20" stroke="#D4AF37" strokeWidth="1.5" />
      <path d="M0 28 Q50 13 100 28 Q150 43 200 28 Q250 13 300 28 Q350 43 400 28" stroke="#8B1E4F" strokeWidth="0.8" />
    </svg>

    {/* ══ DESKTOP LAYOUT ══ */}
    <div
      className="hidden lg:flex items-center relative z-10 px-[clamp(48px,6vw,110px)]"
      style={{ minHeight: "40vh", gap: "clamp(30px, 4vw, 72px)" }}
    >

      {/* ─── LEFT: Text ─── */}
      <div className="flex flex-col justify-center flex-shrink-0" style={{ width: "50%", maxWidth: "580px", paddingBottom: "60px" }}>

        {/* Welcome badge */}
        <div className="inline-flex items-center gap-2 mb-5 self-start">
          <div style={{ width: "28px", height: "1px", background: "#D4AF37" }} />
          <span
            className="tracking-[0.3em] uppercase"
            style={{ fontSize: "10px", color: "#8B1E4F", fontWeight: 600, fontFamily: "system-ui, sans-serif" }}
          >
            Welcome to
          </span>
          <div style={{ width: "28px", height: "1px", background: "#D4AF37" }} />
        </div>

        {/* Main heading */}
        <h1
          className="leading-[1.04] mb-4"
          style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontWeight: 700,
            fontSize: "clamp(52px, 5.5vw, 78px)",
            color: "#3d0f1e",
            letterSpacing: "-0.5px",
          }}
        >
          Priyanka<br />
          <span style={{ color: "#8B1E4F" }}>Makeover</span>
        </h1>

        {/* Tagline with luxury divider */}
        <div className="flex items-center gap-3 mb-5">
          <div style={{ width: "36px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37)" }} />
          <p
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontStyle: "italic",
              fontSize: "clamp(16px, 1.5vw, 20px)",
              color: "#7a3050",
              fontWeight: 300,
              letterSpacing: "0.02em",
            }}
          >
            Enhancing Your Natural Beauty
          </p>
          <div style={{ width: "36px", height: "1px", background: "linear-gradient(to left, transparent, #D4AF37)" }} />
        </div>

        {/* Gold floral ornament */}
        <div className="flex items-center gap-3 mb-6">
          <svg viewBox="0 0 120 16" style={{ width: "120px", height: "16px", flexShrink: 0 }} fill="none">
            <path d="M0 8 Q10 2 20 8 Q30 14 40 8 Q50 2 60 8" stroke="#D4AF37" strokeWidth="0.9" />
            <circle cx="64" cy="8" r="3.5" fill="#D4AF37" />
            <circle cx="72" cy="5" r="2" fill="#D4AF37" opacity="0.6" />
            <circle cx="72" cy="11" r="2" fill="#D4AF37" opacity="0.6" />
            <path d="M76 8 Q86 2 96 8 Q106 14 116 8 Q118 7 120 8" stroke="#D4AF37" strokeWidth="0.9" />
          </svg>
        </div>

        {/* Description */}
        <p
          className="leading-relaxed mb-8"
          style={{
            fontSize: "clamp(13px, 1.05vw, 15px)",
            color: "#7a3050",
            opacity: 0.85,
            maxWidth: "490px",
            lineHeight: 1.75,
          }}
        >
          Premium bridal makeup, skincare, hair treatments, and complete
          beauty services in Manesar, Gurugram. Your beauty is our passion.
        </p>

        {/* Rating strip */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={i < 5 ? "h-3.5 w-3.5 fill-amber-400 text-amber-400" : "h-3.5 w-3.5 text-amber-300/50"} />
            ))}
          </div>
          <span style={{ fontSize: "12px", color: "#6b2040", fontWeight: 600 }}>4.9</span>
          <div style={{ width: "1px", height: "14px", background: "rgba(107,32,64,0.25)" }} />
          <span style={{ fontSize: "12px", color: "#888" }}>500+ Happy Clients</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link to="/contact#book-appointment">
            <button
              className="inline-flex items-center gap-2.5 font-semibold rounded-xl shadow-lg transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #8B1E4F 0%, #6b1a33 60%, #4a1225 100%)",
                color: "#fff",
                fontSize: "14px",
                padding: "13px 28px",
                boxShadow: "0 8px 24px rgba(139,30,79,0.35)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 12px 32px rgba(139,30,79,0.45)"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 8px 24px rgba(139,30,79,0.35)"; }}
            >
              <CalendarDays className="h-4 w-4 flex-shrink-0" />
              Book Appointment
            </button>
          </Link>
          <Link to="/services">
            <button
              className="inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1.5px solid rgba(139,30,79,0.4)",
                color: "#8B1E4F",
                fontSize: "14px",
                padding: "13px 26px",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#fff"; el.style.borderColor = "#8B1E4F"; el.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.9)"; el.style.borderColor = "rgba(139,30,79,0.4)"; el.style.transform = "translateY(0)"; }}
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* ─── RIGHT: Image with organic mask ─── */}
      <div
        className="relative flex-1 flex items-center justify-center"
        style={{ minHeight: "40vh", paddingBottom: "60px" }}
      >
        {/* Soft blush halo behind the image */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "85%", height: "85%",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at 55% 45%, rgba(237,180,205,0.55) 0%, rgba(243,200,216,0.3) 50%, transparent 75%)",
            borderRadius: "54% 46% 60% 40% / 48% 52% 48% 52%",
            filter: "blur(8px)",
          }}
        />

        {/* SVG clip-path organic mask applied to the portrait */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <clipPath id="blob-hero" clipPathUnits="objectBoundingBox">
              <path d="
                M 0.52 0.01
                C 0.72 0.01, 0.93 0.12, 0.97 0.30
                C 1.01 0.48, 0.92 0.68, 0.80 0.80
                C 0.68 0.92, 0.50 0.99, 0.32 0.97
                C 0.14 0.95, 0.02 0.80, 0.01 0.60
                C 0.00 0.40, 0.10 0.18, 0.28 0.08
                C 0.36 0.03, 0.44 0.01, 0.52 0.01 Z
              " />
            </clipPath>
          </defs>
        </svg>

        {/* Portrait image with organic blob mask */}
        <div
          className="relative z-10"
          style={{
            width: "min(460px, 88%)",
            aspectRatio: "0.82",
          }}
        >
          <img
            src={heroPortrait}
            alt="Beautiful Bridal Makeup by Priyanka Makeover"
            className="w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              clipPath: "url(#blob-hero)",
              borderRadius: "40px",
              filter: "drop-shadow(0 16px 48px rgba(107,26,51,0.2))",
            }}
          />

          {/* Gold ring accent around the blob */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: "40px",
              background: "transparent",
              boxShadow: "0 0 0 2px rgba(212,175,55,0.25), 0 0 0 8px rgba(212,175,55,0.08)",
              clipPath: "url(#blob-hero)",
            }}
          />

          {/* Floating ⭐ badge — top right */}
          <div
            className="absolute -top-2 -right-4 flex flex-col items-center justify-center rounded-full text-white shadow-xl"
            style={{
              width: 76, height: 76,
              background: "linear-gradient(135deg, #8B1E4F 0%, #5a1228 100%)",
              border: "2px solid rgba(212,175,55,0.5)",
            }}
          >
            <span style={{ fontSize: "18px", lineHeight: 1 }}>👑</span>
            <span style={{ fontSize: "7px", fontWeight: 700, letterSpacing: "0.08em", marginTop: 2, lineHeight: 1.3, textAlign: "center" }}>
              BRIDAL<br />EXPERT
            </span>
          </div>
        </div>

        {/* Decorative floral line art — far right */}
        <svg
          className="absolute right-0 bottom-16 pointer-events-none select-none opacity-[0.06]"
          viewBox="0 0 80 180" style={{ width: "80px", height: "180px" }}
          fill="none"
        >
          <path d="M40 0 Q55 30 40 60 Q25 90 40 120 Q55 150 40 180" stroke="#8B1E4F" strokeWidth="1.2" />
          {[20,60,100,140].map(y => (
            <g key={y}>
              <ellipse cx="40" cy={y} rx="18" ry="8" stroke="#D4AF37" strokeWidth="0.9" transform={`rotate(${y % 40 === 20 ? -30 : 30} 40 ${y})`} />
            </g>
          ))}
        </svg>
      </div>
    </div>

    {/* ══ MOBILE LAYOUT ══ */}
    <div className="lg:hidden relative z-10">
      {/* Full-bleed hero image */}
      <div className="relative w-full overflow-hidden" style={{ height: "60vw", minHeight: "260px", maxHeight: "400px" }}>
        <img
          src={heroPortrait}
          alt="Beautiful Bridal Makeup"
          className="w-full h-full object-cover"
          style={{ objectPosition: "top center" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #FFF8FA 0%, rgba(255,248,250,0.5) 40%, transparent 70%)" }}
        />
        <Link to="/contact#book-appointment">
          <div
            className="absolute top-4 left-4 flex flex-col items-center justify-center rounded-full text-white shadow-xl cursor-pointer hover:scale-105 transition-transform"
            style={{
              width: 74, height: 74,
              background: "linear-gradient(135deg, #8B1E4F, #5a1228)",
              border: "2px solid rgba(212,175,55,0.5)",
            }}
          >
            <span className="text-[7px] font-bold uppercase tracking-wide leading-tight text-center px-1">👑<br />Book<br />Bridal<br />Package</span>
          </div>
        </Link>
      </div>

      {/* Mobile text card */}
      <div className="mx-3 -mt-10 relative z-10 rounded-3xl shadow-2xl bg-white px-5 py-7 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }} />
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase whitespace-nowrap" style={{ color: "#8B1E4F" }}>Welcome to</p>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }} />
        </div>
        <h1
          className="leading-tight mb-1"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "28px", color: "#3d0f1e" }}
        >
          Priyanka Makeover
        </h1>
        <p className="text-sm font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "#7a3050" }}>
          Enhancing Your Natural Beauty
        </p>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}</div>
          <span className="text-xs font-medium text-gray-600">4.9 Rating</span>
          <span className="text-gray-300 text-xs">|</span>
          <span className="text-xs font-medium text-gray-600">500+ Clients</span>
        </div>
        <p className="text-[11px] mb-6 leading-relaxed max-w-[280px] mx-auto" style={{ color: "#7a3050", opacity: 0.8 }}>
          Premium bridal makeup, skincare, hair treatments, and complete beauty services in Manesar, Gurugram.
        </p>
        <div className="flex flex-col gap-3">
          <Link to="/contact#book-appointment" className="block">
            <button
              className="w-full inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #8B1E4F, #5a1228)", boxShadow: "0 6px 20px rgba(139,30,79,0.30)" }}
            >
              <CalendarDays className="h-4 w-4" /> Book Appointment
            </button>
          </Link>
          <Link to="/services" className="block">
            <button
              className="w-full inline-flex items-center justify-center gap-2 bg-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200"
              style={{ border: "1.5px solid rgba(139,30,79,0.3)", color: "#8B1E4F" }}
            >
              View Services <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>

    {/* Bottom padding space for FeatureStrip overlap */}
    <div className="hidden lg:block" style={{ height: "56px" }} />
  </section>
);


// ── Service Highlights ──────────────────────────────────────────────
const ServiceHighlights = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Bridal & Party Makeup",
      description: "Look stunning on your special day with our premium bridal and party makeup services",
      priceTab: "bridal",
    },
    {
      icon: Heart,
      title: "Facial & Skin Care",
      description: "Rejuvenate your skin with our range of facials including Gold, Diamond, and Korean Glass",
      priceTab: "facials",
    },
    {
      icon: Scissors,
      title: "Hair Styling & Treatment",
      description: "From trendy cuts to keratin treatments, we offer complete hair care solutions",
      priceTab: "hairtreatment",
    },
    {
      icon: ShieldCheck,
      title: "Waxing & Nail Services",
      description: "Complete body care with premium waxing and professional nail services",
      priceTab: "waxing",
    },
  ];

  return (
    <section className="pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of beauty services designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to="/services"
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

// ── Transformations ─────────────────────────────────────────────────
const BeforeAfterSection = () => {
  const items = [
    { id: 1, image: bridal1, title: "Beautiful Bride", service: "Bridal Makeup" },
    { id: 2, image: bridal2, title: "Beautiful Bride", service: "Bridal Makeup" },
    { id: 3, image: bridal3, title: "Beautiful Bride", service: "Bridal Makeup" },
  ];
  return (
    <section className="py-20 bg-[#fdf4f7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#9a3555] mb-2">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5a1428] mb-3">Transformations</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">See the amazing transformations we create for our beautiful clients</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-2xl aspect-[4/5] group shadow-lg">
              <img src={item.image} alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5a1428]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-sm opacity-80">{item.service}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button className="bg-[#6b1a33] hover:bg-[#531428] text-white font-semibold px-8 shadow-md hover:shadow-lg transition-all duration-200">
              View Gallery <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// ── Testimonials ────────────────────────────────────────────────────
const TestimonialsSection = () => {
  const testimonials = [
    { name: "Komal Yadav", service: "Bridal Makeup", text: "Very professional service and i had a great experience", rating: 5, initial: "K" },
    { name: "Neha Sharma", service: "Hair Treatment", text: "Got Hair Smoothing treatment done here. Professional service and amazing results. My hair has never looked better!", rating: 5, initial: "N" },
    { name: "Mahi Chauhan", service: "Facial Treatment", text: "The service is very nice and staff behaviour is too good.. I had a great experience with the facial treatment. My skin feels rejuvenated!", rating: 5, initial: "M" },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#9a3555] mb-2">Reviews</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5a1428] mb-3">What Our Clients Say</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">Don't just take our word for it — hear from our happy clients</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 bg-[#fdf4f7] rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-gray-600 mb-5 italic text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6b1a33] flex items-center justify-center text-white font-bold text-sm">{t.initial}</div>
                <div>
                  <p className="font-semibold text-[#5a1428] text-sm">{t.name}</p>
                  <p className="text-xs text-[#9a3555]">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── CTA ─────────────────────────────────────────────────────────────
const CTASection = () => (
  <section className="py-20 bg-[#6b1a33] text-white relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-10" style={{ background: "radial-gradient(circle, white, transparent)" }} />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, white, transparent)" }} />
    </div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-pink-200 mb-3">Get In Touch</p>
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Enhance Your Beauty?</h2>
      <p className="text-pink-100 mb-8 max-w-2xl mx-auto text-sm">
        Book your appointment today and let us bring out your natural beauty with our premium services
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://wa.me/919650061103?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Priyanka%20Makeover."
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#6b1a33] font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-pink-50 transition-all text-sm">
          <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Book on WhatsApp
        </a>
        <a href="tel:9650061103"
          className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-all text-sm">
          Call Now
        </a>
      </div>
    </div>
  </section>
);

// ── Page ─────────────────────────────────────────────────────────────
const Index = () => (
  <>
    <HeroSection />
    <FeatureStrip />
    <ServiceHighlights />
    <BeforeAfterSection />
    <StatsSection />
    <TestimonialsSection />
    <CTASection />
  </>
);

export default Index;
