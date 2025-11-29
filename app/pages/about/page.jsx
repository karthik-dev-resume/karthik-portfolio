"use client";

import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import Photo from "../../Assets/photo.png";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import BlurFade from "../../../components/magicui/blur-fade";
import toast, { Toaster } from "react-hot-toast";

export default function About() {
  const resumeUrl =
    "https://drive.google.com/file/d/1wsJ7JetWX7LDA0wN-WAHgFg7K_9GPduj/view?usp=sharing";

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
    <>
      <div className="w-full text-4xl sm:text-5xl font-extrabold text-left px-10 sm:px-24 font-righteous">
        About Me
      </div>
      <BlurFade className="flex flex-col gap-10 sm:flex-row items-start justify-start px-10 sm:px-24 overflow-hidden">
        <div className="w-full flex flex-col sm:flex-col gap-4 justify-start items-start mt-6">
          <div className="w-full text-sm sm:text-base text-left dark:text-zinc-400 text-zinc-600 leading-relaxed">
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
        <div className="flex items-center justify-center flex-col mt-10">
          <div className="w-96 h-96">
            <Image src={Photo} alt="Karthik's Photo" className="rounded-lg" />
          </div>
          <div className="w-full border p-4 rounded-md flex-row flex justify-between">
            <div className="flex justify-between gap-2 items-center">
              View Resume <FaExternalLinkSquareAlt onClick={handleViewClick} />
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleDownloadClick}
            >
              <FaDownload />
            </div>
          </div>
        </div>
      </BlurFade>
    </>
  );
}
