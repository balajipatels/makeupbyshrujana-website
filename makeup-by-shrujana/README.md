# MakeUpByShrujana - Professional Bridal Makeup Artist Portfolio

A modern, elegant, and mobile-first portfolio website for a professional makeup artist brand. Built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Elegant, feminine, and premium aesthetic suitable for bridal makeup artists
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Animations**: Smooth and subtle animations using Framer Motion
- **Glassmorphism**: Modern glassmorphism style elements
- **SEO Optimized**: Complete SEO setup with meta tags, sitemap, and robots.txt
- **Performance**: Optimized for fast loading and smooth user experience
- **Contact Integration**: WhatsApp, phone, and email integrations
- **Portfolio Gallery**: Filterable portfolio with lightbox functionality
- **Service Pages**: Detailed services and packages information
- **Testimonials**: Customer reviews and ratings
- **Production Ready**: Configured for deployment on Vercel

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: Next.js built-in SEO features
- **Deployment**: Vercel

## Pages

- **Home**: Hero section, featured services, portfolio preview, testimonials, Instagram gallery
- **About**: Professional story, philosophy, achievements, journey
- **Services**: Detailed service cards with pricing and features
- **Portfolio**: Filterable image gallery with lightbox
- **Packages**: Wedding packages with detailed inclusions
- **Testimonials**: Customer reviews and success stories
- **Contact**: Contact form, location map, quick contact options

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd makeup-by-shrujana
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## Customization

### Brand Information
Update the brand details in the following files:
- `src/app/layout.tsx` - Update metadata and SEO information
- `src/components/layout/header.tsx` - Update brand name and navigation
- `src/components/layout/footer.tsx` - Update contact information and social links

### Styling
The design system uses custom Tailwind CSS configuration:
- `tailwind.config.ts` - Custom colors, fonts, and animations
- `src/app/globals.css` - Global styles and custom animations

### Content
Update content in the respective page files:
- `src/app/page.tsx` - Home page content
- `src/app/services/page.tsx` - Services information
- `src/app/portfolio/page.tsx` - Portfolio items
- `src/app/packages/page.tsx` - Package details
- `src/app/testimonials/page.tsx` - Customer testimonials
- `src/app/about/page.tsx` - About page content
- `src/app/contact/page.tsx` - Contact information

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Manual Build
```bash
npm run build
npm start
```

### Environment Variables
Set the following environment variables for production:
- `NEXT_PUBLIC_SITE_URL` - Your production URL
- `NEXT_PUBLIC_PHONE` - Your business phone number
- `NEXT_PUBLIC_WHATSAPP` - Your WhatsApp number
- `NEXT_PUBLIC_EMAIL` - Your business email

## SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Configured for optimal search engine crawling
- **Schema Markup**: Ready for structured data implementation
- **Performance**: Optimized for Core Web Vitals

## Performance Optimizations

- **Image Optimization**: Next.js Image component usage
- **Code Splitting**: Automatic code splitting by pages
- **Font Optimization**: Google Fonts with proper loading
- **CSS Optimization**: Tailwind CSS with purging
- **Bundle Analysis**: Ready for bundle size optimization

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.

## Support

For support, please contact:
- Email: shrujana.s2024@gmail.com
- Phone: +91 98765 43210
- WhatsApp: +91 98765 43210

---

Made with <span style="color: #ec4899;">love</span> for brides by MakeUpByShrujana
