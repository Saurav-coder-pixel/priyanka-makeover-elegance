import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Priyanka Makeover | Beauty Parlour & Bridal Makeup in Manesar",
    description: "Priyanka Makeover is a premium beauty parlour in Manesar, Gurugram, offering bridal makeup, facials, hair treatments, waxing, nail care and complete beauty services.",
  },
  "/about": {
    title: "About Priyanka Makeover | Beauty Salon in Manesar",
    description: "Meet Priyanka Makeover, a beauty salon in Manesar, Gurugram, offering personalized makeup, skincare and hair services.",
  },
  "/services": {
    title: "Beauty Services in Manesar | Priyanka Makeover",
    description: "Explore bridal and party makeup, facials, hair styling, hair treatments, waxing, manicure and pedicure services at Priyanka Makeover in Manesar.",
  },
  "/prices": {
    title: "Beauty Service Prices | Priyanka Makeover Manesar",
    description: "View pricing for makeup, facials, hair care, waxing and nail services at Priyanka Makeover, Sector 1B, Manesar.",
  },
  "/gallery": {
    title: "Beauty & Bridal Makeup Gallery | Priyanka Makeover Manesar",
    description: "Browse bridal makeup, facials, hair styling and nail work from Priyanka Makeover in Manesar, Gurugram.",
  },
  "/offers": {
    title: "Beauty & Bridal Offers | Priyanka Makeover Manesar",
    description: "See current beauty and bridal service offers from Priyanka Makeover in Manesar, Gurugram.",
  },
  "/contact": {
    title: "Contact Priyanka Makeover | Manesar Salon Location & Booking",
    description: "Contact Priyanka Makeover to book an appointment or get directions to Computer Gali, near NSG Campus, Sector 1B, Manesar, Gurugram.",
  },
  "/404": {
    title: "Page Not Found | Priyanka Makeover",
    description: "The page you requested could not be found on the Priyanka Makeover website.",
  },
};

const setMetaContent = (selector: string, attribute: string, key: string, content: string) => {
  const matchingTags = document.head.querySelectorAll<HTMLMetaElement>(selector);
  const tag = matchingTags[0] ?? document.head.appendChild(document.createElement("meta"));
  tag.setAttribute(attribute, key);
  tag.content = content;
  matchingTags.forEach((duplicate) => duplicate !== tag && duplicate.remove());
};

const PageMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    const metadata = pageMetadata[normalizedPath] ?? pageMetadata["/404"];
    const canonicalPath = pageMetadata[normalizedPath] ? normalizedPath : "/404";
    const canonicalUrl = `https://www.priyankamakeover.in${canonicalPath === "/" ? "/" : canonicalPath}`;

    document.title = metadata.title;
    setMetaContent('meta[name="description"]', "name", "description", metadata.description);
    setMetaContent('meta[property="og:title"]', "property", "og:title", metadata.title);
    setMetaContent('meta[property="og:description"]', "property", "og:description", metadata.description);
    setMetaContent('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', "name", "twitter:title", metadata.title);
    setMetaContent('meta[name="twitter:description"]', "name", "twitter:description", metadata.description);

    const canonicalTags = document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]');
    const canonicalTag = canonicalTags[0] ?? document.head.appendChild(document.createElement("link"));
    canonicalTag.rel = "canonical";
    canonicalTag.href = canonicalUrl;
    canonicalTags.forEach((duplicate) => duplicate !== canonicalTag && duplicate.remove());
  }, [pathname]);

  return null;
};

export default PageMetadata;