import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Phone, ExternalLink, Linkedin } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "p.pranitha0015@gmail.com",
      href: "mailto:p.pranitha0015@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (469) 560-8677",
      href: "tel:+14695608677"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Pothugunt1a",
      href: "https://github.com/Pothugunt1a"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/pranitha-p-212849198/"
    }
  ];

  const handleContactClick = (href: string | null, label: string) => {
    if (href) {
      console.log(`Contact clicked: ${label} - ${href}`);
      // todo: remove mock functionality
      // In the real app, this would open the link
    }
  };

  const handleDownloadResume = () => {
    console.log('Download resume clicked from contact section');
    // todo: remove mock functionality
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              I'm always open to discussing new opportunities, interesting projects, 
              or potential collaborations. Let's connect and explore how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 space-y-6 hover-elevate">
              <h3 className="text-2xl font-bold text-center mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="group flex items-center gap-6 p-4 rounded-lg hover:bg-muted/50 transition-all duration-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{contact.label}</p>
                      {contact.href ? (
                        <Button
                          variant="ghost"
                          className="p-0 h-auto font-semibold text-base text-left justify-start hover-elevate mt-1"
                          onClick={() => handleContactClick(contact.href, contact.label)}
                          data-testid={`button-contact-${contact.label.toLowerCase()}`}
                        >
                          {contact.value}
                          <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </Button>
                      ) : (
                        <p className="font-semibold text-base mt-1">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 space-y-6">
              <h3 className="text-2xl font-bold">Let's Work Together</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm passionate about building scalable applications and solving complex 
                  problems through code. Whether you're looking for:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Full-stack web development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Cloud-native API development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Data analysis and visualization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>DevOps and automation solutions</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  I'd love to discuss how my expertise can contribute to your team's success.
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => handleContactClick("mailto:p.pranitha0015@gmail.com", "Email")}
                data-testid="button-contact-primary"
                className="hover-elevate"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send me an email
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                data-testid="button-download-resume-contact"
                className="hover-elevate"
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