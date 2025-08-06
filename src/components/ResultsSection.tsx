import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, MapPin } from "lucide-react";
// Using placeholder colors for service logos since images failed to generate
const serviceBrands = {
  uber: { bg: "bg-black", text: "text-white", name: "Uber" },
  ola: { bg: "bg-green-500", text: "text-white", name: "Ola" },
  rapido: { bg: "bg-yellow-500", text: "text-black", name: "Rapido" }
};

interface RideOption {
  service: 'uber' | 'ola' | 'rapido';
  price: string;
  eta: string;
  duration: string;
  available: boolean;
}

interface ResultsSectionProps {
  pickup: string;
  dropoff: string;
  vehicleType: string;
}

const ResultsSection = ({ pickup, dropoff, vehicleType }: ResultsSectionProps) => {
  // Mock data - in real app this would come from API
  const mockResults: RideOption[] = [
    {
      service: "uber",
      price: "₹145",
      eta: "3 mins",
      duration: "18 mins",
      available: true
    },
    {
      service: "ola",
      price: "₹138",
      eta: "5 mins",
      duration: "20 mins",
      available: true
    },
    {
      service: "rapido",
      price: vehicleType === "bike" ? "₹85" : "₹142",
      eta: "2 mins",
      duration: "15 mins",
      available: vehicleType !== "cab"
    }
  ];

  const availableResults = mockResults.filter(result => result.available);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Price Comparison Results</h2>
        <div className="flex items-center justify-center space-x-3 text-muted-foreground">
          <MapPin className="w-5 h-5" />
          <span className="text-base">{pickup} → {dropoff}</span>
        </div>
        <Badge variant="secondary" className="text-sm px-4 py-2 bg-accent/20 text-accent-foreground border border-accent/30">
          {vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1)} 🚗
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {availableResults.map((result, index) => (
          <Card 
            key={result.service} 
            className={`bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 border border-border/30 backdrop-blur-sm group ${
              index === 0 ? 'ring-2 ring-accent/50 scale-105' : 'hover:scale-105'
            }`}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-xl ${serviceBrands[result.service].bg} flex items-center justify-center shadow-card`}>
                    <span className={`text-sm font-bold ${serviceBrands[result.service].text}`}>
                      {serviceBrands[result.service].name}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold">{serviceBrands[result.service].name}</CardTitle>
                </div>
                {index === 0 && (
                  <Badge className="bg-accent/90 text-accent-foreground shadow-glow animate-pulse">
                    👑 Best Deal
                  </Badge>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-accent" />
                    <span className="text-base font-medium text-muted-foreground">Price</span>
                  </div>
                  <span className="text-3xl font-bold text-primary">{result.price}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-base font-medium text-muted-foreground">ETA</span>
                  </div>
                  <span className="font-semibold text-lg">{result.eta}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary-foreground" />
                    <span className="text-base font-medium text-muted-foreground">Duration</span>
                  </div>
                  <span className="font-semibold text-lg">{result.duration}</span>
                </div>
              </div>
              
              <Button 
                className="w-full h-12 bg-gradient-secondary hover:bg-gradient-primary transition-all duration-300 border border-border/50" 
                variant="outline"
                disabled
              >
                Book Now (Coming Soon) 🚀
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {availableResults.length === 0 && (
        <Card className="bg-gradient-card shadow-card border border-border/30">
          <CardContent className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No rides available for the selected vehicle type in this area. 😔
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ResultsSection;