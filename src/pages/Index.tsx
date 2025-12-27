import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import NotFeatures from "@/components/NotFeatures";
import MetricsPreview from "@/components/MetricsPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated stars background */}
      <Stars />

      {/* Main content */}
      <Header />
      <main>
        <Hero />
        <Features />
        <NotFeatures />
        {/* <MetricsPreview /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;