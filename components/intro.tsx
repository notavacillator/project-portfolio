'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'; 
import Link from 'next/link';
import { BsArrowRight, BsLinkedin} from 'react-icons/bs';
import { HiDownload} from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

function Intro() {  
  const {setActiveSection, setLastClickTime} = useActiveSectionContext(); 
  const {ref} = useSectionInView('Home', 0.25); 

  return (
    <section ref ={ref} id='home' className=' mt-2 mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      {/* PROFILE PICTURE SECTION */}
        <div className='flex items-center justify-center'>
            <div className='relative group'>
              <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{type: 'tween', duration: 0.2}}
              >
                <Image src = {`/profpic.jpeg`} 
                  alt='profile-pic' 
                  height={192} 
                  width={204}
                  quality= {80} 
                  priority={true}
                  className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-collapse border-white shadow-xl select-none '
                />
              </motion.div>
              <motion.span 
                  className='absolute select-none text-3xl bottom-0 right-0'
                  initial={{opacity: 0, scale: 0}}
                  animate={{opacity: 1, scale: 1}}
                  transition={
                    {type: 'spring', 
                    stiffness: 125, 
                    delay: 0.2, 
                    duration: 0.7}
                  }
                  >
                👏
              </motion.span>
            </div>
        </div>

      {/* INTRO HEADING SECTION  */}
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
         initial={{y: 100, opacity: 0}} 
         animate={{y: 0, opacity: 1}}>
          <span className="font-bold">Hello, I'm Aman Bhadauria.</span> I'm a{" "}
          <span className="font-bold">Software Developer</span> with{" "}
          <span className="font-bold">more than 2 years</span> of experience. I enjoy
          building <span className="italic">pleasing web applications</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h1>

      {/* LINKS / ANCHOR SECTION */}
        <motion.div className='flex flex-col md:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
          initial={{y: 100, opacity: 0}} 
          animate={{y: 0, opacity: 1}}
          transition={{
            delay: 0.2,
          }}
        >
          <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex flex-nowrap items-center gap-2 rounded-full
              outline-none focus:scale-105 hover:scale-105 hover:shadow-md hover:bg-gray-950 active:scale-95 transition'
              onClick={() => {
                setActiveSection('Contact')
                setLastClickTime(Date.now())
              }}>
             Contact me here
            <BsArrowRight className='opacity-80 group-hover:translate-x-3 transition'/>
          </Link>

          <a href="/resume.pdf" download={true} className="group bg-white dark:bg-white/10 px-7 py-3 flex items-center gap-2 rounded-full
            outline-none focus:scale-105 hover:scale-105 hover:shadow-md active:scale-95 transition border border-black/10">
            Download Resume 
            <HiDownload className='group-hover:translate-y-1 transition'/>
          </a>
          
          <div className='flex md:gap-2 sm:gap-3 gap-5'>
            <a href="https://linkedin.com/in/aman-bhadauria" target= "_blank" className='group bg-white dark:bg-white/10 dark:text-white p-4 text-gray-700 flex items-center gap-2 rounded-full
              outline-none focus:scale-105 hover:scale-110 hover:shadow-md active:scale-95 transition border border-black/10'>
              <BsLinkedin className='opacity-70 group-hover:opacity-100 group-hover:text-[#0072b1] transition sm:text-2xl text-3xl'/>
            </a>

            <a href="https://github.com/notavacillator/" target= "_blank" className='group bg-white dark:bg-white/10 dark:text-white p-4 text-gray-700 text-[1.35rem] flex items-center gap-2 rounded-full
              outline-none focus:scale-105 hover:scale-110 hover:shadow-md active:scale-95 transition border border-black/10'>
              <FaGithubSquare className='opacity-70 group-hover:opacity-100 group-hover:text-black transition sm:text-2xl text-3xl'/>
            </a>
          </div>
        </motion.div>
    </section>
  )
}

export default Intro