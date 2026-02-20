import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div 
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}
        >
            <Image src={assets.profile_img} className='rounded-full shadow-darkTheme dark:shadow-white w-32 mt-5' alt=''/>
        </motion.div>
          <motion.h3 
           initial={{y: -20, opacity: 0}}
           whileInView={{y: 0, opacity:1}}
           transition={{duration: 0.6, delay: 0.3}}
          className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'> Hi! I'm Suraj Singh <Image src={assets.hand_icon} className='w-6 mb-1' alt=''/></motion.h3>
          <motion.h1
           initial={{y: -30, opacity: 0}}
           whileInView={{y: 0, opacity:1}}
           transition={{duration: 0.8, delay: 0.5}} 
           className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Full-stack developer creating modern, user-friendly web experiences</motion.h1>
          <motion.p 
           initial={{opacity: 0}}
           whileInView={{opacity:1}}
           transition={{duration: 0.6, delay: 0.7}} 
           className='max-w-2xl mx-auto font-ovo'>
             I build clean, responsive, and user-friendly web applications using modern technologies like React, Tailwind CSS, Node.js, and MongoDB. I enjoy learning, solving problems, and improving my skills by working on real-world projects.
          </motion.p>
          <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity:1}}
            transition={{duration: 0.6, delay: 1}}
            href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent hover:shadow-darkTheme duration-500 dark:hover:shadow-white'>Contact Me <Image src={assets.right_arrow_white} className='w-4' alt=''/></motion.a>
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity:1}}
            transition={{duration: 0.6, delay: 1.2}}
            href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:shadow-darkTheme duration-500 dark:hover:shadow-white dark:bg-white dark:text-black'>My Resume <Image src={assets.download_icon} className='w-4' alt=''/></motion.a>
          </div>
    </div>
  )
}

export default Header