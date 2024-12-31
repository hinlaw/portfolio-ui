import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
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
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Contact Me</h2>
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
                            placeholder="Your Name"
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 h-32 resize-none"
                            required
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    )
}

