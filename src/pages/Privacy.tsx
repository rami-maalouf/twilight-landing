import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: December 26, 2025</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Our Philosophy</h2>
              <p>
                Twilight is built on a simple principle: <strong className="text-foreground">your data is yours</strong>.
                We don't collect it, we don't store it on our servers, and we certainly don't sell it.
                Everything stays on your device.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">What We Don't Collect</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Sleep data or patterns</li>
                <li>Health information</li>
                <li>Location data</li>
                <li>Device identifiers</li>
                <li>Usage analytics</li>
                <li>Personal information</li>
              </ul>
              <p className="mt-3">
                Seriously—we have no servers storing your data. The app works entirely offline.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Local Storage Only</h2>
              <p>
                All your sleep logs, goals, and preferences are stored locally on your device.
                If you delete the app, your data goes with it. We have no way to recover it
                because we never had access to it in the first place.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Android Waitlist</h2>
              <p>
                If you join our Android waitlist, we collect only your email address to notify
                you when the Android version launches. This email is stored securely and will
                never be shared with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Open Source</h2>
              <p>
                Twilight is open source. You can inspect every line of code to verify our privacy
                claims. Transparency isn't just a buzzword for us—it's the foundation of trust.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
              <p>
                Questions about privacy? Reach out at{" "}
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

export default Privacy;
