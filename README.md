# Crystal Rock Accommodations Website

A modern, responsive website for Crystal Rock hostel accommodations in Bengaluru, built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional UI with primary brand color (#3D4D73)
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Navigation**: Smooth page transitions with Zustand state management
- **Video Integration**: Promotional video showcase with optimized loading
- **Contact & About Pages**: Enhanced pages with animations and form validation
- **Amenities Showcase**: Visual grid layout with hover effects
- **Logo Integration**: Multiple logo variants (steel, fire, landscape, portrait)
- **Premium Components**: Custom UI components with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Emoji-based icons for simplicity

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KavinSorn/Crystal-Rock-Web.git
cd Crystal-Rock-Web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages

- **Home**: Video hero section with landing showcase
- **CR Mess**: Food services information with fire logo
- **About Us**: Company story with logo animation video
- **Contact**: Contact form with validation and location details

## 🎨 Design Features

- **Primary Color**: #3D4D73 (logo-inspired branding)
- **Navigation**: Fixed header with primary color background
- **Logos**: Multiple variants for different contexts
- **Animations**: Subtle hover effects and transitions
- **Responsive**: Mobile-first design approach

## 📦 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── MessPage.tsx
│   │   ├── Amenities.tsx
│   │   └── Hostels.tsx
│   └── ui/
├── stores/
│   └── appStore.ts
├── lib/
│   ├── data.ts
│   └── utils.ts
└── types/
    └── index.ts
```

## 🚀 Deployment

This project is ready for deployment on:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Digital Ocean**

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to deploy your application.

## 📝 Environment Variables

No environment variables are required for basic functionality.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🏢 About Crystal Rock

Crystal Rock Accommodations provides premium hostel living solutions for young professionals in Bengaluru's IT corridors, combining comfort, community, and convenience.

---

Built with ❤️ for Crystal Rock Accommodations
