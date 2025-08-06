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
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Price Comparison Results</h2>
        <div className="flex items-center justify-center space-x-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{pickup} → {dropoff}</span>
        </div>
        <Badge variant="secondary" className="text-xs">
          {vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1)}
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {availableResults.map((result, index) => (
          <Card 
            key={result.service} 
            className={`bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0 ${
              index === 0 ? 'ring-2 ring-accent ring-opacity-50' : ''
            }`}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg ${serviceBrands[result.service].bg} flex items-center justify-center shadow-sm`}>
                    <span className={`text-xs font-bold ${serviceBrands[result.service].text}`}>
                      {serviceBrands[result.service].name}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold">{serviceBrands[result.service].name}</CardTitle>
                </div>
                {index === 0 && (
                  <Badge className="bg-accent text-accent-foreground">Cheapest</Badge>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Price</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">{result.price}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">ETA</span>
                  </div>
                  <span className="font-medium">{result.eta}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Duration</span>
                  </div>
                  <span className="font-medium">{result.duration}</span>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                variant="outline"
                disabled
              >
                Book Now (Coming Soon)
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {availableResults.length === 0 && (
        <Card className="bg-gradient-card shadow-card border-0">
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">
              No rides available for the selected vehicle type in this area.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ResultsSection;