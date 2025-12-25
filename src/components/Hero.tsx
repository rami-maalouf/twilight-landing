import { Moon, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card py-2 px-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Moon className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Simple sleep tracking, nothing more</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Sleep{" "}
          <span className="text-gradient">consistently.</span>
          <br />
          Wake up{" "}
          <span className="text-gradient">refreshed.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          No sleep cycles. No microphones. No battery drain. 
          <br className="hidden md:block" />
          Just track when you sleep and when you wake — and build lasting habits.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="xl">
            Start Tracking Free
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="glass" size="lg">
            See How It Works
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
              >
                <span className="text-xs font-medium text-muted-foreground">
                  {String.fromCharCode(64 + i)}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Trusted by <span className="font-semibold text-foreground">12,000+</span> people building better sleep habits
          </p>
        </div>

        {/* Decorative icons */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 opacity-20">
          <Moon className="w-32 h-32 text-primary" />
        </div>
        <div className="absolute -right-10 top-1/3 opacity-20">
          <Sun className="w-24 h-24 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;