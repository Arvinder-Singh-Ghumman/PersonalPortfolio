"use client";
// import Brain from "@/components/brain";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../../components/footer";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* BIOGRAPHY CONTAINER */}
      <motion.div className="text-white flex flex-col justify-center gap-0 md:gap-4 lg:gap-8 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-40">
        {/* BIOGRAPHY TITLE */}
        <h1 className="font-bold text-2xl">ABOUT ME</h1>
        {/* BIOGRAPHY DESC */}
        <p className="text-lg font-">
          As an <span className="text-[#01aec9]"> international student</span>
          studying in <span className="text-[#01aec9]"> Canada</span> on a study
          permit, I bring a robust set of skills and attributes to any work
          environment. With a
          <span className="text-[#01aec9]"> self-driven</span> approach and a
          penchant for fast learning, I thrive in overcoming new challenges. My
          <span className="text-[#01aec9]">adaptability</span> is a cornerstone
          of my work ethic, allowing me to seamlessly integrate into dynamic
          settings. I am resolute in my
          <span className="text-[#01aec9]">determination</span> to excel in
          every task, bringing a strong sense of diligence to all my endeavors.
          I eagerly anticipate the opportunity to apply my adaptable nature and
          unwavering <span className="text-[#01aec9]">work ethic</span>
          to make meaningful contributions wherever I go.
        </p>
        {/* BIOGRAPHY QUOTE */}
        <span className="italic">
          <span className="text-[#01aec9]">
            {" "}
            Every soul we encounter adds depth and richness to the narrative of
            our existence.
          </span>
        </span>
        {/* BIOGRAPHY SIGN SVG*/}
        <div className="relative h-24 w-48 md:2-64 xl:w-72 mt-10">
          <Image src="/sign.png" fill alt="sign" className="object-contain" />
        </div>
      </motion.div>
      <Footer/>
    </motion.div>
  );
};

export default AboutPage;
