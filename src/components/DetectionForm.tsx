import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Loader2, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type AnalysisResult = {
  prediction: "FAKE" | "REAL";
  confidence: number;
  processing_time: number;
};

const DetectionForm = () => {
  const [articleText, setArticleText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const analyzeArticle = async () => {
    if (!articleText.trim()) {
      toast({
        title: "No text provided",
        description: "Please enter some article text to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to Python backend
    setTimeout(() => {
      // Mock analysis result (replace with actual API call)
      const mockResult: AnalysisResult = {
        prediction: Math.random() > 0.5 ? "FAKE" : "REAL",
        confidence: 0.75 + Math.random() * 0.24,
        processing_time: 0.3 + Math.random() * 0.4,
      };
      
      setResult(mockResult);
      setIsLoading(false);
      
      toast({
        title: "Analysis Complete",
        description: `Article classified as ${mockResult.prediction}`,
      });
    }, 2000);
  };

  const clearForm = () => {
    setArticleText("");
    setResult(null);
  };

  return (
    <section id="detection" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Analyze News Article</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Paste any news article below and our AI will analyze it for authenticity using advanced NLP techniques.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Article Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label htmlFor="article-text" className="block text-sm font-medium mb-2">
                  News Article Text
                </label>
                <Textarea
                  id="article-text"
                  placeholder="Paste your news article here..."
                  value={articleText}
                  onChange={(e) => setArticleText(e.target.value)}
                  className="min-h-[200px] resize-none"
                />
                <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                  <span>{articleText.length} characters</span>
                  <span>Minimum 50 characters recommended</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={analyzeArticle} 
                  disabled={isLoading || articleText.length < 10}
                  className="flex-1"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Analyze Article
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={clearForm}>
                  Clear
                </Button>
              </div>

              {result && (
                <Card className={`border-2 ${
                  result.prediction === "FAKE" 
                    ? "border-danger bg-danger-light" 
                    : "border-success bg-success-light"
                }`}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {result.prediction === "FAKE" ? (
                          <AlertTriangle className="w-8 h-8 text-danger" />
                        ) : (
                          <CheckCircle className="w-8 h-8 text-success" />
                        )}
                        <div>
                          <h3 className="text-2xl font-bold">
                            {result.prediction === "FAKE" ? "FAKE NEWS DETECTED" : "AUTHENTIC NEWS"}
                          </h3>
                          <p className="text-muted-foreground">
                            Analysis completed in {result.processing_time.toFixed(2)} seconds
                          </p>
                        </div>
                      </div>
                      <Badge 
                        variant={result.prediction === "FAKE" ? "destructive" : "default"}
                        className="text-lg px-4 py-2"
                      >
                        {result.prediction}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white/50 rounded-lg">
                        <div className="text-2xl font-bold mb-1">
                          {(result.confidence * 100).toFixed(1)}%
                        </div>
                        <div className="text-sm text-muted-foreground">Confidence Score</div>
                      </div>
                      <div className="text-center p-4 bg-white/50 rounded-lg">
                        <div className="text-2xl font-bold mb-1">TF-IDF</div>
                        <div className="text-sm text-muted-foreground">Vectorization</div>
                      </div>
                      <div className="text-center p-4 bg-white/50 rounded-lg">
                        <div className="text-2xl font-bold mb-1">PAC</div>
                        <div className="text-sm text-muted-foreground">Classifier</div>
                      </div>
                    </div>

                    {result.prediction === "FAKE" && (
                      <div className="mt-4 p-4 bg-danger/10 rounded-lg border border-danger/20">
                        <h4 className="font-semibold text-danger mb-2">⚠️ Warning</h4>
                        <p className="text-sm text-danger/80">
                          This article has been flagged as potentially containing misinformation. 
                          Please verify the information from trusted sources before sharing.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DetectionForm;