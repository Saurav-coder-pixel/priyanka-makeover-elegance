import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const priceData = {
  facecare: {
    title: "Face Care",
    items: [
      { service: "Threading - Upper Lips", price: "₹15" },
      { service: "Threading - Chin", price: "₹10" },
      { service: "Threading - Forehead", price: "₹20" },
      { service: "Threading - Full Face", price: "₹60" },
      { service: "Bleach - Face", price: "₹99" },
      { service: "Bleach - Full Body", price: "₹499" },
      { service: "D-Tan - Face", price: "₹149" },
      { service: "D-Tan - Full Body", price: "₹599" },
    ],
  },
  facials: {
    title: "Facials & Skin Care",
    items: [
      { service: "Cleanup", price: "₹149" },
      { service: "Fruit Facial", price: "₹249" },
      { service: "Mix Fruit Facial", price: "₹349" },
      { service: "De-Tan Facial", price: "₹399" },
      { service: "Wine Facial", price: "₹449" },
      { service: "Whitening Facial", price: "₹499" },
      { service: "Oxy Bleach Facial", price: "₹549" },
      { service: "Insta Glow Facial", price: "₹599" },
      { service: "Gold Facial", price: "₹799" },
      { service: "Pearl Facial", price: "₹899" },
      { service: "Diamond Facial", price: "₹999" },
      { service: "Silver Facial", price: "₹1,199" },
      { service: "O3+ Glow Facial", price: "₹1,499" },
      { service: "VLCC Facial", price: "₹1,299" },
      { service: "Lotus Facial", price: "₹1,299" },
      { service: "Hydra Facial", price: "₹1,999" },
      { service: "Korean Glass Facial", price: "₹2,499" },
      { service: "Medi Facial", price: "₹2,499" },
    ],
  },
  haircut: {
    title: "Hair Cut",
    items: [
      { service: "Front Trim", price: "₹49" },
      { service: "U/V Cut", price: "₹99" },
      { service: "Hair Cut", price: "₹149" },
      { service: "Layer Cut", price: "₹199" },
      { service: "Step Cut", price: "₹249" },
      { service: "Feather Cut", price: "₹299" },
      { service: "Baby Cut", price: "₹99" },
    ],
  },
  haircolor: {
    title: "Hair Colouring",
    items: [
      { service: "Root Touch-up", price: "₹299" },
      { service: "Global Color (Short)", price: "₹999" },
      { service: "Global Color (Medium)", price: "₹1,499" },
      { service: "Global Color (Long)", price: "₹1,999" },
      { service: "Highlights/Streaks (per streak)", price: "₹99" },
      { service: "Highlights (Full Head)", price: "₹999+" },
      { service: "Fashion Colors", price: "₹1,999+" },
    ],
  },
  hairtreatment: {
    title: "Hair Treatment",
    items: [
      { service: "Hair Spa (Normal)", price: "₹499" },
      { service: "Hair Spa (Premium)", price: "₹799" },
      { service: "Hair Spa (L'Oreal)", price: "₹999" },
      { service: "Hair Spa (Schwarzkopf)", price: "₹1,199" },
      { service: "Keratin (Short)", price: "₹2,999" },
      { service: "Keratin (Medium)", price: "₹3,999" },
      { service: "Keratin (Long)", price: "₹4,999" },
      { service: "Smoothening (Short)", price: "₹2,499" },
      { service: "Smoothening (Medium)", price: "₹3,499" },
      { service: "Smoothening (Long)", price: "₹4,499" },
      { service: "Hair Botox", price: "₹3,499+" },
      { service: "Nanoplastia", price: "₹4,999+" },
    ],
  },
  waxing: {
    title: "Waxing",
    items: [
      { service: "Upper Lips", price: "₹29" },
      { service: "Chin", price: "₹29" },
      { service: "Forehead", price: "₹29" },
      { service: "Side Locks", price: "₹49" },
      { service: "Full Face Wax", price: "₹149" },
      { service: "Underarms (Normal)", price: "₹49" },
      { service: "Underarms (Chocolate/Rica)", price: "₹99" },
      { service: "Half Arms (Normal)", price: "₹99" },
      { service: "Full Arms (Normal)", price: "₹149" },
      { service: "Full Arms (Chocolate)", price: "₹249" },
      { service: "Full Arms (Rica/Italian)", price: "₹349" },
      { service: "Half Legs (Normal)", price: "₹149" },
      { service: "Full Legs (Normal)", price: "₹249" },
      { service: "Full Legs (Chocolate)", price: "₹399" },
      { service: "Full Legs (Rica/Italian)", price: "₹499" },
      { service: "Full Body (Normal)", price: "₹899" },
      { service: "Full Body (Chocolate)", price: "₹1,299" },
      { service: "Full Body (Rica)", price: "₹1,799" },
    ],
  },
  footcare: {
    title: "Manicure & Pedicure",
    items: [
      { service: "Manicure (Normal)", price: "₹149" },
      { service: "Manicure (Pro)", price: "₹299" },
      { service: "Manicure (Crystal Spa)", price: "₹399" },
      { service: "Pedicure (Normal)", price: "₹249" },
      { service: "Pedicure (Pro)", price: "₹399" },
      { service: "Pedicure (Crystal Spa)", price: "₹549" },
      { service: "Mani + Pedi Combo (Normal)", price: "₹349" },
      { service: "Mani + Pedi Combo (Pro)", price: "₹599" },
      { service: "Nail Extension (Full Set)", price: "₹999" },
      { service: "Gel Nail Paint", price: "₹199" },
      { service: "Nail Art (per nail)", price: "₹50" },
    ],
  },
  bridal: {
    title: "Bridal Packages",
    items: [
      { service: "Party Makeup", price: "₹1,099" },
      { service: "HD Party Makeup", price: "₹2,099" },
      { service: "Engagement (Normal)", price: "₹2,100" },
      { service: "Engagement (HD)", price: "₹3,100" },
      { service: "Engagement (Airbrush)", price: "₹5,100" },
      { service: "Bridal Package (Basic)", price: "₹11,000" },
      { service: "Bridal Package (Premium)", price: "₹15,000" },
      { service: "Bridal Package (HD)", price: "₹21,000" },
      { service: "Bridal Package (Airbrush)", price: "₹25,000" },
    ],
  },
};

const Prices = () => {
  const categories = Object.keys(priceData) as (keyof typeof priceData)[];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Price List
            </h1>
            <p className="text-lg text-muted-foreground">
              Transparent pricing for all our beauty services. Quality service at affordable rates.
            </p>
          </div>
        </div>
      </section>

      {/* Price Tables */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="facecare" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8">
              {categories.map((key) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border"
                >
                  {priceData[key].title}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((key) => (
              <TabsContent key={key} value={key}>
                <div className="max-w-3xl mx-auto">
                  <div className="bg-card rounded-2xl border border-border overflow-hidden">
                    <div className="bg-primary/10 px-6 py-4">
                      <h2 className="text-xl font-semibold text-primary">{priceData[key].title}</h2>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[70%]">Service</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {priceData[key].items.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{item.service}</TableCell>
                            <TableCell className="text-right text-primary font-semibold">
                              {item.price}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Note */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="bg-secondary/50 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground">
                * Prices may vary based on hair length and product used. Contact us for exact quotes.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                * Special discounts available for bridal packages. Ask about our combo offers!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;
