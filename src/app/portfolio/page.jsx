"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Portfolio = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full w-full flex flex-col gap-4 justify-center items-center">
        <p className="text-slate-500 font-extrabold font-bolo text-lg lg:text-2xl xl:text-4xl">
          WILL UPDATE THIS SECTION SOON
        </p>
        <Link href="/">

        <button className="emptyBtn p-4 rounded-lg ring-1 text-[#76ABAE] ring-[#01aec9]">
              Go Back
            </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Portfolio;
