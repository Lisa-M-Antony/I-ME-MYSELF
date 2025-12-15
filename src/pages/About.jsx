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
              My knowledge library - each skill a volume in the scholar's collection
            </p>
          </motion.div>

          <div className="space-y-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, rotateX: -90 }}
                  whileInView={{ opacity: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  className="relative group"
                >
                  <div 
                    className={`h-20 w-full bg-gradient-to-r ${skill.color} rounded-r-lg shadow-lg relative overflow-hidden cursor-pointer`}
                  >
                    {/* Book spine texture */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
                    
                    {/* Embossed lines for book texture */}
                    <div className="absolute top-2 left-4 right-4 h-px bg-white/20"></div>
                    <div className="absolute bottom-2 left-4 right-4 h-px bg-black/20"></div>
                    
                    {/* Content */}
                    <div className="relative h-full flex items-center justify-between px-6">
                      <div className="flex items-center space-x-3">
                        <Icon size={22} className="text-white drop-shadow-sm" />
                        <span className="text-white font-semibold text-lg tracking-wide drop-shadow-sm">{skill.name}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-white/90 font-bold text-xl drop-shadow-sm">{skill.level}%</span>
                        <span className="text-white/70 text-xs uppercase tracking-wider">Proficiency</span>
                      </div>
                    </div>

                    {/* Progress indicator on spine edge */}
                    <div className="absolute bottom-0 left-0 h-2 bg-black/30 w-full rounded-br-lg">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-white/60 to-white/80 rounded-br-lg"
                      />
                    </div>

                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              Professional achievements crystallized in liquid glass - each drop a milestone
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              whileHover={{ 
                scale: 1.08, 
                rotateY: 8, 
                z: 20  
              }}
              className="relative preserve-3d group cursor-pointer"
            >
              <div className="relative p-8 rounded-2xl overflow-hidden border border-white/30 backdrop-blur-md"
                   style={{
                     background: 'linear-gradient(135deg, rgba(176, 141, 87, 0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(176, 141, 87, 0.1) 100%)'
                   }}>
                
                {/* Water Drop Effect */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <motion.div
                    className="absolute top-4 right-6 w-16 h-16 bg-gradient-to-br from-primary-400/30 to-primary-600/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-4 w-12 h-12 bg-gradient-to-tl from-copper-400/25 to-sage-400/15 rounded-full blur-lg"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                </div>

                {/* Glass Reflection Animation */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)'
                  }}
                  animate={{
                    x: [-200, 200],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg backdrop-blur-sm border border-white/20"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 10,
                        boxShadow: "0 10px 30px rgba(176, 141, 87, 0.4)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award size={24} className="text-white drop-shadow-lg" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h4 
                        className="text-white font-bold text-lg mb-2"
                        whileHover={{ 
                          textShadow: "0 0 20px rgba(176, 141, 87, 0.8)",
                          scale: 1.02
                        }}
                      >
                        Data Science Certification
                      </motion.h4>
                      <p className="text-primary-300 text-sm font-medium mb-1">Internshala Training</p>
                      <p className="text-gray-300 text-xs mb-3">May 2023 - September 2023</p>
                    </div>
                  </div>
                  <motion.p 
                    className="text-gray-200 text-sm leading-relaxed"
                    whileHover={{ 
                      color: "#f9fafb",
                      textShadow: "0 0 10px rgba(255,255,255,0.3)"
                    }}
                  >
                    Comprehensive data science training covering Python, statistics, machine learning, and data visualization.
                  </motion.p>
                </div>

                {/* Glass Edge Effects */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
              whileHover={{ 
                scale: 1.08, 
                rotateY: -8, 
                z: 20
              }}
              className="relative preserve-3d group cursor-pointer"
            >
              <div className="relative p-8 rounded-2xl overflow-hidden border border-white/30 backdrop-blur-md"
                   style={{
                     background: 'linear-gradient(135deg, rgba(135, 169, 107, 0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(135, 169, 107, 0.1) 100%)'
                   }}>
                
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <motion.div
                    className="absolute top-6 left-4 w-14 h-14 bg-gradient-to-br from-sage-400/30 to-sage-600/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute bottom-4 right-6 w-10 h-10 bg-gradient-to-tl from-accent-400/25 to-primary-400/15 rounded-full blur-lg"
                    animate={{
                      scale: [1.1, 1, 1.1],
                      opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                  />
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)'
                  }}
                  animate={{
                    x: [-200, 200],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg backdrop-blur-sm border border-white/20"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: -10,
                        boxShadow: "0 10px 30px rgba(135, 169, 107, 0.4)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award size={24} className="text-white drop-shadow-lg" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h4 
                        className="text-white font-bold text-lg mb-2"
                        whileHover={{ 
                          textShadow: "0 0 20px rgba(135, 169, 107, 0.8)",
                          scale: 1.02
                        }}
                      >
                        Geometry of Continued Fractions
                      </motion.h4>
                      <p className="text-accent-300 text-sm font-medium mb-1">Central University of Himachal Pradesh</p>
                      <p className="text-gray-300 text-xs mb-3">September 2020</p>
                    </div>
                  </div>
                  <motion.p 
                    className="text-gray-200 text-sm leading-relaxed"
                    whileHover={{ 
                      color: "#f9fafb",
                      textShadow: "0 0 10px rgba(255,255,255,0.3)"
                    }}
                  >
                    International workshop on advanced mathematical concepts: Ramanujan and His Successors.
                  </motion.p>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
              </div>
            </motion.div>

            {/* Continue with similar pattern for other certifications... */}
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
              whileHover={{ 
                scale: 1.08, 
                rotateY: 8, 
                z: 20
              }}
              className="relative preserve-3d group cursor-pointer"
            >
              <div className="relative p-8 rounded-2xl overflow-hidden border border-white/30 backdrop-blur-md"
                   style={{
                     background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(212, 175, 55, 0.1) 100%)'
                   }}>
                
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <motion.div
                    className="absolute top-4 right-4 w-18 h-18 bg-gradient-to-br from-copper-400/30 to-copper-600/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  />
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)'
                  }}
                  animate={{
                    x: [-200, 200],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-copper-500 to-copper-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg backdrop-blur-sm border border-white/20"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 15,
                        boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award size={24} className="text-white drop-shadow-lg" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h4 
                        className="text-white font-bold text-lg mb-2"
                        whileHover={{ 
                          textShadow: "0 0 20px rgba(212, 175, 55, 0.8)",
                          scale: 1.02
                        }}
                      >
                        Mathematical Sciences Research
                      </motion.h4>
                      <p className="text-copper-300 text-sm font-medium mb-1">Central University of Karnataka</p>
                      <p className="text-gray-300 text-xs mb-3">March 2019</p>
                    </div>
                  </div>
                  <motion.p 
                    className="text-gray-200 text-sm leading-relaxed"
                    whileHover={{ 
                      color: "#f9fafb",
                      textShadow: "0 0 10px rgba(255,255,255,0.3)"
                    }}
                  >
                    National workshop on current research trends and methodologies in mathematical sciences.
                  </motion.p>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
              whileHover={{ 
                scale: 1.08, 
                rotateY: -8, 
                z: 20
              }}
              className="relative preserve-3d group cursor-pointer"
            >
              <div className="relative p-8 rounded-2xl overflow-hidden border border-white/30 backdrop-blur-md"
                   style={{
                     background: 'linear-gradient(135deg, rgba(135, 169, 107, 0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(135, 169, 107, 0.1) 100%)'
                   }}>
                
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <motion.div
                    className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-sage-400/30 to-sage-600/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  />
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)'
                  }}
                  animate={{
                    x: [-200, 200],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-sage-500 to-sage-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg backdrop-blur-sm border border-white/20"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: -15,
                        boxShadow: "0 10px 30px rgba(135, 169, 107, 0.4)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award size={24} className="text-white drop-shadow-lg" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h4 
                        className="text-white font-bold text-lg mb-2"
                        whileHover={{ 
                          textShadow: "0 0 20px rgba(135, 169, 107, 0.8)",
                          scale: 1.02
                        }}
                      >
                        Creative Writing Certification
                      </motion.h4>
                      <p className="text-sage-300 text-sm font-medium mb-1">Internshala Training</p>
                      <p className="text-gray-300 text-xs mb-3">May 2020 - June 2020</p>
                    </div>
                  </div>
                  <motion.p 
                    className="text-gray-200 text-sm leading-relaxed"
                    whileHover={{ 
                      color: "#f9fafb",
                      textShadow: "0 0 10px rgba(255,255,255,0.3)"
                    }}
                  >
                    Enhanced communication and storytelling skills for effective data presentation.
                  </motion.p>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
              whileHover={{ 
                scale: 1.08, 
                rotateY: 5, 
                z: 20
              }}
              className="relative preserve-3d group cursor-pointer md:col-span-2"
            >
              <div className="relative p-8 rounded-2xl overflow-hidden border border-white/30 backdrop-blur-md"
                   style={{
                     background: 'linear-gradient(135deg, rgba(235, 228, 189, 0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(235, 228, 189, 0.1) 100%)'
                   }}>
                
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <motion.div
                    className="absolute top-4 left-8 w-20 h-20 bg-gradient-to-br from-parchment-400/30 to-parchment-600/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                  />
                  <motion.div
                    className="absolute bottom-6 right-8 w-16 h-16 bg-gradient-to-tl from-copper-400/25 to-sage-400/15 rounded-full blur-lg"
                    animate={{
                      scale: [1.1, 1, 1.1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  />
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)'
                  }}
                  animate={{
                    x: [-300, 300],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-parchment-500 to-parchment-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg backdrop-blur-sm border border-white/20"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 10,
                        boxShadow: "0 10px 30px rgba(235, 228, 189, 0.4)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award size={24} className="text-white drop-shadow-lg" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h4 
                        className="text-white font-bold text-lg mb-2"
                        whileHover={{ 
                          textShadow: "0 0 20px rgba(235, 228, 189, 0.8)",
                          scale: 1.02
                        }}
                      >
                        National Cadet Corps A Examination
                      </motion.h4>
                      <p className="text-parchment-300 text-sm font-medium mb-1">National Cadet Corps</p>
                      <p className="text-gray-300 text-xs mb-3">2011</p>
                    </div>
                  </div>
                  <motion.p 
                    className="text-gray-200 text-sm leading-relaxed"
                    whileHover={{ 
                      color: "#f9fafb",
                      textShadow: "0 0 10px rgba(255,255,255,0.3)"
                    }}
                  >
                    Leadership and discipline training demonstrating early commitment to personal development and service.
                  </motion.p>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
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
          className="perspective-1000"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Journey & Experience
            </h3>
            <p className="text-gray-400">
              My educational background and professional experience - a scholar's chronicle
            </p>
          </motion.div>

          <div className="relative">
            {/* 3D Liquid-Filled Pipe Timeline */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-6 flex justify-center">
              {/* Outer Pipe Shell */}
              <div className="relative w-4 h-full bg-gradient-to-b from-renaissance-charcoal-600 to-renaissance-charcoal-800 rounded-full shadow-inner border border-renaissance-charcoal-500">
                {/* Inner Glass Tube */}
                <div className="absolute inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-full backdrop-blur-sm">
                  {/* Liquid Fill Animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-copper-400 via-sage-500 to-primary-400 rounded-full overflow-hidden"
                    initial={{ height: "0%" }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  >
                    {/* Liquid Surface Ripple */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                      animate={{ x: [-10, 10, -10] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Bubbles */}
                    <motion.div
                      className="absolute bottom-2 left-1/4 w-1 h-1 bg-white/60 rounded-full"
                      animate={{ y: [-5, -20], opacity: [1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div
                      className="absolute bottom-4 right-1/4 w-1.5 h-1.5 bg-white/40 rounded-full"
                      animate={{ y: [-3, -25], opacity: [1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </motion.div>
                </div>
                
                {/* Pipe Highlight */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-white/20 to-transparent rounded-l-full"></div>
              </div>
            </div>

            <div className="space-y-16">
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
                    {/* Enhanced Timeline Node with Glass Effect */}
                    <motion.div 
                      className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-20"
                      whileHover={{ 
                        scale: 1.4, 
                        rotateY: 360,
                        boxShadow: "0 0 40px rgba(176, 141, 87, 0.8)"
                      }}
                      transition={{ duration: 0.8, type: "spring" }}
                    >
                      {/* Glass Outer Ring */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl">
                        {/* Inner Glowing Core */}
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                          item.type === 'education' ? 'from-primary-400 via-copper-500 to-sage-400' : 'from-accent-400 via-sage-500 to-copper-400'
                        } flex items-center justify-center shadow-inner`}>
                          <Icon size={22} className="text-white drop-shadow-lg relative z-10" />
                        </div>
                        
                        {/* Glass Reflection */}
                        <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 rounded-full blur-sm"></div>
                      </div>
                      
                      {/* Floating Energy Particles */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-3 h-3 bg-copper-400 rounded-full opacity-80 shadow-lg"
                        animate={{
                          y: [-3, -12, -3],
                          x: [-2, 4, -2],
                          opacity: [0.8, 1, 0.8],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.6
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-3 -left-3 w-2 h-2 bg-sage-400 rounded-full opacity-70 shadow-md"
                        animate={{
                          y: [2, 8, 2],
                          x: [1, -3, 1],
                          opacity: [0.7, 1, 0.7],
                          scale: [1, 1.3, 1]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.8
                        }}
                      />
                    </motion.div>

                    {/* Glassy Content Card */}
                    <div className={`ml-24 md:ml-0 ${isLeft ? 'md:mr-16' : 'md:ml-16'} md:w-5/12 relative`}>
                      <motion.div
                        initial={{ 
                          opacity: 0, 
                          rotateY: isLeft ? -45 : 45,
                          z: -50
                        }}
                        whileInView={{ 
                          opacity: 1, 
                          rotateY: 0,
                          z: 0
                        }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: index * 0.3,
                          type: "spring",
                          stiffness: 80
                        }}
                        whileHover={{ 
                          scale: 1.08,
                          rotateY: isLeft ? 12 : -12,
                          z: 30,
                          boxShadow: "0 30px 60px rgba(0,0,0,0.5)"
                        }}
                        className="glass-card p-8 relative overflow-hidden group cursor-pointer preserve-3d border border-white/20 backdrop-blur-md"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        {/* Animated Glass Reflection */}
                        <motion.div
                          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none"
                          animate={{
                            background: [
                              'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 100%)',
                              'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
                              'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 100%)'
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Floating Glass Orbs Background */}
                        <motion.div
                          className={`absolute top-6 right-6 w-20 h-20 rounded-full opacity-20 blur-xl ${
                            item.type === 'education' ? 'bg-gradient-to-br from-primary-400 to-copper-500' : 'bg-gradient-to-br from-accent-400 to-sage-500'
                          }`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                        />

                        {/* Enhanced Type Badge */}
                        <div className="flex items-center justify-between mb-6">
                          <motion.span 
                            className={`text-sm font-bold px-5 py-2 rounded-full backdrop-blur-md border ${
                              item.type === 'education' 
                                ? 'bg-primary-500/20 text-primary-200 border-primary-400/40 shadow-lg shadow-primary-500/20' 
                                : 'bg-accent-500/20 text-accent-200 border-accent-400/40 shadow-lg shadow-accent-500/20'
                            }`}
                            whileHover={{ scale: 1.15, y: -3, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.type === 'education' ? '📚 Education' : '💼 Experience'}
                          </motion.span>
                          
                          <motion.span 
                            className="text-gray-200 text-sm font-medium bg-white/15 px-4 py-2 rounded-full backdrop-blur-md border border-white/20"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.period}
                          </motion.span>
                        </div>
                        
                        {/* Enhanced Title with Glowing Effect */}
                        <motion.h4 
                          className="text-white font-bold text-xl mb-4 relative"
                          whileHover={{ 
                            textShadow: "0 0 20px rgba(176, 141, 87, 0.8), 0 0 40px rgba(135, 169, 107, 0.4)",
                            scale: 1.05
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.title}
                          <motion.div 
                            className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r ${
                              item.type === 'education' ? 'from-primary-400 via-copper-400 to-transparent' : 'from-accent-400 via-sage-400 to-transparent'
                            }`}
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.h4>

                        {/* Enhanced Organization Info */}
                        <motion.div 
                          className="flex items-center space-x-3 mb-5"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className={`font-semibold ${
                            item.type === 'education' ? 'text-primary-200' : 'text-accent-200'
                          }`}>{item.organization}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-300 text-sm flex items-center space-x-1">
                            <span>📍</span>
                            <span>{item.location}</span>
                          </span>
                        </motion.div>
                        
                        {/* Enhanced Description */}
                        <motion.p 
                          className="text-gray-200 text-sm leading-relaxed relative z-10"
                          whileHover={{ 
                            color: "#f9fafb",
                            textShadow: "0 0 10px rgba(255,255,255,0.3)"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.description}
                        </motion.p>

                        {/* Glass Edge Highlight */}
                        <div className="absolute inset-0 rounded-lg border border-white/30 pointer-events-none"></div>
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
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