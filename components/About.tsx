'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import newsData from '@/data/news.json'
import { colors, colorCombinations } from '@/config/colors'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/tillaczel-website'

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
        <div className="flex flex-col md:flex-row-reverse gap-8 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-48 h-64 md:w-64 md:h-96 flex-shrink-0"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-gray-50 dark:border-[#0e1117] shadow-2xl">
              {!imageError ? (
                <img
                  src={`${basePath}/profile.jpg`}
                  alt="Till Aczel"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-6xl">
                  👤
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1"
          >
            <h2 className={`text-3xl font-bold mb-2 ${colors.text.primary}`}>
              Till Aczel
            </h2>
            <p className={`${colorCombinations.section.subtitle} mb-6`}>
              PhD student at ETH Zurich
            </p>

            <p className={`${colorCombinations.section.body} leading-relaxed mb-4`}>
              I am a PhD student at ETH Zurich under the supervision of Prof. Dr. Roger Wattenhofer. I research efficient, human-aligned learned image compression, exploring how to build compression systems that not only minimize bits but also produce reconstructions that real people judge as high-quality and faithful.
            </p>

            <p className={`${colorCombinations.section.body} leading-relaxed mb-4`}>
              My work sits at the intersection of neural codecs and perceptual quality, addressing the fundamental challenge that rate–distortion metrics like MSE or PSNR often disagree with human perception.
            </p>

            <p className={`${colorCombinations.section.body} leading-relaxed`}>
              I focus on closing the gap between learned codecs and traditional codecs by reducing model complexity and runtime while improving perceptual fidelity, robustness, and evaluation methods that align with human preferences.
            </p>
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
                <span className={`text-xs ${colors.text.muted} w-32 flex-shrink-0`}>{formatDate(item.date)}</span>
                <p className={`text-sm ${colorCombinations.section.body} flex-1`}>
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

