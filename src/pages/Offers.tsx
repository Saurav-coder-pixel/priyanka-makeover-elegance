import { Link } from "react-router-dom";
import { Sparkles, CalendarDays, Crown } from "lucide-react";
import { offersData, categories } from "@/data/offers";

const Offers = () => {
  return (
    <div className="min-h-screen bg-[var(--pm-cream)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 pm-bg-plum overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--pm-rose-deep)] rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--pm-gold)] rounded-full opacity-10 blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[var(--pm-gold-soft)] mb-6 text-sm uppercase tracking-widest font-medium">
              <Sparkles size={14} />
              <span>Limited Time Specials</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 leading-tight">
              Exclusive Festive & <br className="hidden md:block" /> Wedding Offers
            </h1>
            
            <p className="text-lg text-[var(--pm-blush)] max-w-2xl mx-auto font-light leading-relaxed">
              Celebrate your special moments with our exclusive beauty and salon offers. Carefully curated packages designed to bring out your ultimate radiance.
            </p>
          </div>
        </div>
      </section>

      {/* Offers List Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {categories.map((category) => {
            const categoryOffers = offersData.filter((offer) => offer.category === category);
            
            if (categoryOffers.length === 0) return null;
            
            return (
              <div key={category} className="mb-20 last:mb-0">
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-3xl font-serif text-[var(--pm-ink)]">{category}</h2>
                  <div className="flex-1 h-px bg-[var(--pm-line)]"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                  {categoryOffers.map((offer) => (
                    <div 
                      key={offer.id} 
                      className="group relative rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-white/20 flex flex-col h-full min-h-[820px] transition-all duration-700 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                    >
                      {/* FULL Background Image Area */}
                      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
                        <img 
                          src={offer.image} 
                          alt={offer.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                        />
                        {/* Elegant Dark Gradients for Text Readability - completely transparent in center if possible */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent h-[40%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent mt-auto h-[70%]"></div>
                      </div>
                      
                      {/* Foreground Content */}
                      <div className="relative z-10 flex flex-col h-full p-8 sm:p-10">
                        
                        {/* Featured Badge */}
                        {offer.featured && (
                          <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[0.65rem] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm z-20">
                            <Crown size={14} className="text-[#dfbe8c]" /> FEATURED
                          </div>
                        )}

                        {/* Text Overlay Section (Top) */}
                        <div className="mb-6 max-w-[85%] pt-1">
                          <div className="text-white/80 text-[0.65rem] tracking-[0.3em] uppercase mb-2 flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-white/40"></span>
                            PREMIUM
                            <span className="w-4 h-[1px] bg-white/40"></span>
                          </div>
                          
                          <h3 
                            className="font-serif text-4xl sm:text-[3rem] leading-[1.05] text-white mb-2 drop-shadow-md" 
                            dangerouslySetInnerHTML={{ __html: offer.title.replace(' ', '<br/>') }}
                          ></h3>
                          
                          <div className="text-[#dfbe8c] text-[0.65rem] tracking-[0.25em] uppercase mb-4 font-bold drop-shadow-sm">
                            {offer.category}
                          </div>
                          
                          <p className="font-serif text-white/90 text-lg sm:text-xl leading-snug drop-shadow-sm font-light max-w-[90%]">
                            {offer.description}
                          </p>
                        </div>

                        {/* Services List (Transparent Glass) */}
                        {offer.services && offer.services.length > 0 ? (
                          <div className="mt-auto mb-8 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                            <ul className="space-y-4">
                              {offer.services.map((service, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                  <Sparkles size={18} strokeWidth={1.5} className="text-[#dfbe8c] shrink-0 mt-0.5" />
                                  <div>
                                    <h4 className="font-serif text-[1.15rem] text-white leading-tight mb-0.5 drop-shadow-sm">{service.title}</h4>
                                    <p className="text-[0.8rem] text-white/70 leading-tight font-light">{service.description}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="mt-auto mb-8"></div>
                        )}

                        {/* Price & CTA Section */}
                        <div>
                          {/* Price Row */}
                          <div className="flex items-end justify-between mb-6">
                            {offer.discountedPrice !== undefined ? (
                              offer.startingFrom ? (
                                <div className="flex flex-col">
                                  <span className="text-white/70 text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-1">Starting From</span>
                                  <div className="flex items-center gap-2">
                                    <span className="font-serif text-4xl sm:text-[2.75rem] text-white font-semibold leading-none drop-shadow-md">
                                      ₹{offer.discountedPrice.toLocaleString('en-IN')}
                                    </span>
                                  </div>
                                  {offer.pricingNote && (
                                    <span className="text-[0.65rem] text-white/60 mt-2 uppercase tracking-widest">{offer.pricingNote}</span>
                                  )}
                                </div>
                              ) : (
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-4">
                                    <span className="font-serif text-4xl sm:text-[2.75rem] text-white font-semibold leading-none drop-shadow-md">
                                      ₹{offer.discountedPrice.toLocaleString('en-IN')}
                                    </span>
                                    {offer.originalPrice && (
                                      <span className="text-white/50 line-through text-lg mt-1">
                                        ₹{offer.originalPrice.toLocaleString('en-IN')}
                                      </span>
                                    )}
                                  </div>
                                  {offer.discountPercentage && (
                                    <div className="mt-2">
                                      <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[0.65rem] font-bold px-3 py-1 rounded-full whitespace-nowrap tracking-wider">
                                        {offer.discountPercentage}% OFF
                                      </span>
                                    </div>
                                  )}
                                </div>
                              )
                            ) : (
                              <div className="flex flex-col mt-4">
                                {offer.pricingNote && (
                                  <span className="font-serif text-[1.4rem] text-white/90 leading-snug drop-shadow-sm">{offer.pricingNote}</span>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Book Now Button */}
                          <Link 
                            to="/contact#book-appointment" 
                            className="w-full bg-white/10 backdrop-blur-md border border-white/50 hover:bg-white/20 text-white rounded-full py-4 sm:py-5 flex items-center justify-center gap-3 tracking-[0.25em] text-[0.8rem] font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-5"
                            style={{ textDecoration: "none" }}
                          >
                            BOOK NOW <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </Link>

                          {/* Footer: Validity */}
                          <div className="flex justify-center items-center">
                            <div className="flex items-center gap-2 text-[0.65rem] text-white/60 uppercase tracking-[0.2em] font-medium">
                              <CalendarDays size={14} className="opacity-70" /> {offer.validity}
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-20 pm-bg-blush border-t border-[var(--pm-line-soft)]">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--pm-ink)] mb-4">
            Need a custom beauty package?
          </h2>
          <p className="text-[var(--pm-mauve)] mb-8 text-lg">
            We can create personalized beauty and bridal packages tailored entirely to your needs and budget.
          </p>
          <Link 
            to="/contact"
            className="pm-btn pm-btn-primary"
            style={{ textDecoration: "none" }}
          >
            Contact Us for Custom Packages
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Offers;
