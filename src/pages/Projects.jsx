import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeader from '../components/SectionHeader';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Machine Learning: Rainfall Prediction',
      description: 'Classification model to predict rainfall by analyzing historical weather data. Preprocessed dataset using pandas and implemented multiple classification algorithms to find the most accurate prediction model.',
      image: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&h=400&fit=crop',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter', 'Data Preprocessing'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Machine Learning',
      date: 'Nov 2024',
      featured: true,
      highlights: [
        'Advanced statistical analysis of historical data',
        'Comparative analysis of classification models',
        'Optimized accuracy through feature engineering'
      ]
    },
    {
      id: 2,
      title: 'Machine Learning: Salary Prediction',
      description: 'Regression model to predict employee salaries using historical employment data. Analyzed data using Jupyter Notebook and evaluated models using MSE and R² score metrics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter', 'Statistical Analysis'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Machine Learning',
      date: 'Oct 2024',
      featured: true,
      highlights: [
        'Comprehensive data analysis and modeling',
        'Model evaluation using MSE and R² metrics',
        'Best regression model identification'
      ]
    },
    {
      id: 3,
      title: 'Sales Analysis: Tableau Dashboard',
      description: 'Interactive and informative sales dashboard created using Tableau Desktop. Provides comprehensive visual analysis of sales data with dynamic filtering and real-time insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Tableau Desktop', 'Data Visualization', 'Dashboard Design', 'Sales Analytics'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Dashboard',
      date: 'Sep 2024',
      featured: true,
      highlights: [
        'Interactive visual storytelling',
        'Real-time sales performance tracking',
        'Dynamic filtering and drill-down capabilities'
      ]
    },
    {
      id: 4,
      title: 'IPL Auction Strategy: SQL Analytics',
      description: 'Comprehensive SQL query analysis to develop strategic auction approaches for new IPL franchise. Analyzed historical player performance data to identify optimal team composition.',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop',
      technologies: ['SQL', 'Database Analysis', 'Sports Analytics', 'Strategic Planning'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Analytics',
      date: 'Aug 2024',
      featured: true,
      highlights: [
        'Strategic player performance analysis',
        'Complex SQL queries for data extraction',
        'Auction strategy optimization'
      ]
    },
    {
      id: 5,
      title: 'Fitness Tracker Data Analysis: Excel',
      description: 'Comprehensive fitness data analysis using Microsoft Excel to identify potential customers for WeFit and subsidiaries. Created interactive dashboards with pivot tables and advanced formulas.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['Microsoft Excel', 'Pivot Tables', 'Dashboard Design', 'Data Analysis'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Analytics',
      date: 'Jul 2024',
      featured: true,
      highlights: [
        'Advanced Excel formulas and functions',
        'Interactive pivot table analysis',
        'Customer segmentation insights'
      ]
    },
    {
      id: 6,
      title: 'On 2-Way Combinatorial Identities – Master Thesis',
      description: 'Mathematical research on weighted lattice paths and associated lattice paths from a combinatorial perspective. Generalized combinatorial interpretation of basic series through advanced mathematical analysis.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
      technologies: ['Mathematical Analysis', 'Combinatorics', 'Research', 'Academic Writing'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Research',
      date: 'May 2024',
      featured: true,
      highlights: [
        'Advanced combinatorial mathematical research',
        'Weighted lattice paths analysis',
        'Novel mathematical interpretations'
      ]
    }
  ];

  const categories = ['All', 'Machine Learning', 'Analytics', 'Dashboard', 'Research'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
    <PageWrapper className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          subtitle="My Work"
          title="Featured Projects"
          description="Explore my data science and analytics projects that showcase problem-solving skills and technical expertise"
          className="mb-16"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Project Links Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="glass-button p-3"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="glass-button p-3"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      {/* Meta Info */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Tag size={14} className="text-primary-400" />
                          <span className="text-primary-400 text-sm font-medium">{project.category}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <Calendar size={14} />
                          <span>{project.date}</span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-dark-800 text-gray-300 text-xs rounded-full border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 glass-button bg-primary-600/20 border border-primary-500/30 text-primary-400 hover:bg-primary-600/30 text-center"
                        >
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 glass-button border border-white/20 text-gray-300 hover:text-white text-center"
                        >
                          GitHub
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to collaborate on data science and analytics initiatives.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-button bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-3 inline-block"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Projects;