import { motion } from 'framer-motion';
import { useState } from 'react';

const ProfessionalBlackTestLab = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState('black');

  const themes = {
    black: {
      primary: '#ffffff',       // Pure white
      secondary: '#e5e5e5',     // Light gray
      accent: '#888888',        // Medium gray
      muted: '#999999',         // Lighter gray
      border: '#333333',        // Dark gray border
      background: '#000000',    // Pure black
      surface: '#111111',       // Very dark gray
      name: 'Pure Black'
    },
    blue: {
      primary: '#f8fafc',       // Slate 50 - Clean white
      secondary: '#e2e8f0',     // Slate 200 - Light gray
      accent: '#64748b',        // Slate 500 - Professional gray
      muted: '#94a3b8',         // Slate 400 - Muted gray
      border: '#475569',        // Slate 600 - Border gray
      background: '#020617',    // Slate 950 - Deep black with blue tint
      surface: '#0f172a',       // Slate 900 - Surface black with blue tint
      name: 'Professional Blue'
    }
  };

  const currentTheme = themes[selectedTheme];

  return (
    <div className="min-h-screen relative overflow-hidden" 
         style={{ background: currentTheme.background }}>
      
      {/* Theme Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        {Object.entries(themes).map(([key, theme]) => (
          <motion.button
            key={key}
            onClick={() => setSelectedTheme(key)}
            className="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300"
            style={{
              background: selectedTheme === key 
                ? `linear-gradient(145deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))`
                : `linear-gradient(145deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`,
              border: `2px solid ${selectedTheme === key ? currentTheme.accent : 'rgba(255, 255, 255, 0.2)'}`,
              color: currentTheme.primary,
              backdropFilter: 'blur(10px)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme.name}
          </motion.button>
        ))}
      </div>
      
      {/* Professional Background with Theme-based Gradients */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: selectedTheme === 'black' 
            ? `
                radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(128, 128, 128, 0.01) 0%, transparent 50%),
                linear-gradient(145deg, ${currentTheme.background} 0%, ${currentTheme.surface} 50%, ${currentTheme.background} 100%)
              `
            : `
                radial-gradient(circle at 20% 80%, rgba(100, 116, 139, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(71, 85, 105, 0.03) 0%, transparent 50%),
                linear-gradient(145deg, ${currentTheme.background} 0%, ${currentTheme.surface} 50%, ${currentTheme.background} 100%)
              `
        }}
      />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-20"
            style={{ backgroundColor: currentTheme.accent }}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 
            className="text-5xl md:text-7xl font-elegant font-bold mb-6"
            style={{ color: currentTheme.primary }}
          >
            Professional {selectedTheme === 'black' ? 'Black' : 'Blue'} Theme
          </h1>
          <p 
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
            style={{ color: currentTheme.secondary }}
          >
            Elegant, professional design with maintained glassy effects - {currentTheme.name}
          </p>
        </motion.div>

        {/* Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="glass-card-professional relative p-8 rounded-2xl cursor-pointer"
              style={{
                background: selectedTheme === 'black' 
                  ? `linear-gradient(145deg, rgba(17, 17, 17, 0.9), rgba(0, 0, 0, 0.8))`
                  : `linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 0.8))`,
                border: `2px solid ${currentTheme.border}40`,
                backdropFilter: 'blur(10px)',
                boxShadow: selectedTheme === 'black'
                  ? `0 25px 50px rgba(0, 0, 0, 0.8), inset 0 2px 4px rgba(136, 136, 136, 0.1)`
                  : `0 25px 50px rgba(2, 6, 23, 0.5), inset 0 2px 4px rgba(100, 116, 139, 0.1)`
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: selectedTheme === 'black'
                  ? `0 35px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(136, 136, 136, 0.3), inset 0 2px 6px rgba(136, 136, 136, 0.2)`
                  : `0 35px 70px rgba(2, 6, 23, 0.7), 0 0 40px rgba(100, 116, 139, 0.2), inset 0 2px 6px rgba(100, 116, 139, 0.2)`,
                borderColor: `${currentTheme.accent}66`
              }}
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
            >
              <div className="relative z-10">
                <div 
                  className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                  style={{ 
                    background: selectedTheme === 'black'
                      ? `linear-gradient(135deg, rgba(136, 136, 136, 0.2), rgba(68, 68, 68, 0.1))`
                      : `linear-gradient(135deg, rgba(100, 116, 139, 0.2), rgba(71, 85, 105, 0.1))`,
                    border: `1px solid ${currentTheme.accent}4d`
                  }}
                >
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: currentTheme.primary }}
                  >
                    {index}
                  </span>
                </div>
                
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: currentTheme.primary }}
                >
                  Professional Feature {index}
                </h3>
                
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: currentTheme.secondary }}
                >
                  Clean, professional design maintaining all the beautiful glassy and dynamic effects you love.
                </p>
              </div>

              {/* Liquid Animation Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0"
                style={{
                  background: selectedTheme === 'black'
                    ? `linear-gradient(90deg, transparent, rgba(136, 136, 136, 0.1), transparent)`
                    : `linear-gradient(90deg, transparent, rgba(100, 116, 139, 0.1), transparent)`
                }}
                animate={activeCard === index ? {
                  opacity: [0, 0.5, 0],
                  x: [-100, 300, -100]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Interactive 3D Button */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            className="professional-glass-button px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
            style={{
              background: selectedTheme === 'black'
                ? `linear-gradient(145deg, rgba(17, 17, 17, 0.8), rgba(0, 0, 0, 0.6))`
                : `linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 0.6))`,
              border: `2px solid ${currentTheme.border}`,
              color: currentTheme.primary,
              backdropFilter: 'blur(10px)',
              boxShadow: selectedTheme === 'black'
                ? `0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(136, 136, 136, 0.1)`
                : `0 8px 25px rgba(2, 6, 23, 0.4), inset 0 1px 2px rgba(100, 116, 139, 0.1)`
            }}
            whileHover={{
              scale: 1.05,
              background: selectedTheme === 'black'
                ? `linear-gradient(145deg, rgba(136, 136, 136, 0.2), rgba(68, 68, 68, 0.1))`
                : `linear-gradient(145deg, rgba(100, 116, 139, 0.2), rgba(71, 85, 105, 0.1))`,
              borderColor: currentTheme.accent,
              boxShadow: selectedTheme === 'black'
                ? `0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(136, 136, 136, 0.2)`
                : `0 12px 35px rgba(2, 6, 23, 0.6), 0 0 20px rgba(100, 116, 139, 0.2)`
            }}
            whileTap={{ scale: 0.98 }}
          >
            Professional Action
          </motion.button>
        </motion.div>

        {/* Floating Elements with 3D Effect */}
        <div className="relative h-64 mb-16">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 rounded-2xl"
              style={{
                background: selectedTheme === 'black'
                  ? `linear-gradient(145deg, rgba(17, 17, 17, 0.7), rgba(0, 0, 0, 0.5))`
                  : `linear-gradient(145deg, rgba(15, 23, 42, 0.7), rgba(2, 6, 23, 0.5))`,
                border: `1px solid ${currentTheme.border}`,
                backdropFilter: 'blur(8px)',
                left: `${10 + i * 15}%`,
                top: `${20 + Math.sin(i) * 30}%`
              }}
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 360],
                rotateX: [0, 15, 0]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Text Showcase */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2 
            className="text-4xl md:text-6xl font-elegant font-bold mb-8"
            style={{ 
              color: currentTheme.primary,
              background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Professional Typography
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p 
              className="text-xl font-light leading-relaxed"
              style={{ color: currentTheme.secondary }}
            >
              This professional {selectedTheme === 'black' ? 'black' : 'blue'} theme maintains all your beautiful liquid and glassy effects 
              while providing a sophisticated, corporate-ready appearance.
            </p>
            
            <p 
              className="text-lg"
              style={{ color: currentTheme.muted }}
            >
              Perfect for professional portfolios, business presentations, and elegant web applications.
            </p>
          </div>
        </motion.div>

        {/* Liquid Wave Animation */}
        <div className="relative h-32 overflow-hidden rounded-2xl mb-16">
          <motion.div
            className="absolute inset-0"
            style={{
              background: selectedTheme === 'black'
                ? `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(136, 136, 136, 0.1) 25%, 
                    rgba(68, 68, 68, 0.15) 50%, 
                    rgba(136, 136, 136, 0.1) 75%, 
                    transparent 100%)`
                : `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(100, 116, 139, 0.1) 25%, 
                    rgba(71, 85, 105, 0.15) 50%, 
                    rgba(100, 116, 139, 0.1) 75%, 
                    transparent 100%)`
            }}
            animate={{
              x: [-200, window.innerWidth + 200]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className="text-2xl font-elegant font-bold"
              style={{ color: currentTheme.primary }}
            >
              Liquid Animation Preserved
            </span>
          </div>
        </div>

        {/* Color Palette Display */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {Object.entries(currentTheme).filter(([key]) => key !== 'name').map(([name, color]) => (
            <div key={name} className="text-center">
              <div
                className="w-full h-20 rounded-lg mb-2 border-2"
                style={{ 
                  backgroundColor: color,
                  borderColor: currentTheme.border
                }}
              />
              <p 
                className="text-sm font-medium capitalize"
                style={{ color: currentTheme.secondary }}
              >
                {name}
              </p>
              <p 
                className="text-xs font-mono"
                style={{ color: currentTheme.muted }}
              >
                {color}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProfessionalBlackTestLab;