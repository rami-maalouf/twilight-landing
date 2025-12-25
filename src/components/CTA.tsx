import { ArrowRight, Moon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="relative max-w-3xl mx-auto text-center">
        {/* Floating icons */}
        <div className="absolute -top-10 left-10 opacity-20 animate-float">
          <Moon className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute -bottom-10 right-10 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-12 h-12 text-accent" />
        </div>

        <div className="glass-card py-12 px-8 glow opacity-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to sleep{" "}
            <span className="text-gradient">better?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands who've improved their sleep habits with the simplest sleep tracker ever made.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Get Started — It's Free
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Free forever for basic tracking
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;