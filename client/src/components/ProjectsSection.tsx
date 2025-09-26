import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import weatherDashboard from "@assets/generated_images/Weather_agriculture_data_dashboard_5df765f3.png";
import movieRecommendation from "@assets/generated_images/Movie_recommendation_system_UI_630af7b4.png";
import waterDetection from "@assets/generated_images/Water_body_detection_interface_5f8541fe.png";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useInView } from "@/lib/animations";
import { 
  staggerContainer, 
  fadeUpVariants,
  scaleInVariants,
  getReducedMotionVariants 
} from "@/lib/animations";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useInView(0.1);
  
  const projects: Project[] = [
    {
      title: "Data Visualization of Weather, Agriculture, and Crop Yields",
      description:
        "Conducted multi-source data analysis using datasets from ICRISAT, Indian Weather Repository, and crop yield statistics, focusing on correlations between weather variability and agricultural output.",
      image: weatherDashboard,
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Google Data Studio",
        "Power BI",
        "D3.js",
        "VizHub",
        "Statistical Analysis",
      ],
      achievements: [
        "Integrated datasets from ICRISAT and Indian Weather Repository with crop yield statistics",
        "Applied statistical correlation analysis and time-series modeling techniques",
        "Created interactive dashboards visualizing rainfall patterns and pesticide usage",
        "Enabled comparative crop analysis across different regions",
        "Identified optimal sowing windows for agricultural planning",
        "Delivered actionable insights for agricultural policymakers",
      ],
    },
    {
      title: "Movie Recommendation System Using NLP Techniques",
      description:
        "Built a personalized movie recommendation system by analyzing large datasets from TMDB and IMDB, incorporating user reviews, metadata, and ratings using advanced NLP techniques.",
      image: movieRecommendation,
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "TextBlob",
        "NLTK",
        "Beautiful Soup",
        "TF-IDF",
        "Cosine Similarity",
        "Machine Learning",
      ],
      achievements: [
        "Processed large datasets from TMDB and IMDB with user reviews and metadata",
        "Implemented content-based filtering using TF-IDF vectorization",
        "Developed collaborative filtering techniques (user-user and item-item)",
        "Integrated sentiment analysis into recommendation pipeline",
        "Enhanced model accuracy through exploratory data analysis",
        "Created hybrid models for improved recommendation diversity",
      ],
    },
    {
      title: "Enhancing Water Body Detection on Satellite Images",
      description:
        "Designed a machine learning and image processing pipeline to accurately detect and segment water bodies from high-resolution satellite imagery using computer vision techniques.",
      image: waterDetection,
      technologies: [
        "Python",
        "OpenCV",
        "Machine Learning",
        "Image Processing",
        "HSV Color Space",
        "Canny Edge Detection",
        "Computer Vision",
      ],
      achievements: [
        "Applied advanced image preprocessing techniques including Gaussian Blur",
        "Implemented histogram equalization and contrast stretching algorithms",
        "Utilized HSV color space segmentation for water region detection",
        "Developed Canny edge detection and custom thresholding methods",
        "Distinguished water regions from land and vegetation accurately",
        "Created automated pipeline for satellite image analysis",
      ],
      githubUrl: "https://github.com/Pothugunt1a/Group-5--CSCE-5222.002--Final",
    },
  ];

  // Create staggered variants for project cards
  const projectStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger project cards
      },
    },
  };

  // Get variants based on motion preferences
  const headerVariants = prefersReducedMotion ? getReducedMotionVariants(staggerContainer) : staggerContainer;
  const cardContainerVariants = prefersReducedMotion ? getReducedMotionVariants(projectStaggerVariants) : projectStaggerVariants;
  const cardVariants = prefersReducedMotion ? getReducedMotionVariants(scaleInVariants) : scaleInVariants;

  return (
    <motion.section 
      id="projects" 
      className="py-24 relative"
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
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground"
              variants={fadeUpVariants}
            >
              Showcasing my expertise in data analysis, machine learning, and
              full-stack development
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardContainerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={prefersReducedMotion ? {} : {
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  achievements={project.achievements}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
