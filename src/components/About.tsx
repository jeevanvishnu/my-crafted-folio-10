import { Download, Award, Coffee, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "React & TypeScript", level: 90 },
  { name: "Node.js & Express", level: 90 },
  { name: "UI/UX Design", level: 50 },
  { name: "Database Design", level: 50 },
  { name: "Cloud Services", level: 50 },
];

const stats = [
  { icon: Coffee, label: "Projects Completed", value: "8+" },
  { icon: Award, label: "Months of Learning", value: "12+" },
  { icon: Users, label: "Team Collaborations", value: "1+" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
            Ever since I was young, I’ve been curious about how things work — not just in machines, but in the digital world too. That curiosity slowly turned into a passion for creating. What began as a simple interest in websites evolved into a journey of learning and building. I’m Jeevan Vishnu, a self-taught MERN stack developer who believes in learning by doing. Coming from a non–computer science background never held me back; instead, it motivated me to learn everything step by step — from HTML and CSS to JavaScript, and then diving deep into Node.js, Express, and MongoDB. Each project I completed strengthened my understanding of logic, design, and real-world problem-solving.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            For me, coding isn’t just about syntax — it’s about creating something meaningful that can make life easier or more exciting. I love challenges because they remind me how far I’ve come and how much more I can grow. When I’m not coding, I enjoy watching action movies, listening to music, and exploring new ideas that inspire me to keep improving. My journey as a developer is still ongoing, and every day I aim to become a better version of myself — one line of code at a time.
            </p>
            <Button 
              size="lg" 
              className="gradient-primary text-white shadow-glow"
              asChild
            >
                <a
                href="https://drive.google.com/file/d/1AiYTcf41znO0-h4rYL3HYNkLPXZv5Sp-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Download className="h-5 w-5" />
                Download Resume
               
              </a>

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
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
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
