import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Cloud, Database, Bolt, BarChart3, Settings } from "lucide-react";

export default function SkillsSection() {
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
      title: "Development Bolt",
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

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive expertise across the full development stack and data science pipeline
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 hover-elevate transition-all duration-300" data-testid={`card-skill-category-${index}`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2" 
                          data-testid={`progress-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Certifications & Achievements</h3>
              <p className="text-muted-foreground">
                Professional development and continuous learning milestones
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover-elevate transition-all duration-200" data-testid={`certification-${index}`}>
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}