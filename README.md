# SECUROX - Cyber Security Website

A modern, responsive cyber security website built with React, TypeScript, and Tailwind CSS. This project features a dark theme with vibrant gradients, animations, and a mobile-first responsive design.

## 🚀 Features

- **Modern Design**: Dark theme with purple, blue, and green gradients
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Hover effects, animations, and smooth transitions
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Icons**: Beautiful icons from Lucide React
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **React Icons** - Additional icon library

## 📱 Sections

1. **Header** - Navigation with mobile menu
2. **Hero** - Main banner with call-to-action
3. **Why Choose Us** - Feature highlights
4. **Services** - Service cards grid
5. **Security Services** - Managed security offerings
6. **Blog** - Latest news and articles
7. **About Us** - Company information
8. **Newsletter** - Email subscription form
9. **Footer** - Links and company info

## 🎨 Design Features

- **Color Scheme**: Dark purple/blue background with accent colors
- **Typography**: Inter font family for modern look
- **Animations**: Floating elements, glow effects, and smooth transitions
- **Gradients**: Multiple gradient combinations for visual appeal
- **Icons**: Custom icon illustrations for each section

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cyber-v1
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── WhyChooseUs.tsx # Why choose us section
│   ├── Services.tsx    # Services grid
│   ├── SecurityServices.tsx # Security services
│   ├── Blog.tsx        # Blog section
│   ├── AboutUs.tsx     # About us section
│   ├── Newsletter.tsx  # Newsletter signup
│   └── Footer.tsx      # Footer
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles with Tailwind
```

## 🎯 Key Components

### Header

- Responsive navigation with mobile menu
- Sticky header with backdrop blur
- Logo with animated elements

### Hero

- Large headline with gradient text
- Call-to-action buttons
- Animated illustrations with floating elements

### Services

- Grid layout of service cards
- Hover effects and animations
- Icon-based visual hierarchy

### Blog

- Responsive card layout
- Category tags
- Read more functionality

## 🔧 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { /* Blue shades */ },
  secondary: { /* Purple shades */ },
  accent: { /* Green shades */ },
  dark: { /* Dark theme colors */ }
}
```

### Animations

Custom animations are defined in the Tailwind config:

```javascript
animation: {
  'float': 'float 6s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite alternate',
}
```

## 📱 Mobile Responsiveness

The website is fully responsive with:

- Mobile-first design approach
- Collapsible navigation menu
- Responsive grid layouts
- Touch-friendly buttons and interactions
- Optimized typography for all screen sizes

## 🚀 Performance

- Optimized bundle size
- Lazy loading for images
- Efficient CSS with Tailwind
- TypeScript for better performance
- Modern React patterns

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact the development team.
