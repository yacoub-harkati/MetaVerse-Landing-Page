"use client"

import { motion } from "framer-motion"
import { TypingText } from "../components"
import styles from "../styles"
import { fadeIn, staggerContainer } from "../utils/motion"

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}
    >
      <TypingText textStyles="text-centre" title="| About Metaversus" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] text-center text-[20px] font-normal text-secondary-white sm:text-[32px] "
      >
        <span className="font-bold text-white">Metaverse</span> is a new thing
        in the future, where you can enjoy the virtual world by feeling like
        it's really real, you can feel what you feel in this metaverse world,
        because this is really the{" "}
        <span className="font-bold text-white">madness of the metaverse</span>{" "}
        of today, using only <span className="font-bold text-white">VR</span>{" "}
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's{" "}
        <span className="font-bold text-white">explore</span> the madness of the
        metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="aroow-down"
        className="mt-[28px] h-[28px] w-[18px] object-contain"
      />
    </motion.div>
    <div className="gradient-02 z-0"></div>
  </section>
)

export default About
