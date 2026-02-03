
import { Language, Translation, Project, SkillCategory, Experience, Testimonial } from './types';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
  Globe,
  Database,
  Terminal,
  Layers,
  Cloud,
  Box,
  Palette,
  Phone,
  Brain,
  Eye,
  Bot,
  Workflow,
  Sparkles,
  Server,
  FileCode
} from 'lucide-react';
import React from 'react';

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    name: "Mohamed Gamal",
    role: "AI & Software Solutions Developer",
    bio: "I build intelligent solutions using AI and modern technologies. Specializing in Computer Vision, Deep Learning, and Full-Stack Development.",
    available: "Available for new projects",
    techStackTitle: "Tech Stack",
    connectTitle: "Connect with me",
    location: "Egypt",
    localTime: "Cairo Time",
    projectsTitle: "Featured Projects",
    emailLabel: "Email",
    phoneLabel: "Call Me",
    skillsTitle: "Skills & Expertise",
    experienceTitle: "Experience",
    testimonialsTitle: "What People Say",
    contactTitle: "Get In Touch",
    contactSubtitle: "Have a project in mind? Let's work together!",
    sendMessage: "Send Message",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Your Message",
    sending: "Sending...",
    messageSent: "Message sent successfully!",
    messageError: "Failed to send. Please try again."
  },
  ar: {
    name: "محمد جمال",
    role: "مطور حلول ذكاء اصطناعي وبرمجيات",
    bio: "أبني حلولاً ذكية باستخدام الذكاء الاصطناعي والتقنيات الحديثة. متخصص في الرؤية الحاسوبية، التعلم العميق، وتطوير Full-Stack.",
    available: "متاح لمشاريع جديدة",
    techStackTitle: "التقنيات",
    connectTitle: "تواصل معي",
    location: "مصر",
    localTime: "توقيت القاهرة",
    projectsTitle: "المشاريع المميزة",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "اتصل بي",
    skillsTitle: "المهارات والخبرات",
    experienceTitle: "الخبرة العملية",
    testimonialsTitle: "آراء العملاء",
    contactTitle: "تواصل معي",
    contactSubtitle: "لديك مشروع في ذهنك؟ دعنا نعمل معاً!",
    sendMessage: "إرسال الرسالة",
    namePlaceholder: "اسمك",
    emailPlaceholder: "بريدك الإلكتروني",
    subjectPlaceholder: "الموضوع",
    messagePlaceholder: "رسالتك",
    sending: "جاري الإرسال...",
    messageSent: "تم إرسال الرسالة بنجاح!",
    messageError: "فشل الإرسال. حاول مرة أخرى."
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: { en: "AI & Machine Learning", ar: "الذكاء الاصطناعي والتعلم الآلي" },
    skills: [
      { name: "Computer Vision (YOLOv5)", level: 85, icon: <Eye className="w-5 h-5 text-purple-500" /> },
      { name: "Deep Learning", level: 80, icon: <Brain className="w-5 h-5 text-pink-500" /> },
      { name: "AI Pipelines", level: 75, icon: <Workflow className="w-5 h-5 text-blue-500" /> },
      { name: "AI Deployment (Flask)", level: 70, icon: <Server className="w-5 h-5 text-green-500" /> },
    ]
  },
  {
    title: { en: "Generative AI & Agents", ar: "الذكاء الاصطناعي التوليدي والوكلاء" },
    skills: [
      { name: "LangChain & CrewAI", level: 70, icon: <Bot className="w-5 h-5 text-orange-500" /> },
      { name: "Agentic Workflows", level: 65, icon: <Sparkles className="w-5 h-5 text-yellow-500" /> },
      { name: "Prompt Engineering", level: 75, icon: <Terminal className="w-5 h-5 text-cyan-500" /> },
      { name: "n8n Automation", level: 60, icon: <Workflow className="w-5 h-5 text-red-500" /> },
    ]
  },
  {
    title: { en: "Software Development", ar: "التطوير البرمجي" },
    skills: [
      { name: "Python", level: 90, icon: <FileCode className="w-5 h-5 text-yellow-500" /> },
      { name: "TypeScript / JavaScript", level: 85, icon: <Code2 className="w-5 h-5 text-blue-500" /> },
      { name: "React.js & Tailwind CSS", level: 80, icon: <Palette className="w-5 h-5 text-cyan-400" /> },
      { name: "SQL & Databases", level: 75, icon: <Database className="w-5 h-5 text-emerald-500" /> },
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: { en: "AI Developer - Graduation Project", ar: "مطور ذكاء اصطناعي - مشروع التخرج" },
    company: { en: "Face Mask & Emotion Detection System", ar: "نظام كشف الكمامات والمشاعر" },
    period: { en: "2024", ar: "2024" },
    description: {
      en: "Built a Computer Vision system using YOLOv5 for face mask detection and emotion recognition. Implemented the complete AI pipeline from data processing to web deployment using Flask.",
      ar: "بناء نظام رؤية حاسوبية باستخدام YOLOv5 لكشف الكمامات والتعرف على المشاعر. تطبيق خط أنابيب الذكاء الاصطناعي الكامل من معالجة البيانات حتى النشر على الويب باستخدام Flask."
    },
    tags: ["YOLOv5", "Python", "Flask", "Deep Learning", "OpenCV"],
    current: false
  },
  {
    id: 2,
    title: { en: "Full-Stack Developer", ar: "مطور Full-Stack" },
    company: { en: "DCMS & Masar Projects", ar: "مشاريع DCMS و مسار" },
    period: { en: "2023 - Present", ar: "2023 - الحاضر" },
    description: {
      en: "Developing enterprise document management systems with React, TypeScript, and database integration. Building mobile-responsive applications with real-time features.",
      ar: "تطوير أنظمة إدارة المستندات المؤسسية باستخدام React و TypeScript وتكامل قواعد البيانات. بناء تطبيقات متجاوبة مع الهواتف مع ميزات الوقت الفعلي."
    },
    tags: ["React", "TypeScript", "PostgreSQL", "C#", ".NET"],
    current: true
  },
  {
    id: 3,
    title: { en: "Generative AI Learner", ar: "متعلم الذكاء الاصطناعي التوليدي" },
    company: { en: "Self-Development", ar: "تطوير ذاتي" },
    period: { en: "2024 - Present", ar: "2024 - الحاضر" },
    description: {
      en: "Exploring LangChain, CrewAI, and building autonomous agent systems. Learning advanced prompt engineering and workflow automation with n8n.",
      ar: "استكشاف LangChain و CrewAI وبناء أنظمة الوكلاء المستقلة. تعلم هندسة الـ Prompts المتقدمة وأتمتة سير العمل باستخدام n8n."
    },
    tags: ["LangChain", "CrewAI", "n8n", "LLMs"],
    current: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: { en: "Ahmed Hassan", ar: "أحمد حسن" },
    role: { en: "Project Manager", ar: "مدير مشروع" },
    content: {
      en: "Mohamed's AI expertise transformed our project. His attention to detail and problem-solving skills are exceptional.",
      ar: "خبرة محمد في الذكاء الاصطناعي غيرت مشروعنا. اهتمامه بالتفاصيل ومهاراته في حل المشكلات استثنائية."
    },
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
    rating: 5
  },
  {
    id: 2,
    name: { en: "Sara Mohamed", ar: "سارة محمد" },
    role: { en: "Tech Lead", ar: "قائدة تقنية" },
    content: {
      en: "Working with Mohamed was a great experience. He delivered beyond expectations and was always available for support.",
      ar: "العمل مع محمد كان تجربة رائعة. قدم أكثر من المتوقع وكان متاحاً دائماً للدعم."
    },
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
    rating: 5
  },
  {
    id: 3,
    name: { en: "Omar Ali", ar: "عمر علي" },
    role: { en: "Startup Founder", ar: "مؤسس شركة ناشئة" },
    content: {
      en: "Mohamed helped us build our MVP in record time. His full-stack skills and AI knowledge were exactly what we needed.",
      ar: "ساعدنا محمد في بناء MVP في وقت قياسي. مهاراته في Full-Stack ومعرفته بالذكاء الاصطناعي كانت بالضبط ما نحتاجه."
    },
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
    rating: 5
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { en: "Face Mask & Emotion Detection", ar: "كشف الكمامات والمشاعر" },
    description: {
      en: "Computer Vision system using YOLOv5 for real-time face mask detection and emotion recognition. Complete AI pipeline with Flask web deployment.",
      ar: "نظام رؤية حاسوبية باستخدام YOLOv5 لكشف الكمامات والتعرف على المشاعر في الوقت الفعلي. خط أنابيب AI كامل مع نشر على الويب باستخدام Flask."
    },
    tags: ["YOLOv5", "Python", "Flask", "OpenCV", "Deep Learning"],
    link: "#",
    github: "https://github.com/MohamedGamal-Ahmed",
    image: "/projects/mask-detection.jpg"
  },
  {
    id: 2,
    title: { en: "DCMS - Document Management", ar: "DCMS - إدارة المستندات" },
    description: {
      en: "Enterprise document management system with real-time features, AI-powered search, and mobile-responsive design.",
      ar: "نظام إدارة مستندات مؤسسي مع ميزات الوقت الفعلي، بحث مدعوم بالذكاء الاصطناعي، وتصميم متجاوب مع الهواتف."
    },
    tags: ["React", "TypeScript", ".NET", "PostgreSQL", "SignalR"],
    link: "#",
    github: "https://github.com/MohamedGamal-Ahmed",
    image: "/projects/dcms.jpg"
  },
  {
    id: 3,
    title: { en: "Murasala Hub", ar: "مراسلة هب" },
    description: {
      en: "Modern communication platform with real-time messaging, file sharing, and collaborative features.",
      ar: "منصة تواصل حديثة مع رسائل فورية، مشاركة ملفات، وميزات تعاونية."
    },
    tags: ["React", "Node.js", "WebSocket", "MongoDB"],
    link: "https://Murasala-Hub.app",
    github: "https://github.com/MohamedGamal-Ahmed",
    image: "/projects/murasala.jpg"
  }
];

export const TECH_STACK = [
  { name: "Python", icon: <Cpu className="w-5 h-5 text-yellow-500" /> },
  { name: "TypeScript", icon: <Terminal className="w-5 h-5 text-blue-500" /> },
  { name: "React", icon: <Code2 className="w-5 h-5 text-cyan-400" /> },
  { name: "Node.js", icon: <Globe className="w-5 h-5 text-green-500" /> },
  { name: "Tailwind", icon: <Palette className="w-5 h-5 text-cyan-400" /> },
  { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-blue-400" /> },
  { name: "Docker", icon: <Box className="w-5 h-5 text-blue-400" /> },
  { name: "AWS", icon: <Cloud className="w-5 h-5 text-orange-400" /> },
];

export const SOCIALS = [
  {
    name: { en: "GitHub", ar: "جيت هب" },
    icon: <Github className="w-5 h-5" />,
    link: "https://github.com/MohamedGamal-Ahmed",
    color: 'hover:text-white dark:hover:bg-slate-800 hover:bg-slate-200 border-zinc-200 dark:border-white/5'
  },
  {
    name: { en: "LinkedIn", ar: "لينكد إن" },
    icon: <Linkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/mohamed-gamal-357b10356/",
    color: 'hover:text-blue-500 dark:hover:bg-blue-900/20 hover:bg-blue-50 border-zinc-200 dark:border-white/5'
  },
  {
    name: { en: "Murasala Hub", ar: "مراسلة هب" },
    icon: <Globe className="w-5 h-5" />,
    link: "https://Murasala-Hub.app",
    color: 'hover:text-emerald-500 dark:hover:bg-emerald-900/20 hover:bg-emerald-50 border-zinc-200 dark:border-white/5'
  },
  {
    name: { en: "Email", ar: "راسلني" },
    icon: <Mail className="w-5 h-5" />,
    link: "mailto:mgamal.ahmed@outlook.com",
    color: 'hover:text-red-500 dark:hover:bg-red-900/20 hover:bg-red-50 border-zinc-200 dark:border-white/5'
  },
];
