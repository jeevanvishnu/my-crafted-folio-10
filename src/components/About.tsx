import { Download, Award, Coffee, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "React & TypeScript", level: 95 },
  { name: "Node.js & Express", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Python & Django", level: 80 },
  { name: "Database Design", level: 88 },
  { name: "Cloud Services", level: 82 },
];

const stats = [
  { icon: Coffee, label: "Projects Completed", value: "50+" },
  { icon: Award, label: "Years Experience", value: "5+" },
  { icon: Users, label: "Happy Clients", value: "30+" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer and designer with a love for creating
              elegant solutions to complex problems. With over 5 years of experience, I
              specialize in building responsive web applications that combine beautiful
              design with powerful functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach is user-centered and data-driven. I believe in writing clean,
              maintainable code and creating interfaces that users love to interact with.
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open source, or mentoring aspiring developers.
            </p>
            <Button size="lg" className="gradient-primary text-white shadow-glow">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="p-8 text-center hover:shadow-card transition-shadow glass-effect"
              >
                <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2 gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
