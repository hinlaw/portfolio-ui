import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import Head from 'next/head'

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Dexter Law - Frontend Developer Portfolio',
    description: 'Showcasing my skills and projects as a frontend developer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Head>
                <title>Dexter Law - Frontend Developer</title>
                <meta name="description" content={metadata.description || ''} />
                <link rel="stylesheet" />
            </Head>
            <div className={`${poppins.className}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                >
                    {children}
                </ThemeProvider>
            </div>
        </>
    )
}
