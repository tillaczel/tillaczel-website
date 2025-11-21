'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import newsData from '@/data/news.json'

interface NewsItem {
  id: number
  date: string
  title: string
  description: string
}

export default function About() {
  const [imageError, setImageError] = useState(false)
  
  const news = (newsData as NewsItem[]).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Till Aczel
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              PhD Student — ETH Zurich
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              I research efficient, human-aligned learned image compression. My work sits at the intersection of neural codecs and perceptual quality: building compression systems that not only minimize bits but also produce reconstructions that real people judge as high-quality and faithful.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Human-aligned compression matters because rate–distortion metrics like MSE or PSNR often disagree with human perception. Small pixel-wise errors can be unnoticeable, while certain structured artifacts greatly reduce perceived quality. Achieving human-aligned outputs therefore requires perceptual objectives, robust decoders, and evaluation methods that correlate with what viewers actually prefer — which is hard because human judgements are subjective, task-dependent, and sensitive to subtle texture and structure cues.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Learned compression has made big strides in quality, but practical deployment still faces major shortcomings: inference is often slow, models are compute- and memory-hungry, and some approaches rely on large generative decoders that can hallucinate plausible—but incorrect—content. For learned codecs to be widely adopted they must match traditional codecs (JPEG, PNG, HEVC) in speed, latency, and energy cost while delivering superior perceptual quality. My research focuses on closing that gap: reducing model complexity and runtime, improving perceptual fidelity and robustness, and designing evaluation and training strategies that align algorithmic improvements with real human preferences.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-48 h-64 md:w-64 md:h-96 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-50 animate-pulse"></div>
            <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-blue-500 shadow-2xl">
              {!imageError ? (
                <Image
                  src="/profile.jpg"
                  alt="Till Aczel"
                  width={512}
                  height={768}
                  className="w-full h-full object-cover"
                  quality={100}
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl">
                  👤
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="space-y-3">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 py-2"
              >
                <span className="text-xs text-gray-500 w-32 flex-shrink-0">{formatDate(item.date)}</span>
                <p className="text-sm text-gray-400 flex-1">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

