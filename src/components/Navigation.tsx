
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', action: () => scrollToSection('hero') },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Experience', action: () => scrollToSection('experience') },
    { label: 'Skills', action: () => scrollToSection('skills') },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-portfolio-dark/90 backdrop-blur-md border-b border-portfolio-accent/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white font-inter">
            Prashant<span className="text-portfolio-accent">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-gray-300 hover:text-portfolio-accent transition-colors duration-300 font-inter"
              >
                {item.label}
              </button>
            ))}
<a 
  href="https://cmt-portfolio.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
>              <Button className="bg-portfolio-accent hover:bg-portfolio-secondary transition-colors duration-300">
                Projects
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          {/* <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-portfolio-accent/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-gray-300 hover:text-portfolio-accent transition-colors duration-300 text-left font-inter"
                >
                  {item.label}
                </button>
              ))}
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                <Button className="bg-portfolio-accent hover:bg-portfolio-secondary transition-colors duration-300 w-full">
                  Projects
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
