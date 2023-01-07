"use client"

import { motion } from "framer-motion"
import styles from "../styles"
import { navVariants } from "../utils/motion"

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative py-8`}
    viewport={{ once: true }}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search-icon"
        className="z-40 h-[24px] w-[24px] cursor-pointer object-contain transition duration-150 hover:scale-110"
      />

      <h2 className="z-40 text-[24px] font-extrabold uppercase leading-8 text-white">
        Metaverses
      </h2>
      <img
        src="/menu.svg"
        alt="menu-icon"
        className="z-40 h-[24px] w-[24px] cursor-pointer object-contain transition duration-150 hover:scale-110"
      />
    </div>
    <div className="gradient-01 absolute inset-0 w-1/2"></div>
  </motion.nav>
)

export default Navbar
