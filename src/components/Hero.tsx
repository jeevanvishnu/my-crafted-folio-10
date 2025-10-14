import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Problem Solver",
  "Creative Thinker",
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full bg-gradient-primary p-1 shadow-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
              Jeevan Vishnu
            </span>
          </h1>

          <div className="h-16 md:h-20 mb-8 animate-fade-in-up">
            <p className="text-2xl md:text-4xl font-semibold text-muted-foreground">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up">
           I'm a Full Stack Developer with a passion for building web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
            <Button
              size="lg"
              className="gradient-primary text-white shadow-glow hover:scale-105 transition-transform"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in-up">
            <a
              href="https://github.com/jeevanvishnu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeevan-vishnu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};
