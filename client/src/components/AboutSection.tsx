import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Cpu } from "lucide-react";

export default function AboutSection() {
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

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              As a software engineer, I thrive on turning complex problems into elegant, 
              user-friendly solutions. With a strong background in both front-end and back-end 
              development, I enjoy building projects from concept to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover-elevate transition-all duration-300" data-testid={`card-highlight-${index}`}>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Currently working as a Software Developer at RTNextGenAI, where I design and deploy 
                    scalable cloud-native API infrastructure using cutting-edge technologies like GraphQL, 
                    PostgreSQL, and GCP services.
                  </p>
                  <p>
                    Previously at Multiplier AI Solutions, I led end-to-end development of web applications 
                    for healthcare and pharma clients, delivering 30% performance improvements and enhancing 
                    SEO performance by 25%.
                  </p>
                  <p>
                    My passion lies in creating impactful applications that not only solve users' needs 
                    but also provide delightful experiences through clean code and efficient architecture.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Core Expertise</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'PHP'].map((tech) => (
                        <Badge key={tech} variant="secondary" data-testid={`badge-language-${tech.toLowerCase()}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Frameworks & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Node.js', 'Flask', 'Spring Boot', 'Docker', 'GraphQL'].map((tech) => (
                        <Badge key={tech} variant="secondary" data-testid={`badge-framework-${tech.toLowerCase().replace('.', '')}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Cloud Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Google Cloud Platform', 'AWS', 'Azure', 'PostgreSQL', 'BigQuery'].map((tech) => (
                        <Badge key={tech} variant="secondary" data-testid={`badge-cloud-${tech.toLowerCase().replace(' ', '')}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}