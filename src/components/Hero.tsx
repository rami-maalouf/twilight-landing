import { Moon, Apple, Heart, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 glass-card py-2 px-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Moon className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Open-source & offline</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-gradient">Simplest</span> but <span className="text-gradient">most effective</span> sleep tracker
        </h1>

        <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <span className="text-gradient">No</span> smart watch. <span className="text-gradient">No</span> microphone. <span className="text-gradient">No</span> wifi. <span className="text-gradient">No</span> battery drain. <span className="text-gradient">No</span> ads. <span className="text-gradient">Just</span> the data that actually matters.
          Tap when you sleep. Tap when you wake. And we&rsquo;ll take care of the rest.
        </p>

        <div className="inline-flex items-center gap-2 text- text-muted-foreground mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.35s" }}>
          <Smartphone className="w-4 h-4 text-primary" />
          <span>The only NFC-powered sleep tracker</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="xl">
            <Apple className="w-5 h-5" />
            Download on the App Store
          </Button>
          <Button variant="glass" size="xl">
            <Heart className="w-5 h-5" />
            Support us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
