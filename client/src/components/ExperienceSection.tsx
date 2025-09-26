import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Award } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useInView } from "@/lib/animations";
import { 
  staggerContainer,
  fadeUpVariants,
  scaleInVariants,
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
  const cardVariants = prefersReducedMotion ? getReducedMotionVariants(scaleInVariants) : scaleInVariants;

  return (
    <motion.section 
      id="experience" 
      className="py-24 bg-background relative"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
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

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={prefersReducedMotion ? {} : { 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="h-full"
              >
                <Card
                  className="p-8 h-full hover:shadow-xl transition-all duration-300 border border-border"
                  data-testid={`card-experience-${index}`}
                >
                  <div className="space-y-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <h3 className="text-2xl font-bold">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="whitespace-nowrap">{exp.type}</Badge>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-lg font-medium text-primary">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold">Key Achievements</h4>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.slice(0, 4).map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                        {exp.achievements.length > 4 && (
                          <li className="text-sm text-muted-foreground/70 italic">
                            +{exp.achievements.length - 4} more achievements
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3 mt-auto">
                      <h4 className="font-semibold text-sm">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                            data-testid={`badge-exp-tech-${tech.toLowerCase().replace(".", "")}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}