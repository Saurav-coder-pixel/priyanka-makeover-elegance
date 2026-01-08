import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BookingModalProps {
  children?: React.ReactNode;
  autoOpen?: boolean;
}

const services = [
  { id: "bridal", label: "Bridal Makeup" },
  { id: "party", label: "Party Makeup" },
  { id: "engagement", label: "Engagement Makeup" },
  { id: "facial", label: "Facial" },
  { id: "cleanup", label: "Cleanup" },
  { id: "detan", label: "D-Tan" },
  { id: "bleach", label: "Bleach" },
  { id: "haircut", label: "Hair Cut" },
  { id: "haircolor", label: "Hair Colouring" },
  { id: "hairspa", label: "Hair Spa" },
  { id: "keratin", label: "Keratin Treatment" },
  { id: "smoothening", label: "Smoothening" },
  { id: "waxing", label: "Waxing" },
  { id: "manicure", label: "Manicure" },
  { id: "pedicure", label: "Pedicure" },
  { id: "nailart", label: "Nail Art" },
  { id: "threading", label: "Threading" },
];

const BookingModal = ({ children, autoOpen = false }: BookingModalProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (autoOpen) {
      const hasSeenPopup = sessionStorage.getItem("bookingPopupSeen");
      if (!hasSeenPopup) {
        const timer = setTimeout(() => {
          setOpen(true);
          sessionStorage.setItem("bookingPopupSeen", "true");
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [autoOpen]);

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const getSelectedLabels = () => {
    return services
      .filter((s) => selectedServices.includes(s.id))
      .map((s) => s.label)
      .join(", ");
  };

  const getWhatsAppMessage = () => {
    const selectedLabels = getSelectedLabels();
    const message = selectedLabels
      ? `Hi! I would like to book an appointment at Priyanka Makeover for the following services: ${selectedLabels}`
      : "Hi! I would like to book an appointment at Priyanka Makeover.";
    return encodeURIComponent(message);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-serif text-primary">
            Book Your Appointment
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <p className="text-center text-muted-foreground text-sm">
            Select the services you're interested in
          </p>
          
          <ScrollArea className="h-48 rounded-lg border border-border p-4">
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={service.id}
                    checked={selectedServices.includes(service.id)}
                    onCheckedChange={() => toggleService(service.id)}
                  />
                  <Label
                    htmlFor={service.id}
                    className="text-sm cursor-pointer"
                  >
                    {service.label}
                  </Label>
                </div>
              ))}
            </div>
          </ScrollArea>

          {selectedServices.length > 0 && (
            <p className="text-xs text-muted-foreground text-center">
              Selected: {getSelectedLabels()}
            </p>
          )}

          <p className="text-center text-muted-foreground text-sm mt-2">
            Choose how you'd like to reach us
          </p>
          <Button asChild size="lg" className="w-full gap-3 text-base">
            <a href="tel:9650061103">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full gap-3 text-base border-primary/30 hover:bg-primary/5"
          >
            <a
              href={`https://wa.me/919650061103?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 text-green-600" />
              WhatsApp Booking
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
