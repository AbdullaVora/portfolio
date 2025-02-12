import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github } from '../assets'
import live from "../assets/live.png"
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 300 }} className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full h-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="bg-red-500 mx-1 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer " onClick={() => window.open(live_link, "_blank")}>
              <img src={live} alt="gitHub" className='w-3/4 h-3/4 object-contain' />
            </div>
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer " onClick={() => window.open(source_code_link, "_blank")}>
              <img src={github} alt="gitHub" className='w-2/3 h-2/3 object-contain' />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>

    </motion.div>
  )
}

const Works = () => {


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p variants={fadeIn("", "", 0.1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcase my skills and experience through my work. Each projects is briefly described with links to code repositories and live demos in it. it reflects my ability to solve complex problems, work with different technologies, and manage projects effectvly.
        </motion.p>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>

    </>
  )
}

export default SectionWrapper(Works, "work")