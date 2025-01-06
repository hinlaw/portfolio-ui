import { motion } from 'framer-motion'
import { Inter } from "next/font/google";
import useTranslation from "next-translate/useTranslation";
import Hero from "@/container/portfolio/Hero";
import Skills from "@/container/portfolio/Skills";
import Projects from "@/container/portfolio/Project";
import Testimonials from "@/container/portfolio/Testimonials";
import Contact from "@/container/portfolio/Contact";
import { useState, useEffect } from 'react';
import { ModeToggle } from '@/components/ThemeProvider/ModeToggle';
import RootLayout from '@/container/Layouts/PortfolioLayout';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const { t: tCommon } = useTranslation("common");

  return (
    <RootLayout>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      >
        <div className="fixed flex justify-end p-4 top-0 right-0 z-50">
          <LanguageSwitcher />
        </div>
        <Hero />
        <Testimonials />
        <Projects />
        <Skills />
        <Contact />
      </motion.main>
    </RootLayout>
  )
}

export default Home;