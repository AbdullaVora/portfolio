import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          vari ants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        >
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt="icon" className="w-16 h-16 object-contain" />
            <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn('', '', 0.1, 1)}
      >
        Hi, I'm a passionate Full Stack Developer skilled in building dynamic web applications. I
        specialize in React, Node.js, and database management, crafting seamless user experiences
        with efficient backend systems. With a focus on clean code and scalable solutions, I love
        turning ideas into reality. I'm always eager to learn new technologies and collaborate on
        impactful projects!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
