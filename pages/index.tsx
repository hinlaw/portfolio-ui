import { motion } from 'framer-motion'
import useTranslation from "next-translate/useTranslation";
import Hero from "@/container/portfolio/Hero";
import Skills from "@/container/portfolio/Skills";
import Projects from "@/container/portfolio/Project";
import Testimonials from "@/container/portfolio/Testimonials";
import Contact from "@/container/portfolio/Contact";
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import Navbar from '@/components/Navbar';
import RootLayout from '@/container/Layouts/Layout';

const Home = () => {
  const { t: tCommon } = useTranslation("common");

  return (
    <RootLayout>
      <Navbar />
      <div className="absolute top-0 right-0 p-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <div id="about" className="min-h-screen flex flex-col px-4 md:px-20 pt-28">
        <h1 className="text-[#87CEEB] text-4xl md:text-6xl font-bold mb-8">
          {tCommon("hire the best")}
        </h1>
        <div className="max-w-2xl">
          <p className="text-md md:text-lg text-gray-100 mb-4">{tCommon("frontend developer passionate about creating engaging web experiences")}</p>
          <p className="text-md md:text-xl text-gray-300 mb-8">{tCommon("turning designs into pixel-perfect, responsive websites")}</p>

          <div className="flex">
            <div className="group bg-[#000920] text-white px-8 py-3 rounded-full flex items-center gap-2 border border-[#2D3139]">
              {tCommon("Get started in a few minutes")}
              <button className="flex items-center bg-[#87CEEB] text-[#0E1117] px-4 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all ml-16">
                {tCommon("register")}
                <span className="bg-black p-2 ml-2 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33337 8H12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Skills Grid */}
      <div id="skills" className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-20 py-20">
        <div className="flex items-center space-x-4">
          <div className="text-[#87CEEB]">
            {/* You can add an icon here */}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">React</h3>
            <a href="#" className="text-[#87CEEB] hover:underline">More &gt;</a>
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

      {/* Contact Section */}
      <div id="contact" className="min-h-screen px-4 md:px-20 py-20">
        <Contact />
      </div>
    </RootLayout>
  )
}

export default Home;