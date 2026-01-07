import { Phone, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BookingModalProps {
  children: React.ReactNode;
}

const BookingModal = ({ children }: BookingModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-serif text-primary">
            Book Your Appointment
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <p className="text-center text-muted-foreground text-sm">
            Choose how you'd like to reach us
          </p>
          <Button
            asChild
            size="lg"
            className="w-full gap-3 text-base"
          >
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
              href="https://wa.me//+919650061103"
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
