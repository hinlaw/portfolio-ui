import { motion } from 'framer-motion'
import useTranslation from "next-translate/useTranslation";
import Hero from "@/container/portfolio/Hero";
import Skills from "@/container/portfolio/Skills";
import Projects from "@/container/portfolio/Project";
import Testimonials from "@/container/portfolio/Testimonials";
import Contact from "@/container/portfolio/Contact";
import Navbar from '@/components/Navbar';
import RootLayout from '@/container/Layouts/Layout';
import { ArrowRight } from 'lucide-react';
import VideoPlayer from '@/components/VideoPlayer/LoopPlayer';



const Home = () => {
  const { t: tCommon } = useTranslation("common");


  return (
    <><RootLayout>
      <Navbar />
      {/* Hero Section */}
      <div className='bg-[#001432]'>
        <div id="about" className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-20 pt-28 mx-auto max-w-6xl">
          {/* Left side content */}
          <div className="flex flex-col justify-center items-start max-w-2xl">
            <div className="text-white text-xl md:text-2xl mb-8">
              {tCommon("driven to learn ready to build eager to grow")}
            </div>

            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-purple-300 text-4xl md:text-6xl font-bold mb-8">
              {tCommon("turning ideas into interactive web experiences")}
            </div>

            <div className="flex">
              <div className="group bg-[#000920] text-white px-8 py-3 rounded-full flex items-center gap-2 border border-[#2D3139]">
                {tCommon("Get a close look at my work")}
                <button className="flex items-center bg-[#87CEEB] text-[#0E1117] px-4 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all ml-16">
                  {tCommon("view")}
                  <span className="bg-black p-2 ml-2 rounded-full">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right side video */}
          <div className="relative ml-0 lg:ml-12 mt-12 lg:mt-0">
            <VideoPlayer
              url="/aurora.mp4"
              width="400px"
              height="380px"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="min-h-screen px-4 md:px-20 py-20">
          <Contact />
        </div>
      </div>
    </RootLayout>
    </>
  )
}

export default Home;