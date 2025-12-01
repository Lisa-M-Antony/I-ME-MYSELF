import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, PenTool } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeader from '../components/SectionHeader';
import BlogCard from '../components/BlogCard';
import ThoughtCard from '../components/ThoughtCard';
import { blogData, categories } from '../data/blogData';
import { thoughtsData } from '../data/thoughtsData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Essays');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = blogData.filter(blog => {
    const matchesCategory = selectedCategory === 'All Essays' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const thoughtsVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-primary-400" />
              <h1 className="text-5xl font-bold font-serif bg-gradient-to-r from-primary-400 via-accent-400 to-primary-600 bg-clip-text text-transparent">
                Writing & Thinking
              </h1>
              <PenTool className="w-8 h-8 text-accent-400" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Explorations at the intersection of data, philosophy, and human understanding. 
              Essays, reflections, and fragments of thought from my journey through the landscape of knowledge.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 space-y-6"
          >
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search essays and thoughts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 text-white placeholder-gray-400 font-light"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
            {/* Left Panel - Essays (70%) */}
            <div className="lg:col-span-7">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen className="w-6 h-6 text-primary-400" />
                  <h2 className="text-2xl font-bold text-white font-serif">
                    Essays & Reflections
                  </h2>
                  <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                    {filteredBlogs.length} pieces
                  </span>
                </div>

                {filteredBlogs.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16 text-gray-400"
                  >
                    <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">No essays found matching your search.</p>
                    <p className="text-sm mt-2">Try adjusting your filters or search terms.</p>
                  </motion.div>
                ) : (
                  <div className="space-y-8">
                    {filteredBlogs.map((blog, index) => (
                      <BlogCard key={blog.id} blog={blog} index={index} />
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Panel - Micro Thoughts (30%) */}
            <div className="lg:col-span-3">
              <motion.div
                variants={thoughtsVariants}
                initial="hidden"
                animate="visible"
                className="sticky top-24"
              >
                <div className="flex items-center gap-3 mb-8">
                  <PenTool className="w-6 h-6 text-accent-400" />
                  <h2 className="text-xl font-bold text-white font-serif">
                    Micro-Thoughts
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {thoughtsData.slice(0, 8).map((thought, index) => (
                    <ThoughtCard key={thought.id} thought={thought} index={index} />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-8 p-6 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl border border-primary-400/20"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 font-serif">
                    About These Thoughts
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    Brief observations and insights captured during late-night research sessions, 
                    moments of clarity, and quiet contemplation. The raw material of deeper thinking.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Blog;