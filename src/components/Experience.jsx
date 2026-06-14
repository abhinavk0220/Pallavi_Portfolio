import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Experience = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const experiences = [
    {
      title: 'Lead Generation Analyst',
      company: 'Kalkine Solutions',
      period: 'Apr 2025 – Oct 2025',
      location: 'UK Geography',
      description: 'Analyzed datasets using customer segmentation and lead scoring to identify prospects. Built KPI dashboards in Excel and utilized SQL for data extraction and reporting.'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1 }}>
              <Card className="bg-gray-800/50 border-pink-500/20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-pink-400 text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-gray-300 text-lg">{exp.company}</CardDescription>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-400">{exp.period}</p>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;