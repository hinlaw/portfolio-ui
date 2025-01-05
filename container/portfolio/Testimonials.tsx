import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        name: 'Nelson Lai',
        role: 'Founder of Metadiv',
        comment: 'His dedication and proactive approach are truly inspiring. Always ready to take on challenges, he consistently goes above and beyond to ensure tasks are completed on time and with exceptional quality. His positive attitude uplifts the entire team.',
        avatar: '/nelson.png'
    },
    {
        id: 2,
        name: 'Mike Smith',
        role: 'Lead Developer at WebSolutions',
        comment: 'He has an incredible ability to learn quickly and adapt seamlessly to new tasks and technologies. Whether tackling complex problems or refining details, his analytical mindset and creativity consistently lead to innovative and effective solutions.',
        avatar: '/mike-smith-avatar.jpg'
    },
    {
        id: 3,
        name: 'Sarah Johnson',
        role: 'UX Designer at DesignHub',
        comment: 'His technical skills are outstanding, but what truly sets him apart is his ability to combine technical expertise with a deep understanding of user needs. He delivers work that is not only functional but intuitive and user-centered, showcasing a rare blend of capability and empathy.',
        avatar: '/sarah-johnson-avatar.jpg'
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 15000)

        return () => clearInterval(timer)
    }, [])

    const handlePrev = () => {
        setDirection(-1)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    const handleNext = () => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const variants = {
        enter: (direction: number) => ({
            y: 100,
            opacity: 0
        }),
        center: {
            y: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            y: -100,
            opacity: 0
        })
    }

    return (
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">What Others Say</h2>
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                y: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-xl"
                        >
                            <div className="flex flex-col md:flex-row items-center mb-6">
                                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6">
                                    <Image
                                        src={testimonials[currentIndex].avatar}
                                        alt={testimonials[currentIndex].name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-semibold">{testimonials[currentIndex].name}</h3>
                                    <p className="text-blue-300">{testimonials[currentIndex].role}</p>
                                </div>
                            </div>
                            <p className="text-lg italic text-center md:text-left">
                                &ldquo;{testimonials[currentIndex].comment}&rdquo;
                            </p>
                        </motion.div>
                    </AnimatePresence>
                    <div className="absolute top-1/2 -translate-y-1/2 -left-0 -right-0 flex justify-between">
                        <button
                            onClick={handlePrev}
                            className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none transition-colors duration-300"
                            aria-label="Previous testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none transition-colors duration-300"
                            aria-label="Next testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

