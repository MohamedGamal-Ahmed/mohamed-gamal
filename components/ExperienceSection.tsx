
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../constants';
import { Language } from '../types';

interface ExperienceSectionProps {
    lang: Language;
    title: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang, title }) => {
    const isRtl = lang === 'ar';

    return (
        <section className="space-y-16" id="experience">
            <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
                    {title}
                </h2>
                <div className="h-2 w-32 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
            </div>

            <div className="relative max-w-5xl mx-auto px-4">
                {/* Vertical Line */}
                <div className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-transparent left-8 md:left-1/2 -ml-0.5 opacity-30`} />

                <div className="space-y-12">
                    {EXPERIENCES.map((exp, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Time marker dot */}
                                <div className="absolute left-8 md:left-1/2 -ml-3 z-10 hidden md:block">
                                    <motion.div
                                        className={`w-6 h-6 rounded-full border-4 shadow-xl ${exp.current
                                            ? 'bg-green-500 border-green-200 dark:border-green-900 animate-pulse'
                                            : 'bg-blue-600 border-blue-200 dark:border-blue-900'}`}
                                        whileHover={{ scale: 1.5, rotate: 90 }}
                                    />
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-[45%] ml-12 md:ml-0">
                                    <motion.div
                                        className="relative p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/40 hover:shadow-2xl transition-all group"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                                    <Briefcase className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-black text-xl text-slate-900 dark:text-white">
                                                        {exp.title[lang]}
                                                    </h3>
                                                    <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                                                        {exp.company[lang]}
                                                    </p>
                                                </div>
                                            </div>
                                            {exp.current && (
                                                <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full bg-green-500/10 text-green-600 border border-green-500/20">
                                                    {lang === 'ar' ? 'حالي' : 'Current'}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-6 font-bold">
                                            <Calendar className="w-4 h-4" />
                                            <span className="tracking-wide">{exp.period[lang]}</span>
                                        </div>

                                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                                            {exp.description[lang]}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-[9px] font-black uppercase tracking-tighter rounded-lg bg-slate-100 dark:bg-black/40 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Connector Arrow for desktop */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-inherit border-inherit rotate-45 ${isEven ? '-right-2 border-r border-t' : '-left-2 border-l border-b'}`} />
                                    </motion.div>
                                </div>

                                {/* Empty Side for desktop (Spacing) */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
