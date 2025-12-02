import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/lisamantony',
      label: 'GitHub',
      color: 'hover:text-dark-200'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/lisamantony',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:lisa@example.com',
      label: 'Email',
      color: 'hover:text-slate-400'
    }
  ];

  return (
    <footer className="relative bg-dark-900/90 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 rounded-lg flex items-center justify-center shadow-lg shadow-slate-500/25">
                <span className="text-white font-bold text-sm">LM</span>
              </div>
              <span className="text-xl font-display font-bold gradient-text">
                Lisa M Antony
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Data Analyst & Junior Data Scientist passionate about turning messy data into clear, actionable insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Projects', 'Blog', 'AI Avatar', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`/${link.toLowerCase().replace(' ', '-')}`}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`glass-card p-3 text-gray-400 ${social.color} transition-all duration-200`}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm">
              lisa@example.com
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© 2025 Lisa M Antony. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>
            <span>and React</span>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="glass-button flex items-center space-x-2 text-sm"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </motion.button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-600/20 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;