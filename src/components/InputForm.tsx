import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, Car } from "lucide-react";

interface InputFormProps {
  onCompare: (data: { pickup: string; dropoff: string; vehicleType: string }) => void;
}

const InputForm = ({ onCompare }: InputFormProps) => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pickup && dropoff && vehicleType) {
      onCompare({ pickup, dropoff, vehicleType });
    }
  };

  return (
    <Card className="bg-gradient-card shadow-card border border-border/30 max-w-2xl mx-auto backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-bold text-foreground bg-gradient-primary bg-clip-text text-transparent">
          Where would you like to go?
        </CardTitle>
        <p className="text-muted-foreground text-lg">
          Enter your pickup and drop locations to compare ride prices
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div className="relative group">
              <MapPin className="absolute left-4 top-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="pl-12 h-14 bg-input border-2 border-border/50 focus:border-primary focus:shadow-glow transition-all duration-300 text-base"
              />
            </div>
            
            <div className="relative group">
              <Navigation className="absolute left-4 top-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Drop location"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                className="pl-12 h-14 bg-input border-2 border-border/50 focus:border-primary focus:shadow-glow transition-all duration-300 text-base"
              />
            </div>
            
            <div className="relative group">
              <Car className="absolute left-4 top-4 h-5 w-5 text-muted-foreground z-10 group-focus-within:text-primary transition-colors" />
              <Select value={vehicleType} onValueChange={setVehicleType}>
                <SelectTrigger className="h-14 pl-12 bg-input border-2 border-border/50 focus:border-primary focus:shadow-glow transition-all duration-300 text-base">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent className="bg-popover border border-border shadow-hover backdrop-blur-sm">
                  <SelectItem value="bike" className="text-base py-3">🏍️ Bike</SelectItem>
                  <SelectItem value="auto" className="text-base py-3">🛺 Auto Rickshaw</SelectItem>
                  <SelectItem value="cab" className="text-base py-3">🚗 Cab</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-14 bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg font-semibold shadow-card"
            disabled={!pickup || !dropoff || !vehicleType}
          >
            Compare Prices ✨
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InputForm;