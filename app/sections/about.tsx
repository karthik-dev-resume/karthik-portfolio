"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import BlurFade from "@/components/magicui/blur-fade";
import toast, { Toaster } from "react-hot-toast";

export default function About() {
  const resumeUrl =
    "https://drive.google.com/file/d/1ELLZnYtLMGxoSjXQF3QbpRIk8QlCpuHD/view?usp=sharing";

  const handleDownloadClick = () => {
    // Create a link element and trigger a download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf"; // Provide a default name for the downloaded file
    document.body.appendChild(link); // Append the link to the body
    link.click();
    document.body.removeChild(link); // Remove the link from the body

    toast.success("Download started!");
  };

  const handleViewClick = () => {
    // Open the resume URL in a new tab
    window.open(resumeUrl, "_blank");
  };

  return (
    <section id="about" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full text-3xl sm:text-4xl lg:text-5xl font-extrabold text-left px-4 sm:px-10 lg:px-24 font-righteous"
      >
        About Me
      </motion.div>
      <BlurFade className="flex flex-col gap-8 sm:gap-10 lg:flex-row items-start justify-start px-4 sm:px-10 lg:px-24 overflow-hidden">
        <div className="w-full lg:flex-1 flex flex-col gap-4 justify-start items-start mt-4 sm:mt-6">
          <div className="w-full text-base sm:text-lg text-left dark:text-zinc-400 text-zinc-600 leading-relaxed font-medium">
            Hi, I&apos;m Karthik D Shetty
          </div>
          <div className="text-sm sm:text-base text-justify dark:text-zinc-400 text-zinc-600 leading-relaxed">
            I&apos;m a results-driven Software Engineer with over two years of
            frontend development experience, actively seeking full-time
            opportunities in Frontend Engineering. With a strong foundation in
            Computer Science and Engineering, I specialize in building
            responsive, high-performance web interfaces using React.js, Next.js,
            JavaScript, TypeScript, HTML, and CSS.
            <br />
            <br />
            In my current role at Ordrio Technologies Private Limited, I
            collaborate with cross-functional teams to design, develop, and
            optimize modern web applications. I focus on creating user-friendly
            UI components, improving performance, and ensuring seamless user
            experiences across devices. My key projects include Ordrio SaaS
            Panel, Cree8 Construction, Aura, Archicraft, Tastry, and Grocbay.
            <br />
            <br />
            Beyond my technical expertise, I bring strong leadership and
            communication skills. I have led a team to a national-level paper
            presentation award and am known for my punctuality, honesty, and
            efficiency. Fluent in English, Hindi, Kannada, and Tulu, I&apos;m
            excited to contribute my skills to a dynamic frontend development
            role where I can continue building impactful, high-quality web
            applications.
          </div>
        </div>
        <div className="w-full lg:w-auto flex items-center justify-center flex-col mt-6 sm:mt-10 lg:mt-6">
          <div className="w-full max-w-xs sm:max-w-sm lg:w-96 h-auto aspect-square relative">
            <Image
              src="/assets/photo.png"
              alt="Karthik's Photo"
              width={384}
              height={384}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="w-full max-w-xs sm:max-w-sm lg:w-96 border border-zinc-200 dark:border-zinc-700 p-3 sm:p-4 rounded-md flex flex-row justify-between items-center mt-4 gap-4">
            <button
              onClick={handleViewClick}
              className="flex items-center gap-2 text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <span>View Resume</span>
              <FaExternalLinkSquareAlt size={16} />
            </button>
            <button
              onClick={handleDownloadClick}
              className="flex items-center gap-2 text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"
            >
              <FaDownload size={18} />
            </button>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
