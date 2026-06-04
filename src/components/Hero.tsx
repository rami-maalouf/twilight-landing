import { Apple, Heart, Smartphone, LockIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-4xl text-center gap-y-4 sm:gap-y-8 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 glass-card py-2 px-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <LockIcon className="w-3.5 h-3.5 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">Open-source & offline</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          The <span className="text-gradient">simplest</span> sleep tracker that <span className="text-gradient">actually works</span>
          {/* Stupidly <span className="text-gradient">simple</span> sleep tracker that <span className="text-gradient">actually works</span> */}
        </h1>

        <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <span className="text-gradient">No</span> subscription. <span className="text-gradient">No</span> smart watch. <span className="text-gradient">No</span> WiFi. <span className="text-gradient">No</span> battery drain. <span className="text-gradient">No</span> ads. <span className="text-gradient">Just</span> the data that actually matters.
          Tap when you sleep. Tap when you wake. We take care of the rest.
        </p>

        <div className="inline-flex items-center gap-2 font-medium text-muted-foreground pb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.35s" }}>
          <Smartphone className="w-4 h-4 text-primary" />
          <span>Optional <span className="text-gradient">NFC support</span> for effortless sleep tracking</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="xl" asChild>
            <a href="https://apps.apple.com/ca/app/twilight-simple-sleep-tracker/id6757098758" target="_blank" rel="noopener noreferrer">
              <Apple className="w-5 h-5" />
              Download on the App Store
            </a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="https://github.com/sponsors/rami-maalouf" target="_blank" rel="noopener noreferrer">
              <Heart className="w-5 h-5" />
              Support us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
