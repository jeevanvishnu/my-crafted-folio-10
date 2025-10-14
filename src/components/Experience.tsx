import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    type: "education",
    title: "MERN Stack Developer Training",
    company: "Brototype",
    period: "2024 - Present",
    description:
      "Learning full-stack web development through hands-on projects, focusing on building real-world applications using MongoDB, Express, React, and Node.js.",
    achievements: [
      "Built multiple full-stack projects including an E-commerce website",
      "Gained strong understanding of REST APIs and authentication",
      "Improved problem-solving and debugging skills through practical challenges",
    ],
  },
  
  {
    type: "project",
    title: "E-commerce Website (EcoBuy)",
    company: "Personal Project",
    period: "2024",
    description:
      "Developed a full-featured e-commerce platform for electronic gadgets with admin and user dashboards, product offers, and payment integration.",
    achievements: [
      "Implemented offers, referrals, and coupon systems",
      "Created dynamic admin dashboard using EJS and Node.js",
      "Used MongoDB for database design and Mongoose for schema management",
    ],
  },

  {
    type: "education",
    title: "ITI in Plumber Trade",
    company: "Government ITI Attingal",
    period: "2023 - 2024",
    description:
      "Completed vocational training in the plumbing trade, focusing on technical skills, system installation, and safety practices while maintaining a strong interest in technology and software development.",
    achievements: [
      "Developed a disciplined, hands-on work approach",
      "Learned teamwork and precision through practical field training",
      "Balanced technical trade learning with personal passion for programming",
    ],
  },
  
];


export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Education</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white shadow-glow shrink-0 ${
                      index % 2 === 0 ? "" : "md:order-2"
                    }`}
                  >
                    {exp.type === "work" ? (
                      <Briefcase className="h-8 w-8" />
                    ) : (
                      <GraduationCap className="h-8 w-8" />
                    )}
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? "" : "md:text-right"}`}>
                    <span className="text-sm text-primary font-semibold">{exp.period}</span>
                  </div>
                </div>

                <Card
                  className={`p-6 hover:shadow-card transition-all glass-effect ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-20" : "md:ml-20"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-primary font-semibold mb-3">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className={`text-sm text-muted-foreground flex items-start gap-2 ${
                          index % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"
                        }`}
                      >
                        <span className="text-primary shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
