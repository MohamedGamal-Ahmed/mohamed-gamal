import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Languages, Rocket, Sun, Moon, Phone, MapPin, Linkedin, Globe, Mail } from 'lucide-react';
import { Language } from './types';
import { TRANSLATIONS, PROJECTS, TECH_STACK } from './constants';
import BentoCard from './components/BentoCard';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  // Fixed Secondary Button classes - Using CSS variables for proper contrast
  const secondaryBtnClasses = "btn-secondary rounded-xl";

  const socialLinks = [
    { name: { en: "GitHub", ar: "جيت هب" }, icon: <Github className="w-5 h-5" />, url: 'https://github.com/MohamedGamal-Ahmed', hoverAccent: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: { en: "LinkedIn", ar: "لينكد إن" }, icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/mohamed-gamal-357b10356/', hoverAccent: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: { en: "Email", ar: "راسلني" }, icon: <Mail className="w-5 h-5" />, url: 'mailto:mgamal.ahmed@outlook.com', hoverAccent: 'hover:text-red-600 dark:hover:text-red-400' },
    { name: { en: "Call Me", ar: "اتصل بي" }, icon: <Phone className="w-5 h-5" />, url: 'tel:01033501334', hoverAccent: 'hover:text-green-600 dark:hover:text-green-400' },
  ];

  return (
    <div
      className={`min-h-screen py-8 px-4 md:px-12 lg:px-24 transition-colors duration-500 bg-gray-50 dark:bg-slate-950 ${isRtl ? 'font-[Tajawal]' : 'font-[Inter]'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">

        {/* Header Actions */}
        <header className="flex items-center justify-between sticky top-0 z-50 py-4 -my-4 bg-gray-50/80 dark:bg-slate-950/80 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 rounded-xl overflow-hidden bg-blue-600 flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/profile.jpg" alt="MG" className="w-full h-full object-cover" />
            </motion.div>
            <span className="font-black text-xl tracking-tighter hidden md:block text-slate-900 dark:text-white">{t.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 ${secondaryBtnClasses}`}
              aria-label="Toggle theme"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun className="w-5 h-5 text-orange-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </motion.button>
            <motion.button
              onClick={toggleLanguage}
              className={`px-4 py-2 text-xs font-black flex items-center gap-2 ${secondaryBtnClasses}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Languages className="w-4 h-4" />
              {lang === 'en' ? 'العربية' : 'English'}
            </motion.button>
          </div>
        </header>

        {/* TOP SECTION: Bento Grid with Custom Proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Tech Stack - Taller and Enlarge icons as requested */}
          <BentoCard className="lg:col-span-1 h-full flex flex-col" delay={0.1}>
            <h3 className="text-lg font-black mb-6 text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{t.techStackTitle}</h3>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {TECH_STACK.map((tech, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center justify-center p-4 rounded-3xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500/40 transition-all group/tech shadow-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="mb-3 transition-transform group-hover/tech:scale-125 duration-300">
                    {React.cloneElement(tech.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                  </div>
                  <span className="text-xs text-zinc-600 dark:text-zinc-300 font-black">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* Hero Section (3/4 width) - Contains Bio and Socials under image */}
          <BentoCard className="lg:col-span-3 h-full flex flex-col justify-center" delay={0.2}>
            <div className={`flex flex-col md:flex-row gap-12 ${isRtl ? 'md:flex-row-reverse text-right' : 'text-left'}`}>

              {/* Bio Column */}
              <div className="flex-1 space-y-6 flex flex-col justify-center">
                <div>
                  <motion.span
                    className="text-zinc-500 dark:text-zinc-500 text-xs font-black uppercase tracking-[0.3em] mb-2 block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {isRtl ? 'مرحباً، أنا' : 'Hello, I am'}
                  </motion.span>
                  <motion.h1
                    className="text-5xl md:text-8xl font-black tracking-tighter leading-tight text-slate-900 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {t.name}
                  </motion.h1>
                  <motion.h2
                    className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-black mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {t.role}
                  </motion.h2>
                </div>

                <motion.p
                  className="text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed max-w-xl font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {t.bio}
                </motion.p>

                <motion.div
                  className="flex items-center gap-3 pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 text-xs font-bold">
                    <MapPin className="w-4 h-4" />
                    {t.location}
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20 text-xs font-bold animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-current" />
                    {t.available}
                  </div>
                </motion.div>
              </div>

              {/* Profile Image & Socials Column (Under image) */}
              <div className="shrink-0 flex flex-col items-center gap-6">
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-[4rem] overflow-hidden bg-zinc-200 dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-700 group-hover:rounded-[3rem] group-hover:rotate-2 group-hover:scale-105">
                    <img
                      src="/profile.jpg"
                      alt="Mohamed Gamal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-500/20 blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-purple-500/20 blur-xl" />
                </motion.div>

                {/* Social Links Grid - Moved here under image */}
                <div className="w-full space-y-3">
                  <h3 className="text-xs font-black text-center text-zinc-500 uppercase tracking-widest">{t.connectTitle}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 p-3 ${secondaryBtnClasses} group ${social.hoverAccent} text-xs`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {social.icon}
                        <span className="font-black">{social.name[lang]}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>


        {/* EXPERIENCE SECTION - Full Width */}
        <div className="mt-24">
          <ExperienceSection lang={lang} title={t.experienceTitle} />
        </div>

        {/* PROJECTS SECTION - Full Width Grid */}
        <section className="mt-24 space-y-12" id="projects">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">{t.projectsTitle}</h2>
            <div className="h-2 w-32 bg-blue-600 rounded-full" />
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl font-medium">
              {isRtl ? 'مجموعة من أبرز أعمالي في مجالات الذكاء الاصطناعي، الرؤية الحاسوبية، وتطوير التطبيقات المتكاملة.' : 'A curated selection of my work in AI, Computer Vision, and Full-Stack Development.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <BentoCard key={project.id} delay={0.4 + index * 0.1} className="h-full flex flex-col justify-between hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Rocket className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                    {project.title[lang]}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                    {project.description[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-gray-50 dark:bg-slate-950/50 text-zinc-600 dark:text-zinc-400 text-[10px] font-black border border-slate-200 dark:border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-8 mt-auto border-t border-slate-200 dark:border-slate-800">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-black uppercase tracking-wider ${secondaryBtnClasses}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                    {isRtl ? 'الكود' : 'Code'}
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-500/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {isRtl ? 'معاينة' : 'Live'}
                  </motion.a>
                </div>
              </BentoCard>
            ))}

            {/* Coming Soon Placeholder */}
            <BentoCard className="flex flex-col items-center justify-center text-center py-12 border-dashed border-2 opacity-50 bg-transparent border-slate-300 dark:border-slate-700" delay={0.7}>
              <Rocket className="w-12 h-12 text-zinc-400 mb-4 animate-pulse" />
              <p className="text-zinc-400 font-black text-xs uppercase tracking-widest">...More coming soon</p>
            </BentoCard>
          </div>
        </section>

        {/* SKILLS SECTION - Moved here */}
        <SkillsSection lang={lang} title={t.skillsTitle} />

        {/* TESTIMONIALS SECTION */}
        <TestimonialsSection lang={lang} title={t.testimonialsTitle} />

        {/* CONTACT FORM SECTION */}
        <ContactForm lang={lang} t={t} />

        <footer className="pt-24 pb-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-400 dark:text-zinc-500 text-[11px] font-mono tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} {t.name}
          </div>
          <div className="flex items-center gap-6">
            <span className="text-zinc-400 dark:text-zinc-500 text-[11px] font-mono tracking-[0.2em] uppercase">{t.role}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">{t.available}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;