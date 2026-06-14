import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Github, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and AI.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.1 }}>
            <Card className="bg-gray-800/50 border-pink-500/20">
              <CardContent className="p-6 text-center">
                <Mail className="mx-auto mb-4 text-pink-400" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:pallavisandilya4@gmail.com" className="text-pink-400 hover:text-pink-300 transition-colors">
                  pallavisandilya4@gmail.com
                </a>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.2 }}>
            <Card className="bg-gray-800/50 border-pink-500/20">
              <CardContent className="p-6 text-center">
                <Phone className="mx-auto mb-4 text-pink-400" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+918340261966" className="text-pink-400 hover:text-pink-300 transition-colors">
                  (+91) 8340261966
                </a>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.3 }}>
            <Card className="bg-gray-800/50 border-pink-500/20">
              <CardContent className="p-6 text-center">
                <Github className="mx-auto mb-4 text-pink-400" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                <a href="https://github.com/pallavisandilya4-hash" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                  pallavisandilya4-hash
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.4 }}>
          <Button 
            onClick={() => window.open('mailto:pallavisandilya4@gmail.com', '_blank')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            Send Message
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;