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
        <h1 className="section-title text-center mb-6">Resume</h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="card p-0 overflow-hidden">
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
              className="w-full h-[1250px] border-0"
              title="Resume PDF"
            />
          </div>

          <div className="text-center">
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

