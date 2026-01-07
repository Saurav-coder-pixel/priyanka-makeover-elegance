import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const phoneNumber = "919650061103";
  const whatsappMessage = encodeURIComponent("Hi! I would like to book an appointment at Priyanka Makeover.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <a
        href="tel:9650061103"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919650061103"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
