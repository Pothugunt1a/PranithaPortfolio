import { motion, useSpring, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, RotateCw } from "lucide-react";
import { useState, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { imageMaskVariants, getReducedMotionVariants } from "@/lib/animations";

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
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Enhanced 3D hover effects with spring animations
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsFlipped(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
    setIsHovered(false);
    if (!prefersReducedMotion) {
      x.set(0);
      y.set(0);
    }
  };

  const handleLiveClick = () => {
    console.log(`Live demo clicked for: ${title}`);
    // todo: remove mock functionality
  };

  const handleGithubClick = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  };

  const maskVariants = prefersReducedMotion ? getReducedMotionVariants(imageMaskVariants) : imageMaskVariants;

  return (
    <motion.div 
      ref={ref}
      className="group perspective-1000 relative" 
      style={{ 
        height: '384px',
        minHeight: '384px',
        maxHeight: '384px',
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={prefersReducedMotion ? {} : {
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <motion.div 
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center'
        }}
        animate={prefersReducedMotion ? {} : {
          rotateZ: isHovered ? [-1, 1, -1] : 0,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden cursor-pointer overflow-hidden shadow-lg" 
              data-testid={`card-project-front-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <div className="relative h-48 overflow-hidden">
            <motion.div
              className="relative w-full h-full"
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
              variants={maskVariants}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{
                  transform: prefersReducedMotion ? 'none' : isHovered ? 'scale(1.1) rotate(1deg)' : 'scale(1)'
                }}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <motion.div 
              className="absolute bottom-4 left-4 right-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/90 line-clamp-2">{description}</p>
            </motion.div>
          </div>
          
          <div className="p-6 space-y-4">
            <motion.div 
              className="flex flex-wrap gap-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {technologies.slice(0, 6).map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: { scale: 1, opacity: 1 }
                  }}
                >
                  <Badge variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
              {technologies.length > 6 && (
                <motion.div
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: { scale: 1, opacity: 1 }
                  }}
                >
                  <Badge variant="outline" className="text-xs">
                    +{technologies.length - 6} more
                  </Badge>
                </motion.div>
              )}
            </motion.div>
            
            <div className="flex items-center justify-center pt-4">
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              >
                <Button variant="ghost" size="sm">
                  <motion.div
                    animate={prefersReducedMotion ? {} : {
                      rotate: isHovered ? 180 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <RotateCw className="w-4 h-4 mr-2" />
                  </motion.div>
                  Hover to flip
                </Button>
              </motion.div>
            </div>
          </div>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 overflow-hidden shadow-lg" 
              data-testid={`card-project-back-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4 flex-shrink-0">
              <motion.h3 
                className="text-xl font-bold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {title}
              </motion.h3>
            </div>
            
            <motion.div 
              className="space-y-4 flex-1 overflow-y-auto min-h-0"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                <h4 className="font-semibold mb-2">About Project</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
              </motion.div>
              
              <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {achievements.slice(0, 4).map((achievement, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                      variants={{ hidden: { x: -10, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                  {achievements.length > 4 && (
                    <motion.li 
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                      variants={{ hidden: { x: -10, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>+{achievements.length - 4} more features...</span>
                    </motion.li>
                  )}
                </ul>
              </motion.div>
              
              <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                <h4 className="font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1">
                  {technologies.slice(0, 8).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {technologies.length > 8 && (
                    <Badge variant="outline" className="text-xs">
                      +{technologies.length - 8} more
                    </Badge>
                  )}
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex gap-2 pt-4 border-t flex-shrink-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {liveUrl && (
                <motion.div 
                  className="flex-1"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <Button 
                    size="sm" 
                    onClick={handleLiveClick}
                    data-testid={`button-live-${title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full hover-elevate"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </motion.div>
              )}
              {githubUrl && (
                <motion.div 
                  className="flex-1"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={handleGithubClick}
                    data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full hover-elevate"
                  >
                    GitHub
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}