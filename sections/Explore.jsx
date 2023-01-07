"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { TypingText, ExploreCard, TitleText } from "../components"
import styles from "../styles"
import { staggerContainer } from "../utils/motion"
import { exploreWorlds } from "../constants"

function Explore() {
  const [active, setActive] = useState("world-2")

  return (
    <section id="#explore" className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Worlds" textStyles="text-center" />
        <TitleText
          title={
            <>
              Chose the world you want <br className="hidden md:block" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex min-h-[70vh] flex-col gap-5 lg:flex-row">
          {exploreWorlds.map((world, i) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={i}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore
