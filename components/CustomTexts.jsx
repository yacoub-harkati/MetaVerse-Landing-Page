"use client"

import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "../utils/motion"

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`text-[14px] font-normal text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, i) => (
      <motion.span key={`${i}-letters`} variants={textVariant2}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
)

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] text-[40px] font-bold text-white md:text-[64px] ${textStyles}`}
  >
    {title}
  </motion.h2>
)
