// Updated color configuration with darker bluish-gray dark mode
// Minimalistic modern look

export const colors = {
    background: {
      primary: 'bg-gray-50 dark:bg-[#0e1117]',
      secondary: 'bg-white dark:bg-[#11141c]',
      tertiary: 'bg-gray-100 dark:bg-[#141922]',
      card: 'bg-white dark:bg-[#11141c]',
      cardHighlight: 'bg-gray-100 dark:bg-[#1a2030]',
      modal: 'bg-white dark:bg-[#11141c]',
      modalOverlay: 'bg-black/80',
      nav: 'bg-white/80 dark:bg-[#0e1117]/95',
    },
  
    text: {
      primary: 'text-gray-900 dark:text-gray-100',
      secondary: 'text-gray-700 dark:text-gray-300',
      tertiary: 'text-gray-600 dark:text-gray-400',
      muted: 'text-gray-500 dark:text-gray-500',
      inverse: 'text-gray-100 dark:text-gray-900',
    },
  
    border: {
      primary: 'border-gray-200 dark:border-[#1c2633]',
      secondary: 'border-gray-300 dark:border-[#233044]',
      tertiary: 'border-gray-600 dark:border-[#304159]',
      accent: 'border-blue-500 dark:border-blue-400',
    },
  
    accent: {
      blue: 'text-blue-400 dark:text-blue-300',
      blueHover: 'hover:text-blue-300 dark:hover:text-blue-200',
      purple: 'text-purple-400 dark:text-purple-300',
      purpleHover: 'hover:text-purple-300 dark:hover:text-purple-200',
      pink: 'text-pink-400 dark:text-pink-300',
      green: 'text-green-400 dark:text-green-300',
      greenHover: 'hover:text-green-300 dark:hover:text-green-200',
      yellow: 'text-yellow-400 dark:text-yellow-300',
      yellowHover: 'hover:text-yellow-300 dark:hover:text-yellow-200',
      gradient: 'bg-gradient-to-r from-blue-400 to-purple-500',
      gradientText: 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent',
    },
  
    button: {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500',
      secondary: 'bg-gray-200 dark:bg-[#1c2633] hover:bg-gray-300 dark:hover:bg-[#233044]',
      text: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
    },
    
    // Link colors for contact and other specific use cases
    link: {
      blue: 'text-blue-400 dark:text-blue-300 hover:text-blue-300 dark:hover:text-blue-200',
      green: 'text-green-400 dark:text-green-300 hover:text-green-300 dark:hover:text-green-200',
      purple: 'text-purple-400 dark:text-purple-300 hover:text-purple-300 dark:hover:text-purple-200',
      yellow: 'text-yellow-400 dark:text-yellow-300 hover:text-yellow-300 dark:hover:text-yellow-200',
      github: 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
    },
    
    // Background colors for contact links
    linkBg: {
      blue: 'bg-blue-500/20 border-blue-500/30',
      green: 'bg-green-500/20 border-green-500/30',
      purple: 'bg-purple-500/20 border-purple-500/30',
      yellow: 'bg-yellow-500/20 border-yellow-500/30',
      github: 'bg-gray-700/50 dark:bg-[#1c2633]/50 border-gray-600/50 dark:border-[#233044]/50',
    },
  
    status: {
      current: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50 dark:bg-yellow-400/10 dark:text-yellow-300 dark:border-yellow-400/40',
      completed: 'bg-green-500/20 text-green-400 border-green-500/50 dark:bg-green-400/10 dark:text-green-300 dark:border-green-400/40',
    },
  
    code: {
      background: 'bg-gray-100 dark:bg-[#0b0e13]',
      text: 'text-gray-800 dark:text-gray-300',
      border: 'border-gray-300 dark:border-[#1c2633]',
    },
  } as const
  
  export function combineColors(...classes: string[]): string {
    return classes.filter(Boolean).join(' ')
  }
  
  export const colorCombinations = {
    navLink: {
      active: colors.accent.blue,
      inactive: colors.text.secondary,
      hover: colors.accent.blue,
    },
  
    card: {
      base: combineColors(colors.background.card, colors.border.secondary),
      hover: colors.border.accent,
    },
  
    section: {
      title: colors.accent.gradientText,
      body: colors.text.tertiary,
      subtitle: colors.text.secondary,
    },
  
    publication: {
      title: colors.accent.blue,
      authors: colors.text.tertiary,
      venue: colors.text.muted,
    },
  } as const
  