import { TrendingUp, Calendar, Award } from "lucide-react";

const weeklyData = [
  { day: "M", score: 85 },
  { day: "T", score: 92 },
  { day: "W", score: 78 },
  { day: "T", score: 88 },
  { day: "F", score: 95 },
  { day: "S", score: 70 },
  { day: "S", score: 82 },
];

const MetricsPreview = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Track your <span className="text-gradient">progress</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Clear metrics that show exactly how consistent you've been.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card text-center">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <span className="text-4xl font-bold text-gradient">84%</span>
            <p className="text-sm text-muted-foreground mt-2">Weekly Score</p>
          </div>

          <div className="glass-card">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="flex items-end justify-between gap-1 h-20">
              {weeklyData.map((day, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div 
                    className="w-full rounded-t bg-primary/80"
                    style={{ height: `${day.score * 0.6}%` }}
                  />
                  <span className="text-[10px] text-muted-foreground">{day.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card text-center">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <span className="text-4xl font-bold text-gradient">14</span>
            <p className="text-sm text-muted-foreground mt-2">Day Streak</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsPreview;
