import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, Database, BarChart3, Brain } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Data Analytics & Visualization',
      description: 'Transforming complex datasets into compelling insights through Excel, Tableau, and SQL mastery',
      gradient: 'from-primary-400 to-copper-500',
      mathSymbol: '∑'
    },
    {
      icon: Brain,
      title: 'Machine Learning & Statistics',
      description: 'Building predictive models and statistical frameworks using Python and advanced mathematical techniques',
      gradient: 'from-sage-400 to-accent-500',
      mathSymbol: '∫'
    },
    {
      icon: Database,
      title: 'Mathematical Computation',
      description: 'Leveraging mathematical foundations with LaTeX, MATHEMATICA, and analytical research methodologies',
      gradient: 'from-copper-400 to-parchment-500',
      mathSymbol: '∂'
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
          {/* Profile Image with Glass Effect */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8 perspective-1000"
          >
            <motion.div
              className="relative preserve-3d"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                z: 30
              }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-md"
                   style={{
                     background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
                   }}>
                <img
                  src="/Lisa Photo.jpg"
                  alt="Lisa M Antony"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Subtle glow particles around profile */}
                
                {/* Floating particles around profile */}
                <motion.div
                  className="absolute -top-3 -right-3 w-4 h-4 bg-copper-400/70 rounded-full shadow-lg"
                  animate={{
                    y: [-5, -15, -5],
                    x: [-2, 6, -2],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-3 h-3 bg-sage-400/60 rounded-full shadow-md"
                  animate={{
                    y: [3, 12, 3],
                    x: [2, -4, 2],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
                
                {/* Glass edge highlight */}
                <div className="absolute inset-0 rounded-full border border-white/30 pointer-events-none"></div>
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full blur-md"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-elegant font-bold text-transparent bg-gradient-to-r from-copper-400 via-copper-300 to-copper-500 bg-clip-text elegant-typography"
              animate={{
                textShadow: [
                  '0 0 20px rgba(176, 141, 87, 0.5), 0 0 40px rgba(176, 141, 87, 0.2)',
                  '0 0 40px rgba(176, 141, 87, 0.8), 0 0 60px rgba(176, 141, 87, 0.4)',
                  '0 0 20px rgba(176, 141, 87, 0.5), 0 0 40px rgba(176, 141, 87, 0.2)'
                ]
              }}
              whileHover={{
                scale: 1.02,
                textShadow: '0 0 60px rgba(176, 141, 87, 1), 0 0 80px rgba(176, 141, 87, 0.6)'
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
              whileHover={{
                textShadow: '0 0 15px rgba(135, 169, 107, 0.6)'
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-copper-400 font-mathematical">MSc Mathematics</span>
              <div className="w-2 h-2 bg-copper-400 rounded-full"></div>
              <span className="font-serif italic">Aspiring Data Scientist</span>
              <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
              <span className="font-serif italic">Mathematician</span>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-2 text-sm text-copper-300/80"
              whileHover={{
                textShadow: '0 0 10px rgba(176, 141, 87, 0.8)'
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-mathematical">∑</span>
              <span>Excellence in Analytics</span>
              <span className="font-mathematical">∫</span>
              <span>Data-Driven Insights</span>
              <span className="font-mathematical">∂</span>
            </motion.div>
          </motion.div>

          {/* Tagline with Glass Effect */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto perspective-1000"
          >
            <motion.div 
              className="relative px-8 py-6 pb-14 rounded-2xl border border-white/30 backdrop-blur-md overflow-visible preserve-3d"
              style={{
                background: 'linear-gradient(135deg, rgba(176, 141, 87, 0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(135, 169, 107, 0.1) 100%)'
              }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 2,
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Animated glass reflection */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)'
                }}
                animate={{
                  x: [-300, 300],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />

              {/* Floating background orbs */}
              <motion.div
                className="absolute top-4 right-8 w-16 h-16 bg-gradient-to-br from-copper-400/20 to-sage-400/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-tl from-sage-400/25 to-copper-400/15 rounded-full blur-lg"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
              
              {/* Enhanced decorative corners */}
              <motion.div 
                className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-copper-400/60"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.div 
                className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-sage-400/60"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-sage-400/60"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-copper-400/60"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              
              <p className="relative z-10 text-xl md:text-2xl text-parchment-200 leading-relaxed font-serif scholarly-quote">
                Where mathematical foundations meet modern data science - transforming complex datasets into actionable insights through analytical excellence and innovative thinking.
              </p>
              
              {/* Enhanced mathematical formula decoration */}
              <motion.div 
                className="absolute -bottom-0.499 left-1/2 transform -translate-x-1/2 text-base text-copper-300/80 font-mathematical bg-renaissance-charcoal-900/90 px-6 py-2 rounded-full backdrop-blur-md border border-copper-400/40 shadow-lg z-20"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
                style={{
                  boxShadow: '0 8px 25px rgba(176, 141, 87, 0.3)'
                }}
              >
                ∫ data · insights = impact
              </motion.div>

              {/* Glass edge effects */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
            </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 perspective-1000">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
                  whileHover={{ 
                    scale: 1.08, 
                    rotateY: index % 2 === 0 ? 8 : -8,
                    z: 30,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.4)"
                  }}
                  className="relative preserve-3d group cursor-pointer"
                >
                  <div className="relative p-10 rounded-2xl overflow-hidden border border-white/30 backdrop-blur-md text-center"
                       style={{
                         background: `linear-gradient(135deg, rgba(176, 141, 87, 0.12) 0%, rgba(255,255,255,0.05) 50%, rgba(135, 169, 107, 0.08) 100%)`
                       }}>
                    
                    {/* Floating background orbs */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      <motion.div
                        className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${feature.gradient}/20 rounded-full blur-xl`}
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 4 + index, repeat: Infinity, delay: index * 0.5 }}
                      />
                      <motion.div
                        className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tl ${feature.gradient}/15 rounded-full blur-lg`}
                        animate={{
                          scale: [1.2, 1, 1.2],
                          opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{ duration: 3 + index, repeat: Infinity, delay: index * 0.7 }}
                      />
                    </div>

                    {/* Glass reflection animation */}
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
                        repeatDelay: 4,
                        ease: "easeInOut",
                        delay: index * 0.8
                      }}
                    />

                    {/* Enhanced growing top border */}
                    <motion.div 
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} transform origin-left`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                    />
                    
                    {/* Enhanced Icon with glass effect */}
                    <div className="flex justify-center mb-8 relative z-10">
                      <motion.div
                        className="relative"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 10,
                          boxShadow: `0 15px 35px rgba(176, 141, 87, 0.4)`
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20 relative`}>
                          <Icon size={36} className="text-white drop-shadow-lg" />
                          
                          {/* Mathematical symbol in corner with glass effect */}
                          <motion.div 
                            className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-sm text-white font-mathematical border border-white/30 shadow-lg"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {feature.mathSymbol}
                          </motion.div>
                          
                          {/* Glass highlight on icon */}
                          <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.h3 
                      className="relative z-10 text-2xl font-elegant font-bold text-white mb-4 elegant-typography"
                      whileHover={{ 
                        textShadow: "0 0 20px rgba(176, 141, 87, 0.8)",
                        scale: 1.05
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="relative z-10 text-gray-200 leading-relaxed font-serif"
                      whileHover={{ 
                        color: "#f9fafb",
                        textShadow: "0 0 10px rgba(255,255,255,0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>
                    
                    {/* Enhanced renaissance decoration */}
                    <motion.div 
                      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="flex space-x-3 items-center">
                        <div className="w-3 h-3 border-2 border-copper-400/60 rounded-full backdrop-blur-sm" />
                        <div className="w-6 h-1.5 bg-gradient-to-r from-copper-400 to-sage-400 rounded-full" />
                        <div className="w-3 h-3 border-2 border-sage-400/60 rounded-full backdrop-blur-sm" />
                      </div>
                    </motion.div>

                    {/* Glass edge effects */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                  </div>
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