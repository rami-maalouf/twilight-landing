import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="glass-card py-10 px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to sleep <span className="text-gradient">better?</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Start tracking your sleep consistency today.
          </p>

          <Button variant="hero" size="lg" asChild>
            <a href="https://testflight.apple.com/join/Zj1W3kmf" target="_blank" rel="noopener noreferrer">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>

          <p className="text-xs text-muted-foreground mt-4">
            No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
