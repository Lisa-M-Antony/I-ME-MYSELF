import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Sparkles, Mic, MessageCircle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeader from '../components/SectionHeader';

const AIAvatar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const features = [
    {
      icon: Mic,
      title: 'Real Voice',
      description: 'Uses my actual voice patterns and speaking style for authentic interactions'
    },
    {
      icon: MessageCircle,
      title: 'Interactive Conversations',
      description: 'Ask questions about my projects, experience, and technical expertise'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Advanced AI technology enables natural, contextual responses'
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <PageWrapper className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          subtitle="Meet Lisa"
          title="AI Avatar Introduction"
          description="Experience an interactive conversation with my AI avatar powered by advanced technology and my real voice"
          className="mb-16"
        />

        {/* Video Player Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative glass-card overflow-hidden group"
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                {/* Placeholder for actual video */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20" />
                
                {/* Avatar Placeholder */}
                <div className="relative z-10 text-center space-y-6">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-primary-400 shadow-2xl neon-glow"
                  >
                    <img
                      src="/Lisa Photo.jpg"
                      alt="Lisa M Antony AI Avatar"
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Lisa's AI Avatar</h3>
                    <p className="text-primary-400">Ready to introduce my work and experience</p>
                  </div>

                  {/* Animated Microphone Indicator */}
                  {isPlaying && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="flex items-center justify-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                      <span className="text-primary-400 text-sm">Speaking...</span>
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    </motion.div>
                  )}
                </div>

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePlayPause}
                    className="absolute inset-0 flex items-center justify-center z-20 bg-black/30 backdrop-blur-sm group-hover:bg-black/50 transition-all duration-300"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-2xl neon-glow">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                  </motion.button>
                )}
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePlayPause}
                      className="glass-button p-2"
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleMute}
                      className="glass-button p-2"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </motion.button>
                    
                    <span className="text-white text-sm">
                      {isPlaying ? 'Playing' : 'Paused'} • 2:34
                    </span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleFullscreen}
                    className="glass-button p-2"
                  >
                    <Maximize size={20} />
                  </motion.button>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: isPlaying ? '45%' : '0%' }}
                      transition={{ duration: isPlaying ? 150 : 0 }}
                      className="h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Description Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Experience Interactive AI
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              This AI avatar uses my real voice and personality to introduce my work, discuss my projects, 
              and answer questions about my experience in data science and analytics. It's powered by 
              advanced AI technology that enables natural, contextual conversations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlayPause}
              className="glass-button bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-3 text-lg font-semibold inline-flex items-center space-x-2"
            >
              <Play size={20} />
              <span>Watch Avatar Video</span>
            </motion.button>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-8 text-center group"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Technology Info */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white">How It Works</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      This AI avatar is built using cutting-edge voice cloning and natural language processing 
                      technologies. It combines my recorded voice samples with advanced AI models to create 
                      realistic, interactive conversations.
                    </p>
                    <p>
                      The avatar can discuss my professional background, explain my projects in detail, 
                      and provide insights into my technical skills and experience. It's like having 
                      a conversation with me, even when I'm not available!
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full" />
                      <span className="text-sm text-gray-300">Voice cloning technology</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-400 rounded-full" />
                      <span className="text-sm text-gray-300">Natural language processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full" />
                      <span className="text-sm text-gray-300">Real-time conversation</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="glass-card p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <Sparkles size={40} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
                    <p className="text-gray-300 text-sm">
                      Advanced machine learning models enable natural, contextual responses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">Ready to Chat?</h2>
            <p className="text-gray-300">
              Experience the future of interactive portfolios. Start a conversation with my AI avatar 
              and learn more about my work, skills, and passion for data science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-3"
              >
                Start Conversation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button border border-primary-500/30 text-primary-400 px-8 py-3"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </PageWrapper>
  );
};

export default AIAvatar;