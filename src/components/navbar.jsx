"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navItem";
import { motion } from "framer-motion";

const menuItems = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/#contact", title: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariant = {
    open: {
      rotate: 45,
      backgroundColor: "rgb(0,0,0)",
    },
    closed: {
      rotate: 0,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const bottomVariant = {
    open: {
      rotate: -45,
      backgroundColor: "rgb(0,0,0)",
    },
    closed: {
      rotate: 0,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariant = {
    open: {
      opacity: "0",
    },
    closed: {
      opacity: "1",
    },
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    open: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const menuItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      <div className="hidden md:flex w-1/3">
        {menuItems.map((item) => (
          <NavItem link={item} key={item.title} />
        ))}
      </div>
      {/* logo */}
      {/* <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black items-center justify-center rounded-md p-1"
        >
          <span className="text-white mr-1">Singh</span>
          <span className="w-12 h-8 rounded bg-white text-black">Dev</span>
        </Link>
      </div> */}
      {/* social */}
      <div className="socials hidden md:flex gap-11 w-1/3 justify-end pr-11">
        <Link href="https://github.com/Arvinder-Singh-Ghumman">
          <Image src="/githubnav.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/arvindersinghghumman/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/arvindersinghghumman">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* responsive menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-[50]"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            className="w-10 h-1 bg-black rounded origin-left"
            variants={topVariant}
            animate={open ? "open" : "closed"}
          ></motion.div>
          <motion.div
            className="w-10 h-1 bg-black rounded"
            variants={centerVariant}
            animate={open ? "open" : "closed"}
          ></motion.div>
          <motion.div
            className="w-10 h-1 bg-black rounded origin-left"
            variants={bottomVariant}
            animate={open ? "open" : "closed"}
          ></motion.div>
        </button>
        {/* Menu list */}
        {open && (
          <motion.div
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-[49]"
            variants={listVariants}
            initial="closed"
            animate="open"
          >
            {menuItems.map((item) => {
              return (
                <motion.div variants={menuItemVariants} key={item.title}>
                  <Link href={item.url}>{item.title}</Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};