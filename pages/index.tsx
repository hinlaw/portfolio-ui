import { motion } from 'framer-motion'
import useTranslation from "next-translate/useTranslation";
import Hero from "@/container/portfolio/Hero";
import Skills from "@/container/portfolio/Skills";
import Projects from "@/container/portfolio/Project";
import Testimonials from "@/container/portfolio/Testimonials";
import Contact from "@/container/portfolio/Contact";
import RootLayout from '@/container/Layouts/PortfolioLayout';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const Home = () => {
  const { t: tCommon } = useTranslation("common");

  return (
    <RootLayout>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen relative bg-white text-gray-800"
      >
        <div className="absolute top-0 right-0 p-4 z-50">
          <LanguageSwitcher />
        </div>
        {/* <Hero />
        <Testimonials />
        <Projects />
        <Skills />
        <Contact /> */}
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">Hello World</h1>
        </div>


      </motion.main>
    </RootLayout>
  )
}

export default Home;