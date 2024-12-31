import Head from "next/head";
import Image from "next/image";
import { motion } from 'framer-motion'
import { Inter } from "next/font/google";
import useTranslation from "next-translate/useTranslation";
import { Button } from "@/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import Hero from "@/container/portfolio/Hero";
import Skills from "@/container/portfolio/Skills";
import Projects from "@/container/portfolio/Project";
import Testimonials from "@/container/portfolio/Testimonials";
import Contact from "@/container/portfolio/Contact";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const { t: tCommon } = useTranslation("common");
  const { theme, setTheme, mounted } = useTheme();

  const themeButton = mounted ? (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  ) : null;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-800"
    >
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </motion.main>
  )
}

export default Home;