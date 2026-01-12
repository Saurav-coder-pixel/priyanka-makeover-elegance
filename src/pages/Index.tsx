import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Scissors, Leaf } from "lucide-react";
import logo from "@/assets/logo.png";
import bridal1 from "@/assets/transformations/bridal-1.png";
import bridal2 from "@/assets/transformations/bridal-2.png";
import bridal3 from "@/assets/transformations/bridal-3.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-secondary via-background to-accent/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img
              src={logo}
              alt="Priyanka Makeover"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl border-4 border-primary/20"
            />
          </div>

          {/* Brand Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4 animate-fade-in">
            Priyanka Makeover
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light animate-fade-in">
            Enhancing Your Natural Beauty
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl animate-fade-in">
            Premium bridal makeup, skincare, hair treatments, and complete beauty services in Manesar, Gurugram. Your beauty is our passion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/contact#book-appointment">
                <Sparkles className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

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
      icon: Leaf,
      title: "Waxing & Nail Services",
      description: "Complete body care with premium waxing and professional nail services",
      priceTab: "waxing",
    },
  ];

  return (
    <section className="py-20 bg-background">
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
              to={`/prices?tab=${service.priceTab}`}
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

const BeforeAfterSection = () => {
  const transformations = [
    { id: 1, image: bridal1, title: "Beautiful Bride", service: "Bridal Makeup" },
    { id: 2, image: bridal2, title: "Beautiful Bride", service: "Bridal Makeup" },
    { id: 3, image: bridal3, title: "Beautiful Bride", service: "Bridal Makeup" },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Transformations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the amazing transformations we create for our beautiful clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-muted group">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium">{item.title}</p>
                <p className="text-sm opacity-80">{item.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild>
            <Link to="/gallery">View Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Komal Yadav",
      service: "Bridal Makeup",
      text: "Very professional service and i had a great experience",
      rating: 5,
    },
    {
      name: "Neha Sharma",
      service: "Hair Treatment",
      text: "Got Hair Smoothing treatment done here. Professional service and amazing results. My hair has never looked better!",
      rating: 5,
    },
    {
      name: "Mahi Chauhan",
      service: "Facial Treatment",
      text: "The sevice is very nice and staff behaviour is too good.. I had a great experience with the facial treatment. My skin feels rejuvenated!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-2xl border border-border"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Ready to Enhance Your Beauty?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Book your appointment today and let us bring out your natural beauty with our premium services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-base">
            <a
              href="https://wa.me/919650061103?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Priyanka%20Makeover."
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base border-primary-foreground/30 bg-transparent hover:bg-primary-foreground/10">
            <a href="tel:9650061103">
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      <HeroSection />
      <ServiceHighlights />
      <BeforeAfterSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Index;
