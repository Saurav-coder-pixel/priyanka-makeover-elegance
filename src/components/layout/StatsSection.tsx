import { useEffect, useRef, useState } from "react";
import { Trophy, Users, Star, Crown } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────
// ANIMATED STATS SECTION
// Numbers count up from 0 once the section scrolls into view (one-time,
// via IntersectionObserver). Drop <StatsSection /> anywhere in the page —
// e.g. right after the hero / FeatureStrip and before Services.
// ─────────────────────────────────────────────────────────────────────────

const DEFAULT_STATS = [
  { Icon: Trophy, value: 15, suffix: "+", label: "Years of Experience" },
  { Icon: Users, value: 1000, suffix: "+", label: "Happy Clients" },
  { Icon: Star, value: 5, suffix: "★", label: "5 Star on Google Review" },
  { Icon: Crown, value: 150, suffix: "+", label: "Bridal Makeovers" },
];

const COLORS = {
  primary: "#8B1E4F",
  primaryDark: "#4a1225",
  gold: "#D4AF37",
};

// Counts from 0 to `end` over `duration`ms, only once `trigger` becomes true.
function useCountUp(end, duration, trigger) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!trigger || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(end * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, end, duration]);

  return value;
}

const StatCard = ({ Icon, value, suffix, label, delayMs, isVisible }) => {
  const count = useCountUp(value, 1800, isVisible);

  return (
    <div
      className="flex flex-col items-center text-center px-4 transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delayMs}ms`,
      }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
        style={{ background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.35)" }}
      >
        <Icon className="w-6 h-6" style={{ color: COLORS.gold }} strokeWidth={1.7} />
      </div>
      <p
        className="leading-none mb-2"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 44px)", color: "#fff" }}
      >
        {count}
        <span style={{ color: COLORS.gold }}>{suffix}</span>
      </p>
      <p className="uppercase tracking-[0.14em] text-pink-100" style={{ fontSize: "11px", opacity: 0.85 }}>
        {label}
      </p>
    </div>
  );
};

export default function StatsSection({ stats = DEFAULT_STATS, colors = COLORS }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // animate once only
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-20"
      style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, #6b1a33 55%, ${colors.primaryDark} 100%)` }}
    >
      {/* Ambient background glows, consistent with the CTA section style */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 -left-16 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, white, transparent)" }}
        />
        <div
          className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, white, transparent)" }}
        />
      </div>

      {/* Thin gold rule top + bottom, matching the site's divider language */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(to right, transparent, ${colors.gold}, transparent)` }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(to right, transparent, ${colors.gold}, transparent)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} delayMs={i * 120} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
