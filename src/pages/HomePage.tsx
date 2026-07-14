import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Sparkles, BookOpen } from "lucide-react";
import { useLocation } from "wouter";

export default function HomePage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src="/images/suchitra-logo.png" alt="Suchitra Heritage Exports" className="h-10 w-auto" />
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition">About</a>
            <a href="#brands" className="text-foreground hover:text-primary transition">Brands</a>
            <a href="#values" className="text-foreground hover:text-primary transition">Values</a>
          </nav>
          <Button 
            onClick={() => navigate("/brand-guide")}
            variant="outline"
          >
            Brand Guide
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Suchitra Heritage Exports
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Bridging ancient wisdom with modern wellness through premium Ayurvedic products and mindfulness services.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Explore Services
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              About Suchitra
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              Suchitra Heritage Exports is a proprietorship dedicated to bringing the transformative power of wellness into people's lives. We honor ancient traditions while embracing modern innovation to create meaningful wellness experiences.
            </p>
            <p className="text-lg text-foreground/80">
              Our mission is to cultivate mindfulness, balance, and well-being through authentic Ayurvedic products and professional wellness services, making premium wellness accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            Our Brands
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Suchitra Mindful Living */}
            <Card className="p-8 border-border bg-card hover:shadow-lg transition">
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Suchitra Mindful Living
              </h3>
              <p className="text-foreground/80 mb-6">
                Premium wellness services including personalized mindfulness coaching, yoga sessions, corporate wellness programs, and holistic health consultations designed to transform your well-being journey.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70 mb-6">
                <li>✓ Mindfulness Coaching</li>
                <li>✓ Yoga & Meditation</li>
                <li>✓ Corporate Wellness Programs</li>
                <li>✓ Wellness Consultations</li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>

            {/* Suchitra Root & Ritual */}
            <Card className="p-8 border-border bg-card hover:shadow-lg transition">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Suchitra Root & Ritual
              </h3>
              <p className="text-foreground/80 mb-6">
                Premium Ayurvedic herbs and wellness products carefully sourced and formulated for daily rituals and holistic health, bringing the wisdom of ancient practices to your modern lifestyle.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70 mb-6">
                <li>✓ Premium Ayurvedic Herbs</li>
                <li>✓ Wellness Formulations</li>
                <li>✓ Daily Ritual Products</li>
                <li>✓ Holistic Health Solutions</li>
              </ul>
              <Button variant="outline" className="w-full">
                Shop Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            Our Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Mindfulness", icon: Leaf, description: "Present, aware, and intentional in everything we do" },
              { title: "Well-Being", icon: Heart, description: "Holistic health for body, mind, and spirit" },
              { title: "Heritage", icon: Sparkles, description: "Honoring traditions while embracing innovation" },
              { title: "Integrity", icon: BookOpen, description: "Authentic, transparent, and trustworthy" }
            ].map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <Card key={idx} className="p-6 border-border text-center">
                  <IconComponent className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-serif font-bold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Begin Your Wellness Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Discover our comprehensive brand identity and visual guidelines.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/brand-guide")}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            View Brand Guide
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif font-bold text-primary mb-4">Suchitra</h3>
              <p className="text-sm text-foreground/70">Heritage wellness for modern living.</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-primary mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition">About</a></li>
                <li><a href="#" className="hover:text-primary transition">Services</a></li>
                <li><a href="#" className="hover:text-primary transition">Products</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif font-bold text-primary mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif font-bold text-primary mb-4">Contact</h3>
              <p className="text-sm text-foreground/70">hello@suchitra.com</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 Suchitra Heritage Exports. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
