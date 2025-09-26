import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("p.pranitha0015@gmail.com");
      toast({
        title: "Email copied!",
        description: "Email address has been copied to your clipboard.",
      });
    } catch (err) {
      console.error("Failed to copy email:", err);
      toast({
        title: "Copy failed",
        description: "Please copy the email manually: p.pranitha0015@gmail.com",
        variant: "destructive",
      });
    }
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/pranitha-p-212849198/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/Pothugunt1a", "_blank");
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              I'm currently open to new opportunities. Reach out via email or connect on social media.
            </p>
          </div>

          <Card className="p-8">
            <div className="space-y-6">
              {/* Email Section */}
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">p.pranitha0015@gmail.com</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyEmail}
                  data-testid="button-copy-email"
                  className="flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy Email
                </Button>
              </div>

              {/* Social Media Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Connect on Social Media</h3>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-3 p-4 h-auto"
                    onClick={handleLinkedInClick}
                    data-testid="button-linkedin"
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Connect professionally</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Button>

                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-3 p-4 h-auto"
                    onClick={handleGitHubClick}
                    data-testid="button-github"
                  >
                    <div className="w-8 h-8 bg-gray-900 dark:bg-gray-100 rounded-lg flex items-center justify-center">
                      <Github className="w-4 h-4 text-white dark:text-gray-900" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">View my projects</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}