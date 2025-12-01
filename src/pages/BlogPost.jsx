import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, BookOpen, Eye, Heart, MessageCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import PageWrapper from '../components/PageWrapper';
import { blogData } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  
  // Find the blog post by ID
  const post = blogData.find(blog => blog.id === parseInt(id));

  if (!post) {
    return (
      <PageWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold text-white font-serif">Essay Not Found</h1>
            <p className="text-gray-400">The essay you're looking for doesn't exist or has been moved.</p>
            <Link to="/writing" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Return to Writing
            </Link>
          </motion.div>
        </div>
      </PageWrapper>
    );
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Reflection': 'text-blue-400 bg-blue-400/10',
      'Research Log': 'text-purple-400 bg-purple-400/10', 
      'Journal': 'text-green-400 bg-green-400/10',
      'Thought': 'text-amber-400 bg-amber-400/10',
      'Draft': 'text-gray-400 bg-gray-400/10'
    };
    return colors[category] || 'text-gray-400 bg-gray-400/10';
  };

  return (
    <PageWrapper>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <Link 
            to="/writing" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-light">Back to Writing</span>
          </Link>

          {/* Meta Information */}
          <div className="space-y-6 mb-12">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              {post.featured && (
                <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-medium rounded-full">
                  Featured Essay
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 leading-relaxed font-light max-w-3xl">
              {post.excerpt}
            </p>
          </div>

          {/* Reading Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-500 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>324 views</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>12 likes</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>3 comments</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-invert prose-primary max-w-none">
            <div className="font-serif text-gray-200 leading-relaxed text-lg space-y-8">
              <div className="first-letter:text-6xl first-letter:font-bold first-letter:text-primary-400 first-letter:mr-3 first-letter:float-left first-letter:font-serif first-letter:leading-none first-letter:mt-2">
                <p className="mb-6">
                  Data doesn't speak for itself—it whispers. As analysts, we become translators, 
                  turning silent patterns into narratives that resonate with human understanding. 
                  This essay explores the delicate balance between technical precision and compelling storytelling.
                </p>
              </div>
              
              <p className="mb-6">
                In the quiet hours before dawn, when the world sleeps and data centers hum with electronic dreams, 
                I often find myself contemplating the nature of information. What stories hide within the numbers? 
                What truths emerge when we learn to listen carefully enough to hear them?
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-serif">The Philosophy of Pattern Recognition</h2>
              
              <p className="mb-6">
                Every dataset is a universe unto itself, complete with its own rules, exceptions, and hidden laws. 
                Like archaeologists examining ancient texts, we approach data with reverence and curiosity, 
                knowing that our interpretation shapes the narrative that emerges.
              </p>

              <blockquote className="border-l-4 border-primary-400 pl-6 my-8 italic text-gray-300 bg-white/5 py-4 rounded-r-lg">
                "The most profound insights often arrive not as answers, but as better questions—
                questions that illuminate the spaces between what we know and what we think we know."
              </blockquote>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-serif">The Art of Translation</h2>
              
              <p className="mb-6">
                Converting data into insight requires more than technical skill; it demands empathy. 
                We must understand not only what the numbers reveal, but how that revelation will be received, 
                interpreted, and acted upon by human minds shaped by their own experiences and biases.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-serif">Beyond Visualization</h2>
              
              <p className="mb-6">
                Charts and graphs are merely the vocabulary of a much richer language. True data storytelling 
                transcends visual representation to create emotional resonance—helping audiences not just see 
                the data, but feel its implications in their bones.
              </p>

              <p className="mb-6">
                In this work, we become bridges between the logical and the intuitive, the quantitative and the qualitative, 
                the certain and the possible. Each analysis is both a technical exercise and an act of translation, 
                converting the language of mathematics into the poetry of understanding.
              </p>

              <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-400/20 rounded-xl p-8 my-12">
                <h3 className="text-xl font-semibold text-white mb-4 font-serif">Reflection</h3>
                <p className="text-gray-300 italic">
                  This essay began as notes scribbled during a late-night analysis session, 
                  when I realized I was no longer just processing data—I was having a conversation with it. 
                  The best insights, I've learned, emerge from this dialogue between analyst and information, 
                  between question and answer, between what is and what could be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Related Essays */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 font-serif">Related Essays</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogData.filter(blog => blog.id !== post.id).slice(0, 2).map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/writing/${relatedPost.id}`}
                className="block p-6 border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="space-y-3">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(relatedPost.category)}`}>
                    {relatedPost.category}
                  </span>
                  <h4 className="text-lg font-bold text-white hover:text-primary-400 transition-colors font-serif">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                  <div className="text-xs text-gray-500">
                    {relatedPost.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>
    </PageWrapper>
  );
};

export default BlogPost;