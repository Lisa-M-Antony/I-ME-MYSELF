import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, Database, BarChart3, Brain } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  const features = [
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Advanced statistical analysis and data modeling'
    },
    {
      icon: BarChart3,
      title: 'Visualization',
      description: 'Creating insightful dashboards and reports'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Predictive modeling and algorithmic solutions'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-600/20 rounded-full mix-blend-multiply filter blur-xl animate-float" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-copper-400/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-75 blur-md"
              />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-blue-400/30">
                <motion.img
                  src="/Lisa Photo.jpg"
                  alt="Lisa M Antony"
                  className="w-full h-full object-cover object-top"
                  whileHover={{ 
                    scale: 1.15,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 1.05 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-blue-400"
              animate={{
                textShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                  '0 0 40px rgba(59, 130, 246, 0.8)',
                  '0 0 20px rgba(59, 130, 246, 0.5)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              LISA M ANTONY
            </motion.h1>
            
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-gray-300"
            >
              <Sparkles className="text-blue-400" size={24} />
              <span>Data Scientist | Mathematician | Analyst</span>
              <Sparkles className="text-blue-400" size={24} />
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            "Transforming complex data into actionable insights through mathematical precision and analytical expertise."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group glass-card px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-500/25 flex items-center space-x-2 text-white font-medium transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>

            <Link to="/ai-avatar">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button border border-accent-500/30 hover:border-accent-400 text-accent-400 hover:text-accent-300 flex items-center space-x-2"
              >
                <span>AI Avatar Intro</span>
                <Sparkles size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">
              What I Do
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Specializing in data analysis, visualization, and machine learning to drive business decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-8 text-center group cursor-pointer"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;