import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Award, GraduationCap, User } from 'lucide-react';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <Card className="bg-gray-800/50 border-pink-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pink-400">
                  <GraduationCap size={24} />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Bachelor of Commerce (B.Com)
                  </h3>
                  <p className="text-gray-400 mb-1">Lalit Narayan Mithila University</p>
                  <p className="text-pink-400 text-sm">2021 – 2024</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Higher Secondary Education (CBSE)
                  </h3>
                  <p className="text-gray-400 mb-1">BR DAV Public School</p>
                  <p className="text-pink-400 text-sm">2019 – 2021</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            className="space-y-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a Data Analyst skilled in SQL, Python, Excel, Power BI, and Tableau. 
              My expertise lies in Exploratory Data Analysis, building KPI Dashboards, performing CRM Analytics, 
              and uncovering insights through Statistical Analysis to empower business decisions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With experience in data validation, reporting, and stakeholder management, I transform raw data into 
              actionable business insights. I leverage platforms like HubSpot and Salesforce to analyze marketing 
              strategies, optimize lead generation, and track campaign performance.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                <Card className="bg-gray-800/30 border-pink-500/20">
                  <CardContent className="p-4 text-center">
                    <Award className="mx-auto mb-2 text-pink-400" size={32} />
                    <p className="text-sm text-gray-400">Data Analytics</p>
                    <p className="text-xs text-gray-500">Skill Circle (Ongoing)</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                <Card className="bg-gray-800/30 border-pink-500/20">
                  <CardContent className="p-4 text-center">
                    <User className="mx-auto mb-2 text-pink-400" size={32} />
                    <p className="text-sm text-gray-400">Lead Generation</p>
                    <p className="text-xs text-gray-500">Kalkine Solutions</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;