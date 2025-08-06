import { useState } from "react";
import Navbar from "@/components/Navbar";
import InputForm from "@/components/InputForm";
import ResultsSection from "@/components/ResultsSection";
import Footer from "@/components/Footer";

interface ComparisonData {
  pickup: string;
  dropoff: string;
  vehicleType: string;
}

const Index = () => {
  const [comparisonData, setComparisonData] = useState<ComparisonData | null>(null);

  const handleCompare = (data: ComparisonData) => {
    setComparisonData(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        <InputForm onCompare={handleCompare} />
        
        {comparisonData && (
          <ResultsSection 
            pickup={comparisonData.pickup}
            dropoff={comparisonData.dropoff}
            vehicleType={comparisonData.vehicleType}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
