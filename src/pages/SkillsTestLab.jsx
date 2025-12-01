import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, BarChart3, TrendingUp, Brain, 
  ChevronDown, ChevronUp, Star, BookOpen, Gauge,
  Zap, Target, Clock, Award
} from 'lucide-react';

const SkillsTestLab = () => {
  const [activeTest, setActiveTest] = useState('circular');
  const [animationEnabled, setAnimationEnabled] = useState(true);

  const skills = [
    { name: 'MS-Excel', level: 95, icon: TrendingUp, color: 'from-copper-600 to-copper-800', category: 'Data Tools' },
    { name: 'SQL & DBMS', level: 85, icon: Database, color: 'from-sage-500 to-sage-700', category: 'Data Tools' },
    { name: 'Tableau', level: 80, icon: BarChart3, color: 'from-copper-400 to-copper-600', category: 'Visualization' },
    { name: 'Python', level: 85, icon: Code2, color: 'from-copper-500 to-copper-700', category: 'Programming' },
    { name: 'Machine Learning', level: 75, icon: Brain, color: 'from-sage-600 to-sage-800', category: 'Analytics' },
    { name: 'Statistical Modeling', level: 80, icon: TrendingUp, color: 'from-sage-400 to-sage-600', category: 'Analytics' },
  ];

  // Circular Progress Rings Component
  const CircularProgress = ({ skill, index }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (skill.level / 100) * circumference;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex flex-col items-center p-6 glass-card rounded-xl"
      >
        <div className="relative w-32 h-32 mb-4">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: strokeDashoffset }}
              transition={{ duration: 2, delay: index * 0.2 }}
              style={{
                strokeDasharray,
                strokeDashoffset,
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="text-copper-400" />
                <stop offset="100%" className="text-sage-600" />
              </linearGradient>
            </defs>
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{skill.level}%</span>
          </div>
        </div>
        <h3 className="text-white font-semibold text-center">{skill.name}</h3>
        <p className="text-gray-400 text-sm">{skill.category}</p>
      </motion.div>
    );
  };

  // Animated Skill Cards Component
  const AnimatedSkillCard = ({ skill, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative h-48 perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full preserve-3d cursor-pointer"
        >
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden glass-card p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <skill.icon size={24} className="text-copper-400 mr-3" />
              <h3 className="text-white font-semibold">{skill.name}</h3>
            </div>
            <div className="w-full bg-dark-800 rounded-full h-3 mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                className={`h-3 bg-gradient-to-r ${skill.color} rounded-full`}
              />
            </div>
            <p className="text-gray-400 text-sm">Click to see details</p>
          </div>
          {/* Back */}
          <div className="absolute w-full h-full backface-hidden rotateY-180 glass-card p-6 rounded-xl">
            <h3 className="text-white font-semibold mb-3">{skill.name} Details</h3>
            <p className="text-gray-300 text-sm mb-2">Proficiency: {skill.level}%</p>
            <p className="text-gray-300 text-sm mb-2">Category: {skill.category}</p>
            <p className="text-gray-400 text-xs">Years of experience and practical applications in real-world projects.</p>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Hexagonal Progress Component
  const HexagonalProgress = ({ skill, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex flex-col items-center p-4"
      >
        <div className="relative w-24 h-24 mb-3">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Hexagon background */}
            <polygon
              points="50,5 85,25 85,75 50,95 15,75 15,25"
              fill="rgba(255,255,255,0.1)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
            />
            {/* Progress hexagon */}
            <motion.polygon
              points="50,5 85,25 85,75 50,95 15,75 15,25"
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="3"
              strokeDasharray="280"
              initial={{ strokeDashoffset: 280 }}
              animate={{ strokeDashoffset: 280 - (skill.level / 100) * 280 }}
              transition={{ duration: 2, delay: index * 0.2 }}
            />
            <defs>
              <linearGradient id="hexGradient">
                <stop offset="0%" stopColor="#b08d57" />
                <stop offset="100%" stopColor="#87a96b" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-white">{skill.level}%</span>
          </div>
        </div>
        <h4 className="text-white text-sm font-medium text-center">{skill.name}</h4>
      </motion.div>
    );
  };

  // Mathematical Formula Progress
  const MathematicalProgress = ({ skill, index }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentValue(skill.level);
      }, index * 200);
      return () => clearTimeout(timer);
    }, [skill.level, index]);

    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="glass-card p-6 mb-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
            <div className="font-mathematical text-copper-400 text-lg">
              ∫ skill(t) dt = <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="text-white font-bold"
              >
                {currentValue}%
              </motion.span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sage-400 font-mathematical">
              lim<sub>t→∞</sub> expertise = {skill.level}%
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Book Spine Design
  const BookSpineSkill = ({ skill, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, rotateX: -90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, rotateY: 5 }}
        className="relative"
      >
        <div 
          className={`h-16 w-full bg-gradient-to-r ${skill.color} rounded-r-lg shadow-lg relative overflow-hidden cursor-pointer group`}
        >
          {/* Book spine texture */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <skill.icon size={18} className="text-white" />
              <span className="text-white font-semibold text-sm">{skill.name}</span>
            </div>
            <span className="text-white/90 font-bold">{skill.level}%</span>
          </div>

          {/* Progress indicator on spine */}
          <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              className="h-full bg-white/80"
            />
          </div>
        </div>
      </motion.div>
    );
  };

  // Vintage Gauge Component
  const VintageGauge = ({ skill, index }) => {
    const angle = (skill.level / 100) * 180 - 90; // Convert to gauge angle

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="glass-card p-6 text-center"
      >
        <div className="relative w-32 h-20 mx-auto mb-4">
          <svg viewBox="0 0 200 120" className="w-full h-full">
            {/* Gauge background */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="8"
              fill="none"
            />
            {/* Gauge progress */}
            <motion.path
              d="M 20 100 A 80 80 0 0 1 180 100"
              stroke="url(#gaugeGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="251.2"
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 251.2 - (skill.level / 100) * 251.2 }}
              transition={{ duration: 2, delay: index * 0.2 }}
            />
            {/* Needle */}
            <motion.line
              x1="100"
              y1="100"
              x2="100"
              y2="30"
              stroke="#b08d57"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ rotate: -90 }}
              animate={{ rotate: angle }}
              transition={{ duration: 2, delay: index * 0.2 }}
              style={{ transformOrigin: '100px 100px' }}
            />
            {/* Center dot */}
            <circle cx="100" cy="100" r="4" fill="#b08d57" />
            <defs>
              <linearGradient id="gaugeGradient">
                <stop offset="0%" stopColor="#87a96b" />
                <stop offset="100%" stopColor="#b08d57" />
              </linearGradient>
            </defs>
          </svg>
          {/* Percentage display */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <span className="text-white font-bold text-lg">{skill.level}%</span>
          </div>
        </div>
        <h3 className="text-white font-semibold">{skill.name}</h3>
      </motion.div>
    );
  };

  const testOptions = [
    { id: 'circular', name: 'Circular Progress Rings', component: CircularProgress },
    { id: 'animated-cards', name: 'Animated Skill Cards', component: AnimatedSkillCard },
    { id: 'hexagonal', name: 'Hexagonal Progress', component: HexagonalProgress },
    { id: 'mathematical', name: 'Mathematical Formulas', component: MathematicalProgress },
    { id: 'book-spine', name: 'Book Spine Design', component: BookSpineSkill },
    { id: 'vintage-gauge', name: 'Vintage Gauges', component: VintageGauge },
  ];

  const renderCurrentTest = () => {
    const currentOption = testOptions.find(option => option.id === activeTest);
    if (!currentOption) return null;

    const Component = currentOption.component;

    if (activeTest === 'mathematical' || activeTest === 'book-spine') {
      return (
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <Component key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      );
    }

    return (
      <div className={`grid ${
        activeTest === 'hexagonal' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'
      } gap-6`}>
        {skills.map((skill, index) => (
          <Component key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">Skills Test Laboratory</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experiment with different skill visualization styles to find the perfect fit for your portfolio.
            Each option showcases your expertise with a unique aesthetic approach.
          </p>
        </motion.div>

        {/* Test Selection */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {testOptions.map((option) => (
              <motion.button
                key={option.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTest(option.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTest === option.id
                    ? 'bg-gradient-to-r from-copper-500 to-sage-500 text-white'
                    : 'glass-card text-gray-300 hover:text-white'
                }`}
              >
                {option.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Current Test Display */}
        <motion.div
          key={activeTest}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 rounded-2xl"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              {testOptions.find(option => option.id === activeTest)?.name}
            </h2>
            <p className="text-gray-400">
              {activeTest === 'circular' && 'Elegant circular progress indicators with smooth animations'}
              {activeTest === 'animated-cards' && 'Interactive cards that flip to reveal detailed information'}
              {activeTest === 'hexagonal' && 'Modern geometric shapes for a futuristic feel'}
              {activeTest === 'mathematical' && 'Mathematical equations showing skill progression'}
              {activeTest === 'book-spine' && 'Skills displayed as books on a scholar\'s shelf'}
              {activeTest === 'vintage-gauge' && 'Classic analog meters with needle indicators'}
            </p>
          </div>

          {renderCurrentTest()}
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400">
            Click through the different options above to test each style. 
            When you find one you like, let me know and I'll implement it in your main About page!
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default SkillsTestLab;