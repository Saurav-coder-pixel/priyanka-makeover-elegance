import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Heart, Scissors, Hand, Footprints } from "lucide-react";
import bridal1 from "@/assets/gallery/bridal-1.png";
import bridal2 from "@/assets/gallery/bridal-2.png";
import partyMakeup from "@/assets/gallery/party-makeup.png";
import facialTreatment from "@/assets/gallery/facial-treatment.png";
import hairStyling from "@/assets/gallery/hair-styling.png";
import hairTreatment from "@/assets/gallery/hair-treatment.png";
import hairColor from "@/assets/gallery/hair-color.png";
import nailArt from "@/assets/gallery/nail-art.png";
import manicure from "@/assets/gallery/manicure.png";
import engagementMakeup from "@/assets/gallery/engagement-makeup.png";
import goldFacial from "@/assets/gallery/gold-facial.png";
import pedicure from "@/assets/gallery/pedicure.png";
import hairSmoothing from "@/assets/gallery/hair-smoothing.png";
import waxing from "@/assets/gallery/waxing.png";

const galleryData = {
  all: { title: "All", icon: Sparkles },
  bridal: { title: "Bridal", icon: Sparkles },
  facial: { title: "Facials", icon: Heart },
  hair: { title: "Hair", icon: Scissors },
  nails: { title: "Nails", icon: Hand },
  body: { title: "Body Care", icon: Footprints },
};

const galleryImages = [
  { id: 1, category: "bridal", title: "Bridal Makeup 1", image: bridal1 },
  { id: 2, category: "bridal", title: "Bridal Makeup 2", image: bridal2 },
  { id: 3, category: "bridal", title: "Party Makeup", image: partyMakeup },
  { id: 4, category: "facial", title: "Facial Treatment", image: facialTreatment },
  { id: 5, category: "hair", title: "Hair Styling", image: hairStyling },
  { id: 6, category: "hair", title: "Hair Treatment", image: hairTreatment },
  { id: 7, category: "hair", title: "Hair Color", image: hairColor },
  { id: 8, category: "nails", title: "Nail Art", image: nailArt },
  { id: 9, category: "nails", title: "Manicure", image: manicure },
  { id: 10, category: "bridal", title: "Engagement Makeup", image: engagementMakeup },
  { id: 11, category: "facial", title: "Gold Facial", image: goldFacial },
  { id: 12, category: "nails", title: "Pedicure", image: pedicure },
  { id: 13, category: "hair", title: "Hair Smoothing", image: hairSmoothing },
  { id: 14, category: "body", title: "Waxing", image: waxing },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const filteredImages = activeTab === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Our Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our work and see the beautiful transformations we create
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-10">
              {Object.entries(galleryData).map(([key, value]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-5 py-2.5 rounded-full border border-border flex items-center gap-2"
                >
                  <value.icon className="h-4 w-4" />
                  {value.title}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((image) => (
                  <Dialog key={image.id}>
                    <DialogTrigger asChild>
                      <div
                        className="group relative aspect-square rounded-2xl overflow-hidden bg-muted cursor-pointer"
                        onClick={() => setSelectedImage(image.id)}
                      >
                        {/* Image or Placeholder */}
                        {image.image ? (
                          <img 
                            src={image.image} 
                            alt={image.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
                            <div className="text-center p-4">
                              <Sparkles className="h-8 w-8 mx-auto mb-2 text-primary/30" />
                              <p className="text-sm text-muted-foreground">{image.title}</p>
                            </div>
                          </div>
                        )}

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-primary-foreground font-medium">{image.title}</p>
                          <p className="text-primary-foreground/70 text-sm capitalize">{image.category}</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl p-0 overflow-hidden">
                      {image.image ? (
                        <img 
                          src={image.image} 
                          alt={image.title}
                          className="w-full h-auto max-h-[80vh] object-contain"
                        />
                      ) : (
                        <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                          <div className="text-center p-8">
                            <Sparkles className="h-16 w-16 mx-auto mb-4 text-primary/30" />
                            <h3 className="text-xl font-semibold text-foreground mb-2">{image.title}</h3>
                            <p className="text-muted-foreground capitalize">{image.category}</p>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Info */}
          <div className="mt-12 text-center">
            <div className="bg-secondary/50 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                📸 These are placeholder images. Follow us on Instagram{' '}
                <a 
                  href="https://www.instagram.com/priyanka__makeover____/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  @priyanka__makeover____
                </a>
                {' and '}
                <a 
                  href="https://instagram.com/priyanka_beauty_parl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  @priyanka_beauty_parl
                </a> 
                {' '}
                for our latest work!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;