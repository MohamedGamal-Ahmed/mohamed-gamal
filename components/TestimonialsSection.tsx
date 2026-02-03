
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Language } from '../types';

interface TestimonialsSectionProps {
    lang: Language;
    title: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isRtl = lang === 'ar';

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const testimonial = TESTIMONIALS[currentIndex];

    return (
        <section className="mt-16 space-y-8" id="testimonials">
            <div className="px-2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
                    {title}
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2" />
            </div>

            <div className="relative max-w-4xl mx-auto">
                <motion.div
                    className="rounded-[2.5rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-8 md:p-12 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 opacity-10">
                        <Quote className="w-24 h-24 text-blue-500" />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: isRtl ? 30 : -30 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10"
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-6">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            {/* Content */}
                            <blockquote className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                                "{testimonial.content[lang]}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name[lang]}
                                    className="w-14 h-14 rounded-full border-2 border-blue-500"
                                />
                                <div>
                                    <h4 className="font-black text-slate-900 dark:text-white">
                                        {testimonial.name[lang]}
                                    </h4>
                                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                        {testimonial.role[lang]}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className={`flex items-center gap-3 mt-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <button
                            onClick={isRtl ? nextTestimonial : prevTestimonial}
                            className="p-3 rounded-xl btn-secondary hover:scale-105 transition-transform"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === currentIndex
                                            ? 'bg-blue-500 w-8'
                                            : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={isRtl ? prevTestimonial : nextTestimonial}
                            className="p-3 rounded-xl btn-secondary hover:scale-105 transition-transform"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
