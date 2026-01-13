import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Heart, Scissors, Leaf, Hand, Footprints, Home } from "lucide-react";

const servicesData = [
  {
    id: "bridal",
    icon: Sparkles,
    title: "Bridal & Party Makeup",
    description: "Look stunning on your special day with our premium makeup services",
    services: [
      { name: "Party Makeup", price: "₹1,099" },
      { name: "HD Party Makeup", price: "₹2,099" },
      { name: "Engagement Makeup (Normal)", price: "₹2,100" },
      { name: "Engagement Makeup (HD)", price: "₹3,100" },
      { name: "Engagement Makeup (Airbrush)", price: "₹5,100" },
      { name: "Bridal Package (Basic)", price: "₹11,000" },
      { name: "Bridal Package (Premium)", price: "₹15,000" },
      { name: "Bridal Package (HD)", price: "₹21,000" },
      { name: "Bridal Package (Airbrush)", price: "₹25,000" },
    ],
  },
  {
    id: "facial",
    icon: Heart,
    title: "Facial & Skin Care",
    description: "Rejuvenate your skin with our range of premium facials",
    services: [
      { name: "Cleanup", price: "₹149" },
      { name: "Fruit Facial", price: "₹249" },
      { name: "Mix Fruit Facial", price: "₹349" },
      { name: "De-Tan Facial", price: "₹399" },
      { name: "Wine Facial", price: "₹449" },
      { name: "Whitening Facial", price: "₹499" },
      { name: "Oxy Bleach Facial", price: "₹549" },
      { name: "Insta Glow Facial", price: "₹599" },
      { name: "Gold Facial", price: "₹799" },
      { name: "Pearl Facial", price: "₹899" },
      { name: "Diamond Facial", price: "₹999" },
      { name: "Silver Facial", price: "₹1,199" },
      { name: "O3+ Glow Facial", price: "₹1,499" },
      { name: "VLCC Facial", price: "₹1,299" },
      { name: "Lotus Facial", price: "₹1,299" },
      { name: "Hydra Facial", price: "₹1,999" },
      { name: "Korean Glass Facial", price: "₹2,499" },
      { name: "Medi Facial", price: "₹2,499" },
    ],
  },
  {
    id: "hair",
    icon: Scissors,
    title: "Hair Cut & Treatment",
    description: "Complete hair care from trendy cuts to premium treatments",
    services: [
      { name: "Front Trim", price: "₹49" },
      { name: "U/V Cut", price: "₹99" },
      { name: "Hair Cut", price: "₹149" },
      { name: "Layer Cut", price: "₹199" },
      { name: "Baby Cut", price: "₹99" },
      { name: "Hair Coloring (Root Touch-up)", price: "₹299" },
      { name: "Hair Coloring (Global)", price: "₹999+" },
      { name: "Highlights/Streaks", price: "₹499+" },
      { name: "Hair Spa (Normal)", price: "₹499" },
      { name: "Hair Spa (Premium)", price: "₹799" },
      { name: "Hair Spa (L'Oreal)", price: "₹999" },
      { name: "Keratin Treatment", price: "₹2,999+" },
      { name: "Smoothening", price: "₹2,499+" },
      { name: "Hair Botox", price: "₹3,499+" },
      { name: "Nanoplastia", price: "₹4,999+" },
    ],
  },
  {
    id: "waxing",
    icon: Leaf,
    title: "Waxing & Hair Removal",
    description: "Smooth skin with our premium waxing services",
    services: [
      { name: "Upper Lips", price: "₹29" },
      { name: "Chin", price: "₹29" },
      { name: "Forehead", price: "₹29" },
      { name: "Side Locks", price: "₹49" },
      { name: "Full Face Wax", price: "₹149" },
      { name: "Underarms (Normal)", price: "₹49" },
      { name: "Underarms (Chocolate/Rica)", price: "₹99" },
      { name: "Half Arms (Normal)", price: "₹99" },
      { name: "Full Arms (Normal)", price: "₹149" },
      { name: "Full Arms (Chocolate)", price: "₹249" },
      { name: "Full Arms (Rica/Italian)", price: "₹349" },
      { name: "Half Legs (Normal)", price: "₹149" },
      { name: "Full Legs (Normal)", price: "₹249" },
      { name: "Full Legs (Chocolate)", price: "₹399" },
      { name: "Full Legs (Rica/Italian)", price: "₹499" },
      { name: "Full Body Wax (Normal)", price: "₹899" },
      { name: "Full Body Wax (Chocolate)", price: "₹1,299" },
      { name: "Full Body Wax (Rica)", price: "₹1,799" },
    ],
  },
  {
    id: "nails",
    icon: Hand,
    title: "Nail Services",
    description: "Professional nail care and beautiful nail art",
    services: [
      { name: "Nail Cutting & Filing", price: "₹49" },
      { name: "Nail Paint", price: "₹99" },
      { name: "Gel Nail Paint", price: "₹199" },
      { name: "Nail Art (per nail)", price: "₹50" },
      { name: "Nail Extension (Full Set)", price: "₹999" },
      { name: "Nail Extension Removal", price: "₹199" },
    ],
  },
  {
    id: "pedicure",
    icon: Footprints,
    title: "Manicure & Pedicure",
    description: "Complete hand and foot care services",
    services: [
      { name: "Manicure (Normal)", price: "₹149" },
      { name: "Manicure (Pro)", price: "₹299" },
      { name: "Manicure (Crystal Spa)", price: "₹399" },
      { name: "Pedicure (Normal)", price: "₹249" },
      { name: "Pedicure (Pro)", price: "₹399" },
      { name: "Pedicure (Crystal Spa)", price: "₹549" },
      { name: "Mani + Pedi Combo (Normal)", price: "₹349" },
      { name: "Mani + Pedi Combo (Pro)", price: "₹599" },
    ],
  },
];

const Services = () => {
  const whatsappNumber = "919650061103";

  const handleBookNow = (serviceName: string) => {
    const message = encodeURIComponent(`Hi! I would like to book ${serviceName} at Priyanka Makeover.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our comprehensive range of beauty services designed to enhance your natural beauty
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesData.map((category) => (
              <Card key={category.id} className="overflow-hidden">
                <CardHeader className="bg-secondary/30">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="services" className="border-none">
                      <AccordionTrigger className="text-sm font-medium hover:no-underline">
                        View All Services ({category.services.length})
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 pt-2">
                          {category.services.map((service, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                            >
                              <span className="text-sm text-foreground">{service.name}</span>
                              <span className="text-sm font-semibold text-primary">{service.price}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Button
                    className="w-full mt-4"
                    onClick={() => handleBookNow(category.title)}
                  >
                    Book {category.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
            {/* Custom Service Card */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-secondary/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Customizable Service</CardTitle>
                    <CardDescription>Design your own beauty package</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Can't find the perfect package? Mix and match from our services to create a personalized experience.
                </p>
                <Button
                  className="w-full mt-4"
                  onClick={() => handleBookNow("Custom Package")}
                >
                  Book Custom Package
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-secondary/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Home Services</CardTitle>
                    <CardDescription>On-site services for large bridal or group bookings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  We provide professional home services for large bridal parties or group bookings. Our team will arrive with all necessary equipment to deliver salon-quality services at your venue.
                </p>
                <p className="text-xs italic text-muted-foreground mb-4">
                  Terms: Home services are available for large bridal or group bookings.
                </p>
                <Button
                  className="w-full mt-4"
                  onClick={() => handleBookNow("Home Services")}
                >
                  Book Home Service
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Contact us for custom packages or any service not listed here. We're happy to help!
          </p>
          <Button asChild size="lg" variant="secondary">
            <a
              href="https://wa.me/919650061103?text=Hi!%20I%20have%20a%20query%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
