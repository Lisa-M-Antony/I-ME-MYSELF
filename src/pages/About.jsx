import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Code2, Database, BarChart3, Brain, Users, TrendingUp } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const skills = [
    { name: 'Python', level: 90, icon: Code2, color: 'from-primary-400 to-primary-600' },
    { name: 'SQL', level: 85, icon: Database, color: 'from-accent-400 to-accent-600' },
    { name: 'Power BI', level: 80, icon: BarChart3, color: 'from-copper-400 to-copper-600' },
    { name: 'Excel', level: 95, icon: TrendingUp, color: 'from-warm-400 to-warm-600' },
    { name: 'Pandas', level: 88, icon: Code2, color: 'from-primary-500 to-primary-700' },
    { name: 'Machine Learning', level: 75, icon: Brain, color: 'from-accent-500 to-accent-700' },
    { name: 'React', level: 65, icon: Code2, color: 'from-copper-500 to-copper-700' },
  ];

  const timeline = [
    {
      type: 'education',
      title: 'Master of Data Science',
      organization: 'University of Technology',
      period: '2023 - 2025',
      location: 'Remote',
      description: 'Specialized in machine learning, statistical analysis, and data visualization with focus on business applications.',
      icon: Award
    },
    {
      type: 'experience',
      title: 'Junior Data Analyst',
      organization: 'DataTech Solutions',
      period: '2024 - Present',
      location: 'Remote',
      description: 'Developing automated reporting systems and conducting exploratory data analysis for client projects.',
      icon: Users
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Applications',
      organization: 'ABC University',
      period: '2020 - 2023',
      location: 'India',
      description: 'Foundation in programming, database management, and software development principles.',
      icon: Award
    },
    {
      type: 'experience',
      title: 'Data Analytics Intern',
      organization: 'StartUp Analytics',
      period: 'Summer 2023',
      location: 'Remote',
      description: 'Built customer segmentation models and created interactive dashboards for marketing team.',
      icon: Users
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
                  I'm a passionate Data Analyst and Junior Data Scientist with a keen eye for uncovering 
                  hidden patterns in complex datasets. My journey into data science began with a curiosity 
                  about how numbers can tell compelling stories.
                </p>
                <p>
                  With expertise in Python, SQL, and modern visualization tools, I specialize in transforming 
                  raw data into clear, actionable insights that drive business decisions. I believe that the 
                  best analysis is one that not only reveals what happened, but also explains why it happened 
                  and predicts what might happen next.
                </p>
                <p>
                  When I'm not diving deep into datasets, you'll find me exploring the latest in machine learning 
                  algorithms, building interactive dashboards, or contributing to open-source data science projects.
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
                    <h4 className="text-white font-semibold">Current Focus</h4>
                    <p className="text-gray-400 text-sm">Junior Data Scientist</p>
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