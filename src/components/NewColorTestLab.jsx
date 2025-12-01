import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Eye, Palette } from 'lucide-react';

const NewColorTestLab = () => {
  const [currentBg, setCurrentBg] = useState(0);

  const backgroundOptions = [
    {
      name: "Current Data Renaissance",
      description: "Your current copper/sage theme",
      className: "",
      style: {
        background: `
          radial-gradient(circle at 20% 30%, rgba(176, 141, 87, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(135, 169, 107, 0.06) 0%, transparent 50%),
          #0a0b0d
        `
      },
      colors: {
        primary: 'rgba(176, 141, 87, 0.8)', // copper
        secondary: 'rgba(135, 169, 107, 0.8)', // sage
        accent: 'rgba(240, 234, 210, 0.9)', // parchment
        glow: 'rgba(176, 141, 87, 0.6)'
      }
    },
    {
      name: "Deep Ink Foundation",
      description: "Ink black base with blue slate accents",
      className: "",
      style: {
        background: `
          radial-gradient(circle at 25% 25%, rgba(62, 92, 118, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 75% 75%, rgba(29, 45, 68, 0.06) 0%, transparent 70%),
          #0d1321
        `
      },
      colors: {
        primary: 'rgba(116, 140, 171, 0.8)', // dusty_denim
        secondary: 'rgba(62, 92, 118, 0.8)', // blue_slate  
        accent: 'rgba(240, 235, 216, 0.9)', // eggshell
        glow: 'rgba(116, 140, 171, 0.6)'
      }
    },
    {
      name: "Space Blue Elegance",
      description: "Deep space blue with dusty denim highlights",
      className: "",
      style: {
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(116, 140, 171, 0.06) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 80%, rgba(62, 92, 118, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(29, 45, 68, 0.03) 0%, transparent 40%),
          #1d2d44
        `
      },
      colors: {
        primary: 'rgba(116, 140, 171, 0.9)', // dusty_denim
        secondary: 'rgba(29, 45, 68, 0.8)', // deep_space_blue
        accent: 'rgba(240, 235, 216, 0.95)', // eggshell
        glow: 'rgba(116, 140, 171, 0.7)'
      }
    },
    {
      name: "Layered Professional",
      description: "Blue slate base with eggshell warmth",
      className: "",
      style: {
        background: `
          radial-gradient(ellipse at 20% 80%, rgba(240, 235, 216, 0.04) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(116, 140, 171, 0.05) 0%, transparent 60%),
          radial-gradient(circle at 60% 40%, rgba(29, 45, 68, 0.06) 0%, transparent 40%),
          #3e5c76
        `
      },
      colors: {
        primary: 'rgba(240, 235, 216, 0.9)', // eggshell
        secondary: 'rgba(116, 140, 171, 0.8)', // dusty_denim
        accent: 'rgba(29, 45, 68, 0.7)', // deep_space_blue
        glow: 'rgba(240, 235, 216, 0.6)'
      }
    },
    {
      name: "Dusty Sophistication",
      description: "Dusty denim with warm eggshell glows",
      className: "",
      style: {
        background: `
          radial-gradient(circle at 15% 15%, rgba(240, 235, 216, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 85% 85%, rgba(29, 45, 68, 0.04) 0%, transparent 60%),
          radial-gradient(ellipse at 50% 10%, rgba(62, 92, 118, 0.05) 0%, transparent 40%),
          #748cab
        `
      },
      colors: {
        primary: 'rgba(240, 235, 216, 0.95)', // eggshell
        secondary: 'rgba(62, 92, 118, 0.8)', // blue_slate
        accent: 'rgba(29, 45, 68, 0.8)', // deep_space_blue
        glow: 'rgba(240, 235, 216, 0.7)'
      }
    },
    {
      name: "Gradient Harmony",
      description: "Smooth gradient from ink to eggshell",
      className: "",
      style: {
        background: `
          radial-gradient(ellipse at 100% 0%, rgba(240, 235, 216, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 0% 100%, rgba(116, 140, 171, 0.06) 0%, transparent 50%),
          linear-gradient(135deg, rgba(13, 19, 33, 0.9) 0%, rgba(29, 45, 68, 0.8) 50%, rgba(62, 92, 118, 0.7) 100%),
          #0d1321
        `
      },
      colors: {
        primary: 'rgba(116, 140, 171, 0.9)', // dusty_denim
        secondary: 'rgba(240, 235, 216, 0.8)', // eggshell
        accent: 'rgba(62, 92, 118, 0.8)', // blue_slate
        glow: 'rgba(116, 140, 171, 0.6)'
      }
    }
  ];

  const nextBackground = () => {
    setCurrentBg((prev) => (prev + 1) % backgroundOptions.length);
  };

  const prevBackground = () => {
    setCurrentBg((prev) => (prev - 1 + backgroundOptions.length) % backgroundOptions.length);
  };

  const currentOption = backgroundOptions[currentBg];

  return (
    <div 
      className={`min-h-screen transition-all duration-1000 ease-in-out ${currentOption.className}`}
      style={currentOption.style}
    >
      {/* Test Content with New Colors */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        
        {/* Color Test Controller */}
        <motion.div 
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md border rounded-2xl p-4"
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderColor: currentOption.colors.primary
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-4">
            <button 
              onClick={prevBackground}
              className="p-2 rounded-full transition-colors"
              style={{
                backgroundColor: currentOption.colors.primary + '20',
                color: currentOption.colors.primary
              }}
            >
              <ArrowLeft size={16} />
            </button>
            
            <div className="text-center min-w-72">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Palette size={18} style={{ color: currentOption.colors.primary }} />
                <h3 className="font-elegant font-bold text-lg" style={{ color: currentOption.colors.accent }}>
                  {currentOption.name}
                </h3>
              </div>
              <p className="text-sm" style={{ color: currentOption.colors.secondary }}>
                {currentOption.description}
              </p>
              <div className="text-xs mt-1" style={{ color: currentOption.colors.primary }}>
                {currentBg + 1} of {backgroundOptions.length}
              </div>
            </div>
            
            <button 
              onClick={nextBackground}
              className="p-2 rounded-full transition-colors"
              style={{
                backgroundColor: currentOption.colors.primary + '20',
                color: currentOption.colors.primary
              }}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Test Profile Image with New Colors */}
        <motion.div 
          className="mb-8 perspective-1000"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
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
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 shadow-2xl backdrop-blur-md"
                 style={{
                   borderColor: currentOption.colors.primary + '50',
                   background: `linear-gradient(135deg, ${currentOption.colors.primary}15 0%, rgba(255,255,255,0.1) 50%, ${currentOption.colors.secondary}10 100%)`
                 }}>
              <div className="w-full h-full flex items-center justify-center"
                   style={{
                     background: `linear-gradient(to-br, ${currentOption.colors.primary}20, ${currentOption.colors.secondary}20)`
                   }}>
                <Eye size={48} style={{ color: currentOption.colors.accent + 'AA' }} />
              </div>
              
              {/* Floating particles with new colors */}
              <motion.div
                className="absolute -top-3 -right-3 w-4 h-4 rounded-full shadow-lg backdrop-blur-sm"
                style={{ backgroundColor: currentOption.colors.primary + 'B0' }}
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
                className="absolute -bottom-4 -left-4 w-3 h-3 rounded-full shadow-md backdrop-blur-sm"
                style={{ backgroundColor: currentOption.colors.secondary + 'A0' }}
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
              
              {/* Glass edge effects with new colors */}
              <div className="absolute inset-0 rounded-full border-2 pointer-events-none"
                   style={{ borderColor: currentOption.colors.accent + '40' }}></div>
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full blur-md"
                   style={{ backgroundColor: currentOption.colors.accent + '30' }}></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Test Name with New Color Glow */}
        <motion.h1
          className="text-5xl md:text-6xl font-elegant font-bold elegant-typography mb-6"
          style={{
            background: `linear-gradient(to right, ${currentOption.colors.primary}, ${currentOption.colors.accent}, ${currentOption.colors.secondary})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
          animate={{
            filter: [
              `drop-shadow(0 0 20px ${currentOption.colors.glow}) drop-shadow(0 0 40px ${currentOption.colors.glow}50)`,
              `drop-shadow(0 0 40px ${currentOption.colors.glow}) drop-shadow(0 0 60px ${currentOption.colors.glow}80)`,
              `drop-shadow(0 0 20px ${currentOption.colors.glow}) drop-shadow(0 0 40px ${currentOption.colors.glow}50)`
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          NEW COLOR TEST
        </motion.h1>

        {/* Test Glass Card with New Colors */}
        <motion.div 
          className="relative p-6 rounded-2xl border backdrop-blur-md overflow-visible preserve-3d max-w-2xl"
          style={{
            background: `linear-gradient(135deg, ${currentOption.colors.primary}12 0%, rgba(255,255,255,0.05) 50%, ${currentOption.colors.secondary}08 100%)`,
            borderColor: currentOption.colors.accent + '30'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: `0 25px 50px rgba(0,0,0,0.3), 0 0 30px ${currentOption.colors.glow}40`
          }}
        >
          {/* Glass reflection animation with new colors */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent 0%, ${currentOption.colors.accent}10 30%, ${currentOption.colors.accent}20 50%, ${currentOption.colors.accent}10 70%, transparent 100%)`
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
          
          {/* Floating orbs with new colors */}
          <motion.div
            className="absolute top-4 right-8 w-16 h-16 rounded-full blur-xl"
            style={{
              background: `linear-gradient(to bottom right, ${currentOption.colors.primary}20, ${currentOption.colors.secondary}10)`
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          
          <p className="relative z-10 text-xl leading-relaxed font-serif text-center"
             style={{ color: currentOption.colors.accent }}>
            Testing the new professional blue palette with your glassy effects. 
            Notice how the colors work with the glass reflections and floating particles.
          </p>
          
          <div className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
               style={{ borderColor: currentOption.colors.accent + '20' }}></div>
        </motion.div>

        {/* Mathematical symbols with new colors */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {['∑', '∫', '∂', 'π', 'α', 'β'].map((symbol, index) => (
            <motion.div
              key={symbol + index}
              className="absolute text-2xl font-mathematical"
              style={{ color: currentOption.colors.primary + '20' }}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                rotate: Math.random() * 360,
              }}
              animate={{
                x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
                y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
                rotate: [null, 360],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: index * 2,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>

        {/* Instructions with new colors */}
        <motion.div 
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm" style={{ color: currentOption.colors.secondary }}>
            Click arrows to test the professional blue color palette
          </p>
          <p className="text-xs mt-1" style={{ color: currentOption.colors.primary }}>
            All glassy effects preserved with new sophisticated colors
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NewColorTestLab;