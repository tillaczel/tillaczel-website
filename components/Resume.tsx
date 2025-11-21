'use client'

import { motion } from 'framer-motion'

export default function Resume() {
  const handleDownload = () => {
    // Create a placeholder PDF or link to actual PDF
    // For now, we'll create a simple download link
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Placeholder - user should add their actual PDF
    link.download = 'resume.pdf'
    link.click()
  }

  return (
    <section id="resume" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="section-title text-center mb-12">Resume</h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card text-center"
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-6xl shadow-2xl">
              📄
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Curriculum Vitae
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Download my complete academic and professional resume in PDF format. 
              This document includes detailed information about my education, research, 
              publications, teaching experience, and professional achievements.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume (PDF)
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

