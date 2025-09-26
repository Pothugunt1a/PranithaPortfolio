import ProjectCard from '../ProjectCard';
import weatherDashboard from "@assets/generated_images/Weather_agriculture_data_dashboard_5df765f3.png";

export default function ProjectCardExample() {
  return (
    <div className="max-w-sm">
      <ProjectCard
        title="Weather & Agriculture Analysis"
        description="Interactive data visualization platform analyzing correlations between weather patterns and agricultural productivity using multiple datasets."
        image={weatherDashboard}
        technologies={["Python", "Pandas", "NumPy", "Google Data Studio", "Power BI", "D3.js"]}
        achievements={[
          "Integrated datasets from ICRISAT and Indian Weather Repository",
          "Applied statistical correlation analysis and time-series modeling",
          "Created interactive dashboards for policy makers",
          "Identified optimal sowing windows for different regions"
        ]}
        liveUrl="https://example.com"
        githubUrl="https://github.com/example"
      />
    </div>
  );
}