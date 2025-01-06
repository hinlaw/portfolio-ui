'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Next.js', icon: '▲' },
    { name: 'GraphQL', icon: '🔺' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎭' },
    { name: 'Git', icon: '🔀' },
    { name: 'Responsive Design', icon: '📱' }
]

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false)
    const { t: tCommon } = useTranslation('common')

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('skills')
            if (element) {
                const rect = element.getBoundingClientRect()
                setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">{tCommon('skills')}</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 shadow-xl flex flex-col items-center justify-center hover:bg-opacity-20 transition-all duration-300"
                        >
                            <span className="text-4xl mb-2">{skill.icon}</span>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

