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
    <Card className="bg-gradient-card shadow-card border-0 max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">
          Where would you like to go?
        </CardTitle>
        <p className="text-muted-foreground">
          Enter your pickup and drop locations to compare ride prices
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="pl-10 h-12 border-2 border-border/50 focus:border-primary transition-colors"
              />
            </div>
            
            <div className="relative">
              <Navigation className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Drop location"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                className="pl-10 h-12 border-2 border-border/50 focus:border-primary transition-colors"
              />
            </div>
            
            <div className="relative">
              <Car className="absolute left-3 top-3 h-5 w-5 text-muted-foreground z-10" />
              <Select value={vehicleType} onValueChange={setVehicleType}>
                <SelectTrigger className="h-12 pl-10 border-2 border-border/50 focus:border-primary transition-colors">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent className="bg-popover border border-border shadow-hover">
                  <SelectItem value="bike">🏍️ Bike</SelectItem>
                  <SelectItem value="auto">🛺 Auto Rickshaw</SelectItem>
                  <SelectItem value="cab">🚗 Cab</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 bg-gradient-primary hover:shadow-hover transition-all duration-300 text-lg font-semibold"
            disabled={!pickup || !dropoff || !vehicleType}
          >
            Compare Prices
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InputForm;