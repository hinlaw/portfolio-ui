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
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
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

