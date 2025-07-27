import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Hero = () => {
  const scrollToDetection = () => {
    document.getElementById("detection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-pulse delay-700"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8">
          <Shield className="w-5 h-5" />
          <span className="text-sm font-medium">SWECHA Academic Project</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">FakeGuard</span>
          <span className="block text-3xl md:text-4xl font-normal text-white/90 mt-2">
            AI-Powered Fake News Detection
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Advanced NLP technology to identify misinformation and protect against fake news. 
          Analyze any news article with machine learning precision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToDetection}
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-elevated"
          >
            Start Analysis
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
          >
            Learn More
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">94.2%</div>
            <div className="text-white/70 text-sm uppercase tracking-wide">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">20K+</div>
            <div className="text-white/70 text-sm uppercase tracking-wide">Articles Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">&lt; 1s</div>
            <div className="text-white/70 text-sm uppercase tracking-wide">Analysis Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;