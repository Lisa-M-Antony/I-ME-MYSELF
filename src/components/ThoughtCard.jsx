import { motion } from 'framer-motion';

const ThoughtCard = ({ thought, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: index * 0.15,
        ease: "easeOut" 
      }
    }
  };

  const getTypeIcon = (type) => {
    const icons = {
      'insight': '💡',
      'observation': '👁️',
      'reflection': '🤔',
      'wisdom': '📚',
      'journal': '✍️',
      'principle': '⚖️'
    };
    return icons[type] || '💭';
  };

  const getTypeColor = (type) => {
    const colors = {
      'insight': 'border-l-accent-400',
      'observation': 'border-l-primary-400',
      'reflection': 'border-l-copper-400',
      'wisdom': 'border-l-warm-400',
      'journal': 'border-l-primary-500',
      'principle': 'border-l-accent-500'
    };
    return colors[type] || 'border-l-dark-400';
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className={`group p-4 border-l-2 ${getTypeColor(thought.type)} bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-r-lg`}
    >
      <div className="flex items-start gap-3">
        <span className="text-lg" title={thought.type}>
          {getTypeIcon(thought.type)}
        </span>
        <div className="flex-1 space-y-2">
          <blockquote className="text-gray-200 font-mono text-sm leading-relaxed italic">
            "{thought.content}"
          </blockquote>
          <time className="text-xs text-gray-500 font-mono">
            {new Date(thought.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            })}
          </time>
        </div>
      </div>
    </motion.div>
  );
};

export default ThoughtCard;