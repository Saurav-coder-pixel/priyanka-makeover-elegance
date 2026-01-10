import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    services: [] as string[],
    date: "",
    time: "",
  });

  const services = [
    "Bridal Makeup",
    "Party Makeup",
    "Facial Treatment",
    "Hair Cut",
    "Hair Treatment",
    "Waxing",
    "Manicure & Pedicure",
    "Other",
  ];

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedServices = formData.services.length > 0 
      ? formData.services.join(", ") 
      : "Not specified";
    
    const message = `Hi! I would like to book an appointment at Priyanka Makeover.

Name: ${formData.name}
Phone: ${formData.phone}
Services: ${selectedServices}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Please confirm my booking. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919650061103?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Book your appointment or visit us at our salon in Manesar, Gurugram
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  We'd love to hear from you! Whether you want to book an appointment or have a question about our services, feel free to reach out.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:9650061103" className="text-muted-foreground hover:text-primary transition-colors block">
                        +91 96500 61103
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <a href="https://maps.app.goo.gl/Dp7QxtXZ5L3ZULaJA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        Priyanka Makeover, Sector 1B, Manesar, Gurugram
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Hours */}
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Sunday<br />
                        10:00 AM - 8:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Instagram */}
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
                      <a
                        href="https://www.instagram.com/priyanka__makeover____/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        @priyanka__makeover____
                      </a>
                      <a
                        href="https://instagram.com/priyanka_beauty_parl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        @priyanka_beauty_parl
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Book an Appointment</CardTitle>
                  <CardDescription>
                    Fill in your details and we'll confirm your booking via WhatsApp
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Select Services</Label>
                      <ScrollArea className="h-40 rounded-lg border border-border p-3 bg-background">
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((service) => (
                            <div key={service} className="flex items-center space-x-2">
                              <Checkbox
                                id={`contact-${service}`}
                                checked={formData.services.includes(service)}
                                onCheckedChange={() => toggleService(service)}
                              />
                              <Label
                                htmlFor={`contact-${service}`}
                                className="text-sm cursor-pointer font-normal"
                              >
                                {service}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                      {formData.services.length > 0 && (
                        <p className="text-xs text-muted-foreground">
                          Selected: {formData.services.join(", ")}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time</Label>
                        <Input
                          id="time"
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Book via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" className="flex-1">
                  <a href="tel:9650061103">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button asChild className="flex-1 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)]">
                  <a
                    href="https://wa.me/919650061103?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salon Gallery Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
              Our Salon
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a glimpse of our beautiful salon and the amazing transformations we create
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/93295637-2ead-4712-9c98-4f5ec69b3cbb.png" 
                alt="Salon interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="/salon/salon-2.jpeg" 
                alt="Bridal makeup" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="/salon/salon-3.jpeg" 
                alt="Party makeup" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="/salon/salon-4.jpeg" 
                alt="Hair styling" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden border border-border relative">
            <a
              href="https://maps.app.goo.gl/iXNcSGwJK7DcQ6VA8"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 left-3 z-10 text-sm text-primary hover:text-primary/80 hover:underline bg-background/90 px-2 py-1 rounded"
            >
              View larger map
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.1!2d76.9348!3d28.3620!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22fdd8a3c74f%3A0x1e2c3d4e5f6a7b8c!2sPriyanka%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1704672000000!5m2!1sen!2sin&q=Priyanka+Makeover,+Sector+1B,+Manesar,+Gurugram"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Priyanka Makeover Location"
              className="w-full"
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-muted-foreground mb-3">
              Priyanka Makeover, Sector 1B, Manesar, Gurugram
            </p>
            <Button asChild variant="outline">
              <a
                href="https://maps.app.goo.gl/cFqYDMdj7WtN1rGw8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
