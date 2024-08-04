import React from 'react'
import { motion } from 'framer-motion'

import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

const Socials = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>More about me</p>
                <h2 className={styles.sectionHeadText}>Socials.</h2>
            </motion.div>
            <div className="flex sm:flex-row mt-7">
                <a
                    href="https://github.com/remynln"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                >
                    <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                        GitHub
                    </button>
                </a>
                <a
                    href="https://www.linkedin.com/in/remynoulin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                >
                    <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                        LinkedIn
                    </button>
                </a>
                <a
                    href="https://drive.google.com/file/d/1WYg4emlanX0d2531sTLFrDbQtZZShj1d/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                >
                    <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                        <strong>CV</strong>
                    </button>
                </a>
            </div>
        </>
    )
}

export default SectionWrapper(Socials, "socials")