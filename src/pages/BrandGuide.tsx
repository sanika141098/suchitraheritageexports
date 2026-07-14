import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Leaf, Heart, Scale, Sparkles } from "lucide-react";
import { useLocation } from "wouter";

export default function BrandGuide() {
  const [, navigate] = useLocation();

  const colors = [
    { name: "Forest Green", hex: "#1B3A2E", description: "Primary brand color - grounding and authoritative" },
    { name: "Bronze", hex: "#B8864B", description: "Heritage and luxury - timeless wisdom" },
    { name: "Sand", hex: "#E8DECD", description: "Warm neutral - calming and organic" },
    { name: "Off-White", hex: "#FAF8F5", description: "Clean and professional" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2 text-primary hover:text-primary/80"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
          <img src="/images/suchitra-logo.png" alt="Suchitra Heritage Exports" className="h-10 w-auto" />
          <div className="w-10"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Visual Identity System
            </h2>
            <p className="text-lg text-foreground/80">
              A comprehensive guide to the Suchitra Heritage Exports brand identity, 
              including colors, typography, and design principles.
            </p>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Brand Colors
            </h2>
            <p className="text-foreground/70 max-w-2xl">
              A carefully curated color palette that reflects our heritage, luxury, and wellness values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {colors.map((color, idx) => (
              <Card key={idx} className="overflow-hidden border-border">
                <div className="flex h-32">
                  <div 
                    className="flex-1" 
                    style={{ backgroundColor: color.hex }}
                  ></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-primary mb-2">
                    {color.name}
                  </h3>
                  <p className="font-mono text-sm text-foreground/70 mb-3">
                    {color.hex}
                  </p>
                  <p className="text-sm text-foreground/70">
                    {color.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Typography
            </h2>
            <p className="text-foreground/70 max-w-2xl">
              A carefully selected font pairing that balances elegance with modern clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Headings */}
            <Card className="p-8 border-border">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                Headings
              </h3>
              <div className="mb-6">
                <p className="text-4xl font-serif font-bold text-primary mb-2">
                  Playfair Display
                </p>
                <p className="text-sm text-foreground/70">
                  Serif font for headings and display text. Evokes classical elegance and timelessness.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-serif font-bold text-primary">Heading 1</p>
                  <p className="text-xs text-muted-foreground">48px / Bold</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-primary">Heading 2</p>
                  <p className="text-xs text-muted-foreground">36px / Bold</p>
                </div>
                <div>
                  <p className="text-xl font-serif font-bold text-primary">Heading 3</p>
                  <p className="text-xs text-muted-foreground">24px / Bold</p>
                </div>
              </div>
            </Card>

            {/* Body Text */}
            <Card className="p-8 border-border">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                Body Text
              </h3>
              <div className="mb-6">
                <p className="text-xl font-sans text-primary mb-2">
                  Lato
                </p>
                <p className="text-sm text-foreground/70">
                  Sans-serif font for body text. Modern, clean, and highly readable.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-base text-foreground">
                    Regular body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">16px / Regular</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/70">
                    Secondary text for supporting information and descriptions.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">14px / Regular</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Design Principles
            </h2>
            <p className="text-foreground/70 max-w-2xl">
              Core principles that guide all design decisions across the Suchitra ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Heritage Elegance",
                description: "Timeless sophistication that respects tradition while embracing modernity."
              },
              {
                title: "Premium Positioning",
                description: "Generous whitespace, refined typography, and subtle depth create an elevated feel."
              },
              {
                title: "Authentic Connection",
                description: "Honest, approachable design that builds trust and invites engagement."
              },
              {
                title: "Intentional Motion",
                description: "Smooth transitions and subtle animations that enhance, not distract."
              },
              {
                title: "Accessibility First",
                description: "Designs that work for everyone, with clear hierarchy and readable contrast."
              },
              {
                title: "Responsive Elegance",
                description: "Beautiful design that adapts seamlessly across all devices and screen sizes."
              }
            ].map((principle, idx) => (
              <Card key={idx} className="p-6 border-border">
                <h3 className="text-lg font-serif font-bold text-primary mb-3">
                  {principle.title}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Structure Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Brand Structure
            </h2>
            <p className="text-foreground/70 max-w-2xl">
              Suchitra Heritage Exports is a proprietorship under which two specialized brands operate, each serving distinct wellness needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-border bg-card">
              <h3 className="text-lg font-serif font-bold text-primary mb-4">
                Service Brand
              </h3>
              <p className="text-foreground/70 mb-6">
                Suchitra Mindful Living - Premium wellness services including mindfulness coaching, yoga, and corporate wellness programs.
              </p>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="font-serif font-bold text-primary">Suchitra Mindful Living</p>
              </div>
            </Card>

            <Card className="p-8 border-border bg-card">
              <h3 className="text-lg font-serif font-bold text-primary mb-4">
                Product Brand
              </h3>
              <p className="text-foreground/70 mb-6">
                Suchitra Root & Ritual - Premium Ayurvedic herbs and wellness products for daily rituals and holistic health.
              </p>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="font-serif font-bold text-primary">Suchitra Root & Ritual</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Brand Values
            </h2>
            <p className="text-foreground/70 max-w-2xl">
              The core values that define the Suchitra brand and guide every decision.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Mindfulness", icon: Leaf },
              { title: "Well-Being", icon: Heart },
              { title: "Balance", icon: Scale },
              { title: "Integrity", icon: Sparkles }
            ].map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <Card key={idx} className="p-6 border-border text-center">
                  <IconComponent className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-serif font-bold text-primary">
                    {value.title}
                  </h3>
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
            Ready to Explore?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Discover the full Suchitra ecosystem and begin your wellness journey.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/")}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Back to Home
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
          <p>&copy; 2026 Suchitra Heritage Exports. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
