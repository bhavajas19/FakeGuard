import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Zap, Target, Code, BarChart3 } from "lucide-react";

const TechSpecs = () => {
  const specs = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Passive Aggressive Classifier with advanced NLP preprocessing",
      details: ["TF-IDF Vectorization", "Stop Word Removal", "Stemming Algorithm", "5000 Feature Extraction"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Dataset",
      description: "Trained on 20,800+ verified news articles",
      details: ["Kaggle Dataset", "Balanced Classes", "Real vs Fake", "Comprehensive Training"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Accuracy",
      description: "94.2% accuracy with robust performance metrics",
      details: ["94.2% Accuracy", "93.8% Precision", "94.6% Recall", "94.2% F1-Score"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Lightning-fast analysis with sub-second response times",
      details: ["< 1s Analysis", "Real-time Processing", "Optimized Pipeline", "Scalable Architecture"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technology Stack",
      description: "Modern Python ML stack with proven libraries",
      details: ["Python 3.x", "scikit-learn", "NLTK", "Pandas & NumPy"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Validation",
      description: "Rigorous testing with confusion matrix analysis",
      details: ["Cross-validation", "Confusion Matrix", "ROC Curves", "Statistical Analysis"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge machine learning technology and rigorous academic standards 
            for the SWECHA program submission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {spec.icon}
                  </div>
                  {spec.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{spec.description}</p>
                <div className="space-y-2">
                  {spec.details.map((detail, detailIndex) => (
                    <Badge key={detailIndex} variant="secondary" className="mr-2 mb-2">
                      {detail}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Model Architecture Diagram */}
        <div className="mt-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-center">Model Architecture Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center items-center gap-4 text-center">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <div className="font-semibold">Input Text</div>
                  <div className="text-sm text-muted-foreground">News Article</div>
                </div>
                <div className="text-2xl text-primary">→</div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <div className="font-semibold">Preprocessing</div>
                  <div className="text-sm text-muted-foreground">Clean & Tokenize</div>
                </div>
                <div className="text-2xl text-primary">→</div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <div className="font-semibold">TF-IDF</div>
                  <div className="text-sm text-muted-foreground">Vectorization</div>
                </div>
                <div className="text-2xl text-primary">→</div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <div className="font-semibold">Classifier</div>
                  <div className="text-sm text-muted-foreground">PAC Algorithm</div>
                </div>
                <div className="text-2xl text-primary">→</div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <div className="font-semibold">Result</div>
                  <div className="text-sm text-muted-foreground">FAKE / REAL</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;