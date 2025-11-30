"use client";

import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full text-4xl sm:text-5xl font-extrabold text-left px-10 sm:px-24 font-righteous"
      >
        Experience
      </motion.div>
      <BlurFade className=" w-full flex flex-col gap-10 sm:flex-row items-center justify-around px-10 sm:px-24 mt-16 overflow-hidden">
        <div className="flex flex-col sm:flex-col gap-10 justify- items-center">
          <div className="text-5xl font-bold text-left flex justify-center ">
            <Image
              src="/assets/ordrio.jpg"
              alt="Ordrio Technologies"
              width={200}
              height={200}
              className=" burn-effect"
            />
          </div>
        </div>
        <div className="flex items-start justify-center flex-col gap-3">
          <div className="flex flex-col gap-2 justify-between font-bold">
            <div className=" text-md sm:text-2xl dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Ordrio Technologies Private Limited
            </div>
            <div className=" flex flex-row gap-6 text-xs sm:text-2xl dark:text-zinc-400 text-zinc-600 leading-relaxed">
              <p>Junior Software Engineer</p>
              <p> Aug 2023 - Present</p>
            </div>
          </div>
          <div className="flex text-sm sm:text-base justify-start items-start dark:text-zinc-400 text-zinc-600 leading-relaxed">
            • Collaborated with a cross-functional team to develop and maintain
            web applications using React.js. <br /> • Participated in the entire
            software development lifecycle, from concept and design to testing
            and deployment. <br /> • Implemented responsive and user-friendly UI
            components to enhance the overall user experience.
          </div>
          <div className="w-[290px] sm:w-[1000px]">
            {" "}
            <VelocityScroll
              text="ReactJs • JavaScript • Redux • Next.js • Node.js • HTML • CSS"
              default_velocity={2}
              className=" font-display text-center text-sm font-bold tracking-[-0.02em] text-zinc-600  drop-shadow-sm dark:text-zinc-400 md:text-2xl md:leading-[2.5rem]"
            />
          </div>
        </div>
      </BlurFade>

      <BlurFade className=" w-full flex flex-col gap-10 sm:flex-row items-center justify-around px-10 sm:px-24 mt-16 overflow-hidden">
        <div className="flex flex-col sm:flex-col gap-10 justify- items-center">
          <div className="text-5xl font-bold text-left flex justify-center ">
            <Image
              src="/assets/chegg.jpg"
              alt="Chegg"
              width={200}
              height={200}
              className=" burn-effect"
            />
          </div>
        </div>
        <div className="flex items-start justify-center flex-col gap-3">
          <div className=" flex flex-col gap-2 justify-between font-bold">
            <div className=" text-md sm:text-2xl dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Chegg - Freelancing
            </div>
            <div className=" flex flex-row gap-6 text-xs sm:text-2xl dark:text-zinc-400 text-zinc-600 leading-relaxed">
              <p> Subject matter expert</p>
              <p> Jan 2023 - April 2023</p>
            </div>
          </div>
          <div className="flex text-sm sm:text-base justify-start items-start dark:text-zinc-400 text-zinc-600 leading-relaxed">
            • Maintained high academic standards by delivering precise and
            accurate solutions, fostering critical thinking skills. <br /> •
            Facilitated deeper understanding by breaking down advanced computer
            science problems into manageable steps for students. <br /> •
            Provided expert support, effectively communicated complex concepts,
            and ensured timely assistance in computer science topics.
          </div>
          <div className="w-[290px] sm:w-[1000px]">
            {" "}
            <VelocityScroll
              text="Object-Oriented Programming • Operating Systems • DBMS • Computer Networks • Web Development • Software Engineering • Problem-Solving Skills"
              default_velocity={2}
              className=" font-display text-center text-sm font-bold tracking-[-0.02em] text-zinc-600  drop-shadow-sm dark:text-zinc-400 md:text-2xl md:leading-[2.5rem]"
            />
          </div>
        </div>
      </BlurFade>
      <BlurFade className=" w-full flex flex-col gap-10 sm:flex-row items-center justify-around px-10 sm:px-24 mt-16 overflow-hidden">
        <div className="flex flex-col sm:flex-col gap-10 justify- items-center">
          <div className="text-5xl font-bold text-left flex justify-center ">
            <Image
              src="/assets/vitvara.png"
              alt="VITVARA Technologies"
              width={200}
              height={200}
              className=" burn-effect"
            />
          </div>
        </div>
        <div className="flex items-start justify-center flex-col gap-3">
          <div className=" flex flex-col gap-2 justify-between font-bold">
            <div className=" text-md sm:text-2xl dark:text-zinc-400 text-zinc-600 leading-relaxed">
              VITVARA Technologies, Mangalore
            </div>
            <div className=" flex flex-row gap-6 text-xs sm:text-2xl dark:text-zinc-400 text-zinc-600 leading-relaxed">
              <p> Internship Trainee</p>
              <p> Sep 2022 - Jan 2023</p>
            </div>
          </div>
          <div className="flex text-sm sm:text-base justify-start items-start dark:text-zinc-400 text-zinc-600 leading-relaxed">
            • Worked as a Web and App Development Intern, contributing to the
            design and implementation of user interfaces and backend
            integrations. <br /> • Gained hands-on experience in applying the
            core principles of software development, version control, and
            collaborative workflows.
          </div>
          <div className="w-[290px] sm:w-[1000px]">
            {" "}
            <VelocityScroll
              text="Web Development • App Development • UI/UX Design • Backend Integration • Version Control • Software Development"
              default_velocity={2}
              className=" font-display text-center text-sm font-bold tracking-[-0.02em] text-zinc-600  drop-shadow-sm dark:text-zinc-400 md:text-2xl md:leading-[2.5rem]"
            />
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
