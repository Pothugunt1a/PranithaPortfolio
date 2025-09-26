import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_developer_headshot_3fd66208.png";

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pranitha_Pothuguntla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold">
                Pranitha Pothuguntla
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground">
                I build scalable applications, APIs, and cloud-native solutions with over{" "}
                <span className="text-primary font-semibold">3+ years of experience</span>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Software Developer and Data Analyst specializing in full-stack development, 
                cloud architecture, and data-driven solutions. Experienced in Java, Python, 
                JavaScript, and modern cloud platforms.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                data-testid="button-view-work"
                className="group hover-elevate"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                data-testid="button-download-resume"
                className="hover-elevate"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-border hover-elevate transition-all duration-300">
                <img
                  src={profileImage}
                  alt="Pranitha Pothuguntla - Professional headshot"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}