import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'John Doe - Frontend Developer Portfolio',
    description: 'Showcasing my skills and projects as a frontend developer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={poppins.className}>{children}</body>
        </html>
    )
}

