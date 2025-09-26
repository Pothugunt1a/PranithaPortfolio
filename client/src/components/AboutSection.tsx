import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Cpu } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useInView } from "@/lib/animations";
import { 
  staggerContainer, 
  fadeUpVariants, 
  scaleInVariants, 
  blurVariants,
  getReducedMotionVariants 
} from "@/lib/animations";

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useInView(0.1);
  
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in Java, Python, JavaScript, TypeScript with React.js, Node.js, and Flask"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Extensive experience with GCP, AWS, and Azure for scalable deployments"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Proficient in PostgreSQL, MySQL, BigQuery, and data pipeline automation"
    },
    {
      icon: Cpu,
      title: "API Development",
      description: "RESTful and GraphQL APIs with JWT authentication and performance optimization"
    }
  ];

  // Create staggered variants for highlight cards
  const highlightStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // 0.08s increments as specified
      },
    },
  };

  // Badge stagger variants
  const badgeStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const badgeScaleVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  // Get variants based on motion preferences
  const containerVariants = prefersReducedMotion ? getReducedMotionVariants(staggerContainer) : staggerContainer;
  const cardVariants = prefersReducedMotion ? getReducedMotionVariants(fadeUpVariants) : fadeUpVariants;
  const textBlurVariants = prefersReducedMotion ? getReducedMotionVariants(blurVariants) : blurVariants;
  const iconVariants = prefersReducedMotion ? getReducedMotionVariants(scaleInVariants) : scaleInVariants;

  return (
    <motion.section 
      id="about" 
      className="py-24 relative"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              variants={cardVariants}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={cardVariants}
            >
              As a software engineer, I thrive on turning complex problems into elegant, 
              user-friendly solutions. With a strong background in both front-end and back-end 
              development, I enjoy building projects from concept to deployment.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={prefersReducedMotion ? getReducedMotionVariants(highlightStaggerVariants) : highlightStaggerVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={prefersReducedMotion ? {} : { 
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <Card className="p-6 hover-elevate transition-all duration-300 h-full" data-testid={`card-highlight-${index}`}>
                  <div className="space-y-4">
                    <motion.div 
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                      variants={iconVariants}
                    >
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
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
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <motion.div 
                  className="space-y-6"
                  variants={textBlurVariants}
                >
                  <h3 className="text-2xl font-bold">My Journey</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <motion.p variants={textBlurVariants}>
                      Currently working as a Software Developer at RTNextGenAI, where I design and deploy 
                      scalable cloud-native API infrastructure using cutting-edge technologies like GraphQL, 
                      PostgreSQL, and GCP services.
                    </motion.p>
                    <motion.p variants={textBlurVariants}>
                      Previously at Multiplier AI Solutions, I led end-to-end development of web applications 
                      for healthcare and pharma clients, delivering 30% performance improvements and enhancing 
                      SEO performance by 25%.
                    </motion.p>
                    <motion.p variants={textBlurVariants}>
                      My passion lies in creating impactful applications that not only solve users' needs 
                      but also provide delightful experiences through clean code and efficient architecture.
                    </motion.p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                >
                  <motion.h3 
                    className="text-2xl font-bold"
                    variants={cardVariants}
                  >
                    Core Expertise
                  </motion.h3>
                  <div className="space-y-4">
                    <motion.div variants={cardVariants}>
                      <h4 className="font-medium mb-2">Programming Languages</h4>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        variants={prefersReducedMotion ? getReducedMotionVariants(badgeStaggerVariants) : badgeStaggerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      >
                        {['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'PHP'].map((tech) => (
                          <motion.div key={tech} variants={badgeScaleVariants}>
                            <Badge variant="secondary" data-testid={`badge-language-${tech.toLowerCase()}`}>
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                    
                    <motion.div variants={cardVariants}>
                      <h4 className="font-medium mb-2">Frameworks & Tools</h4>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        variants={prefersReducedMotion ? getReducedMotionVariants(badgeStaggerVariants) : badgeStaggerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      >
                        {['React.js', 'Node.js', 'Flask', 'Spring Boot', 'Docker', 'GraphQL'].map((tech) => (
                          <motion.div key={tech} variants={badgeScaleVariants}>
                            <Badge variant="secondary" data-testid={`badge-framework-${tech.toLowerCase().replace('.', '')}`}>
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                    
                    <motion.div variants={cardVariants}>
                      <h4 className="font-medium mb-2">Cloud Platforms</h4>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        variants={prefersReducedMotion ? getReducedMotionVariants(badgeStaggerVariants) : badgeStaggerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      >
                        {['Google Cloud Platform', 'AWS', 'Azure', 'PostgreSQL', 'BigQuery'].map((tech) => (
                          <motion.div key={tech} variants={badgeScaleVariants}>
                            <Badge variant="secondary" data-testid={`badge-cloud-${tech.toLowerCase().replace(' ', '')}`}>
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}