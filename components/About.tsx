'use client'

import { motion } from 'framer-motion'

export default function About() {
  const highlights = [
    {
      title: 'Research Excellence',
      description: 'Published 15+ papers in top-tier conferences and journals',
      icon: '📚',
    },
    {
      title: 'Teaching Award',
      description: 'Recognized for outstanding teaching in Deep Learning',
      icon: '🏆',
    },
    {
      title: 'Industry Collaboration',
      description: 'Collaborated with leading tech companies on AI projects',
      icon: '🤝',
    },
    {
      title: 'Open Source',
      description: 'Maintainer of popular ML libraries with 10k+ GitHub stars',
      icon: '💻',
    },
  ]

  return (
    <section id="about" className="section-container pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="section-title text-center mb-12">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl">
                👤
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Your Name
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Assistant Professor of Computer Science
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              I am a researcher and educator passionate about deep learning, artificial intelligence, 
              and their applications to solve real-world problems. My research focuses on developing 
              novel neural architectures and training methodologies that push the boundaries of what 
              machines can learn and accomplish.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With over a decade of experience in machine learning, I have contributed to numerous 
              publications in top-tier venues and have been fortunate to mentor talented students 
              who have gone on to make significant contributions to the field. I believe in making 
              AI research accessible and practical, bridging the gap between theoretical advances 
              and real-world applications.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Highlights & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-blue-400">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

