import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Github,
  ExternalLink,
  Linkedin,
  Copy,
  Check,
  Globe,
  Database,
  BarChart3,
  Settings,
} from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "p.pranitha0015@gmail.com";

  const contactInfo = [
    {
      icon: Mail,
      label: "Copy Email",
      value: email,
      isCopy: true,
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      isCopy: false,
      href: "https://www.linkedin.com/in/pranitha-p-212849198/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Pothugunt1a",
      isCopy: false,
      href: "https://github.com/Pothugunt1a",
    },
  ];

  const skills = [
    {
      icon: Globe,
      title: "Full-stack web development",
      description:
        "Modern web applications with React, Node.js, and TypeScript",
    },
    {
      icon: Database,
      title: "Cloud-native API development",
      description: "Scalable REST APIs and microservices architecture",
    },
    {
      icon: BarChart3,
      title: "Data analysis and visualization",
      description:
        "Transform data into actionable insights and compelling visuals",
    },
    {
      icon: Settings,
      title: "DevOps and automation solutions",
      description:
        "CI/CD pipelines, containerization, and infrastructure automation",
    },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
      console.log("Email copied to clipboard");
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleContactClick = (href: string | null, label: string) => {
    if (href) {
      console.log(`Contact clicked: ${label} - ${href}`);
      window.open(href, "_blank");
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/PranithaP.pdf';
    link.download = 'Pranitha_Pothuguntla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-3">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              I'm currently open to new opportunities. Reach out via email or
              connect on social media.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 space-y-4 hover-elevate border-2 border-primary/10">
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                  <img
                    src="/handshake.gif?v=1"
                    alt="Handshake animation"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      console.log('Failed to load handshake gif');
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="group">
                    {contact.isCopy ? (
                      <Button
                        variant="outline"
                        className="w-full flex items-center gap-3 p-4 h-auto border-2 hover:border-primary/50 transition-all duration-200"
                        onClick={handleCopyEmail}
                        data-testid="button-copy-email"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center">
                          {emailCopied ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                            {contact.label}
                          </p>
                          <p className="font-semibold text-base">
                            {contact.value}
                          </p>
                        </div>
                        {emailCopied && (
                          <span className="text-sm text-green-600 font-medium">
                            Copied!
                          </span>
                        )}
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full flex items-center gap-3 p-4 h-auto border-2 hover:border-primary/50 transition-all duration-200"
                        onClick={() =>
                          handleContactClick(contact.href, contact.label)
                        }
                        data-testid={`button-contact-${contact.label.toLowerCase()}`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            contact.icon === Linkedin
                              ? "bg-gradient-to-r from-blue-600/20 to-blue-700/10"
                              : "bg-gradient-to-r from-gray-800/20 to-gray-900/10"
                          }`}
                        >
                          <contact.icon
                            className={`w-5 h-5 ${
                              contact.icon === Linkedin
                                ? "text-blue-600"
                                : "text-gray-700"
                            }`}
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                            {contact.label}
                          </p>
                          <p className="font-semibold text-base">
                            {contact.value}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 space-y-4 hover-elevate border-2 border-primary/10">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold">Let's Work Together</h3>
                <p className="text-muted-foreground mt-1">
                  I'm passionate about building scalable applications and
                  solving complex problems through code. Whether you're looking
                  for:
                </p>
              </div>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group p-2 rounded-lg hover:bg-muted/50 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                        <skill.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">
                          {skill.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-border/50">
                <p className="text-center text-muted-foreground font-medium">
                  I'd love to discuss how my expertise can contribute to your
                  team's success.
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() =>
                  window.open("mailto:p.pranitha0015@gmail.com", "_blank")
                }
                data-testid="button-contact-primary"
                className="hover-elevate bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send me an email
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                data-testid="button-download-resume-contact"
                className="hover-elevate border-2"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
