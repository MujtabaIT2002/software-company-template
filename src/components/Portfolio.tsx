import React, { useState } from 'react';
import './Portfolio.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A full-featured e-commerce platform with advanced filtering and payment integration.",
    image: "https://source.unsplash.com/random/800x600?ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "A secure and user-friendly mobile banking application with biometric authentication.",
    image: "https://source.unsplash.com/random/800x600?banking",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "#"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    category: "Data Science",
    description: "Real-time analytics dashboard with AI-powered insights and predictions.",
    image: "https://source.unsplash.com/random/800x600?analytics",
    technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
    link: "#"
  },
  {
    id: 4,
    title: "Social Media Platform",
    category: "Web Development",
    description: "A modern social media platform with real-time updates and media sharing.",
    image: "https://source.unsplash.com/random/800x600?social",
    technologies: ["Vue.js", "GraphQL", "PostgreSQL"],
    link: "#"
  }
];

const categories = ["All", "Web Development", "Mobile Development", "Data Science"];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h2>Our Portfolio</h2>
        
        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <img 
                  src={project.image || 'https://picsum.photos/800/600?random'} 
                  alt={project.title} 
                  onError={(e) => { e.currentTarget.src = 'https://picsum.photos/800/600?random'; }}
                />
                <div className="portfolio-overlay">
                  <a href={project.link} className="view-project">View Project</a>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 