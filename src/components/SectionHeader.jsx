import { motion } from 'framer-motion';

const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  centered = true,
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`space-y-4 ${centered ? 'text-center' : ''} ${className}`}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block text-primary-400 font-medium text-sm uppercase tracking-wider"
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-400 text-lg max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;