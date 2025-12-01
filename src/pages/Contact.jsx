import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lisa.mantony@example.com',
      href: 'mailto:lisa.mantony@example.com',
      color: 'from-accent-400 to-accent-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/lisamantony',
      href: 'https://linkedin.com/in/lisamantony',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/lisamantony',
      href: 'https://github.com/lisamantony',
      color: 'from-dark-400 to-dark-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Remote • Global',
      href: null,
      color: 'from-copper-400 to-copper-600'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.' 
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
          subtitle="Let's Connect"
          title="Get In Touch"
          description="Have a project in mind or just want to chat about data science? I'd love to hear from you!"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Send me a message
              </h2>
              <p className="text-gray-300 mb-8">
                Whether you have a question about my work, want to discuss a potential project, 
                or just want to say hello, I'm always happy to connect with fellow data enthusiasts!
              </p>
            </motion.div>

            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full glass-card px-4 py-3 text-white placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                  placeholder="Your full name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full glass-card px-4 py-3 text-white placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full glass-card px-4 py-3 text-white placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full glass-card px-4 py-3 text-white placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full glass-button bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center space-x-3 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-600/20 border border-green-500/30 text-green-400'
                      : 'bg-red-600/20 border border-red-500/30 text-red-400'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span className="text-sm">{submitStatus.message}</span>
                </motion.div>
              )}
            </motion.form>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of these channels. I usually respond within 24 hours.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass-card p-6 group cursor-pointer"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{item.label}</h3>
                          <p className="text-gray-300 group-hover:text-primary-400 transition-colors duration-200">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{item.label}</h3>
                          <p className="text-gray-300">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Availability Status */}
            <motion.div variants={itemVariants} className="glass-card p-6 border-l-4 border-green-500">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2 animate-pulse" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Currently Available</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    I'm actively seeking new opportunities and collaborations in data science and analytics. 
                    Open to full-time positions, freelance projects, and consulting work.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Fun Fact */}
            <motion.div variants={itemVariants} className="glass-card p-6 text-center">
              <h3 className="text-white font-semibold mb-3">⚡ Quick Fact</h3>
              <p className="text-gray-300 text-sm">
                I usually respond to emails within 2-4 hours during business days. 
                For urgent matters, LinkedIn is often the fastest way to reach me!
              </p>
            </motion.div>
          </motion.section>
        </div>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new projects, especially those involving data analysis, 
            machine learning, or innovative dashboard solutions. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:lisa.mantony@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button bg-primary-600 text-white px-8 py-3 inline-flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/lisamantony"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button border border-primary-500/30 text-primary-400 px-8 py-3 inline-flex items-center space-x-2"
            >
              <Linkedin size={20} />
              <span>Connect on LinkedIn</span>
            </motion.a>
          </div>
        </motion.section>
      </div>
    </PageWrapper>
  );
};

export default Contact;