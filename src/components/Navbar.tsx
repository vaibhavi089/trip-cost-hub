import { Car } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gradient-primary shadow-card sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Ride Fare Comparator</h1>
              <p className="text-xs text-white/80">Compare prices across platforms</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;