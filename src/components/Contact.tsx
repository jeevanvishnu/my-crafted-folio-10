import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      console.log(accessKey);
      if (!accessKey) {
        throw new Error("Missing VITE_WEB3FORMS_ACCESS_KEY in environment");
      }

      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (err) {
      toast({
        title: "Message failed to send",
        description: "Please try again later or email me directly.",
      });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 glass-effect hover:shadow-card transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jeevanvishnu21@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-effect hover:shadow-card transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9778486647
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-effect hover:shadow-card transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    
                    
                   kerala, india
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/jeevanvishnu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white hover:scale-110 transition-transform shadow-glow"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/jeevan-vishnu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white hover:scale-110 transition-transform shadow-glow"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              
            </div>
          </div>

          <Card className="lg:col-span-2 p-8 glass-effect">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full gradient-primary text-white shadow-glow hover:scale-105 transition-transform"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
