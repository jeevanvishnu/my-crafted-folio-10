import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise-scale applications, mentoring junior developers, and architecting cloud solutions.",
    achievements: [
      "Reduced application load time by 60%",
      "Mentored 5 junior developers",
      "Implemented CI/CD pipeline",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects, focusing on modern web technologies and responsive design.",
    achievements: [
      "Built 15+ production applications",
      "Improved code coverage to 85%",
      "Led team of 3 developers",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "University of Technology",
    period: "2016 - 2020",
    description:
      "Graduated with honors, specializing in software engineering and web development.",
    achievements: [
      "GPA: 3.8/4.0",
      "President of Computer Science Club",
      "Published research on ML algorithms",
    ],
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "Startup Ventures",
    period: "2019 - 2020",
    description:
      "Contributed to rapid prototyping and MVP development for various startup projects.",
    achievements: [
      "Launched 3 MVPs successfully",
      "Learned 5 new frameworks",
      "Worked in agile environment",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
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
