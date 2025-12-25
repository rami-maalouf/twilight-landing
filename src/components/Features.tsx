import { Clock, Target, TrendingUp, Zap, Moon, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Just Two Taps",
    description: "Tap when you go to bed. Tap when you wake up. That's it. No complicated setup or nightly routines.",
  },
  {
    icon: Target,
    title: "Set Your Goals",
    description: "Define your ideal sleep and wake times. We'll help you stick to them without judgment.",
  },
  {
    icon: TrendingUp,
    title: "Track Consistency",
    description: "See your weekly and monthly consistency scores. Small improvements add up to better sleep.",
  },
  {
    icon: BarChart3,
    title: "Visual Progress",
    description: "Beautiful charts show your sleep patterns over time. Watch your habits improve week by week.",
  },
  {
    icon: Zap,
    title: "Zero Battery Drain",
    description: "We don't monitor you while you sleep. No microphones, no sensors, no overnight battery drain.",
  },
  {
    icon: Moon,
    title: "Peaceful by Design",
    description: "Calm interface that won't stimulate you before bed. Dark mode that's easy on your eyes.",
  },
];

const Features = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 opacity-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Simple by <span className="text-gradient">intention</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Most sleep apps try to do too much. We focus on what actually matters: 
            helping you maintain a consistent schedule.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card group hover:scale-[1.02] transition-all duration-300 opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 3)}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;