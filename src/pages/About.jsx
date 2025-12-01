import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Code2, Database, BarChart3, Brain, Users, TrendingUp } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const skills = [
    { name: 'MS-Excel', level: 95, icon: TrendingUp, color: 'from-copper-600 to-copper-800' },
    { name: 'SQL & DBMS', level: 85, icon: Database, color: 'from-accent-400 to-accent-600' },
    { name: 'Tableau', level: 80, icon: BarChart3, color: 'from-copper-400 to-copper-500' },
    { name: 'Python', level: 85, icon: Code2, color: 'from-sage-400 to-sage-600' },
    { name: 'Machine Learning', level: 75, icon: Brain, color: 'from-accent-500 to-accent-700' },
    { name: 'Statistical Modeling', level: 80, icon: TrendingUp, color: 'from-primary-500 to-primary-700' },
    { name: 'LaTeX & MATHEMATICA', level: 70, icon: Code2, color: 'from-copper-500 to-copper-700' },
    { name: 'C & MATLAB', level: 65, icon: Code2, color: 'from-sage-400 to-sage-600' },
  ];

  const timeline = [
    {
      type: 'experience',
      title: 'Chief Operating Officer, Data Science & Analytics',
      organization: 'Renu Sharma Healthcare & Education Foundation',
      period: 'August 2025 - Present',
      location: 'Remote (Volunteer)',
      description: 'Leading and managing internship programs with 30+ interns across different batches. Driving end-to-end project delivery including data collection, preprocessing, modeling, visualization, and deployment while implementing organization-wide analytics systems.',
      icon: Users
    },
    {
      type: 'experience',
      title: 'Senior Head of Department, Data Science',
      organization: 'Renu Sharma Healthcare & Education Foundation',
      period: 'April 2025 - August 2025',
      location: 'Remote',
      description: 'Supervised project-based learning for interns and established comprehensive workflows for data preprocessing, modeling, and dashboarding across the organization.',
      icon: Users
    },
    {
      type: 'experience',
      title: 'Data Analyst Intern',
      organization: 'Renu Sharma Healthcare & Education Foundation',
      period: 'January 2025 - April 2025',
      location: 'Remote',
      description: 'Contributed to departmental analytics projects under senior guidance, performing comprehensive analysis using Excel, SQL, Tableau, and Python.',
      icon: Users
    },
    {
      type: 'experience',
      title: 'Business Operations Assistant',
      organization: "St. Antony's Engineering Company",
      period: 'December 2021 - July 2025',
      location: 'On-site',
      description: 'Built and maintained Excel-based reports for expense tracking, inventory management, and order fulfillment. Assisted management with data-driven decision making and contributed to process improvements enhancing efficiency.',
      icon: Users
    },
    {
      type: 'experience',
      title: 'Subject Matter Expert Freelancer',
      organization: 'GoAskNow',
      period: 'July 2021 - November 2021',
      location: 'Remote',
      description: 'Served as Subject Matter Expert for Advanced Mathematics, creating step-by-step solutions for complex mathematical problems using MathType in prescribed formats.',
      icon: Users
    },
    {
      type: 'experience',
      title: 'Subject Matter Expert Intern - Mathematics JEE',
      organization: 'DIGIPPLUS',
      period: 'January 2021 - April 2021',
      location: 'Remote',
      description: 'Delivered 1000+ mathematical solutions with 98% accuracy, created comprehensive word documents using MathType, and converted documents to LaTeX format.',
      icon: Users
    },
    {
      type: 'education',
      title: 'Master of Science, Mathematics',
      organization: 'Central University of Karnataka',
      period: '2017 - 2019',
      location: 'Kalaburagi, Karnataka',
      description: 'Department of Mathematics, School of Physical Sciences. Advanced study in mathematical theory, analysis, and applications with focus on combinatorial identities and lattice paths.',
      icon: Award
    },
    {
      type: 'education',
      title: 'Bachelor of Science, Mathematics',
      organization: "St. Mary's College, University of Calicut",
      period: '2014 - 2017',
      location: 'Kerala',
      description: 'Comprehensive foundation in mathematics, statistics, and analytical thinking. Strong grounding in mathematical principles and problem-solving methodologies.',
      icon: Award
    },
    {
      type: 'education',
      title: 'Higher Secondary Certificate, Science',
      organization: 'G.H.S.S Meenangadi',
      period: '2012 - 2014',
      location: 'Kerala',
      description: 'Science stream with focus on Mathematics, Physics, and Chemistry. Built strong analytical and logical thinking foundations.',
      icon: Award
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageWrapper className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          subtitle="Get to know me"
          title="About Lisa"
          description="Passionate about transforming data into actionable insights that drive business decisions"
          className="mb-20"
        />

        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Hello, I'm Lisa! 👋
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Data Scientist and Analytics professional with a strong mathematical foundation 
                  from my Master's in Mathematics. My journey began with advanced mathematical research on 
                  combinatorial identities and has evolved into practical data science applications.
                </p>
                <p>
                  Currently serving as Chief Operating Officer for Data Science & Analytics at Renu Sharma 
                  Healthcare & Education Foundation, I lead teams of 30+ interns while driving end-to-end 
                  analytics projects. My expertise spans Python, SQL, Tableau, and Excel, with a particular 
                  strength in transforming complex datasets into actionable business insights.
                </p>
                <p>
                  With experience ranging from mathematical research to business operations, I bring a unique 
                  analytical perspective to every project. I believe in the power of data to tell stories 
                  and drive meaningful decisions, whether it's optimizing business processes or developing 
                  predictive models.
                </p>
              </div>
            </div>

            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Current Role</h4>
                    <p className="text-gray-400 text-sm">COO, Data Science & Analytics</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MapPin size={16} className="text-primary-400" />
                    <span className="text-sm">Remote • Global</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar size={16} className="text-accent-400" />
                    <span className="text-sm">Available for Projects</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-center text-primary-400 font-medium">
                    "Data is the new oil, but insights are the refined fuel."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Skills & Expertise
            </h3>
            <p className="text-gray-400">
              Technologies and tools I work with to bring data to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-primary-400 font-semibold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-dark-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Certifications & Training
            </h3>
            <p className="text-gray-400">
              Professional development and specialized training programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 border-l-4 border-primary-500"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2">Data Science Certification</h4>
                  <p className="text-primary-400 text-sm mb-2">Internshala Training</p>
                  <p className="text-gray-400 text-xs">May 2023 - September 2023</p>
                  <p className="text-gray-300 text-sm mt-2">Comprehensive data science training covering Python, statistics, machine learning, and data visualization.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 border-l-4 border-accent-500"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2">Geometry of Continued Fractions</h4>
                  <p className="text-accent-400 text-sm mb-2">Central University of Himachal Pradesh</p>
                  <p className="text-gray-400 text-xs">September 2020</p>
                  <p className="text-gray-300 text-sm mt-2">International workshop on advanced mathematical concepts: Ramanujan and His Successors.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 border-l-4 border-copper-500"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-copper-500 to-copper-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2">Mathematical Sciences Research</h4>
                  <p className="text-copper-400 text-sm mb-2">Central University of Karnataka</p>
                  <p className="text-gray-400 text-xs">March 2019</p>
                  <p className="text-gray-300 text-sm mt-2">National workshop on current research trends and methodologies in mathematical sciences.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 border-l-4 border-sage-500"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sage-500 to-sage-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2">Creative Writing Certification</h4>
                  <p className="text-sage-400 text-sm mb-2">Internshala Training</p>
                  <p className="text-gray-400 text-xs">May 2020 - June 2020</p>
                  <p className="text-gray-300 text-sm mt-2">Enhanced communication and storytelling skills for effective data presentation.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 border-l-4 border-parchment-500 md:col-span-2"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-parchment-500 to-parchment-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2">National Cadet Corps A Examination</h4>
                  <p className="text-parchment-400 text-sm mb-2">National Cadet Corps</p>
                  <p className="text-gray-400 text-xs">2011</p>
                  <p className="text-gray-300 text-sm mt-2">Leadership and discipline training demonstrating early commitment to personal development and service.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Journey & Experience
            </h3>
            <p className="text-gray-400">
              My educational background and professional experience
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={`${item.title}-${item.period}`}
                    variants={itemVariants}
                    className={`relative flex items-center ${
                      isLeft ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center z-10">
                      <Icon size={16} className="text-white" />
                    </div>

                    {/* Content Card */}
                    <div className={`ml-16 md:ml-0 ${isLeft ? 'md:mr-8' : 'md:ml-8'} md:w-5/12`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`glass-card p-6 ${
                          item.type === 'education' ? 'border-l-4 border-primary-500' : 'border-l-4 border-accent-500'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            item.type === 'education' 
                              ? 'bg-primary-600/20 text-primary-400' 
                              : 'bg-accent-600/20 text-accent-400'
                          }`}>
                            {item.type === 'education' ? 'Education' : 'Experience'}
                          </span>
                          <span className="text-gray-400 text-sm">{item.period}</span>
                        </div>
                        
                        <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-primary-400 font-medium">{item.organization}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400 text-sm">{item.location}</span>
                        </div>
                        
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      </div>
    </PageWrapper>
  );
};

export default About;