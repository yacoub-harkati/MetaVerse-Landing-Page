"use client"
import { motion } from "framer-motion"
import { TypingText, StartSteps, TitleText } from "../components"
import styles from "../styles"
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion"
import { startingFeatures } from "../constants"

const GetStarted = () => (
  <section className={`${styles.paddings} realative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={planetVariants("left")}
        initial="hidden"
        whileInView="show"
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="h-5/6 w-5/6 object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className={`flex flex-[75px] flex-col justify-center`}
      >
        <TypingText title="| How Metaversus work" />
        <TitleText title={<>Get Stateted with just a few clicks</>} />
        <div className="mt-[31px] flex max-w-[370px] flex-col gap-[24px]">
          {startingFeatures.map((feature, i) => (
            <StartSteps key={feature} number={i + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default GetStarted
