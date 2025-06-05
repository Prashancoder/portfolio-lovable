
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-inter">
            About <span className="text-portfolio-accent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-portfolio-accent to-portfolio-secondary p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D4D03AQHxe91YESIpuw/profile-displayphoto-shrink_800_800/B4DZQ8f2LSGUAc-/0/1736181770206?e=1754524800&v=beta&t=F40zQqNuYsXrF9r_YP4qteoYN6_ehzn-eBV2naEgIEk" 
                      alt="Prashant Sharma" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed font-inter">
                I'm <span className="text-portfolio-accent font-semibold">Prashant Sharma</span>, a Full Stack Developer from Delhi with hands-on experience building 20+ websites, web apps and Saas products. I specialize in React, Node.js, Firebase, MongoDB, and modern frontend tools like Tailwind CSS, Chakra UI, and Next.js.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed font-inter">
                My journey in development has been driven by curiosity and a passion for creating digital solutions that make a difference. From building responsive websites to developing complex SaaS applications, I enjoy every aspect of the development process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  className="bg-portfolio-accent hover:bg-portfolio-accent/80 transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Prashant_Sharma_Resume.pdf';
                    link.click();
                  }}
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary hover:text-white transition-all duration-300 hover:scale-110"
                    onClick={() => window.open('https://www.linkedin.com/in/prashant-sharma-58a005207', '_blank')}
                  >
                    <Linkedin size={20} />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300 hover:scale-110"
                    onClick={() => window.open('https://github.com/Prashancoder', '_blank')}
                  >
                    <Github size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
