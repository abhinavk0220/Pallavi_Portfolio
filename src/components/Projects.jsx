import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const projects = [
    {
      title: 'Netflix Dashboard Analysis',
      description: 'Cleaned and transformed Netflix data to analyze content trends, ratings, and genre distribution, creating an interactive dashboard with KPIs and DAX measures.',
      tech: ['Power BI', 'Excel', 'DAX'],
      github: 'https://github.com/pallavisandilya4-hash/NETFLIX-PowerBI-DASHBOARD',
      demo: 'https://www.linkedin.com/posts/pallavi-sandilya-7a3839281_netflixdashboard-datavisualization-dashboarddesign-activity-7459287584897146880-tsM4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuGX5cBgKBaSZXd73-9N-jCbdtNBZ0TlcY'
    },
    {
      title: 'Zomato EDA Project',
      description: 'Performed extensive data cleaning and statistical analysis to uncover insights regarding customer preferences, pricing trends, and cuisine popularity.',
      tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/pallavisandilya4-hash/Zomato-EDA-Project',
      demo: 'https://www.linkedin.com/posts/pallavi-sandilya-7a3839281_netflix-report-activity-7458202306778644480-IFbq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuGX5cBgKBaSZXd73-9N-jCbdtNBZ0TlcY'
    },
    {
      title: 'SQL Customer Churn Analysis',
      description: 'Explored customer behavior using SQL JOINs, subqueries, and aggregations to identify churn drivers and evaluate customer retention trends.',
      tech: ['MySQL', 'SQL'],
      github: 'https://github.com/pallavisandilya4-hash/SQL-Customer-Churn-Analysis',
      demo: 'https://www.linkedin.com/posts/pallavi-sandilya-7a3839281_retaildb-analysis-activity-7467504333740412928-12Vs?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuGX5cBgKBaSZXd73-9N-jCbdtNBZ0TlcY'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1 }}>
              <Card className="bg-gray-800/50 border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-pink-400">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-400/30 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
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

export default Projects;