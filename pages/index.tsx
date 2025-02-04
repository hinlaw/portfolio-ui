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
      <div className="absolute top-0 right-0 p-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col px-4 md:px-20 py-20">
        <h1 className="text-[#b7b5ff] text-4xl md:text-6xl font-bold mb-8">
          {tCommon("hire the best")}
        </h1>
        <div className="max-w-2xl">
          <p className="text-md md:text-lg text-gray-100 mb-4">{tCommon("frontend developer passionate about creating engaging web experiences")}</p>
          <p className="text-md md:text-xl text-gray-300 mb-8">{tCommon("turning designs into pixel-perfect, responsive websites")}</p>

          <button className="bg-[#b7b5ff] text-[#15202B] px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all">
            {tCommon("view my work")}
          </button>
        </div>
      </div>


      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-20 py-20">
        <div className="flex items-center space-x-4">
          <div className="text-[#b7b5ff]">
            {/* You can add an icon here */}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">React</h3>
            <a href="#" className="text-[#b7b5ff] hover:underline">More &gt;</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-[#b7b5ff]">
            {/* You can add an icon here */}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">TypeScript</h3>
            <a href="#" className="text-[#b7b5ff] hover:underline">More &gt;</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-[#b7b5ff]">
            {/* You can add an icon here */}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Tailwind CSS</h3>
            <a href="#" className="text-[#b7b5ff] hover:underline">More &gt;</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-[#b7b5ff]">
            {/* You can add an icon here */}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Next.js</h3>
            <a href="#" className="text-[#b7b5ff] hover:underline">More &gt;</a>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default Home;