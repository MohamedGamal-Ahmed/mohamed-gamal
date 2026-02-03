
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import { Language } from '../types';

interface SkillsSectionProps {
    lang: Language;
    title: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ lang, title }) => {
    return (
        <section className="mt-16 space-y-8" id="skills">
            <div className="px-2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
                    {title}
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((category, catIndex) => (
                    <motion.div
                        key={catIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 hover:border-blue-500/30 transition-all"
                    >
                        <h3 className="text-lg font-black mb-6 text-blue-600 dark:text-blue-400">
                            {category.title[lang]}
                        </h3>
                        <div className="space-y-5">
                            {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skillIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                                {skill.icon}
                                            </div>
                                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: (catIndex * 0.1) + (skillIndex * 0.1), ease: "easeOut" }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
