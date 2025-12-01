import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Eye } from 'lucide-react';

const BackgroundTestLab = () => {
  const [currentBg, setCurrentBg] = useState(0);

  const backgroundOptions = [
    {
      name: "Current Default",
      description: "Your current background",
      className: "bg-renaissance-charcoal",
      style: {}
    },
    {
      name: "Deep Renaissance Charcoal",
      description: "Deep charcoal with subtle theme gradients",
      className: "",
      style: {
        background: `
          radial-gradient(circle at 20% 30%, rgba(176, 141, 87, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(135, 169, 107, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(176, 141, 87, 0.05) 0%, transparent 40%),
          #0a0b0d
        `
      }
    },
    {
      name: "Mathematical Paper",
      description: "Warm off-black with parchment undertones",
      className: "",
      style: {
        background: `
          radial-gradient(circle at 30% 20%, rgba(240, 234, 210, 0.03) 0%, transparent 60%),
          radial-gradient(circle at 70% 90%, rgba(176, 141, 87, 0.04) 0%, transparent 50%),
          linear-gradient(135deg, rgba(240, 234, 210, 0.02) 0%, transparent 100%),
          #1a1612
        `
      }
    },
    {
      name: "Layered Atmospheric",
      description: "Sage-tinted charcoal with soft gradient orbs",
      className: "",
      style: {
        background: `
          radial-gradient(ellipse at 25% 25%, rgba(176, 141, 87, 0.05) 0%, transparent 60%),
          radial-gradient(ellipse at 75% 75%, rgba(135, 169, 107, 0.04) 0%, transparent 70%),
          radial-gradient(ellipse at 50% 10%, rgba(176, 141, 87, 0.03) 0%, transparent 50%),
          radial-gradient(ellipse at 10% 90%, rgba(135, 169, 107, 0.05) 0%, transparent 60%),
          #0d1210
        `
      }
    },
    {
      name: "Scholar's Study",
      description: "Rich dark brown-black with warm copper glow",
      className: "",
      style: {
        background: `
          radial-gradient(ellipse at 100% 0%, rgba(176, 141, 87, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 0% 100%, rgba(176, 141, 87, 0.06) 0%, transparent 60%),
          radial-gradient(ellipse at 100% 100%, rgba(176, 141, 87, 0.04) 0%, transparent 40%),
          radial-gradient(ellipse at 0% 0%, rgba(176, 141, 87, 0.05) 0%, transparent 50%),
          #120f0a
        `
      }
    },
    {
      name: "Data Visualization",
      description: "Deep charcoal with subtle grid and data points",
      className: "",
      style: {
        background: `
          radial-gradient(circle at 15% 15%, rgba(176, 141, 87, 0.4) 0%, rgba(176, 141, 87, 0.1) 1px, transparent 1px),
          radial-gradient(circle at 35% 45%, rgba(135, 169, 107, 0.3) 0%, rgba(135, 169, 107, 0.08) 1px, transparent 1px),
          radial-gradient(circle at 65% 25%, rgba(176, 141, 87, 0.25) 0%, rgba(176, 141, 87, 0.06) 1px, transparent 1px),
          radial-gradient(circle at 85% 75%, rgba(135, 169, 107, 0.35) 0%, rgba(135, 169, 107, 0.09) 1px, transparent 1px),
          radial-gradient(circle at 25% 85%, rgba(176, 141, 87, 0.3) 0%, rgba(176, 141, 87, 0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          #0f1014
        `,
        backgroundSize: 'auto, auto, auto, auto, auto, 60px 60px, 60px 60px, auto'
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
      {/* Test Content - Mimics your home page elements */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        
        {/* Background Test Controller */}
        <motion.div 
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-4">
            <button 
              onClick={prevBackground}
              className="p-2 rounded-full bg-copper-500/20 hover:bg-copper-500/30 text-copper-300 transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            
            <div className="text-center min-w-64">
              <h3 className="text-parchment-200 font-elegant font-bold text-lg">
                {currentOption.name}
              </h3>
              <p className="text-sage-300 text-sm">{currentOption.description}</p>
              <div className="text-copper-400 text-xs mt-1">
                {currentBg + 1} of {backgroundOptions.length}
              </div>
            </div>
            
            <button 
              onClick={nextBackground}
              className="p-2 rounded-full bg-copper-500/20 hover:bg-copper-500/30 text-copper-300 transition-colors"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Test Profile Image */}
        <motion.div 
          className="mb-8 perspective-1000"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-md"
               style={{
                 background: 'linear-gradient(135deg, rgba(176, 141, 87, 0.15) 0%, rgba(255,255,255,0.1) 50%, rgba(135, 169, 107, 0.1) 100%)'
               }}>
            <div className="w-full h-full bg-gradient-to-br from-copper-400/20 to-sage-400/20 flex items-center justify-center">
              <Eye size={48} className="text-white/60" />
            </div>
            {/* Floating particles */}
            <motion.div
              className="absolute -top-3 -right-3 w-4 h-4 bg-copper-400/70 rounded-full shadow-lg backdrop-blur-sm"
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
            <div className="absolute inset-0 rounded-full border-2 border-white/40 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Test Name with Glow */}
        <motion.h1
          className="text-5xl md:text-6xl font-elegant font-bold text-transparent bg-gradient-to-r from-copper-400 via-copper-300 to-copper-500 bg-clip-text elegant-typography mb-6"
          animate={{
            textShadow: [
              '0 0 20px rgba(176, 141, 87, 0.5), 0 0 40px rgba(176, 141, 87, 0.2)',
              '0 0 40px rgba(176, 141, 87, 0.8), 0 0 60px rgba(176, 141, 87, 0.4)',
              '0 0 20px rgba(176, 141, 87, 0.5), 0 0 40px rgba(176, 141, 87, 0.2)'
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
          BACKGROUND TEST
        </motion.h1>

        {/* Test Glass Card */}
        <motion.div 
          className="relative p-6 rounded-2xl border border-white/30 backdrop-blur-md overflow-visible preserve-3d max-w-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(176, 141, 87, 0.12) 0%, rgba(255,255,255,0.05) 50%, rgba(135, 169, 107, 0.08) 100%)'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
          }}
        >
          {/* Glass reflection animation */}
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
          
          <p className="relative z-10 text-xl text-parchment-200 leading-relaxed font-serif text-center">
            This is how your glassy effects look with different background options. 
            Use the arrows above to cycle through each background style.
          </p>
          
          <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
        </motion.div>

        {/* Mathematical symbols floating */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {['∑', '∫', '∂', 'π', 'α', 'β'].map((symbol, index) => (
            <motion.div
              key={symbol + index}
              className="absolute text-2xl font-mathematical text-copper-400/20"
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

        {/* Instructions */}
        <motion.div 
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-center text-sage-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm">Click the arrows to test different backgrounds</p>
          <p className="text-xs text-copper-400 mt-1">View in full screen for best experience</p>
        </motion.div>
      </div>
    </div>
  );
};

export default BackgroundTestLab;