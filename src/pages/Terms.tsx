import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Stars />
      <Header />
      <main className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: December 26, 2025</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">The Short Version</h2>
              <p>
                Twilight is a simple sleep tracking app. Use it to build better sleep habits.
                Don't use it for anything weird. That's basically it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">What Twilight Is</h2>
              <p>
                Twilight is a sleep tracking tool designed to help you maintain a consistent sleep schedule.
                It tracks three things: when you sleep, when you wake up, and how consistent you are.
                That's it. No complex metrics, no confusing data, no subscriptions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">What Twilight Isn't</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>A medical device or diagnostic tool</li>
                <li>A replacement for professional medical advice</li>
                <li>A treatment for sleep disorders like insomnia</li>
                <li>A wearable or hardware product</li>
              </ul>
              <p className="mt-3">
                If you have serious sleep issues, please consult a healthcare professional.
                Twilight is built for the average person who wants to maintain better sleep habits.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Your Data</h2>
              <p>
                All your data stays on your device. We don't have access to it, we can't see it,
                and we definitely can't sell it. Check our{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
                for more details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Open Source</h2>
              <p>
                Twilight is open source software. You're free to inspect, modify, and contribute to
                the codebase. We believe in transparency and community-driven development.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">No Guarantees</h2>
              <p>
                We can't guarantee Twilight will fix your sleep. What we can guarantee is that
                we've built a tool focused on what actually matters—consistency—without the
                bloat, subscriptions, or data harvesting of typical sleep apps.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Changes to Terms</h2>
              <p>
                We may update these terms occasionally. We'll try to keep them just as
                straightforward as they are now.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
              <p>
                Questions? Reach out at{" "}
                <a
                  href="mailto:twilight@ramimaalouf.com"
                  className="text-primary hover:underline"
                >
                  twilight@ramimaalouf.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
