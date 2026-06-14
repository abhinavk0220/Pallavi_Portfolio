import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Laptop } from 'lucide-react';

const Skills = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const skills = {
    languages: ['Python', 'SQL', 'R', 'JavaScript'],
    frameworks: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
    tools: ['Excel', 'Power BI', 'Tableau', 'Jupyter Notebook', 'Git'],
    concepts: ['Data Cleaning', 'Data Visualization', 'EDA', 'Statistics', 'Machine Learning']
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(skills).map((category, index) => (
            <motion.div key={category} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1 }}>
              <Card className="bg-gray-800/50 border-pink-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-pink-400">
                    {category === 'languages' && <Code size={24} />}
                    {category === 'frameworks' && <Laptop size={24} />}
                    {category === 'databases' && <Database size={24} />}
                    {category === 'tools' && <Brain size={24} />}
                    {category === 'concepts' && <Code size={24} />}
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills[category].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-600/20 text-purple-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;