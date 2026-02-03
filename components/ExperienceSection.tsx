
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
        <section className="space-y-8" id="experience">
            <div className="px-2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
                    {title}
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-2" />
            </div>

            <div className="relative">
                {/* Timeline line - Keeping it on the side for better layout in grid */}
                <div className={`absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent ${isRtl ? 'right-6' : 'left-6'}`} />

                <div className="space-y-8">
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`relative flex items-start gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}
                        >
                            {/* Timeline dot */}
                            <div className={`absolute ${isRtl ? 'right-4' : 'left-4'} z-10`}>
                                <motion.div
                                    className={`w-4 h-4 rounded-full border-4 ${exp.current
                                        ? 'bg-green-500 border-green-200 dark:border-green-900 animate-pulse'
                                        : 'bg-blue-500 border-blue-200 dark:border-blue-900'}`}
                                    whileHover={{ scale: 1.2 }}
                                />
                            </div>

                            {/* Content card - Fixed width and removed centering logic */}
                            <div className={`${isRtl ? 'mr-12' : 'ml-12'} flex-1`}>
                                <motion.div
                                    className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 hover:border-blue-500/40 hover:shadow-xl transition-all group"
                                    whileHover={{ y: -3 }}
                                >
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                                <Briefcase className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-black text-lg text-slate-900 dark:text-white">
                                                    {exp.title[lang]}
                                                </h3>
                                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                                    {exp.company[lang]}
                                                </p>
                                            </div>
                                        </div>
                                        {exp.current && (
                                            <span className="px-3 py-1 text-xs font-bold rounded-full bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20 animate-pulse">
                                                {lang === 'ar' ? 'حالي' : 'Current'}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                                        <Calendar className="w-4 h-4" />
                                        <span className="font-mono">{exp.period[lang]}</span>
                                    </div>

                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                        {exp.description[lang]}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-[10px] font-bold rounded-lg bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
