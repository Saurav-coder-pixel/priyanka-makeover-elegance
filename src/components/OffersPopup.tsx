import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, CalendarDays, Sparkles, Phone, MessageCircle } from "lucide-react";
import { offersData, Offer } from "@/data/offers";

const OffersPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const navType = navEntries[0]?.type ?? "navigate";
    const isFreshPageLoad = navType === "navigate" || navType === "reload";
    const wasAlreadyShownThisSession = sessionStorage.getItem("seasonalOfferPopupShown") === "true";

    if (!isFreshPageLoad) {
      setShouldRender(false);
      setIsVisible(false);
      return;
    }

    if (navType === "navigate" && wasAlreadyShownThisSession) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * offersData.length);
    setSelectedOffer(offersData[randomIndex]);

    const timer = setTimeout(() => {
      sessionStorage.setItem("seasonalOfferPopupShown", "true");
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 50);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    setTimeout(() => setShouldRender(false), 400);
  };

  if (!shouldRender || !selectedOffer) return null;

  return (
    <div 
      className={`fixed inset-0 z-[2000] flex items-center justify-center p-2 md:p-4 transition-all duration-400 ease-in-out ${
        isVisible ? "opacity-100 backdrop-blur-sm bg-black/50" : "opacity-0 backdrop-blur-none bg-black/0"
      }`}
      onClick={closePopup}
    >
      {/* Popup Container */}
      <div 
        className={`relative w-[90%] md:w-full max-w-[420px] max-h-[calc(100dvh-1rem)] md:max-h-[90dvh] overflow-y-auto bg-[#FCFAF8] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-400 ease-out border border-[#eae0d5] flex flex-col ${
          isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-8 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 z-30 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-colors"
          aria-label="Close offers popup"
        >
          <X size={16} />
        </button>

        {/* Top Image Area */}
        <div className="relative h-[120px] md:h-[220px] w-full shrink-0 overflow-hidden z-0">
          <img 
            src={selectedOffer.image} 
            alt={selectedOffer.title} 
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient for smooth blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF8] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 px-5 pb-5 md:px-8 md:pb-8 -mt-5 md:-mt-6 flex flex-col">
          {/* Badge & Category */}
          <div className="flex justify-center mb-2">
            <span className="text-[#2a1d25] bg-[#dfbe8c] text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full shadow-sm">
              {selectedOffer.category}
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl text-[#2a1d25] text-center leading-[1.1] mb-1 md:mb-2 mt-1">
            {selectedOffer.title}
          </h3>
          
          <div className="w-10 h-[1.5px] bg-[#dfbe8c] mx-auto mb-2 md:mb-3"></div>
          
          <p className="font-serif text-[#7c6270] italic text-[0.9rem] md:text-[1.05rem] text-center leading-snug mb-3 md:mb-5 px-2">
            "{selectedOffer.description}"
          </p>

          {/* Highlight Service */}
          <div className="bg-white rounded-xl p-2.5 md:p-3 mb-3 md:mb-6 shadow-sm border border-[#eae0d5]/50 flex items-center justify-center gap-3">
            <Sparkles size={16} className="text-[#b57a70]" />
            <span className="text-[0.8rem] text-[#2a1d25] uppercase tracking-wider font-medium">
              {selectedOffer.services[0]?.title || "Premium Package"}
            </span>
            <Sparkles size={16} className="text-[#b57a70]" />
          </div>

          {/* Price Area */}
          <div className="text-center mb-3 md:mb-6">
            {selectedOffer.discountedPrice !== undefined ? (
              selectedOffer.startingFrom ? (
                <div className="flex flex-col items-center">
                  <span className="text-[#9c2937] text-[0.65rem] font-bold tracking-widest uppercase mb-1 opacity-80">Starting From</span>
                  <span className="font-serif text-[2rem] md:text-[2.5rem] text-[#9c2937] font-semibold leading-none">
                    ₹{selectedOffer.discountedPrice.toLocaleString('en-IN')}
                  </span>
                  {selectedOffer.pricingNote && (
                    <span className="text-[0.65rem] text-gray-500 mt-2 uppercase tracking-wider block">{selectedOffer.pricingNote}</span>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center gap-3">
                    <span className="font-serif text-[2rem] md:text-[2.5rem] text-[#9c2937] font-semibold leading-none">
                      ₹{selectedOffer.discountedPrice.toLocaleString('en-IN')}
                    </span>
                    {selectedOffer.originalPrice && (
                      <span className="text-gray-400 line-through text-lg mt-1">
                        ₹{selectedOffer.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  {selectedOffer.discountPercentage && (
                    <span className="bg-[#f8e7e9] text-[#9c2937] text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider mt-2 inline-block">
                      {selectedOffer.discountPercentage}% OFF
                    </span>
                  )}
                </div>
              )
            ) : (
              <div className="flex flex-col items-center justify-center">
                {selectedOffer.pricingNote && (
                  <span className="font-serif text-[1.4rem] text-[#2a1d25] leading-snug">{selectedOffer.pricingNote}</span>
                )}
              </div>
            )}
          </div>

          {/* CTA */}
          {!showContactOptions ? (
            <div className="flex gap-3 mb-4">
              <button 
                onClick={() => setShowContactOptions(true)}
                className="flex-1 bg-[#1a1c1d] hover:bg-black text-white rounded-full py-3 md:py-4 flex items-center justify-center gap-3 tracking-[0.18em] text-[0.7rem] transition-all duration-300 shadow-md"
              >
                BOOK NOW <span className="transition-transform duration-300 hover:translate-x-1">→</span>
              </button>
              <Link
                to="/offers"
                onClick={closePopup}
                className="flex-1 border border-[#d9c8b6] bg-[#f5efe8] text-[#2a1d25] hover:bg-[#efe5db] rounded-full py-3 md:py-4 flex items-center justify-center gap-2 tracking-[0.18em] text-[0.7rem] transition-all duration-300 shadow-sm"
                style={{ textDecoration: "none" }}
              >
                MORE INFO
              </Link>
            </div>
          ) : (
            <div className="flex gap-3 mb-4">
              <a 
                href="tel:+919650061103"
                onClick={closePopup}
                className="flex-1 bg-[#1a1c1d] hover:bg-black text-white rounded-full py-3.5 flex items-center justify-center gap-2 tracking-widest text-[0.65rem] transition-all duration-300 shadow-md"
              >
                <Phone size={14} /> CALL
              </a>
              <a 
                href={`https://wa.me/919650061103?text=${encodeURIComponent(`Hi, I would like to book the ${selectedOffer.title} offer.`)}`}
                onClick={closePopup}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full py-3.5 flex items-center justify-center gap-2 tracking-widest text-[0.65rem] transition-all duration-300 shadow-md"
              >
                <MessageCircle size={14} /> WHATSAPP
              </a>
            </div>
          )}
          
          <div className="text-center text-[0.65rem] text-gray-400 uppercase tracking-widest font-medium flex items-center justify-center gap-1.5">
            <CalendarDays size={12} className="opacity-70" /> {selectedOffer.validity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPopup;
