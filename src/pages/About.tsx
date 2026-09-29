import { CheckCircle, Award, Shield, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.webp";
import priyankaPortrait from "@/assets/owner.webp";

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

const About = () => {
  const stats = [
    { target: 1500, suffix: "+", label: "Happy Clients", decimals: 0 },
    { target: 300, suffix: "+", label: "Bridal Makeups", decimals: 0 },
    { target: 50, suffix: "+", label: "Services Offered", decimals: 0 },
    { target: 15, suffix: "+", label: "Years Experience", decimals: 0 },
  ];
  const counters = [
    useCounter(stats[0].target, stats[0].suffix, stats[0].decimals),
    useCounter(stats[1].target, stats[1].suffix, stats[1].decimals),
    useCounter(stats[2].target, stats[2].suffix, stats[2].decimals),
    useCounter(stats[3].target, stats[3].suffix, stats[3].decimals),
  ];

  const values = [{
    icon: Award,
    title: "Professional Care",
    description: "Our trained beauticians provide expert services with years of experience in the beauty industry."
  }, {
    icon: Shield,
    title: "Quality Products",
    description: "We use only branded, high-quality beauty products to ensure the best results for your skin and hair."
  }, {
    icon: CheckCircle,
    title: "Hygiene Standards",
    description: "We maintain strict hygiene protocols with sanitized tools and a clean environment for every client."
  }, {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "Your happiness is our priority. We go the extra mile to ensure you leave feeling beautiful and confident."
  }];
  return <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative py-20 bg-gradient-to-br from-secondary via-background to-accent/30">
      <div className="absolute inset-0 opacity-5">
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            About Priyanka Makeover
          </h1>
          <p className="text-lg text-muted-foreground">
            Your trusted destination for premium beauty services in Manesar, Gurugram
          </p>
        </div>
      </div>
    </section>

    {/* Story Section */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden bg-secondary/50 group">
              <img alt="Priyanka Makeover" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" src={priyankaPortrait} />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-xl bg-accent/30 -z-10" />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to <strong className="text-foreground">Priyanka Makeover</strong>, where beauty meets expertise. Located in the heart of Manesar, Gurugram, we have been dedicated to enhancing the natural beauty of our clients for years.
              </p>
              <p>
                Our journey began with a simple passion - to help every woman feel confident and beautiful. Today, we offer a comprehensive range of beauty services, from stunning bridal makeup to rejuvenating facials and expert hair treatments.
              </p>
              <p>
                At Priyanka Makeover, we believe that beauty is not just about looking good, but feeling good from within. Our team of skilled beauticians combines traditional techniques with modern trends to deliver results that exceed expectations.
              </p>
              <p>
                Whether you're preparing for your wedding day or simply want to pamper yourself, we're here to make you look and feel your absolute best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing exceptional beauty services with care and professionalism
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => <div key={index} className="p-6 bg-card rounded-2xl border border-border text-center">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <value.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
            <p className="text-sm text-muted-foreground">{value.description}</p>
          </div>)}
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="pm-section-sm pm-bg-blush" style={{ borderTop: "1px solid var(--pm-line-soft)", borderBottom: "1px solid var(--pm-line-soft)", marginTop: "4rem", marginBottom: "4rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-around" }}>
          {stats.map((s, i) => (
            <div key={s.label} className="pm-stat" style={{ textAlign: "center" }}>
              <span ref={counters[i].ref} className="pm-stat-num">{counters[i].val}</span>
              <small style={{ fontSize: "0.85rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--pm-mauve)", marginTop: "0.5rem", display: "block" }}>
                {s.label}
              </small>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>;
};
export default About;