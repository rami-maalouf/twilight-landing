import { Clock, Target, TrendingUp, Smartphone, Lock } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Simple Onboarding",
    description: "Set your ideal times. We help you stick to them.",
  },
  {
    icon: Smartphone,
    title: "Simple tracking",
    description: "Never miss a tap again by placing an NFC tag on your nightstand",
  },
  {
    icon: TrendingUp,
    title: "Track what matters",
    description: "Sleep and wake times. That's all you need.",
  },
  {
    icon: Lock,
    title: "Nothing leaves your phone",
    description: "Everything is stored locally on your device",
  }
];

const Features = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
