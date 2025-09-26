import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Developer",
      company: "RTNextGenAI",
      period: "May 2024 – Present",
      location: "Remote",
      type: "Full-time",
      description: "Scalable Cloud-Native API Infrastructure with Cursor AI on GCP",
      achievements: [
        "Designed and deployed API services on GCP using RESTful and GraphQL standards",
        "Built backend services with Python/Flask and PostgreSQL for high query performance",
        "Integrated APIs with GraphQL (Apollo Server) to reduce latency and streamline processing",
        "Implemented JWT-based authentication and automated data ingestion pipelines",
        "Applied test automation frameworks and optimized API calls with pagination and caching",
        "Implemented CI/CD workflows with GitHub Actions, improving release frequency"
      ],
      technologies: ["Python", "Flask", "GraphQL", "PostgreSQL", "GCP", "Docker", "GitHub Actions"]
    },
    {
      title: "Senior Software Developer",
      company: "Multiplier AI Solutions",
      period: "July 2021 – Dec 2022",
      location: "Remote",
      type: "Full-time",
      description: "Web Development for Healthcare and Pharma Clients",
      achievements: [
        "Led development of 100+ web pages, delivering 30% performance improvement",
        "Built responsive UI components with React Hooks and efficient state management",
        "Integrated RESTful APIs across multi-cloud environments for scalable applications",
        "Enhanced SEO performance by 25% and increased user engagement by 40%",
        "Collaborated with 5 developers to decrease bug rates by 40%",
        "Managed hosting and deployment for 15+ domains on GoDaddy"
      ],
      technologies: ["React.js", "Node.js", "JavaScript", "WordPress", "PHP", "Bootstrap"]
    },
    {
      title: "Software Developer Executive",
      company: "Multiplier AI Solutions",
      period: "Jan 2021 – July 2021",
      location: "Remote",
      type: "Full-time",
      description: "Modern JavaScript Development and Dashboard Solutions",
      achievements: [
        "Developed clean, modular codebases using ES6+, reducing technical debt",
        "Built dynamic, real-time dashboards with React.js and backend integrations",
        "Engineered custom chatbots using TypeScript for client-specific needs",
        "Enhanced website performance by 40% decrease in page load times",
        "Managed Vtiger CRM reducing operational overhead by 25%"
      ],
      technologies: ["TypeScript", "React.js", "ES6+", "Vtiger CRM"]
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
        "Delivered 40% reduction in manual update time for customer management"
      ],
      technologies: ["TypeScript", "Flask", "Python", "PostgreSQL", "Power BI"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-xl text-muted-foreground">
              My professional journey in software development and data analysis
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover-elevate transition-all duration-300" data-testid={`card-experience-${index}`}>
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
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg font-medium text-primary">{exp.description}</p>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" data-testid={`badge-exp-tech-${tech.toLowerCase().replace('.', '')}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}