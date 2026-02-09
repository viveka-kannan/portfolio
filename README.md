# Viveka Kannan - Professional Blog & Portfolio

A modern, visually striking personal portfolio and blog website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed to impress recruiters and engineering managers with refined animations, strong storytelling, and clean engineering practices.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-ff69b4?style=flat-square)

## ✨ Features

- **Code-themed Hero Section** - Terminal-style aesthetic with animated typing effect
- **Dark/Light Mode** - Smooth theme switching with animated toggle
- **Responsive Design** - Mobile-first approach, works beautifully on all devices
- **Smooth Animations** - High-quality Framer Motion animations throughout
- **Blog System** - Category filtering, reading progress indicator, estimated read time
- **Projects Showcase** - Filterable project gallery with detailed cards
- **Resume Page** - Embedded resume preview with PDF download support
- **Contact Form** - Elegant form with validation and loading states
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Content:** MDX Support
- **Theme:** next-themes
- **Fonts:** Inter & JetBrains Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/professional-blog.git
cd professional-blog
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and individual posts
│   │   └── [slug]/        # Dynamic blog post page
│   ├── contact/           # Contact page with form
│   ├── projects/          # Projects showcase page
│   ├── resume/            # Resume preview page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── blog/              # Blog-specific components
│   ├── layout/            # Header, Footer
│   ├── providers/         # Theme provider
│   ├── sections/          # Page sections (Hero, etc.)
│   └── ui/                # Reusable UI components (Button, Card)
├── lib/
│   ├── animations.ts      # Framer Motion variants
│   ├── blog.ts            # Blog utilities
│   ├── constants.ts       # Site data (personal info, skills, etc.)
│   └── utils.ts           # Helper functions
└── styles/
    └── globals.css        # Global styles & Tailwind imports
```

## 🎨 Customization

### Personal Information
Edit `src/lib/constants.ts` to update:
- Personal details (name, email, social links)
- Work experience
- Skills and technologies
- Projects
- Education

### Theme Colors
The site uses a violet/purple accent color (#8B5CF6). To change it, update the accent colors in `tailwind.config.ts`.

### Adding Blog Posts
Blog posts are currently embedded in `src/app/blog/[slug]/page.tsx`. To add real MDX blog posts:
1. Create MDX files in a `content/blog` directory
2. Update `src/lib/blog.ts` to read from the filesystem
3. The MDX configuration in `next.config.mjs` is already set up

### Adding Your Resume PDF
Place your resume PDF at `public/resume.pdf` and update the download button in `src/app/resume/page.tsx`.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

This site is ready to deploy on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

Alternatively, you can deploy to Netlify, AWS Amplify, or any platform that supports Next.js.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Viveka Kannan**
- Email: vivekakannan01@gmail.com
- LinkedIn: [linkedin.com/in/vivekakannan](https://linkedin.com/in/vivekakannan)
- GitHub: [github.com/vivekakannan](https://github.com/vivekakannan)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
