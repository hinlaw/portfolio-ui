'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
    {
        name: 'Jane Doe',
        role: 'CEO at TechCorp',
        comment: 'John is an exceptional frontend developer. His attention to detail and ability to create intuitive user interfaces significantly improved our product.',
        avatar: '/jane-doe-avatar.jpg'
    },
    {
        name: 'Mike Smith',
        role: 'Lead Developer at WebSolutions',
        comment: 'Working with John was a pleasure. He quickly grasps complex concepts and implements them flawlessly. A great addition to any development team.',
        avatar: '/mike-smith-avatar.jpg'
    }
]

export default function Testimonials() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('testimonials')
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
        <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">What Others Say</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl"
                        >
                            <div className="flex items-center mb-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-blue-300">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="italic">&ldquo;{testimonial.comment}&rdquo;</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

