import { ChartColumnBig, CreditCard, Watch, Brain, Bell } from "lucide-react";

const notFeatures = [
  {
    icon: CreditCard,
    title: "No Subscriptions",
    description: "Sleep apps profit when you stay broken. They build long-term dependence. We help you build lasting habits.",
  },
  {
    icon: Watch,
    title: "No Wearables Required",
    description: "A $400 watch won't fix your sleep. Your habits will.",
  },
  {
    icon: ChartColumnBig,
    title: "No Useless Data",
    description: "We don't show confusing charts or numbers you can't act on. We only track what's important and in your control.",
  },
  {
    icon: Bell,
    title: "No Notifications Spam",
    description: "We intelligently nudge you when it matters. Not when it profits us.",
  },
];

const NotFeatures = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What we're <span className="text-gradient">not</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The sleep industry sells complexity. We don&rsquo;t even sell you anything. We just give you more control.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {notFeatures.map((feature) => (
            <div
              key={feature.title}
              className="glass-card group hover:scale-[1.02] transition-all duration-300 border-primary/20"
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

export default NotFeatures;
