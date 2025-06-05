
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const filters = ['All', 'Static Website', 'Dynamic Website', 'E-commerce', 'SAAS'];
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&h=400&fit=crop",
      category: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB", "Razorpay"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "SaaS Analytics Dashboard",
      description: "Modern analytics dashboard built with React and Redux. Features real-time data visualization and interactive charts.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&h=400&fit=crop",
      category: "SAAS",
      technologies: ["React", "Redux", "Chakra UI", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Corporate Website",
      description: "Responsive corporate website with modern design and smooth animations. Built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&h=400&fit=crop",
      category: "Static Website",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Blog Management System",
      description: "Dynamic blog platform with content management system. Features include user authentication and content creation tools.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&h=400&fit=crop",
      category: "Dynamic Website",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application integrated with OpenAI API. Features include conversation history and smart responses.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&h=400&fit=crop",
      category: "SAAS",
      technologies: ["React", "OpenAI API", "Socket.io", "Node.js"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website showcasing creative work with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600&h=400&fit=crop",
      category: "Static Website",
      technologies: ["React", "Tailwind CSS", "GSAP"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="min-h-screen bg-portfolio-dark text-white font-inter">
      {/* Navigation */}
      <nav className="bg-portfolio-dark/90 backdrop-blur-md border-b border-portfolio-accent/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-portfolio-accent hover:text-portfolio-secondary transition-colors">
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold">
              Prashant<span className="text-portfolio-accent">.</span>
            </h1>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-portfolio-accent to-portfolio-secondary bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            A collection of projects built with passion — from static landing pages to full-stack SaaS apps.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-400 mb-4 w-full justify-center">
              <Filter size={20} />
              <span>Filter by category:</span>
            </div>
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-portfolio-accent hover:bg-portfolio-accent/80'
                    : 'border-gray-600 text-gray-300 hover:border-portfolio-accent hover:text-portfolio-accent'
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-portfolio-accent/50 transition-all duration-300 hover:transform hover:scale-[1.02] animate-fade-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-8 h-8 bg-gray-900/80 hover:bg-portfolio-accent"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-8 h-8 bg-gray-900/80 hover:bg-portfolio-secondary"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-portfolio-accent/20 text-portfolio-accent">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-portfolio-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-gray-600 text-gray-400 hover:border-portfolio-secondary hover:text-portfolio-secondary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-portfolio-accent">Project?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-portfolio-accent hover:bg-portfolio-accent/80 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/917217806549', '_blank')}
            >
              Start a Project
            </Button>
            <Link to="/">
              <Button
                size="lg"
                variant="outline"
                className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary hover:text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
