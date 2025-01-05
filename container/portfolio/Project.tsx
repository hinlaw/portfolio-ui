'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A full-featured online store built with Next.js and Stripe',
        image: '/ecommerce-project.jpg',
    },
    {
        title: 'Social Media Dashboard',
        description: 'Real-time analytics dashboard using React and D3.js',
        image: '/dashboard-project.jpg',
    },
    {
        title: 'Task Management App',
        description: 'A Trello-like app built with React and Redux',
        image: '/task-management-project.jpg',
    },
]

export default function Projects() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
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
                <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
