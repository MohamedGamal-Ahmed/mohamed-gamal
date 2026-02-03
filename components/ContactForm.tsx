
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Language, Translation } from '../types';

interface ContactFormProps {
    lang: Language;
    t: Translation;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactForm: React.FC<ContactFormProps> = ({ lang, t }) => {
    const isRtl = lang === 'ar';
    const [status, setStatus] = useState<FormStatus>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Formspree integration
            const response = await fetch('https://formspree.io/f/mqeljoql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const inputClasses = "w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all font-medium";

    return (
        <section className="mt-16 space-y-8" id="contact">
            <div className="px-2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
                    {t.contactTitle}
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mt-2" />
                <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 font-medium">
                    {t.contactSubtitle}
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
            >
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t.namePlaceholder}
                                required
                                className={inputClasses}
                                dir={isRtl ? 'rtl' : 'ltr'}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                        >
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t.emailPlaceholder}
                                required
                                className={inputClasses}
                                dir="ltr"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder={t.subjectPlaceholder}
                            required
                            className={inputClasses}
                            dir={isRtl ? 'rtl' : 'ltr'}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                    >
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t.messagePlaceholder}
                            required
                            rows={6}
                            className={`${inputClasses} resize-none`}
                            dir={isRtl ? 'rtl' : 'ltr'}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`w-full py-4 px-8 rounded-2xl font-black text-white transition-all flex items-center justify-center gap-3 ${status === 'success'
                                ? 'bg-green-500 hover:bg-green-600'
                                : status === 'error'
                                    ? 'bg-red-500 hover:bg-red-600'
                                    : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 active:scale-[0.98]'
                                } disabled:opacity-70 disabled:cursor-not-allowed`}
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    {t.sending}
                                </>
                            ) : status === 'success' ? (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    {t.messageSent}
                                </>
                            ) : status === 'error' ? (
                                <>
                                    <AlertCircle className="w-5 h-5" />
                                    {t.messageError}
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    {t.sendMessage}
                                </>
                            )}
                        </button>
                    </motion.div>
                </form>

                {/* Alternative contact methods */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 text-center"
                >
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {lang === 'ar'
                            ? 'أو تواصل معي مباشرة عبر '
                            : 'Or reach me directly at '}
                        <a
                            href="mailto:mgamal.ahmed@outlook.com"
                            className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                        >
                            mgamal.ahmed@outlook.com
                        </a>
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactForm;
