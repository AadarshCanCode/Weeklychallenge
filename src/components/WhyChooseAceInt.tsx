import { Zap, Target, Trophy, Brain, Rocket, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export function WhyChooseAceInt() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Get personalized feedback and adaptive challenges tailored to your skill level"
    },
    {
      icon: Trophy,
      title: "Gamified Experience",
      description: "Earn points, badges, and rewards as you progress through challenges"
    },
    {
      icon: Target,
      title: "Real-World Skills",
      description: "Practice with industry-standard problems and interview questions"
    },
    {
      icon: Rocket,
      title: "Fast-Track Progress",
      description: "Accelerate your learning with structured weekly challenges"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate results and detailed explanations for every solution"
    },
    {
      icon: Star,
      title: "Community Driven",
      description: "Learn alongside thousands of motivated students and developers"
    }
  ];

  return (
    <section id="why-choose" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="gradient-text">AceInt</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students mastering technical skills through our innovative gamified learning platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bento-card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
