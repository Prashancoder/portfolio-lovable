
import { Calendar, MapPin, Users, Code, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "CMT AI",
      position: "Full Stack Developer",
      duration: "June 2025 - Present",
      location: "Noida",
      achievements: [
        "Developed 20+ client websites end-to-end",
        "Built SaaS product using React, Redux, Chakra UI",
        "Integrated APIs (OpenAI, Bolt.DIY), payment gateways (Razorpay)",
        "Setup hosting (Vercel, Hostinger), handled domain & deployment"
      ],
      icon: <Code className="w-6 h-6" />,
      color: "from-portfolio-accent to-portfolio-secondary"
    },
    {
      company: "CareerGuide",
      position: "WordPress Intern",
      duration: "Aug 2023",
      location: "Delhi",
      achievements: [
        "SEO-optimized blog creation using ChatGPT/Bard",
        "Led 5 interns, customized themes and plugins",
        "Improved site performance and user engagement"
      ],
      icon: <Users className="w-6 h-6" />,
      color: "from-portfolio-secondary to-portfolio-accent"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-portfolio-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-inter">
            Professional <span className="text-portfolio-accent">Experience</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-accent to-portfolio-secondary"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Timeline Icon */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} mr-8 flex-shrink-0`}>
                    {exp.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-portfolio-accent/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 font-inter">{exp.position}</h3>
                        <h4 className="text-xl text-portfolio-accent font-semibold mb-2">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col md:items-end space-y-1">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm font-inter">{exp.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm font-inter">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-300 font-inter">
                          <Zap className="w-4 h-4 text-portfolio-secondary mr-3 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
