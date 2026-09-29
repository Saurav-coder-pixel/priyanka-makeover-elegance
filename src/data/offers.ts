import elegantImg from "@/assets/Elegent.png";
import signatureImg from "@/assets/Luxury.png";
import royalImg from "@/assets/Royal.png";
import hairImg from "@/assets/HairSmoothing.png";

export interface OfferService {
  title: string;
  description: string;
}

export interface Offer {
  id: string;
  title: string;
  category: string;
  description: string;
  originalPrice?: number;
  discountedPrice?: number;
  discountPercentage?: number;
  startingFrom?: boolean;
  pricingNote?: string;
  services: OfferService[];
  validity: string;
  featured: boolean;
  image: string;
}

export const categories = ["Bridal", "Hair"];

export const offersData: Offer[] = [
  {
    id: "classic-bridal-1",
    title: "Elegant Bridal Makeup",
    category: "Bridal",
    description: "A beautiful bridal makeup package designed for an elegant and timeless wedding look.",
    originalPrice: 15000,
    discountedPrice: 11000,
    discountPercentage: 26,
    services: [
      { title: "Bridal Makeup", description: "Flawless & timeless base" },
      { title: "Hairstyling", description: "Elegant traditional styles" },
      { title: "Draping", description: "Professional saree/lehenga draping" },
      { title: "Touch-up", description: "Final finishing touches" }
    ],
    validity: "Valid till Dec 31, 2026",
    featured: false,
    image: elegantImg,
  },
  {
    id: "premium-bridal-1",
    title: "Signature Bridal Makeup",
    category: "Bridal",
    description: "An elevated bridal beauty experience with a more detailed and sophisticated makeup and styling look.",
    originalPrice: 24000,
    discountedPrice: 18000,
    discountPercentage: 25,
    services: [
      { title: "Elegant Bridal", description: "All Services of Elegant Bridal" },
      { title: "HD Makeup", description: "Camera-ready flawless finish" },
      { title: "Jewelry Styling", description: "Elegant traditional styles" },
      { title: "Pre-Bridal Glow Facial", description: "Bright & radiant skin prep" },
    ],
    validity: "Valid till Dec 31, 2026",
    featured: false,
    image: signatureImg,
  },
  {
    id: "luxury-bridal-1",
    title: "Royal Bridal Makeup",
    category: "Bridal",
    description: "Our most luxurious bridal experience, created for brides who want an exceptionally polished and premium wedding look.",
    originalPrice: 28000,
    discountedPrice: 21000,
    discountPercentage: 25,
    services: [
      { title: "Signature Bridal", description: "All Services of Signature Bridal" },
      { title: "Advanced Skin Preparation", description: "Luxury hydrating treatments" },
      { title: "Complete Bridal Styling", description: "Head-to-toe perfection" },
      { title: "Mehndi ", description: "Where tradition meets modern elegance" },
    ],
    validity: "Valid till Dec 31, 2026",
    featured: true,
    image: royalImg,
  },
  {
    id: "hair-smoothening-1",
    title: "Hair Smoothening",
    category: "Hair",
    description: "Silky, smooth, and perfectly manageable hair for months.",
    pricingNote: "Price depends on hair length.",
    services: [],
    validity: "Limited Time Offer",
    featured: false,
    image: hairImg,
  }
];
