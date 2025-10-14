import { Code2, Palette, Database, Cloud, Smartphone, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "Bootstrap", level: "Intermediate" },
      {name: "JavaScript", level: "Intermediate"}
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Expert" },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Design",
    icon: Palette,
    skills: [
      { name: "Figma", level: "Beginner" },
      { name: "Prototyping", level: "Beginner" },
     
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: "Intermediate" },
      {name: "Firebase", level: "Intermediate"}
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: "Beginner" },
      { name: "Docker", level: "Beginner" },
      { name: "CI/CD", level: "Beginner" },
      { name: "Vercel", level: "Intermediate" },
    ],
    color: "from-cyan-500 to-blue-500",
  },
  
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Technologies</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="p-6 hover:shadow-card transition-all hover:-translate-y-2 glass-effect group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                    >
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {[
              "Problem Solving",
              "Discipline & consistency",
              "Teamwork",
              "Self-Learning",
              "Time Management",
              "Adaptability",
              "Resilience"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-gradient-primary text-white font-medium shadow-glow hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
