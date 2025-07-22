# Weborah - Modern Web Agency

A cutting-edge web agency website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Sleek, minimal design with electric blue and neon pink accents
- **Dark Mode**: Built-in dark theme with beautiful gradients and glows
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations and scroll effects
- **SEO Optimized**: Complete metadata and Open Graph tags
- **Performance Focused**: Next.js Image optimization and best practices
- **Accessible**: WCAG compliant with proper contrast and focus states

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
weborah/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── projects/         # Projects page
│   └── contact/          # Contact page
├── components/           # Reusable components
│   ├── ui/              # UI primitives
│   ├── Navbar.tsx       # Navigation component
│   ├── Footer.tsx       # Footer component
│   ├── HeroSection.tsx  # Hero section
│   └── ...              # Other sections
├── lib/                 # Utilities and data
│   ├── utils.ts         # Utility functions
│   └── projects.ts      # Project data
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/weborah.git
cd weborah
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

## 🎨 Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.ts`:

- **Electric Blue**: `#06B6D4` - Primary accent color
- **Neon Pink**: `#EC4899` - Secondary accent color
- **Dark Backgrounds**: Various shades of slate

### Content

- **Projects**: Edit `lib/projects.ts` to add/modify portfolio projects
- **Testimonials**: Update `components/TestimonialsSection.tsx`
- **Contact Info**: Modify contact details in `components/Footer.tsx` and `app/contact/page.tsx`

### Styling

- **Global Styles**: `app/globals.css`
- **Component Styles**: Individual component files
- **Tailwind Config**: `tailwind.config.ts`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://weborah.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/weborah/consultation
```

### Metadata

Update SEO metadata in:
- `app/layout.tsx` - Global metadata
- Individual page components - Page-specific metadata

## 📝 Adding New Projects

1. Add project data to `lib/projects.ts`:

```typescript
{
  id: 'new-project',
  title: 'Project Title',
  description: 'Short description',
  longDescription: 'Detailed description',
  image: 'https://example.com/image.jpg',
  technologies: ['Next.js', 'TypeScript'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/username/repo',
  category: 'web',
  featured: true,
}
```

2. The project will automatically appear on the projects page and homepage (if featured).

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with zero configuration

### Other Platforms

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📊 Performance

The website is optimized for:
- **Core Web Vitals**: Excellent LCP, FID, and CLS scores
- **SEO**: Comprehensive metadata and semantic HTML
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Optimized images, code splitting, and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions, please:
- Open an issue on GitHub
- Email: ryan@weborah.com
- Schedule a call: [Calendly](https://calendly.com/weborah/consultation)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Unsplash](https://unsplash.com/) - Project images

---

Built with ❤️ by the Weborah team.
