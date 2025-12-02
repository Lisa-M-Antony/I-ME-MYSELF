import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogCard = ({ blog, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Reflection': 'text-primary-400 bg-primary-400/10',
      'Research Log': 'text-accent-400 bg-accent-400/10',
      'Journal': 'text-slate-300 bg-slate-300/10',
      'Thought': 'text-warm-400 bg-warm-400/10',
      'Draft': 'text-dark-400 bg-dark-400/10'
    };
    return colors[category] || 'text-dark-400 bg-dark-400/10';
  };

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <Link 
        to={`/writing/${blog.id}`}
        className="block p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10"
      >
        {blog.featured && (
          <div className="absolute -top-2 left-6">
            <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-medium rounded-full">
              Featured Essay
            </span>
          </div>
        )}
        
        <div className="space-y-4">
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={blog.date}>
                {new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(blog.category)}`}>
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300 font-serif leading-tight">
            {blog.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-300 leading-relaxed text-lg font-light">
            {blog.excerpt}
          </p>

          {/* Read More */}
          <div className="flex items-center gap-2 text-primary-400 group-hover:text-primary-300 transition-colors font-medium">
            <span>Read Essay</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;