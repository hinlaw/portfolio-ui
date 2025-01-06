import { useState, useEffect } from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export default function Hero() {
    const { t: tCommon } = useTranslation('common')
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden dark:bg-gray-900">
            <Image
                src="/IMG_6962.jpg"
                alt="Hero background"
                layout="fill"
                objectFit="cover"
                className="z-0"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className={`relative z-20 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-2xl font-bold mb-8 text-white">
                    <span className="inline-block motion-translate-y-loop-50/mirror motion-delay-100 motion-duration-2000">F</span>
                    <span className="inline-block motion-translate-y-loop-50/mirror motion-delay-200 motion-duration-2000">r</span>
                    <span className="inline-block motion-translate-y-loop-50/mirror motion-delay-300 motion-duration-2000">o</span>
                    <span className="inline-block motion-translate-y-loop-50/mirror motion-delay-400 motion-duration-2000">n</span>
                    <span className="inline-block motion-translate-y-loop-50/mirror motion-delay-500 motion-duration-2000">t</span>
                    <span className="inline-block motion-translate-y-loop-50/mirror motion-delay-600 motion-duration-2000">E</span>
                    <span className="inline-block motion-translate-y-loop-50/mirror motion-delay-700 motion-duration-2000">n</span>
                    <span className="inline-block motion-translate-y-loop-50/mirror motion-delay-800 motion-duration-2000">d</span>
                </h1>
                <h2 className="text-4xl mb-8 animate-pulse bg-gradient-to-br from-blue-600 to-purple-200 bg-clip-text text-transparent font-bold">
                    Dexter Law
                </h2>
                <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
                    Crafting beautiful, responsive, and user-friendly web experiences with cutting-edge technologies.
                </p>
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl inline-block">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-300">{tCommon('worked for')}</h3>
                    <div className="flex items-center justify-center">
                        <Image src="/METADIV-LOGO-OP-01.png" alt="Metadiv Technology Limited" width={100} height={100} />
                    </div>
                    <p className="text-gray-300">
                        <span className="text-purple-300 font-semibold">Junior Frontend Developer</span> at Metadiv Technology Limited<br />
                        June 2023 - Present <br />
                        Developing responsive web applications using React and Next.js, collaborating with the design team to implement pixel-perfect UIs, and optimizing website performance.
                    </p>
                </div>
            </div>
        </section>
    )
}

