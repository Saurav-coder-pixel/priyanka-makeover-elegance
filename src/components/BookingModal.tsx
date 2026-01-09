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
import { Input } from "@/components/ui/input";
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

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
    const selectedLabels = getSelectedLabels() || "Not specified";
    const message = `Hi! I would like to book an appointment at Priyanka Makeover.

Name: ${formData.name || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Services: ${selectedLabels}
Preferred Date: ${formData.date || "Not specified"}
Preferred Time: ${formData.time || "Not specified"}

Please confirm my booking. Thank you!`;
    return encodeURIComponent(message);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-serif text-primary">
            Book Your Appointment
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="modal-name">Your Name</Label>
            <Input
              id="modal-name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="modal-phone">Phone Number</Label>
            <Input
              id="modal-phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          {/* Services Selection */}
          <div className="space-y-2">
            <Label>Select Services</Label>
            <ScrollArea className="h-40 rounded-lg border border-border p-4">
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
              <p className="text-xs text-muted-foreground">
                Selected: {getSelectedLabels()}
              </p>
            )}
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="modal-date">Preferred Date</Label>
              <Input
                id="modal-date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-time">Preferred Time</Label>
              <Input
                id="modal-time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>
          </div>

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
