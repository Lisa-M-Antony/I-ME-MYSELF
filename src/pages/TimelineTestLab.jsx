import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Calendar, MapPin, Award, BookOpen, Scroll, 
  FileText, GraduationCap, Star, Crown, Feather
} from 'lucide-react';

const TimelineTestLab = () => {
  const [activeTest, setActiveTest] = useState('manuscript');

  const timelineData = [
    {
      type: 'experience',
      title: 'Chief Operating Officer, Data Science & Analytics',
      organization: 'Renu Sharma Healthcare & Education Foundation',
      period: 'August 2025 - Present',
      location: 'Remote (Volunteer)',
      description: 'Leading and managing internship programs with 30+ interns across different batches. Driving end-to-end project delivery including data collection, preprocessing, modeling, visualization, and deployment while implementing organization-wide analytics systems.',
      icon: Users,
      achievement: 'Current Leadership Role'
    },
    {
      type: 'experience',
      title: 'Senior Head of Department, Data Science',
      organization: 'Renu Sharma Healthcare & Education Foundation',
      period: 'April 2025 - August 2025',
      location: 'Remote',
      description: 'Supervised project-based learning for interns and established comprehensive workflows for data preprocessing, modeling, and dashboarding across the organization.',
      icon: Users,
      achievement: 'Team Leadership'
    },
    {
      type: 'experience',
      title: 'Data Analyst Intern',
      organization: 'Renu Sharma Healthcare & Education Foundation',
      period: 'January 2025 - April 2025',
      location: 'Remote',
      description: 'Contributed to departmental analytics projects under senior guidance, performing comprehensive analysis using Excel, SQL, Tableau, and Python.',
      icon: Users,
      achievement: 'Career Foundation'
    },
    {
      type: 'education',
      title: 'Master of Science in Mathematics',
      organization: 'Central University of Karnataka',
      period: '2021 - 2023',
      location: 'Karnataka, India',
      description: 'Specialized in advanced mathematical concepts with thesis work focusing on analytical methods and computational mathematics.',
      icon: GraduationCap,
      achievement: 'Advanced Degree'
    }
  ];

  // Scholar's Manuscript Chronicle
  const ManuscriptTimeline = ({ item, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="relative mb-8"
      >
        {/* Ornate Border */}
        <div className="relative bg-gradient-to-br from-parchment-100 to-parchment-200 p-8 rounded-lg shadow-2xl border-4 border-copper-400">
          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-copper-600"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-copper-600"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-copper-600"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-copper-600"></div>
          
          {/* Illuminated Initial Letter */}
          <div className="float-left mr-4 mb-2">
            <div className="w-16 h-16 bg-gradient-to-br from-copper-500 to-copper-700 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-3xl font-elegant text-white font-bold">
                {item.title.charAt(0)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="text-renaissance-charcoal-800">
            <h3 className="text-2xl font-elegant mb-2 text-copper-700">{item.title}</h3>
            <p className="font-serif text-lg mb-2 text-copper-600">{item.organization}</p>
            <div className="flex items-center space-x-4 mb-4 text-sm">
              <span className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{item.period}</span>
              </span>
              <span className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>{item.location}</span>
              </span>
            </div>
            <p className="font-serif leading-relaxed text-renaissance-charcoal-700">{item.description}</p>
            
            {/* Achievement Badge */}
            <div className="mt-4 inline-block bg-copper-200 px-3 py-1 rounded-full">
              <span className="text-copper-800 text-sm font-medium">{item.achievement}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Scroll Design
  const ScrollTimeline = ({ item, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative mb-6"
      >
        <div className="relative">
          {/* Scroll Background */}
          <div className="bg-gradient-to-r from-parchment-200 via-parchment-100 to-parchment-200 p-6 rounded-lg shadow-lg border-2 border-copper-300">
            {/* Scroll Edges */}
            <div className="absolute -left-2 top-0 w-4 h-full bg-gradient-to-r from-copper-600 to-copper-400 rounded-l-full"></div>
            <div className="absolute -right-2 top-0 w-4 h-full bg-gradient-to-r from-copper-400 to-copper-600 rounded-r-full"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-copper-500 to-copper-700 rounded-full flex items-center justify-center">
                  <item.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-elegant text-copper-800 mb-1">{item.title}</h3>
                  <p className="text-copper-600 font-serif mb-2">{item.organization}</p>
                  <p className="text-sm text-renaissance-charcoal-600 mb-3">{item.period} • {item.location}</p>
                  <p className="text-renaissance-charcoal-700 font-serif text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Diploma Stack
  const DiplomaStack = ({ item, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, rotateY: -45 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        whileHover={{ scale: 1.02, rotateY: 5 }}
        className="relative mb-6 perspective-1000"
      >
        <div className="relative transform hover:scale-105 transition-transform duration-300">
          {/* Diploma Certificate */}
          <div className="bg-gradient-to-br from-parchment-50 to-parchment-200 p-8 border-8 border-double border-copper-400 shadow-2xl">
            {/* Seal */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-copper-500 to-copper-700 rounded-full flex items-center justify-center shadow-lg">
              <Award size={32} className="text-white" />
            </div>
            
            {/* Certificate Content */}
            <div className="text-center">
              <h3 className="text-2xl font-elegant text-copper-800 mb-2">{item.title}</h3>
              <div className="w-24 h-1 bg-copper-400 mx-auto mb-4"></div>
              <p className="text-lg font-serif text-copper-600 mb-2">{item.organization}</p>
              <p className="text-renaissance-charcoal-600 font-serif mb-4">{item.period}</p>
              <p className="text-sm text-renaissance-charcoal-700 leading-relaxed">{item.description}</p>
              
              {/* Signature Line */}
              <div className="mt-6 pt-4 border-t border-copper-300">
                <p className="text-copper-600 font-elegant text-sm">{item.achievement}</p>
              </div>
            </div>
          </div>
          
          {/* Certificate Shadow */}
          <div className="absolute inset-0 bg-renaissance-charcoal-400 transform translate-x-2 translate-y-2 -z-10 opacity-20"></div>
        </div>
      </motion.div>
    );
  };

  // Research Papers
  const ResearchPaper = ({ item, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="mb-6"
      >
        <div className="bg-white p-6 shadow-lg border-l-4 border-copper-500">
          {/* Paper Header */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="text-xl font-bold text-renaissance-charcoal-800 mb-1">{item.title}</h3>
            <p className="text-copper-600 font-semibold">{item.organization}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
              <span>Period: {item.period}</span>
              <span>Location: {item.location}</span>
            </div>
          </div>
          
          {/* Abstract */}
          <div className="mb-4">
            <h4 className="font-semibold text-renaissance-charcoal-700 mb-2">Abstract:</h4>
            <p className="text-renaissance-charcoal-600 text-sm leading-relaxed">{item.description}</p>
          </div>
          
          {/* Keywords */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-renaissance-charcoal-700">Keywords:</span>
            <span className="bg-copper-100 text-copper-800 px-2 py-1 rounded text-xs">{item.achievement}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  // Academic Journal Entries
  const JournalEntry = ({ item, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="mb-8"
      >
        <div className="relative">
          {/* Journal Page */}
          <div className="bg-gradient-to-br from-parchment-50 to-parchment-100 p-6 shadow-lg border border-copper-200 relative">
            {/* Hole Punches */}
            <div className="absolute left-4 top-1/4 w-3 h-3 bg-white border-2 border-copper-300 rounded-full"></div>
            <div className="absolute left-4 bottom-1/4 w-3 h-3 bg-white border-2 border-copper-300 rounded-full"></div>
            
            {/* Date Tab */}
            <div className="absolute -top-3 left-8 bg-copper-500 text-white px-3 py-1 text-sm font-bold rounded-t">
              {item.period.split(' - ')[0]}
            </div>
            
            {/* Content */}
            <div className="ml-8">
              <div className="flex items-center space-x-2 mb-3">
                <item.icon size={20} className="text-copper-600" />
                <h3 className="text-xl font-elegant text-copper-800">{item.title}</h3>
              </div>
              
              <p className="font-serif text-copper-600 mb-2 italic">{item.organization}</p>
              <p className="text-sm text-renaissance-charcoal-600 mb-3">{item.location} • {item.period}</p>
              
              {/* Entry Text */}
              <div className="bg-white/50 p-4 rounded border-l-2 border-copper-400">
                <p className="font-serif text-renaissance-charcoal-700 leading-relaxed">{item.description}</p>
                
                {/* Margin Note */}
                <div className="mt-3 text-right">
                  <span className="text-copper-600 text-sm font-elegant italic">{item.achievement}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Library Card Catalog
  const CardCatalog = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="mb-4"
      >
        <div className="relative">
          {/* Card Drawer */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-copper-200 to-copper-300 p-4 shadow-lg cursor-pointer border-2 border-copper-400"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-copper-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-renaissance-charcoal-800">{item.title}</h3>
                  <p className="text-sm text-renaissance-charcoal-600">{item.organization}</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FileText size={20} className="text-copper-700" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Pull-out Card */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isOpen ? 'auto' : 0, 
              opacity: isOpen ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-parchment-50 p-4 border-2 border-copper-300 border-t-0">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-renaissance-charcoal-700">Period:</span>
                  <p className="text-renaissance-charcoal-600">{item.period}</p>
                </div>
                <div>
                  <span className="font-semibold text-renaissance-charcoal-700">Location:</span>
                  <p className="text-renaissance-charcoal-600">{item.location}</p>
                </div>
              </div>
              <div className="mt-3">
                <span className="font-semibold text-renaissance-charcoal-700">Description:</span>
                <p className="text-renaissance-charcoal-600 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const testOptions = [
    { id: 'manuscript', name: 'Scholar\'s Manuscript Chronicle', component: ManuscriptTimeline },
    { id: 'scroll', name: 'Scroll Design', component: ScrollTimeline },
    { id: 'diploma', name: 'Diploma Stack', component: DiplomaStack },
    { id: 'research', name: 'Research Papers', component: ResearchPaper },
    { id: 'journal', name: 'Academic Journal Entries', component: JournalEntry },
    { id: 'catalog', name: 'Library Card Catalog', component: CardCatalog },
  ];

  const renderCurrentTest = () => {
    const currentOption = testOptions.find(option => option.id === activeTest);
    if (!currentOption) return null;

    const Component = currentOption.component;

    return (
      <div className="space-y-6">
        {timelineData.map((item, index) => (
          <Component key={`${item.title}-${index}`} item={item} index={index} />
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
          <h1 className="text-4xl font-bold gradient-text mb-4">Timeline Test Laboratory</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experiment with different timeline and experience visualization styles to complement 
            your book spine skills section with scholarly aesthetics.
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
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              {testOptions.find(option => option.id === activeTest)?.name}
            </h2>
            <p className="text-gray-400">
              {activeTest === 'manuscript' && 'Ornate manuscript pages with illuminated letters and decorative borders'}
              {activeTest === 'scroll' && 'Ancient scroll design with rolled edges and parchment texture'}
              {activeTest === 'diploma' && 'Academic certificates with official seals and formal presentation'}
              {activeTest === 'research' && 'Academic paper format with abstracts and professional structure'}
              {activeTest === 'journal' && 'Personal academic journal with handwritten-style entries'}
              {activeTest === 'catalog' && 'Interactive library card catalog system with pull-out drawers'}
            </p>
          </div>

          {renderCurrentTest()}
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Click through each style to see how your professional journey could be presented. 
            Choose the one that best complements your book spine skills section!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineTestLab;