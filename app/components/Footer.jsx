import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-36 mx-auto mb-2' alt='' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} className='w-6' alt='' />
          tech.by.surrajsingh@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; 2026 Suraj Singh. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/SurrajSingh" className="group flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"><Image src={isDarkMode ? assets.github_dark : assets.github_light} className='w-6 rounded-full group-hover:shadow-darkTheme dark:group-hover:shadow-white duration-300' alt='GitHub' /><span className="transition-all duration-300 group-hover:text-[#48027d] group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] dark:group-hover:text-white dark:group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
            GitHub
          </span></a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/surraj-singh-748984237?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className='group flex items-center gap-2 transition-all duration-300 hover:-translate-y-1'><Image src={isDarkMode ? assets.linkedin_dark : assets.linkedin_light} className='w-6 group-hover:shadow-darkTheme dark:group-hover:shadow-white duration-300' alt='LinkedIn' /><span className="transition-all duration-300 group-hover:text-[#48027d] group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] dark:group-hover:text-white dark:group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
            LinkedIn
          </span></a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer