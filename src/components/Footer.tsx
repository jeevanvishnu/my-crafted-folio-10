import { ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block mb-2">
              Let's Build Something Great
            </h3>
            <p className="text-muted-foreground">
              Open to exciting opportunities and collaborations
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
            <span>by Jeevan Vishnu</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </div>

          <Button
            onClick={scrollToTop}
            size="icon"
            className="gradient-primary text-white shadow-glow hover:scale-110 transition-transform rounded-full"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
