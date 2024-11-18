import React from 'react'
import { motion } from "framer-motion"
import { styles } from "../style"
import { ComputersCanvas } from "./canvas"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi, I am <span className='text-[#915eff]'>Abdulla Vora</span></h1>
            <p className={`${styles.heroSubText} text-white-100 w-[80%]`}>
            Full Stack Developer with expertise in building dynamic and scalable web applications. Proficient in both front-end and back-end technologies.
            </p>
          </div>
        </div>
        <ComputersCanvas />

        <div className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center">
          <Link to="#about">
          <div className="w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev 
            animate={{y: [0,24,0]}}
            transition={{duration: 1.5,repeat: Infinity, repeatType: 'loop'}}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Hero