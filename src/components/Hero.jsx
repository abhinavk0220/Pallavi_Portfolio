import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Pallavi Kumari
            </span>
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-gray-300 mb-6">
            Data Analyst | Business Intelligence
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto md:mx-0 mb-8">
            Transforming raw data into actionable business insights through data cleaning, visualization, and analytics-driven decision-making.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center md:justify-start space-x-6">
            <a href="mailto:pallavisandilya4@gmail.com" className="text-gray-400 hover:text-pink-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/pallavisandilya4-hash" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pallavi-sandilya-7a3839281" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="tel:+918340261966" className="text-gray-400 hover:text-pink-400 transition-colors">
              <Phone size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hidden md:block"
          variants={itemVariants}
        >
          {/* Changed src={profileImage} to src="/image.jpeg" */}
          <img 
            src="/image.jpeg" 
            alt="Pallavi Kumari" 
            className="rounded-full shadow-2xl w-96 h-96 object-cover mx-auto" 
            style={{ 
              maskImage: 'radial-gradient(circle, white 60%, transparent 100%)', 
              WebkitMaskImage: 'radial-gradient(circle, white 60%, transparent 100%)', 
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)' 
            }} 
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-pink-400" />
      </motion.div>
    </section>
  );
};

export default Hero;