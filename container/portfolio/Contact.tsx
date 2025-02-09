import { useState } from 'react'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export default function Contact() {
    const { t: tCommon } = useTranslation('common')
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formState)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#001432]">
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            "radial-gradient(circle at 0% 0%, rgba(0,0,255,0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 100% 100%, rgba(128,0,128,0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 0% 100%, rgba(0,0,255,0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 100% 0%, rgba(128,0,128,0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 0% 0%, rgba(0,0,255,0.1) 0%, transparent 50%)",
                        ]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
            <div className="container mx-auto px-4 relative">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">{tCommon('contact me')}</h2>
                <motion.form
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-6">
                        <input
                            type="text"
                            name="name"
                            placeholder={tCommon('your name')}
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            name="email"
                            placeholder={tCommon('your email')}
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            name="message"
                            placeholder={tCommon('your message')}
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 h-32 resize-none"
                            required
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {tCommon('send message')}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    )
}
