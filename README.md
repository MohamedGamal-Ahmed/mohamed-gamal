# 🚀 Mohamed Gamal | AI & Software Solutions Developer Portfolio

Welcome to my professional portfolio website! This project is a high-performance, responsive, and visually stunning landing page showcasing my expertise in Artificial Intelligence, Machine Learning, and Full-Stack Development.

![Portfolio Preview](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6) 

---

## ✨ Features

- **🌓 Dynamic Theme Toggle**: Seamless transition between Light and Dark modes with optimized contrast.
- **🌍 Dual Language Support**: Full support for English and Arabic (RTL) with high-quality translations.
- **📊 Interactive Skills Section**: Animated progress bars showcasing expertise in AI/ML, GenAI, and Software Dev.
- **📅 Experience Timeline**: A clean, vertical timeline of professional history and academic projects.
- **📁 Projects Showcase**: Categorized projects with GitHub links, live demos, and technical tags.
- **⭐ Testimonials Carousel**: Social proof with an animated review slider.
- **✉️ Functional Contact Form**: Integrated with Formspree for direct email communication.
- **🔍 SEO Optimized**: Metadata, Open Graph tags, and JSON-LD structured data for better search visibility.
- **⚡ Super Fast**: Built with Vite and React for near-instant load times.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: Dark/Light mode via Tailwind + CSS Variables.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MohamedGamal-Ahmed/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Contact Form**:
   - Create a free account on [Formspree](https://formspree.io/).
   - Update your Form ID in `src/components/ContactForm.tsx`:
     ```tsx
     const response = await fetch('https://formspree.io/f/mqeljoql', ...);
     ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
├── src/
│   ├── components/       # Reusable UI components (Skills, Experience, etc.)
│   ├── constants.tsx    # Static data and translations
│   ├── types.ts         # TypeScript interfaces
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point
├── public/              # Static assets (profile image, project screenshots)
├── index.html           # HTML template with SEO meta tags
└── tailwind.config.js   # Tailwind CSS configuration
```

---

## 👨‍💻 Author

**Mohamed Gamal**
- AI & Software Solutions Developer
- [GitHub](https://github.com/MohamedGamal-Ahmed)
- [LinkedIn](https://www.linkedin.com/in/mohamed-gamal-357b10356/)
- [Email](mailto:mgamal.ahmed@outlook.com)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
