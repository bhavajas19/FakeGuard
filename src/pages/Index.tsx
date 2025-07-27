import Hero from "@/components/Hero";
import DetectionForm from "@/components/DetectionForm";
import TechSpecs from "@/components/TechSpecs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DetectionForm />
      <TechSpecs />
      <Footer />
    </div>
  );
};

export default Index;
