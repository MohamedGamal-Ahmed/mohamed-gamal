
export type Language = 'en' | 'ar';

export interface Project {
  id: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  tags: string[];
  link: string;
  github: string;
  image?: string;
}

export interface Translation {
  name: string;
  role: string;
  bio: string;
  available: string;
  techStackTitle: string;
  connectTitle: string;
  location: string;
  localTime: string;
  projectsTitle: string;
  emailLabel: string;
  phoneLabel: string;
  skillsTitle: string;
  experienceTitle: string;
  testimonialsTitle: string;
  contactTitle: string;
  contactSubtitle: string;
  sendMessage: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  sending: string;
  messageSent: string;
  messageError: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: Record<Language, string>;
  skills: Skill[];
}

export interface Experience {
  id: number;
  title: Record<Language, string>;
  company: Record<Language, string>;
  period: Record<Language, string>;
  description: Record<Language, string>;
  tags: string[];
  current?: boolean;
}

export interface Testimonial {
  id: number;
  name: Record<Language, string>;
  role: Record<Language, string>;
  content: Record<Language, string>;
  avatar: string;
  rating: number;
}
