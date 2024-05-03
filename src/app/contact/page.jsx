"use client"
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    
    <div>
      <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    ></motion.div>
    </div>
  )
}

export default Contact;