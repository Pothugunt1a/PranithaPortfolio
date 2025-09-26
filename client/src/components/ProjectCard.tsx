import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, RotateCw } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  achievements,
  liveUrl,
  githubUrl 
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    console.log(`Flipped project card: ${title}`);
  };

  const handleLiveClick = () => {
    console.log(`Live demo clicked for: ${title}`);
    // todo: remove mock functionality
  };

  const handleGithubClick = () => {
    console.log(`GitHub clicked for: ${title}`);
    // todo: remove mock functionality
  };

  return (
    <div className="group perspective-1000" style={{ height: '384px' }}>
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden hover-elevate transition-all duration-300 cursor-pointer overflow-hidden" 
              onClick={handleFlip}
              data-testid={`card-project-front-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/90 line-clamp-2">{description}</p>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 6).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {technologies.length > 6 && (
                <Badge variant="outline" className="text-xs">
                  +{technologies.length - 6} more
                </Badge>
              )}
            </div>
            
            <div className="flex items-center justify-center pt-4">
              <Button variant="ghost" size="sm" className="hover-elevate">
                <RotateCw className="w-4 h-4 mr-2" />
                Flip for details
              </Button>
            </div>
          </div>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 hover-elevate transition-all duration-300" 
              data-testid={`card-project-back-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{title}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleFlip}
                data-testid={`button-flip-back-${title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <RotateCw className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-4 flex-1">
              <div>
                <h4 className="font-semibold mb-2">About Project</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 pt-4 border-t">
              {liveUrl && (
                <Button 
                  size="sm" 
                  onClick={handleLiveClick}
                  data-testid={`button-live-${title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex-1 hover-elevate"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {githubUrl && (
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={handleGithubClick}
                  data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex-1 hover-elevate"
                >
                  GitHub
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}