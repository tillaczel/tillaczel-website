'use client'

import { motion } from 'framer-motion'
import newsData from '@/data/news.json'

interface NewsItem {
  id: number
  date: string
  title: string
  description: string
}

export default function About() {
  const news = newsData as NewsItem[]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <section id="about" className="section-container pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="section-title text-center mb-12">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
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
            animate={{ opacity: 1, x: 0 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            News
          </h3>
          <div className="space-y-3">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 py-2"
              >
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs text-gray-500">{formatDate(item.date)}</span>
                    <span className="text-gray-600">•</span>
                    <h4 className="text-sm font-semibold text-blue-400">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

