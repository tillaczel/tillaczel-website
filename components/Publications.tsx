'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import publicationsData from '@/data/publications.json'

interface Publication {
  id: number
  title: string
  authors: string
  venue: string
  year: number
  type: 'journal' | 'conference'
  url?: string
  code?: string
  bibtex?: string
  abstract?: string
}

export default function Publications() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [copiedBibtex, setCopiedBibtex] = useState<number | null>(null)

  const publications = publicationsData as Publication[]

  const handleBibtexClick = async (e: React.MouseEvent, pub: Publication) => {
    e.stopPropagation()
    if (pub.bibtex) {
      try {
        const response = await fetch(pub.bibtex)
        const bibtexText = await response.text()
        await navigator.clipboard.writeText(bibtexText)
        setCopiedBibtex(pub.id)
        setTimeout(() => setCopiedBibtex(null), 2000)
      } catch (error) {
        // If fetch fails, try to open the URL
        window.open(pub.bibtex, '_blank')
      }
    }
  }

  return (
    <section id="publications" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="section-title text-center mb-12">Selected Publications</h1>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card cursor-pointer"
              onClick={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
            >
              <div className="flex items-start gap-4">
                {/* Icon on the left */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 hover:text-blue-300 transition-colors">
                    {pub.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-2">{pub.authors}</p>
                  
                  <p className="text-gray-500 italic mb-4">
                    {pub.venue} • {pub.year}
                  </p>
                  
                  {/* Links */}
                  <div className="flex items-center gap-4 flex-wrap" onClick={(e) => e.stopPropagation()}>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                        aria-label="View paper"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Paper</span>
                      </a>
                    )}
                    {pub.code && (
                      <a
                        href={pub.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition-colors"
                        aria-label="View code"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                    {pub.bibtex && (
                      <button
                        onClick={(e) => handleBibtexClick(e, pub)}
                        className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                        aria-label="Copy BibTeX"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>{copiedBibtex === pub.id ? 'Copied!' : 'BibTeX'}</span>
                      </button>
                    )}
                  </div>
                  
                  {expandedId === pub.id && pub.abstract && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-700"
                    >
                      <p className="text-sm font-semibold text-gray-300 mb-2">Abstract</p>
                      <p className="text-gray-400 leading-relaxed text-sm">{pub.abstract}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

