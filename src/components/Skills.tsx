import { Code2, Palette, Database, Cloud, Smartphone, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Vue.js", level: "Intermediate" },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "Express", level: "Expert" },
      { name: "Django", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Design",
    icon: Palette,
    skills: [
      { name: "Figma", level: "Expert" },
      { name: "Adobe XD", level: "Advanced" },
      { name: "UI/UX", level: "Expert" },
      { name: "Prototyping", level: "Advanced" },
      { name: "Design Systems", level: "Advanced" },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Expert" },
      { name: "Redis", level: "Intermediate" },
      { name: "MySQL", level: "Advanced" },
      { name: "Supabase", level: "Advanced" },
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "CI/CD", level: "Expert" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "Vercel", level: "Expert" },
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: "Advanced" },
      { name: "Flutter", level: "Intermediate" },
      { name: "iOS Development", level: "Intermediate" },
      { name: "Android", level: "Intermediate" },
      { name: "PWA", level: "Expert" },
    ],
    color: "from-indigo-500 to-purple-500",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-primary bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
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
              "Team Leadership",
              "Communication",
              "Agile Methodology",
              "Time Management",
              "Critical Thinking",
              "Mentoring",
              "Adaptability",
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
