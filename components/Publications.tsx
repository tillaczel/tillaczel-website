'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import publicationsData from '@/data/publications.json'
import { colors, colorCombinations } from '@/config/colors'

interface Publication {
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [bibtexModal, setBibtexModal] = useState<{ text: string; index: number } | null>(null)
  const [copied, setCopied] = useState(false)

  const publications = publicationsData as Publication[]

  const handleBibtexClick = async (e: React.MouseEvent, pub: Publication, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    if (pub.bibtex) {
      // Check if it's a URL (starts with http) or raw BibTeX text
      if (pub.bibtex.startsWith('http://') || pub.bibtex.startsWith('https://')) {
        try {
          const response = await fetch(pub.bibtex)
          if (!response.ok) {
            throw new Error('Failed to fetch BibTeX')
          }
          const bibtexText = await response.text()
          setBibtexModal({ text: bibtexText, index })
        } catch (error) {
          // If fetch fails, show error message in modal
          setBibtexModal({ 
            text: `Error loading BibTeX from URL.\n\nURL: ${pub.bibtex}\n\nPlease visit the URL directly to access the BibTeX.`, 
            index 
          })
        }
      } else {
        // It's raw BibTeX text, show it directly
        setBibtexModal({ text: pub.bibtex, index })
      }
    }
  }

  const handleCopyBibtex = async () => {
    if (bibtexModal) {
      await navigator.clipboard.writeText(bibtexModal.text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleCloseModal = () => {
    setBibtexModal(null)
    setCopied(false)
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
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="flex items-start gap-4">
                {/* Icon on the left */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                  <svg className={`w-6 h-6 ${colors.accent.blue}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className={`text-lg font-bold mb-2 ${colorCombinations.publication.title} hover:opacity-80 transition-colors`}>
                    {pub.title}
                  </h3>
                  
                  <p className={`${colorCombinations.publication.authors} text-sm mb-2`}>{pub.authors}</p>
                  
                  <p className={`${colorCombinations.publication.venue} italic text-sm mb-4`}>
                    {pub.venue} • {pub.year}
                  </p>
                  
                  {/* Links */}
                  <div className="flex items-center gap-4 flex-wrap" onClick={(e) => e.stopPropagation()}>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-sm ${colors.link.blue} transition-colors`}
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
                        className={`flex items-center gap-1.5 text-sm ${colors.link.green} transition-colors`}
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
                        type="button"
                        onClick={(e) => handleBibtexClick(e, pub, index)}
                        className={`flex items-center gap-1.5 text-sm ${colors.link.purple} transition-colors`}
                        aria-label="View BibTeX"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>BibTeX</span>
                      </button>
                    )}
                  </div>
                  
                  {expandedIndex === index && pub.abstract && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`mt-4 pt-4 border-t ${colors.border.secondary}`}
                    >
                      <p className={`text-sm font-semibold ${colorCombinations.section.subtitle} mb-2`}>Abstract</p>
                      <p className={`${colorCombinations.section.body} leading-relaxed text-sm`}>{pub.abstract}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BibTeX Modal */}
      {bibtexModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={handleCloseModal}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`${colors.background.modal} rounded-lg ${colors.border.secondary} shadow-2xl max-w-3xl w-full max-h-[80vh] flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex items-center justify-between p-4 border-b ${colors.border.secondary}`}>
              <h3 className={`text-xl font-bold ${colors.accent.blue}`}>BibTeX</h3>
              <button
                onClick={handleCloseModal}
                className={`${colors.button.text} transition-colors`}
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 flex-1 overflow-auto">
              <pre className={`text-sm ${colors.code.text} font-mono whitespace-pre-wrap ${colors.code.background} p-4 rounded ${colors.code.border}`}>
                {bibtexModal.text}
              </pre>
            </div>
            <div className={`flex items-center justify-end gap-3 p-4 border-t ${colors.border.secondary}`}>
              <button
                onClick={handleCopyBibtex}
                className="btn-primary inline-flex items-center gap-2 text-sm px-4 py-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

