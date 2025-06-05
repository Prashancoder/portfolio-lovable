
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<section id="hero" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/10 via-transparent to-portfolio-secondary/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-portfolio-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-portfolio-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-inter">
            <span className="bg-gradient-to-r from-portfolio-accent via-portfolio-secondary to-portfolio-accent bg-clip-text text-transparent">
              Prashant
            </span>
            <br />
            <span className="text-white">Portfolio</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-inter">
            From late-night college sprints to real-time client work at CMT AI, each project here tells a story of growth, learning, and passion for development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
  href="https://cmt-portfolio.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
>              <Button size="lg" className="bg-portfolio-accent hover:bg-portfolio-accent/80 text-white px-8 py-4 text-lg font-inter transition-all duration-300 hover:scale-105">
                View Projects
              </Button>
            </a>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary hover:text-white px-8 py-4 text-lg font-inter transition-all duration-300 hover:scale-105"
              onClick={() => {
                // This would trigger a download - you can replace with actual resume URL
                const link = document.createElement('a');
                link.href = '/resume.pdf'; // Replace with actual resume path
                link.download = 'Prashant_Sharma_Resume.pdf';
                link.click();
              }}
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-8 py-4 text-lg font-inter transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <MessageCircle className="mr-2" size={20} />
              Contact Me
            </Button>
          </div>
          
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-portfolio-accent hover:text-portfolio-secondary transition-colors duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
