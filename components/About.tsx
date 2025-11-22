'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import newsData from '@/data/news.json'
import { colors, colorCombinations } from '@/config/colors'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

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
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <h2 className={`text-3xl font-bold mb-2 ${colors.text.primary}`}>
              Till Aczel
            </h2>
            <p className={`${colorCombinations.section.subtitle} mb-6`}>
              PhD student at ETH Zurich
            </p>
          </motion.div>

          <div className="md:clearfix">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-56 h-80 md:w-80 md:h-[480px] mx-auto md:mx-0 md:float-right md:ml-6 md:mb-4 mb-6"
            >
            <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-gray-50 dark:border-[#0e1117] shadow-2xl">
              {!imageError ? (
                <img
                  src={`${basePath}/profile.jpg?quality=100&format=original`}
                  alt="Till Aczel"
                  className="w-full h-full object-cover"
                  style={{ 
                    imageRendering: 'auto',
                    willChange: 'auto',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitTransform: 'translateZ(0)',
                  }}
                  loading="eager"
                  decoding="sync"
                  onError={() => setImageError(true)}
                  onLoad={(e) => {
                    // Prevent Cloudflare from re-optimizing after load
                    const img = e.target as HTMLImageElement;
                    if (img.complete) {
                      img.style.imageRendering = 'auto';
                    }
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-6xl">
                  👤
                </div>
              )}
            </div>
          </motion.div>

            <div>
              <p className={`${colorCombinations.section.body} leading-relaxed mb-4 text-justify`}>
              I am a PhD student at ETH Zurich under the supervision of Prof. Dr. Roger Wattenhofer. My research sits at the intersection of neural image compression and perceptual quality, aiming to build AI systems that are both efficient and aligned with human judgment of visual fidelity.
            </p>

            <p className={`${colorCombinations.section.body} leading-relaxed mb-4 text-justify`}>
              A key focus of my work is on evaluation: measuring the quality of generative AI is far from straightforward, because standard metrics often fail to capture what humans actually perceive. I develop methods and benchmarks to better assess perceptual fidelity, ensuring that model improvements translate into reconstructions that real people judge as high-quality and faithful.
            </p>

            <p className={`${colorCombinations.section.body} leading-relaxed text-justify`}>
              Another focus is on efficiency and deployment: most generative models, including diffusion models, GANs, and VAEs, are computationally expensive. I design networks that "speak the language of computers", using architectures optimized for binary computation and hardware efficiency. This approach helps close the gap between learned and traditional codecs by reducing model complexity and runtime while improving perceptual quality and robustness.
            </p>
            </div>
          </div>
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

