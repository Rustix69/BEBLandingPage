# BEBL Constructions - Leading Civil Engineers Foundation

A professional construction company website built with Next.js 14, React, TypeScript, and Tailwind CSS. Successfully converted from Vite/React Router to Next.js App Router.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **Server-Side Rendering (SSR)** for better SEO
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for modern, responsive styling
- **Shadcn/UI** components for consistent UI
- **React Hook Form** for form handling and validation
- **React Query** for efficient data fetching
- **Lucide React** icons for beautiful iconography
- **Theme Support** with next-themes for dark/light mode
- **Google Fonts** integration (Space Grotesk)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles and CSS variables
│   ├── providers.tsx      # React Query provider
│   ├── contact/           # Contact page
│   │   └── page.tsx
│   ├── careers/           # Careers page
│   │   └── page.tsx
│   └── not-found.tsx      # 404 error page
├── components/            # Reusable React components
│   ├── ui/               # Shadcn/UI base components
│   ├── Header.tsx        # Navigation header (Client Component)
│   ├── Footer.tsx        # Site footer
│   ├── HeroSection.tsx   # Landing page hero
│   ├── AboutSection.tsx  # About us section
│   ├── ContactForm.tsx   # Contact form component
│   ├── FeaturedProjects.tsx  # Interactive project carousel (Client)
│   ├── ProjectsGrid.tsx  # Project grid with pagination (Client)
│   └── ...               # Other page sections
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities (cn function)
├── hooks/                # Custom React hooks
│   ├── use-toast.ts      # Toast notification hook
│   └── use-mobile.tsx    # Mobile detection hook
├── public/               # Static assets (images, favicon, etc.)
├── next.config.js        # Next.js configuration
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── components.json       # Shadcn/UI configuration
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd BEBLConstructions
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📜 Available Scripts

- `npm run dev` - Start development server (with hot reloading)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Styling & Design

### Tailwind CSS
- **Utility-first** CSS framework
- **Responsive design** with mobile-first approach
- **Custom color palette** for brand consistency
- **CSS variables** for dynamic theming
- **Optimized content patterns** (excludes node_modules for performance)

### Typography
- **Space Grotesk** font loaded via Google Fonts
- Applied globally through CSS classes
- Responsive text sizing across all devices
- Font weights: 300, 400, 500, 600, 700

### Color Scheme
- **Primary:** `#B95A2A` (Construction orange)
- **Secondary:** `#F5F1ED` (Light beige)
- **Accent:** `#8B5A3C` (Dark brown)

## 🧩 Components

### Client Components (use "use client")
Components that use React hooks and require client-side rendering:
- `FeaturedProjects.tsx` - Interactive carousel with useState
- `ProjectsGrid.tsx` - Paginated grid with useState
- `components/ui/toaster.tsx` - Toast notifications
- `components/ui/sonner.tsx` - Sonner toast provider

### Server Components
Static components rendered on the server:
- `Header.tsx` - Navigation (uses Next.js Link)
- `Footer.tsx` - Site footer
- `HeroSection.tsx` - Landing page hero
- `AboutSection.tsx` - About us section

### UI Components (Shadcn/UI)
Pre-built, accessible components including:
- Forms and inputs with validation
- Buttons and navigation elements
- Cards and layout components
- Modals and overlays
- Toast notifications

## 📱 Pages

- **Home (/)** - Main landing page showcasing company services
- **Contact (/contact)** - Contact form and location information
- **Careers (/careers)** - Job application form and company culture
- **404** - Custom not found page

## ⚙️ Configuration

### Next.js Configuration
- **React Strict Mode** enabled
- **SWC minification** for faster builds
- **Image optimization** ready (Next.js Image component)

### TypeScript Configuration
- **Path aliases** (`@/*` points to root)
- **Strict mode** disabled for flexibility
- **JSX preservation** for Next.js optimization
- **Bundle resolver** for modern module resolution

### ESLint Configuration
- **Next.js recommended** rules
- **React hooks** rules
- **Accessibility** checks

### PostCSS Configuration
- **Tailwind CSS** processing
- **Autoprefixer** for browser compatibility
- **CommonJS format** for Next.js compatibility

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically with zero configuration

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Environment Variables
Create a `.env.local` file for local development:
```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=your-api-url
```

## 🔧 Development

### Adding New Pages
1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Export a default React component

### Adding New Components
1. Create component in `components/`
2. Add `"use client"` if using React hooks
3. Use TypeScript for props
4. Import and use in pages

### Client vs Server Components
- **Server Components**: Default, rendered on server, no hooks
- **Client Components**: Add `"use client"`, can use hooks, rendered on client

### Styling Guidelines
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use CSS variables for theme values

## 🐛 Common Issues & Solutions

### Client Component Errors
If you see "useState only works in Client Component":
```tsx
"use client" // Add this at the top of the file

import { useState } from "react"
```

### Theme Provider Errors
The layout includes `ThemeProvider` from next-themes for theme support.

### Font Loading
Space Grotesk is loaded via Google Fonts import in `globals.css`.

## 📊 Performance

- **Automatic code splitting** by Next.js
- **Image optimization** with Next.js Image
- **Font optimization** with Google Fonts
- **Bundle analysis** available with `@next/bundle-analyzer`
- **Optimized Tailwind** with proper content configuration

## 🔒 Security

- **Content Security Policy** ready
- **HTTPS** enforced in production
- **XSS protection** with Next.js built-ins

## 📄 License

This project is private and proprietary to BEBL Constructions.

## 🤝 Contributing

This is a private project. For contribution guidelines, please contact the development team.

## 📞 Support

For technical support or questions about this project, please contact:
- **Email:** competitivecoder69@gmail.com
- **Phone:** +91 77187 36188

## 🔄 Migration Notes

This project was successfully migrated from Vite + React Router to Next.js 14:
- ✅ Converted routing from React Router to Next.js App Router
- ✅ Updated components for Server/Client Component architecture
- ✅ Fixed font loading and theme provider integration
- ✅ Optimized Tailwind configuration for performance
- ✅ Maintained all existing functionality and styling

---

**Built with ❤️ using Next.js 14 and modern web technologies.**
