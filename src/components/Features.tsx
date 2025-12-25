import { Clock, Target, TrendingUp, Smartphone } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Two Taps",
    description: "Tap when you sleep. Tap when you wake. That's it.",
  },
  {
    icon: Target,
    title: "Set Goals",
    description: "Define your ideal times. We help you stick to them.",
  },
  {
    icon: TrendingUp,
    title: "See Progress",
    description: "Weekly and monthly consistency scores at a glance.",
  },
  {
    icon: Smartphone,
    title: "NFC Tags",
    description: "Place a tag on your nightstand. Tap to start, tap to stop.",
  },
];

const Features = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple by <span className="text-gradient">design</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We focus on what actually matters: helping you maintain a consistent schedule.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
