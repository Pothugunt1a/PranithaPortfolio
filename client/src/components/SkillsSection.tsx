import { motion, useAnimationControls, useMotionValue, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Cloud, Database, Bolt, BarChart3, Settings } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useInView } from "@/lib/animations";
import { 
  staggerContainer, 
  fadeUpVariants,
  scaleInVariants,
  progressVariants,
  getReducedMotionVariants 
} from "@/lib/animations";
import { useEffect, useState } from "react";

// Animated counter component
function AnimatedCounter({ target, isVisible, duration = 1000 }: { target: number; isVisible: boolean; duration?: number }) {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isVisible) return;
    
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, isVisible, duration, prefersReducedMotion]);

  return <span>{count}%</span>;
}

// Animated progress bar component
function AnimatedProgressBar({ value, isVisible, delay = 0 }: { value: number; isVisible: boolean; delay?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const progressValue = useMotionValue(0);
  const width = useTransform(progressValue, [0, 100], ["0%", "100%"]);

  useEffect(() => {
    if (!isVisible) return;
    
    if (prefersReducedMotion) {
      progressValue.set(value);
      return;
    }

    const timer = setTimeout(() => {
      progressValue.set(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, isVisible, delay, prefersReducedMotion, progressValue]);

  return (
    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-full bg-primary rounded-full origin-left"
        style={{ width: prefersReducedMotion ? `${value}%` : width }}
        transition={prefersReducedMotion ? {} : {
          duration: 1,
          ease: "easeOut",
        }}
      />
    </div>
  );
}

export default function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useInView(0.1);
  
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "SQL", level: 88 },
        { name: "PHP", level: 75 }
      ]
    },
    {
      icon: Bolt,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Flask", level: 80 },
        { name: "Spring Boot", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "Google Cloud Platform", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Docker", level: 80 },
        { name: "GitHub Actions", level: 85 },
        { name: "CI/CD", level: 80 }
      ]
    },
    {
      icon: Database,
      title: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "BigQuery", level: 80 },
        { name: "Cloud Storage", level: 85 },
        { name: "Redis", level: 70 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      icon: BarChart3,
      title: "Data Analysis & ML",
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 88 },
        { name: "Sci-kit Learn", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 80 }
      ]
    },
    {
      icon: Settings,
      title: "Development Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Jupyter Notebook", level: 85 },
        { name: "Linux", level: 80 },
        { name: "Jira", level: 75 }
      ]
    }
  ];

  // Additional certifications and achievements
  const certifications = [
    "Python for Data Science - Cognitive Class",
    "Frontend Fundamentals - Udemy, Pirple",
    "Python for Data Science - NPTEL",
    "What is Data Science? - Coursera",
    "Artificial Intelligence Workshop - ETHICAL EDU FABRICA",
    "Career-Edge Knockdown the Lockdown - TCS iON",
    "LAUNCHPAD '20 (E-SUMMIT) - BITS Pilani"
  ];

  // Create staggered variants for skill cards
  const skillStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Get variants based on motion preferences
  const headerVariants = prefersReducedMotion ? getReducedMotionVariants(staggerContainer) : staggerContainer;
  const cardContainerVariants = prefersReducedMotion ? getReducedMotionVariants(skillStaggerVariants) : skillStaggerVariants;
  const cardVariants = prefersReducedMotion ? getReducedMotionVariants(scaleInVariants) : scaleInVariants;
  const certificationVariants = prefersReducedMotion ? getReducedMotionVariants(staggerContainer) : staggerContainer;

  return (
    <motion.section 
      id="skills" 
      className="py-24 bg-muted/30 relative"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              variants={fadeUpVariants}
            >
              Technical Skills
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground"
              variants={fadeUpVariants}
            >
              Comprehensive expertise across the full development stack and data science pipeline
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardContainerVariants}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={prefersReducedMotion ? {} : {
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="p-6 hover-elevate transition-all duration-300 h-full" data-testid={`card-skill-category-${index}`}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                        whileHover={prefersReducedMotion ? {} : {
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <category.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h3 className="font-bold text-lg">{category.title}</h3>
                    </div>
                    
                    <motion.div 
                      className="space-y-4"
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={skillStaggerVariants}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skillIndex} 
                          className="space-y-2"
                          variants={skillItemVariants}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <motion.span 
                              className="text-xs text-muted-foreground"
                              initial={{ opacity: 0 }}
                              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                              transition={{ delay: 0.5 + skillIndex * 0.1 }}
                            >
                              <AnimatedCounter 
                                target={skill.level} 
                                isVisible={isInView}
                                duration={1000}
                              />
                            </motion.span>
                          </div>
                          <AnimatedProgressBar
                            value={skill.level}
                            isVisible={isInView}
                            delay={300 + skillIndex * 100}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Card className="p-8">
              <motion.div 
                className="text-center mb-8"
                variants={fadeUpVariants}
              >
                <h3 className="text-2xl font-bold mb-4">Certifications & Achievements</h3>
                <p className="text-muted-foreground">
                  Professional development and continuous learning milestones
                </p>
              </motion.div>
              
              <motion.div 
                className="grid md:grid-cols-2 gap-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={certificationVariants}
              >
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover-elevate transition-all duration-200" 
                    data-testid={`certification-${index}`}
                    variants={fadeUpVariants}
                    whileHover={prefersReducedMotion ? {} : {
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-primary rounded-full flex-shrink-0"
                      animate={prefersReducedMotion ? {} : {
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    <span className="text-sm">{cert}</span>
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}