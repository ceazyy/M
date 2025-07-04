# CEAZY - Electronic Music Producer & DJ Portfolio

A modern, fast, and beautifully designed portfolio website for electronic music producer CEAZY, built with cutting-edge technologies for optimal performance and smooth animations.

## 🚀 Features

- **Lightning Fast**: Built with Vite + React + TypeScript for blazing-fast performance
- **Smooth Animations**: Powered by Framer Motion for professional animations
- **Responsive Design**: Looks perfect on all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Music Integration**: Embedded Spotify, Apple Music, and SoundCloud players
- **Social Media Links**: Direct links to all CEAZY's social platforms
- **SEO Optimized**: Proper meta tags and structured content

## 🎵 Integrated Platforms

- **SoundCloud**: Latest tracks and remixes
- **Spotify**: Official releases and playlists
- **Apple Music**: Streaming on Apple's platform
- **Bandcamp**: Direct artist support
- **Beatport**: Professional DJ downloads
- **Instagram**: Behind-the-scenes content

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite (fastest build tool)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Fonts**: Inter (Google Fonts)

## 🏃‍♂️ Quick Start

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Start development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open your browser** and navigate to \`http://localhost:5173\`

## 📁 Project Structure

\`\`\`
portfolio/
├── public/
│   ├── Logo (Main).png     # Main logo for hero section
│   └── Logo (Small).png    # Small logo for header
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Main hero section
│   │   ├── Portfolio.tsx   # Portfolio showcase
│   │   ├── MusicSection.tsx # Music embeds and players
│   │   ├── SocialLinks.tsx # Social media links
│   │   └── Footer.tsx      # Footer component
│   ├── App.tsx            # Main app component
│   ├── index.css          # Global styles with Tailwind
│   └── main.tsx           # App entry point
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
\`\`\`

## 🎨 Customization

### Colors
The website uses a modern color palette that can be customized in \`tailwind.config.js\`:
- **Primary**: Blues and purples for gradients
- **Accent**: Platform-specific colors (Spotify green, SoundCloud orange, etc.)
- **Neutrals**: Grays and blacks for text and backgrounds

### Content
Update the following files to modify content:
- **Portfolio items**: \`src/components/Portfolio.tsx\`
- **Music tracks**: \`src/components/MusicSection.tsx\`
- **Social links**: \`src/components/SocialLinks.tsx\`
- **Hero content**: \`src/components/Hero.tsx\`

### Logos
Replace the logo files in the \`public/\` directory:
- \`Logo (Main).png\` - Used in the hero section
- \`Logo (Small).png\` - Used in the header/navigation

## 🚀 Deployment

### Build for Production
\`\`\`bash
npm run build
\`\`\`

The built files will be in the \`dist/\` folder, ready for deployment to any static hosting service.

### Recommended Hosting Platforms
- **Vercel** (recommended for React apps)
- **Netlify** 
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 📱 Responsive Design

The website is fully responsive and tested on:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## ⚡ Performance

Built with performance in mind:
- **Vite** for ultra-fast development and building
- **Code splitting** for optimized loading
- **Optimized images** and lazy loading
- **Minimal bundle size** with tree shaking

## 🎵 Adding New Tracks

To add new music tracks:

1. **For SoundCloud tracks**: Add to the \`soundcloudTracks\` array in \`MusicSection.tsx\`
2. **For Spotify/Apple Music**: Update the \`featuredTracks\` array with embed codes
3. **For portfolio items**: Add to the \`portfolioItems\` array in \`Portfolio.tsx\`

## 🔗 Social Media Integration

All social media links are configured in \`SocialLinks.tsx\`. The website includes:
- Direct links to all platforms
- Platform-specific styling and colors
- Hover animations and effects

## 🎨 Design Philosophy

The design follows modern web principles:
- **Clean and minimal**: Focus on content
- **Dark theme elements**: Matches music industry aesthetics
- **Smooth animations**: Professional feel without being distracting
- **Mobile-first**: Designed for mobile, enhanced for desktop

## 📄 License

This portfolio website is created for CEAZY. All music, logos, and content rights belong to the artist.

---

**Built with ❤️ for the electronic music community**
