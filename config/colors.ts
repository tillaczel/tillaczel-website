// Updated color configuration with darker bluish-gray dark mode
// Minimalistic modern look

export const colors = {
    background: {
      primary: 'bg-gray-50 dark:bg-[#0e1117]',
      secondary: 'bg-white dark:bg-[#11141c]',
      tertiary: 'bg-gray-100 dark:bg-[#141922]',
      card: 'bg-white dark:bg-[#11141c]',
      cardHighlight: 'bg-gray-200 dark:bg-[#1f2838]',
      modal: 'bg-white dark:bg-[#11141c]',
      modalOverlay: 'bg-black/80',
      nav: 'bg-white dark:bg-[#0e1117]',
    },
  
    text: {
      primary: 'text-gray-800 dark:text-gray-200',
      secondary: 'text-gray-600 dark:text-gray-300',
      tertiary: 'text-gray-500 dark:text-gray-400',
      muted: 'text-gray-400 dark:text-gray-500',
      inverse: 'text-gray-100 dark:text-gray-900',
    },
  
    border: {
      primary: 'border-gray-200 dark:border-[#1c2633]',
      secondary: 'border-gray-300 dark:border-[#233044]',
      tertiary: 'border-gray-600 dark:border-[#304159]',
      accent: 'border-blue-500 dark:border-blue-400',
    },
  
    accent: {
      blue: 'text-blue-500 dark:text-blue-400',
      blueHover: 'hover:text-blue-400 dark:hover:text-blue-300',
      cyan: 'text-cyan-500 dark:text-cyan-400',
      cyanHover: 'hover:text-cyan-400 dark:hover:text-cyan-300',
      green: 'text-green-500 dark:text-green-400',
      greenHover: 'hover:text-green-400 dark:hover:text-green-300',
      yellow: 'text-yellow-500 dark:text-yellow-400',
      yellowHover: 'hover:text-yellow-400 dark:hover:text-yellow-300',
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      gradientText: 'bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent',
    },
  
    button: {
      primary: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500',
      secondary: 'bg-gray-200 dark:bg-[#1c2633] hover:bg-gray-300 dark:hover:bg-[#233044]',
      text: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
    },
    
    // Link colors for contact and other specific use cases
    link: {
      blue: 'text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300',
      green: 'text-green-500 dark:text-green-400 hover:text-green-400 dark:hover:text-green-300',
      cyan: 'text-cyan-500 dark:text-cyan-400 hover:text-cyan-400 dark:hover:text-cyan-300',
      yellow: 'text-yellow-500 dark:text-yellow-400 hover:text-yellow-400 dark:hover:text-yellow-300',
      github: 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
    },
    
    // Background colors for contact links
    linkBg: {
      blue: 'bg-blue-500/20 border-blue-500/30',
      green: 'bg-green-500/20 border-green-500/30',
      cyan: 'bg-cyan-500/20 border-cyan-500/30',
      yellow: 'bg-yellow-500/20 border-yellow-500/30',
      github: 'bg-gray-700/50 dark:bg-[#1c2633]/50 border-gray-600/50 dark:border-[#233044]/50',
    },
  
    status: {
      current: '!bg-yellow-500 !text-yellow-900 !border !border-yellow-600 dark:!bg-yellow-500 dark:!text-yellow-900 dark:!border-yellow-600',
      completed: '!bg-green-500 !text-green-900 !border !border-green-600 dark:!bg-green-500 dark:!text-green-900 dark:!border-green-600',
    },
  
    code: {
      background: 'bg-gray-900 dark:bg-[#0b0e13]',
      text: 'text-gray-100 dark:text-gray-300',
      border: 'border-gray-700 dark:border-[#1c2633]',
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
  