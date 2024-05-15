"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLottie } from "lottie-react";
import skillsAnimation from "/public/skillsAnimation.json";
import Footer from "../components/footer";
import Link from "next/link";

const Homepage = () => {
  //skills
  const skillsList = [
    { title: "HTML", img: "/PersonalPortfolio/html.png" },
    { title: "CSS", img: "/PersonalPortfolio/css.png" },
    { title: "JavaScript", img: "/PersonalPortfolio/javacsript.png" },
    { title: "Java", img: "/PersonalPortfolio/java.png" },
    { title: "NodeJs", img: "/PersonalPortfolio/node.png" },
    { title: "ReactJs", img: "/PersonalPortfolio/react.png" },
    { title: "ExpressJs", img: "/PersonalPortfolio/express.png" },
    { title: "NextJs", img: "/PersonalPortfolio/next.png" },
    { title: "SQL", img: "/PersonalPortfolio/sql.png" },
    { title: "MongoDb", img: "/PersonalPortfolio/mongo.png" },
    { title: "Sass", img: "/PersonalPortfolio/sass.png" },
    { title: "Github", img: "/PersonalPortfolio/github.png" },
    { title: "WordPress", img: "/PersonalPortfolio/wordpress.png" },
    { title: "Figma", img: "/PersonalPortfolio/figma.png" },
  ];

  const skillRef = useRef();
  const experienceRef = useRef();
  const contactRef = useRef();

  const isSkillRefInView = useInView(skillRef, { margin: "-200px" });
  const isExperienceRefInView = useInView(experienceRef, { margin: "-200px" });
  const isContactRefInView = useInView(contactRef, { margin: "-200px" });

  //lottie
  const options = {
    animationData: skillsAnimation,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* hero container */}
      <div className="h-full flex flex-col items-stretch gap-8 md:gap-4 lg:gap-0 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-11">
        {/* image */}
        <div className="imgWrap h-1/2 min-h-[min(200px,100vw)] mb-11 lg:m-0 lg:h-full lg:w-1/2 relative flex items-center justify-center">
          <Image
            // src="/PersonalPortfolio/profile.png"
            src="/profile.png"
            alt=""
            fill
            className="heroImg object-contain lg:p-11 lg:max-h-[450px] lg:inset-auto"
            style={{ inset: "auto" }}
          />
        </div>
        {/* text */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center lg:items-start justify-center">
          {/* hi */}
          <p className="md:text-xl text-[#eeeeee] mb-[-20px]">
            Hey there! <span className="text-[#01aec9]">Myself</span>
          </p>
          {/* title */}
          <h1 className="name text-4xl text-[#eeeeee] text-center md:text-left font-bolo font-bold mt-[-10px] md:text-6xl ">
            ARVINDER SINGH
          </h1>
          {/* desc */}
          <p className="text-center lg:text-left md:text-xl text-[#b1b1b1] mb-2 mt-0">
            <span className="text-[#01aec9] font-bold">
              Full-Stack Web Developer
            </span>{" "}
            with a <span className="text-white"> Frontend Focus</span>.
            Unleashing Creativity, One Click at a Time!
          </p>
          {/* buttons */}
          <div className="w-full flex gap-4 justify-center lg:justify-start pb-11">
            <Link href="/portfolio">
              <button className="btn p-4 rounded-lg ring-0 font-bold bg-[#01aec9] text-[#000000]">
                View My Work
              </button>
            </Link>
            <Link href="#contact">
              <button className="emptyBtn p-4 rounded-lg ring-1 text-[#76ABAE] ring-[#01aec9]">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* skills */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* left hand content */}
        <div className=" w-full lg:w-1/2">
          {/* SKILLS CONTAINER */}
          <div
            className="min-h-screen flex flex-col gap-12 justify-center"
            ref={skillRef}
          >
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 1, ease: "easeOut" }}
              className="font-bold text-2xl text-white"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-200%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-2 md:gap-4 flex-wrap justify-between lg:justify-start"
            >
              {skillsList.map((skill) => {
                return (
                  <div
                    className="skills rounded p-2 text-sm items-center flex justify-center text-center cursor-pointer bg-black text-[#9b9b9b] hover:text-white hover:bg-[#009eb6]"
                    key={skill.title}
                  >
                    <div className="containerImg h-[25px] w-[25px] lg:h-[50px] lg:w-[50px] p-5 relative">
                      <Image
                        src={skill.img}
                        alt=""
                        fill
                        className="object-contain top-0 left-0"
                      />
                    </div>
                    <p className="p-2 font-bold lg:text-xl">{skill.title}</p>
                  </div>
                );
              })}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 0.5, y: "10px" }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "backInOut",
                delay: 3,
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#ffffff" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
        </div>
        {/* right hand model */}
        <div className="hidden lg:w-1/2 lg:flex items-center">{View}</div>
      </div>
      {/* EXPERIENCE CONTAINER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="experienceContainer relative overflow-x-hidden"
      >
        <Image
          src="/PersonalPortfolio/road.jpg"
          fill
          alt="bg"
          className="object-cover experienceBg"
        />

        <div
          className="experienceContainer max-h-fit flex flex-col lg:flex-row  gap-12 justify-center p-4 lg:p-24 pb-4 lg:pb-8 xl:pb-8"
          ref={experienceRef}
        >
          {/* EXPERIENCE TITLE */}
          <motion.h1
            initial={{ x: "-200px", opacity: 0 }}
            animate={isExperienceRefInView ? { x: "0", opacity: 1 } : {}}
            transition={{ delay: 0.8, ease: "easeOut", duration: 1 }}
            className="font-bold text-2xl m-11 lg:m-0 text-white lg:w-1/2 lg:text-4xl flex justify-center items-center"
          >
            MY JOURNEY
          </motion.h1>
          {/* EXPERIENCE LIST */}
          <motion.div
            initial={{ x: "300px", opacity: 0 }}
            animate={isExperienceRefInView ? { x: "0", opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-0 pb-0 h-fit"
          >
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between m-2 sm:m-10 md:m-0">
              {/* LEFT */}
              <div className="w-full h-fit md:w-1/2 md:mt-[-50px]">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  VFX/GFX
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic text-slate-500 pb-0">
                  Pursued it as a hobby in high school. Found potential clients
                  over the social media sites like Discord, instagram and gained
                  effective communication skills.
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-slate-400 text-sm font-semibold">
                  FREELANCE - 2020-2022
                </div>
              </div>
              {/* CENTER */}
              <div className="hidden md:flex justify-center p-4 lg:p-6">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-slate-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-0 md:w-1/2 "></div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between md:mt-[-50px] m-2 sm:m-10 md:m-0">
              {/* LEFT */}
              <div className="w-0 md:w-1/2"></div>
              {/* CENTER */}
              <div className="p-4 lg:p-6 hidden md:flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-slate-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-full md:w-1/2 md:mt-[-50px]">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Frontend website developer intern
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm text-slate-500 italic pb-0">
                  Actively participated in designing and implementing
                  user-facing Developed and maintained WordPress websites
                  andworked closely with the UX/UI team to ensure that theuser
                  interface is intuitive and user-friendly. Aided the senior web
                  developer in projects involvingwordpress
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-slate-400 text-sm font-semibold">
                  WEBALAR - 2023-2023
                </div>
              </div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-fit md:mt-[-50px] m-2 sm:m-10 md:m-0">
              {/* LEFT */}
              <div className="w-full md:w-1/2 ">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Seasonal Sorting Associate
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic text-slate-500 pb-0">
                  Currently employed as a Sorting Associate at Amazon to support
                  living expenses while pursuing side projects and freelancing
                  in full-stack web development.
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-slate-400 text-sm font-semibold">
                  AMAZON - CURRENT
                </div>
              </div>
              {/* CENTER */}
              <div className="p-4 lg:p-6 hidden md:flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-slate-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-0 md:w-1/2 "></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* contact me */}
      <div
        id="contact"
        className="min-h-screen flex px-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 pb-11"
      >
        <div className="w-full flex flex-col justify-center gap-11" ref={contactRef}>
          <span>

          <motion.h3
            initial={{ opacity: 0, x: "-100px" }}
            animate={isContactRefInView ? { opacity: 1, x: "0" } : ""}
            transition={{ duration: 1, ease: "easeOut" }}
            className="oldTxt text-2xl lg:text-4xl xl:text-6xl font-bold text-slate-500"
            style={{ backgroundImage: "url('/bgBlue.jpg')" }}
            >
            Want to <span className="text-[#01aec9]"> Talk</span> to me?
          </motion.h3>
          <p className="text-slate-400 mt-5">
            Feel free to reach out to me directly using any of the following
            methods :{" "}
          </p>
            </span>
          {/* div for contacts */}
          <motion.div
            initial={{ opacity: "0" }}
            animate={isContactRefInView ? { opacity: 1 } : ""}
            transition={{ duration: 1, ease: "easeOut" }}
            className="contactmeContent flex flex-col gap-10 text-white p-8 md:p-12 lg:p-24 xl:p-36"
          >
            {/* phone */}
            <div className="flex gap-5 md:gap-10">
              <motion.div
                initial={{ opacity: 0, x: "-50px" }}
                animate={isContactRefInView ? { opacity: 1, x: "0px" } : ""}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
                className="relative h-7 w-7 md:h-10 md:w-10 mt-[-5px]"
              >
                <Image
                  src="/PersonalPortfolio/phone.png"
                  alt="phone"
                  fill
                  className="object-contain invert"
                />
              </motion.div>
              <Link href="tel:+15879736924" className="text-[#78edff]">
                Contact Via Phone
              </Link>
            </div>
            {/* mail */}
            <div className="flex gap-5 md:gap-10">
              <motion.div
                initial={{ opacity: 0, x: "-50px" }}
                animate={isContactRefInView ? { opacity: 1, x: "0px" } : ""}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                className="relative h-7 w-7 md:h-10 md:w-10 mt-[-5px]"
              >
                <Image
                  src="/PersonalPortfolio/mail.png"
                  alt="phone"
                  fill
                  className="object-contain invert"
                />
              </motion.div>
              <Link
                className="text-[#78edff]"
                href="mailto:arvindersinghghumman@gmail.com?subject=Saw%20your%20website&body=Hey%20Arvinder,%0A%0AI%20am%20[Your%20Name]%20and%20want%20to%20inquire%20regarding%20____________________"
              >
                Contact Via Mail
              </Link>
            </div>
            {/* linked in */}
            <div className="flex gap-5 md:gap-10">
              <motion.div
                initial={{ opacity: 0, x: "-50px" }}
                animate={isContactRefInView ? { opacity: 1, x: "0px" } : ""}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="relative h-7 w-7 md:h-10 md:w-10 mt-[-5px]"
              >
                <Image
                  src="/PersonalPortfolio/blacklinkedin.png"
                  alt="phone"
                  fill
                  className="object-contain invert"
                />
              </motion.div>
              <Link
                className="text-[#78edff]"
                href="https://www.linkedin.com/in/arvindersinghghumman"
              >
                Message me on Liked In
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Homepage;
