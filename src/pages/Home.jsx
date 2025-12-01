import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, Database, BarChart3, Brain } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  const features = [
    {
      icon: Database,
      title: 'Statistical Modeling',
      description: 'Advanced mathematical analysis and algorithmic precision in data interpretation'
    },
    {
      icon: BarChart3,
      title: 'Visual Narratives',
      description: 'Transforming complex datasets into compelling visual stories and insights'
    },
    {
      icon: Brain,
      title: 'Predictive Intelligence',
      description: 'Machine learning methodologies for forecasting and pattern recognition'
    }
  ];

  // Mathematical symbols for floating background
  const mathSymbols = ['∑', '∫', '∂', 'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'λ', 'μ', 'π', 'ρ', 'σ', 'τ', 'φ', 'χ', 'ψ', 'ω'];

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
      {/* Mathematical Background Symbols */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {mathSymbols.slice(0, 12).map((symbol, index) => (
          <motion.div
            key={symbol + index}
            className="absolute text-4xl font-mathematical text-copper-400/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              rotate: [null, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: index * 2,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-sage-600/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
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
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-3 border-copper-400/40 shadow-2xl profile-container">
                <img
                  src="/Lisa Photo.jpg"
                  alt="Lisa M Antony"
                  className="w-full h-full object-cover object-top profile-image"
                />
                {/* Mathematical overlay that fades on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-renaissance-charcoal-800/20 to-transparent profile-overlay pointer-events-none" />
                
                {/* Additional hover effect indicator */}
                <div className="absolute inset-0 border-2 border-copper-300/0 hover:border-copper-300/60 rounded-full transition-all duration-500" />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-elegant font-bold text-transparent bg-gradient-to-r from-copper-400 via-copper-300 to-copper-500 bg-clip-text elegant-typography"
              animate={{
                textShadow: [
                  '0 0 20px rgba(176, 141, 87, 0.5)',
                  '0 0 40px rgba(176, 141, 87, 0.8)',
                  '0 0 20px rgba(176, 141, 87, 0.5)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              LISA M ANTONY
            </motion.h1>
            
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-3 text-lg md:text-xl text-sage-300"
            >
              <span className="text-copper-400 font-mathematical">PhD</span>
              <div className="w-2 h-2 bg-copper-400 rounded-full"></div>
              <span className="font-serif italic">Data Renaissance Scholar</span>
              <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
              <span>Mathematical Analyst</span>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-2 text-sm text-copper-300/80"
            >
              <span className="font-mathematical">∑</span>
              <span>Excellence in Research</span>
              <span className="font-mathematical">∫</span>
              <span>Analytical Precision</span>
              <span className="font-mathematical">∂</span>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 bg-gradient-to-r from-renaissance-charcoal-800/60 to-renaissance-charcoal-700/40 rounded-2xl border border-copper-400/30 backdrop-blur-sm">
              {/* Decorative corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-copper-400/50"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-copper-400/50"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-copper-400/50"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-copper-400/50"></div>
              
              <p className="text-xl md:text-2xl text-parchment-300 leading-relaxed font-serif scholarly-quote">
                Transforming the labyrinthine complexities of data into crystalline insights through mathematical elegance and analytical rigor.
              </p>
              
              {/* Mathematical formula decoration */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-copper-400/40 font-mathematical">
                ∫ knowledge · dx = wisdom
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 bg-gradient-to-r from-copper-600 via-copper-500 to-copper-600 hover:from-copper-500 hover:via-copper-400 hover:to-copper-500 
                         rounded-xl shadow-xl shadow-copper-500/25 flex items-center space-x-3 text-parchment font-medium transition-all duration-300
                         border border-copper-400/50 hover:border-copper-300 scholar-glow"
              >
                <span className="font-elegant">Explore My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>

            <Link to="/ai-avatar">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button border-2 border-sage-500/40 hover:border-sage-400 text-sage-300 hover:text-sage-200 flex items-center space-x-3"
              >
                <span className="font-serif">Digital Persona</span>
                <span className="font-mathematical">α</span>
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
            className="w-6 h-10 border-2 border-copper-400/50 rounded-full flex justify-center backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-copper-400/80 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section - Scholar's Study */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative mathematical-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block relative">
              {/* Decorative mathematical border */}
              <div className="absolute -top-4 -left-4 text-copper-400/30 font-mathematical text-2xl">∑</div>
              <div className="absolute -top-4 -right-4 text-sage-400/30 font-mathematical text-2xl">∫</div>
              <div className="absolute -bottom-4 -left-4 text-sage-400/30 font-mathematical text-2xl">∂</div>
              <div className="absolute -bottom-4 -right-4 text-copper-400/30 font-mathematical text-2xl">π</div>
              
              <h2 className="text-4xl md:text-5xl font-elegant font-bold renaissance-gradient-text mb-6 elegant-typography">
                Fields of Inquiry
              </h2>
            </div>
            <p className="text-sage-300 text-xl max-w-3xl mx-auto font-serif leading-relaxed">
              Specializing in the intersection of mathematical theory and practical data science, 
              where analytical rigor meets innovative discovery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const mathSymbolsForCard = ['∫', '∑', '∂'];
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="study-card p-10 text-center group cursor-pointer relative overflow-hidden"
                >
                  {/* Decorative top border that grows on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-copper-400 via-sage-400 to-copper-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  {/* Icon with mathematical corner decoration */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-copper-500 to-copper-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 scholar-glow relative">
                        <Icon size={36} className="text-parchment" />
                        {/* Mathematical symbol in corner */}
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-sage-500 rounded-full flex items-center justify-center text-xs text-renaissance-charcoal font-mono">
                          {mathSymbolsForCard[index]}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-elegant font-bold text-parchment mb-4 group-hover:text-copper-300 transition-colors duration-300 elegant-typography">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sage-200 leading-relaxed font-serif group-hover:text-parchment-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Renaissance manuscript decoration that appears on hover */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex space-x-2 text-copper-400/50">
                      <div className="w-2 h-2 border border-copper-400 rounded-full" />
                      <div className="w-3 h-1 bg-sage-400 rounded-full" />
                      <div className="w-2 h-2 border border-copper-400 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Wisdom shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 wisdom-shimmer rounded-2xl pointer-events-none" />
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