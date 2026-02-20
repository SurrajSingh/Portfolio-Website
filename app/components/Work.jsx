"use client"

import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

const Work = ({ isDarkMode }) => {

  const [visibleProjects, setVisibleProjects] = useState(4)

  const handleShowMore = () => {
    if (visibleProjects >= workData.length) {
      setVisibleProjects(4)
    } else {
      setVisibleProjects(workData.length)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >

      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-ovo'
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-ovo'
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
      >
        Welcome to my web development portfolio. Here you’ll find a collection of projects that showcase my skills in full-stack development.
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        layout
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-6 dark:text-black'
      >

        <AnimatePresence>
          {workData.slice(0, visibleProjects).map((project, index) => (

            <motion.div
              key={project.title + index}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group hover:shadow-black duration-500 dark:hover:shadow-white overflow-hidden'
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >

              {/* Background Blur */}
              <div
                className='absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-500 group-hover:blur-sm'
                style={{ backgroundImage: `url(${project.bgImage})` }}
              ></div>

              {/* Content Box */}
              <div className='w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 bg-[#48027d]/30 group-hover:bg-[#48027d]/60 backdrop-blur-xl border border-white/20 shadow-xl text-white'>

                <div>
                  <h2 className='font-semibold text-sm'>
                    {project.title}
                  </h2>

                  <p className='text-xs text-black mt-2 group-hover:text-white'>
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={(e) => e.stopPropagation()}
                  className='border rounded-full border-black w-9 h-9 shrink-0 flex items-center justify-center shadow-[2px_2px_0_#000] bg-[#48027d]/10 hover:bg-[#48027d]/80 transition'
                >
                  <Image
                    className='w-5'
                    src={assets.send_icon}
                    alt='send icon'
                  />
                </a>

              </div>
            </motion.div>

          ))}
        </AnimatePresence>

      </motion.div>

      {/* Show More Button */}
      <motion.button
  onClick={handleShowMore}
  disabled={workData.length <= 4}
  className={`w-max flex items-center justify-center gap-2 
    border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 duration-500
    ${workData.length <= 4
      ? "opacity-50 cursor-not-allowed border-gray-400 text-gray-400"
      : "text-gray-700 border-gray-700 hover:bg-lightHover hover:shadow-black dark:text-white dark:border-white dark:hover:bg-darkHover dark:hover:shadow-white"
    }
  `}
>
  {workData.length <= 4
    ? "More Projects Coming Soon"
    : visibleProjects >= workData.length
      ? "Show Less"
      : "Show More"
  }

  <Image
    src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
    className='w-4'
    alt='Right arrow'
  />
</motion.button>

    </motion.div>
  )
}

export default Work