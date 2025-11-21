# Academic Portfolio Website

A modern, flashy yet professional academic website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Dark Theme**: Professional dark theme with gradient accents
- **Smooth Animations**: Framer Motion animations for a polished experience
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Easy to Extend**: Simple JSON files for publications and thesis supervision
- **Modern UI**: Clean typography, hover effects, and smooth scrolling

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding Publications

Edit `data/publications.json` to add new publications. The format is:

```json
{
  "id": 1,
  "title": "Paper Title",
  "authors": "Author 1, Author 2",
  "venue": "Conference/Journal Name",
  "year": 2024,
  "type": "journal" or "conference",
  "link": "https://example.com",
  "abstract": "Optional abstract text"
}
```

### Adding Thesis Projects

Edit `data/thesis-supervision.json` to add new thesis projects:

```json
{
  "id": 1,
  "student": "Student Name",
  "title": "Thesis Title",
  "year": 2024,
  "type": "Master's Thesis" or "Bachelor's Thesis",
  "status": "completed" or "in-progress",
  "description": "Brief description"
}
```

### Adding Your Resume

Place your resume PDF in the `public/` directory and name it `resume.pdf`.

### Updating Profile Picture

Replace the placeholder emoji in `components/About.tsx` with an actual image using Next.js Image component.

### Updating Contact Information

Edit the contact information in `components/Contact.tsx`.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library

## License

MIT

