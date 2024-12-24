import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import useTranslation from "next-translate/useTranslation";
import { Button } from "@/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const { t: tCommon } = useTranslation("common");
  const { theme, setTheme } = useTheme();

  return (
    <main className={`min-h-screen ${inter.className}`}>
      <Head>
        <title>Dexter Law - Frontend Developer</title>
        <meta name="description" content="Frontend developer portfolio showcasing UI/UX skills" />
      </Head>

      {/* Theme Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center animate-fade-up">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-8">
              <Image
                src="/IMG_001.jpeg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">Dexter Law</h1>
            <p className="text-xl text-indigo-200 mb-8">Frontend Developer</p>
            <div className="flex gap-4">
              <Button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                Contact Me
              </Button>
              <Button className="btn btn-outline" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            <p className="mb-6">
              I'm a passionate junior frontend developer with a keen eye for design and user experience.
              I love creating beautiful, responsive, and accessible web interfaces using modern technologies.
              Currently focusing on React and Next.js to build engaging user experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900 rounded-lg hover:shadow-md transition animate-fade-up">
                <h3 className="font-bold text-indigo-900 dark:text-indigo-100">UI Development</h3>
                <p>HTML5, CSS3, Tailwind</p>
              </div>
              <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900 rounded-lg hover:shadow-md transition animate-fade-up animate-delay-100">
                <h3 className="font-bold text-indigo-900 dark:text-indigo-100">Frontend</h3>
                <p>React, Next.js</p>
              </div>
              <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900 rounded-lg hover:shadow-md transition animate-fade-up animate-delay-200">
                <h3 className="font-bold text-indigo-900 dark:text-indigo-100">Tools</h3>
                <p>Git, Figma, VS Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg animate-fade-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="/window.svg"
                    alt="Metadiv"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Frontend Developer</h3>
                  <p className="text-gray-600 dark:text-gray-300">Metadiv</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Worked on developing modern web applications using React and Next.js.
                Collaborated with the design team to implement responsive and user-friendly interfaces.
                Contributed to improving the overall user experience and performance of the applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition animate-fade-up">
                <div className="relative h-48">
                  <Image
                    src={`/project-${project}.jpg`}
                    alt={`UI Project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">UI Project {project}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A responsive web interface built with React and Tailwind CSS, focusing on user experience and modern design principles.
                  </p>
                  <div className="flex gap-2">
                    <a href="#" className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300">Live Demo</a>
                    <span className="text-gray-300">|</span>
                    <a href="#" className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300">Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-indigo-300 transition">LinkedIn</a>
            <a href="#" className="hover:text-indigo-300 transition">GitHub</a>
            <a href="#" className="hover:text-indigo-300 transition">Dribbble</a>
          </div>
          <p className="text-indigo-200">© 2024 Jane Smith. Crafted with ❤️</p>
        </div>
      </footer>
    </main>
  );
}

export default Home;