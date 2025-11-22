# Color Configuration

This directory contains the color system for the website. All colors should be defined here for consistency.

## Files

- `colors.ts` - TypeScript color constants that can be imported in components
- CSS variables are defined in `app/globals.css` for use in CSS files

## Usage

### In TypeScript/React Components

```typescript
import { colors, colorCombinations } from '@/config/colors'

// Use individual colors
<div className={colors.background.card}>
  <p className={colors.text.primary}>Text</p>
</div>

// Use color combinations
<h1 className={colorCombinations.section.title}>Title</h1>
```

### In CSS Files

Use CSS variables defined in `globals.css`:

```css
.my-element {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}
```

## Color Categories

- **Background**: Primary, secondary, tertiary, card backgrounds
- **Text**: Primary, secondary, tertiary, muted text colors
- **Border**: Primary, secondary, accent border colors
- **Accent**: Blue, purple, pink, green, yellow accent colors
- **Button**: Primary and secondary button styles
- **Status**: Current and completed status indicators
- **Code**: Code block and pre-formatted text colors

## Theme Support

All colors automatically support both light and dark modes using Tailwind's `dark:` prefix or CSS variables.

