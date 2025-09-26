import { Button } from "@/components/ui/button";
import { Github, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:pranithapothuguntla16@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com"
    }
  ];

  const handleSocialClick = (href: string, label: string) => {
    console.log(`Social link clicked: ${label} - ${href}`);
    // todo: remove mock functionality
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="space-y-4">
              <Button
                variant="ghost"
                onClick={handleLogoClick}
                className="text-xl font-bold p-0 h-auto hover-elevate"
                data-testid="button-footer-logo"
              >
                Pranitha Pothuguntla
              </Button>
              <p className="text-sm text-muted-foreground max-w-xs">
                Software Developer & Data Analyst passionate about building 
                scalable applications and solving complex problems through code.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Experience', href: '#experience' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Contact', href: '#contact' }
                ].map((link) => (
                  <Button
                    key={link.label}
                    variant="ghost"
                    className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground hover-elevate"
                    onClick={() => console.log(`Footer link clicked: ${link.label}`)}
                    data-testid={`button-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Connect</h3>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    onClick={() => handleSocialClick(social.href, social.label)}
                    data-testid={`button-social-${social.label.toLowerCase()}`}
                    className="hover-elevate"
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Available for remote opportunities and collaborations
              </p>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Pranitha Pothuguntla. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}