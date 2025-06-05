
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "HTML", "CSS", "Tailwind", "React", "Next.js"],
      color: "from-portfolio-accent to-purple-600"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Firebase", "MongoDB"],
      color: "from-portfolio-secondary to-blue-600"
    },
    {
      title: "Tools & Technologies",
      skills: ["OpenAI API", "REST APIs", "Git", "GitHub", "Vercel", "Postman"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Languages",
      skills: ["C++", "JavaScript", "TypeScript"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-inter">
            Technical <span className="text-portfolio-accent">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-portfolio-accent/50 transition-all duration-300 hover:transform hover:scale-[1.02] animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-lg mb-4`}>
                  <h3 className="text-lg font-semibold font-inter">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-gray-700/50 text-gray-300 hover:bg-portfolio-accent hover:text-white transition-all duration-300 cursor-default font-inter"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
