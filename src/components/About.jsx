import { motion } from "framer-motion";
import cv from "../assets/cv.pdf";
export default function About() {
  return (
    <motion.section
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hey, I&apos;m Shahzaib <span className="wave text-3xl">👋</span>
      </h1>

      <p className="text-[18px] md:text-xl text-gray-300 leading-relaxed mb-6">
        I&apos;m a full stack developer who lives and breathes the{" "}
        <span className="text-white font-semibold">MERN stack</span> — and
        lately, I&apos;ve been diving deep into{" "}
        <span className="text-white font-semibold">AI-powered development</span>,
        building systems that actually think alongside users.
      </p>

      <p className="text-[18px] md:text-xl text-gray-300 leading-relaxed mb-8">
        I enjoy turning messy problems into clean, scalable solutions.
        From real-time features to AI integrations — I care just as much about
        what&apos;s under the hood as what the user sees on screen.
      </p>

      <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
        <a
          href={cv}
          download="Shahzaib_Khan_CV.pdf"
          className="inline-flex items-center gap-2 bg-[#ddcecd] hover:bg-white text-[#26081c] font-semibold px-4 py-3.5 rounded-full shadow-lg shadow-purple-950/30 transition-all duration-300 hover:scale-102 active:scale-95 cursor-pointer text-sm md:text-base"
        >
          <i className="fa-solid fa-file-arrow-down text-lg"></i>
          Download CV
        </a>
      </div>
    </motion.section>
  );
}