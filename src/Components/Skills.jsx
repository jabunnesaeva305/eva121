
import { MdJavascript } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import { SiMambaui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
// import { animate } from "framer-motion";
import { FaPython } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";

import { TbBrandCpp } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaBootstrap } from "react-icons/fa6";

import { FaNetworkWired } from "react-icons/fa6";

import { motion } from "framer-motion";
const Skills = () => {
  const iconverient = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className=" mt-5 space-y-2" id="skill">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Technologies
      </h1>
      <p className=" font-semibold text-center">
        Here are some of the skills I have been working on.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-5 ">
        <motion.p
          variants={iconverient(1.5)}
          initial="initial"
          animate="animate"
          className="flex items-center text-2xl border-2 border-sky-800 rounded-2xl p-3 font-semibold"
        >
          <TbBrandCpp  className=" text-cyan-600" /><span> </span> C++
        </motion.p>
        <motion.p
          variants={iconverient(2.5)}
          initial="initial"
          animate="animate"
          className="flex items-center text-2xl border-2 border-sky-800 rounded-2xl p-3 font-semibold"
        >
          <MdJavascript className=" rounded-md bg-yellow-400 text-2xl " />{" "}
          JavaScript
        </motion.p>
        <motion.p
          variants={iconverient(1.5)}
          initial="initial"
          animate="animate"
          className="flex items-center text-2xl border-2 border-sky-800 rounded-2xl p-3 font-semibold"
        >
          <FaHtml5 className=" rounded-md text-[#e34c26] text-2xl " /> HTML
        </motion.p>

        <motion.p
          variants={iconverient(2.5)}
          initial="initial"
          animate="animate"
          className="flex items-center text-2xl border-2 border-sky-800 rounded-2xl p-3 font-semibold"
        >
          <IoLogoCss3 className=" rounded-md text-[#264de4] text-2xl " /> CSS
        </motion.p>
        <motion.p
          variants={iconverient(3.5)}
          initial="initial"
          animate="animate"
          className="flex items-center text-2xl border-2 border-sky-800 rounded-2xl p-3 font-semibold"
        >
          <FaPython className=" rounded-md text-[#264de4] text-2xl " />{" "}
          Python
        </motion.p>
        <motion.p
          variants={iconverient(3.5)}
          initial="initial"
          animate="animate"
          className="flex items-center text-2xl border-2 border-sky-800 rounded-2xl p-3 font-semibold"
        >
          <FaBootstrap className=" rounded-md text-[#264de4] text-2xl " /> Bootstrap
        </motion.p>

        <motion.p
          variants={iconverient(2.5)}
          initial="initial"
          animate="animate"
          className="flex items-center text-2xl border-2 border-sky-800 rounded-2xl p-3 font-semibold"
        >
          <FaDatabase className=" rounded-md text-[#264de4] text-2xl " /> Data Mining
        </motion.p>

        <motion.p
          variants={iconverient(1.5)}
          initial="initial"
          animate="animate"
          className="flex items-center text-2xl border-2 border-sky-800 rounded-2xl p-3 font-semibold"
        >
          <GiArtificialIntelligence className=" rounded-md text-[#589636] text-2xl " /> ArtificialIntelligence
        </motion.p>
        <motion.p
          variants={iconverient(2.5)}
          initial="initial"
          animate="animate"
          className="flex items-center text-2xl border-2 border-sky-800 rounded-2xl p-3 font-semibold"
        >
          <FaNetworkWired className=" rounded-md text-[#FFA000] text-2xl " />{" "}
          Networking
        </motion.p>

        <motion.p
          variants={iconverient(1.5)}
          initial="initial"
          animate="animate"
          className="flex items-center text-2xl border-2 border-sky-800 rounded-2xl p-3 font-semibold"
        >
          <SiMysql className=" rounded-md text-[#00758F] text-2xl " /> Mysql
        </motion.p>
      </div>
    </div>
  );
};

export default Skills;
