import { Car } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gradient-nav shadow-glow sticky top-0 z-50 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <Car className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Ride Fare Comparator</h1>
              <p className="text-sm text-muted-foreground">Compare prices across platforms</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;