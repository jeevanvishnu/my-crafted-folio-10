import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Web Dev"];

const projects = [
  {
    id: 1,
    title: "Chat-App",
    category: "Full Stack",
    description: "ChatApp is a real-time messaging application that enables users to chat instantly and securely with friends.",
    image: "assets/chat.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Socke.io" ],
    demoUrl: "https://chaty-tg0id.sevalla.app/login",
    githubUrl: "https://github.com/jeevanvishnu/Chat-App",
  },
  {
    id: 2,
    title: "Eco Buy",
    category: "Web Dev",
    description: "Eco Buy is a e-commerce platform for electronic gadgets with admin and user dashboards, product offers, and payment integration.",
    image: "assets/Eco-buy.png",
    tags: [ "Node js", "MongoDB", "Express js", "EJS", "razorpay","Chart.js"],
    demoUrl: "https://ecobuy-pz4m.onrender.com/",
    githubUrl: "https://github.com/jeevanvishnu/EcoBuy",
  },
  {
    id: 3,
    title: "Mern NoteBook",
    category: "web app",
    description: "Create a note and edit delete features",
    image: "assets/Note.png",
    tags: ["Node", "Express", "React", "MongoDB"],
    demoUrl: "https://mern-stack-note-book-1.onrender.com/",
    githubUrl: "https://github.com/jeevanvishnu/Mern-stack-Note-book-",
  },
  {
    id: 4,
    title: "Animated Landing Page",
    category: "web app",
    description: "animated landing page with responsive design",
    image: "assets/Animation.png",
    tags: ["Html","css","Gsap","React","JavaScript"],
    demoUrl: "https://jeevanvishnu.github.io/Anime-3D/",
    githubUrl: "https://github.com/jeevanvishnu/Anime-3D/deployments",
  },
  {
    id: 5,
    title: "Todo App",
    category: "web app",
    description: "todo app with add, edit, delete and complete tasks functionality",
    image: "assets/Todo-image.png",
    tags: ["React js", "Tailwind css", "JavaScript"],
    demoUrl: "https://jeevanvishnu.github.io/React-Todo-App/",
    githubUrl: "https://github.com/jeevanvishnu/React-Todo-App",
  },
  {
    id: 6,
    title: "Weather App",
    category: "Web Dev",
    description: "Beautiful weather application with location-based forecasts",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    tags: ["React", "API Integration", "CSS"],
    demoUrl: "https://github.com/jeevanvishnu/WheaterApp",
    githubUrl: "https://github.com/jeevanvishnu/WheaterApp",
  },
  {
    id: 7,
    title: "Session-Report Generator",
    category: "Web Dev",
    description: "Session Report Generator is a web application that helps generate a report",
    image: "assets/session.png",
    tags: ["Html","Css","JavaScript"],
    demoUrl: "https://communicationsesionreport.netlify.app/",
    githubUrl: "https://github.com/jeevanvishnu/Session-Report",
  },
  {
    id: 8,
    title: "Jio App",
    category: "Web Dev",
    description: "jio app clone without responsive design",
    image: "assets/Jio-app.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://jeevanvishnu.github.io/Jio-mart-clone/",
    githubUrl: "https://github.com/jeevanvishnu/Jio-mart-clone?tab=readme-ov-file",
  },
];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development and design
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "gradient-primary text-white"
                  : "hover:border-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2 glass-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="translate-y-4 group-hover:translate-y-0 transition-transform"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="translate-y-4 group-hover:translate-y-0 transition-transform delay-75"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
