
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "7217806549",
      action: () => window.open('tel:+917217806549', '_self')
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ps985094@gmail.com",
      action: () => window.open('mailto:ps985094@gmail.com', '_self')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Delhi",
      action: () => {}
    }
  ];

  return (
    <section id="contact" className="py-20  bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
            Let's Work <span className="text-portfolio-accent">Together</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-inter">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-portfolio-accent/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={item.action}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-portfolio-accent to-portfolio-secondary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white font-inter">{item.label}</h3>
                  <p className="text-gray-300 font-inter">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-portfolio-accent hover:bg-portfolio-accent/80 text-white px-8 py-4 text-lg font-inter transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/917217806549', '_blank')}
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp Chat
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary hover:text-white px-8 py-4 text-lg font-inter transition-all duration-300 hover:scale-105"
              onClick={() => window.open('mailto:ps985094@gmail.com', '_self')}
            >
              <Send className="mr-2" size={20} />
              Send Email
            </Button>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
          onClick={() => window.open('https://wa.me/917217806549', '_blank')}
        >
          <MessageCircle size={24} />
        </Button>
      </div>
    </section>
  );
};

export default Contact;
