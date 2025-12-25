import { TrendingUp, Calendar, Award } from "lucide-react";

const weeklyData = [
  { day: "Mon", score: 85, height: "85%" },
  { day: "Tue", score: 92, height: "92%" },
  { day: "Wed", score: 78, height: "78%" },
  { day: "Thu", score: 88, height: "88%" },
  { day: "Fri", score: 95, height: "95%" },
  { day: "Sat", score: 70, height: "70%" },
  { day: "Sun", score: 82, height: "82%" },
];

const monthlyTrend = [65, 72, 78, 75, 82, 85, 88, 84, 90, 87, 92, 89];

const MetricsPreview = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 opacity-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Watch your <span className="text-gradient">progress</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Clear metrics that show you exactly how consistent you've been. 
            No confusing data — just the insights that matter.
          </p>
        </div>

        {/* Metrics cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Consistency Score */}
          <div className="glass-card animate-pulse-glow opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="font-semibold">Consistency Score</p>
              </div>
            </div>
            <div className="text-center py-8">
              <span className="text-6xl font-bold text-gradient">84%</span>
              <p className="text-sm text-muted-foreground mt-2">
                <span className="text-green-500">↑ 8%</span> from last week
              </p>
            </div>
          </div>

          {/* Weekly Chart */}
          <div className="glass-card opacity-0 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Daily Breakdown</p>
                <p className="font-semibold">Weekly Overview</p>
              </div>
            </div>
            <div className="flex items-end justify-between gap-2 h-40 pt-4">
              {weeklyData.map((day, index) => (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full rounded-t-lg bg-primary/20 relative overflow-hidden transition-all duration-500"
                    style={{ 
                      height: day.height,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg transition-all duration-700"
                      style={{ height: day.height }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{day.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Trend */}
          <div className="glass-card opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">12 Week Trend</p>
                <p className="font-semibold">Monthly Progress</p>
              </div>
            </div>
            <div className="relative h-40 pt-4">
              <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area fill */}
                <path
                  d={`M 0,${120 - monthlyTrend[0]} ${monthlyTrend.map((val, i) => `L ${(i * 300) / (monthlyTrend.length - 1)},${120 - val}`).join(" ")} L 300,120 L 0,120 Z`}
                  fill="url(#areaGradient)"
                />
                {/* Line */}
                <path
                  d={`M 0,${120 - monthlyTrend[0]} ${monthlyTrend.map((val, i) => `L ${(i * 300) / (monthlyTrend.length - 1)},${120 - val}`).join(" ")}`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* End dot */}
                <circle
                  cx="300"
                  cy={120 - monthlyTrend[monthlyTrend.length - 1]}
                  r="6"
                  fill="hsl(var(--accent))"
                  className="animate-pulse"
                />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground">
                <span>12 weeks ago</span>
                <span>Now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional insight */}
        <div className="mt-12 glass-card max-w-2xl mx-auto text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg">
            <span className="font-semibold">Your best streak:</span>{" "}
            <span className="text-gradient font-bold">14 days</span> of consistent sleep times
          </p>
          <p className="text-muted-foreground mt-2">
            Keep going! You're building a habit that will last a lifetime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetricsPreview;