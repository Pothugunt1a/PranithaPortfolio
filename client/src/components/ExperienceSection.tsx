import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useInView } from "@/lib/animations";
import { 
  timelineCardVariants, 
  timelinePathVariants, 
  timelineDotVariants,
  staggerContainer,
  fadeUpVariants,
  getReducedMotionVariants 
} from "@/lib/animations";

export default function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useInView(0.1);
  
  const experiences = [
    {
      title: "Software Developer",
      company: "RTNextGenAI",
      period: "May 2024 – Present",
      location: "Remote",
      type: "Full-time",
      description:
        "Scalable Cloud-Native API Infrastructure with Cursor AI on GCP",
      achievements: [
        "Designed and deployed API services on GCP using RESTful and GraphQL standards",
        "Built backend services with Python/Flask and PostgreSQL for high query performance",
        "Integrated APIs with GraphQL (Apollo Server) to reduce latency and streamline processing",
        "Implemented JWT-based authentication and automated data ingestion pipelines",
        "Applied test automation frameworks and optimized API calls with pagination and caching",
        "Implemented CI/CD workflows with GitHub Actions, improving release frequency",
      ],
      technologies: [
        "Python",
        "Flask",
        "GraphQL",
        "PostgreSQL",
        "GCP",
        "Docker",
        "GitHub Actions",
      ],
    },
    {
      title: "Senior Software Developer",
      company: "Multiplier AI Solutions",
      period: "Oct 2020 – Dec 2022",
      location: "Remote",
      type: "Full-time",
      description: "Web Development for Healthcare and Pharma Clients",
      achievements: [
        "Led development of 100+ web pages, delivering 30% performance improvement",
        "Built responsive UI components with React Hooks and efficient state management",
        "Integrated RESTful APIs across multi-cloud environments for scalable applications",
        "Enhanced SEO performance by 25% and increased user engagement by 40%",
        "Collaborated with 5 developers to decrease bug rates by 40%",
        "Managed hosting and deployment for 15+ domains on GoDaddy",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "JavaScript",
        "WordPress",
        "PHP",
        "Bootstrap",
      ],
    },
    {
      title: "Software Developer Executive",
      company: "Multiplier AI Solutions",
      period: "Oct 2020 – Dec 2022",
      location: "Remote",
      type: "Full-time",
      description: "Modern JavaScript Development and Dashboard Solutions",
      achievements: [
        "Developed clean, modular codebases using ES6+, reducing technical debt",
        "Built dynamic, real-time dashboards with React.js and backend integrations",
        "Engineered custom chatbots using TypeScript for client-specific needs",
        "Enhanced website performance by 40% decrease in page load times",
        "Managed Vtiger CRM reducing operational overhead by 25%",
      ],
      technologies: ["TypeScript", "React.js", "ES6+", "Vtiger CRM"],
    },
    {
      title: "Software Developer Intern",
      company: "Inmovidu Technologies",
      period: "Aug 2020 – Sept 2020",
      location: "Remote",
      type: "Internship",
      description: "Full-Stack Web Application Development",
      achievements: [
        "Designed full-stack web application for customer profile management",
        "Built RESTful API endpoints for CRUD operations and data processing",
        "Implemented JWT authentication and role-based access control",
        "Connected APIs to Power BI dashboard for data visualization",
        "Delivered 40% reduction in manual update time for customer management",
      ],
      technologies: ["TypeScript", "Flask", "Python", "PostgreSQL", "Power BI"],
    },
  ];

  // Get variants based on motion preferences
  const headerVariants = prefersReducedMotion ? getReducedMotionVariants(staggerContainer) : staggerContainer;
  const cardVariants = prefersReducedMotion ? getReducedMotionVariants(timelineCardVariants) : timelineCardVariants;
  const pathVariants = prefersReducedMotion ? getReducedMotionVariants(timelinePathVariants) : timelinePathVariants;
  const dotVariants = prefersReducedMotion ? getReducedMotionVariants(timelineDotVariants) : timelineDotVariants;

  return (
    <motion.section 
      id="experience" 
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
              Work Experience
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground"
              variants={fadeUpVariants}
            >
              My professional journey in software development and data analysis
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - hidden on mobile for simplicity */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px">
              <motion.div
                className="w-full bg-gradient-to-b from-primary to-primary/20"
                style={{ height: '100%' }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={pathVariants}
              />
            </div>

            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                const direction = isEven ? 'right' : 'left';
                
                return (
                  <motion.div
                    key={index}
                    className={`relative md:w-1/2 ${isEven ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={cardVariants}
                    custom={prefersReducedMotion ? undefined : direction}
                  >
                    {/* Timeline dot - hidden on mobile */}
                    <motion.div
                      className={`hidden md:block absolute top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg ${
                        isEven ? '-left-2' : '-right-2'
                      }`}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={dotVariants}
                      custom={index}
                    />
                    
                    <motion.div
                      whileHover={prefersReducedMotion ? {} : { 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Card
                        className="p-8 hover-elevate transition-all duration-300 shadow-lg"
                        data-testid={`card-experience-${index}`}
                      >
                        <div className="space-y-6">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div className="space-y-2">
                              <h3 className="text-2xl font-bold">{exp.title}</h3>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Building className="w-4 h-4" />
                                <span className="font-medium">{exp.company}</span>
                                <span>•</span>
                                <Badge variant="outline">{exp.type}</Badge>
                              </div>
                            </div>

                            <div className="flex flex-col lg:items-end gap-2">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-lg font-medium text-primary">
                            {exp.description}
                          </p>

                          <div className="space-y-4">
                            <h4 className="font-semibold">Key Achievements:</h4>
                            <motion.ul 
                              className="grid md:grid-cols-2 gap-2"
                              variants={staggerContainer}
                              initial="hidden"
                              animate={isInView ? "visible" : "hidden"}
                            >
                              {exp.achievements.map((achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                  variants={fadeUpVariants}
                                >
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Technologies Used:</h4>
                            <motion.div 
                              className="flex flex-wrap gap-2"
                              variants={staggerContainer}
                              initial="hidden"
                              animate={isInView ? "visible" : "hidden"}
                            >
                              {exp.technologies.map((tech) => (
                                <motion.div key={tech} variants={fadeUpVariants}>
                                  <Badge
                                    variant="secondary"
                                    data-testid={`badge-exp-tech-${tech.toLowerCase().replace(".", "")}`}
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </motion.div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
