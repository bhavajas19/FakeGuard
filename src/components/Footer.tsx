import { Shield, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6" />
              <span className="text-xl font-bold">FakeGuard</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              AI-powered fake news detection system built for the SWECHA academic program. 
              Protecting information integrity with advanced NLP technology.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </Button>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                Documentation
              </Button>
            </div>
          </div>

          {/* Technical Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technical Stack</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Python 3.x with scikit-learn</li>
              <li>• TF-IDF Vectorization</li>
              <li>• Passive Aggressive Classifier</li>
              <li>• NLTK for NLP preprocessing</li>
              <li>• React frontend with TypeScript</li>
              <li>• Kaggle dataset (20,800+ articles)</li>
            </ul>
          </div>

          {/* Academic Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Academic Project</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div>
                <div className="font-medium">Program:</div>
                <div>SWECHA Academic Submission</div>
              </div>
              <div>
                <div className="font-medium">Focus:</div>
                <div>Machine Learning & NLP</div>
              </div>
              <div>
                <div className="font-medium">Accuracy:</div>
                <div>94.2% on test dataset</div>
              </div>
              <div>
                <div className="font-medium">Status:</div>
                <div className="inline-flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Ready for Submission
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 FakeGuard. Built for academic purposes as part of the SWECHA program.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;