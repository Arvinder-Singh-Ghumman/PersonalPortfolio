"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";


const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-[#1c1d23]  to-[#000000] overflow-y-scroll"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <motion.div
          className="text-blue-900 h-screen w-screen fixed bg-black bottom-0 z-30 flex items-center justify-center"
          initial={{ height: "100vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        >
          <motion.div className="text-[#01aec9] font-bolo font-bold text-xl lg:text-4xl" initial={{opacity:"1"}} animate={{opacity:"0", transition: { delay: 0.5 }}}>
            {pathName === "/" ? "HOME" : pathName.substring(1).toUpperCase()}
          </motion.div>
        </motion.div>
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
