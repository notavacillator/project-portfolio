'use client'

import Image from 'next/image'
import React, {useEffect} from 'react'
import { motion } from 'framer-motion'; 
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

function Intro() {  
  const {ref,  inView}= useInView({
    threshold: 0,
  }); 
  const {setActiveSection, lastClickTime} = useActiveSectionContext();

  useEffect(() => {
    if(inView && Date.now() - lastClickTime > 1000){
        setActiveSection('Home');
    }
    return () => {
    }
  }, [inView, setActiveSection, lastClickTime])


  return (
    <section ref ={ref} id='home' className=' mt-10 mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      {/* PROFILE PICTURE SECTION */}
        <div className='flex items-center justify-center'>
            <div className='relative'>
              <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{type: 'tween', duration: 0.2}}
              >
                <Image src = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' 
                  alt='profile-pic' 
                  height="192" 
                  width="192" 
                  quality= '95' 
                  priority={true}
                  className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-collapse border-white shadow-xl select-none '
                />
              </motion.div>
              <motion.span className='absolute select-none text-3xl bottom-0 right-0'
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
          <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
          <span className="font-bold">full-stack developer</span> with{" "}
          <span className="font-bold">8 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h1>

      {/* LINKS / ANCHOR SECTION */}
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
          initial={{y: 100, opacity: 0}} 
          animate={{y: 0, opacity: 1}}
          transition={{
            delay: 0.2,
          }}
        >
          <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
              outline-none focus:scale-105 hover:scale-105 hover:shadow-md hover:bg-gray-950 active:scale-95 transition'>
             Contact me here
            <BsArrowRight className='opacity-80 group-hover:translate-x-3 transition'/>
          </Link>

          <a href="/resume.pdf" download={true} className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
            outline-none focus:scale-105 hover:scale-105 hover:shadow-md active:scale-95 transition border border-black/10">
            Download Resume 
            <HiDownload className='group-hover:translate-y-1 transition'/>
          </a>
          
          <a href="https://linkedin.com/in/aman-bhadauria" target= "_blank" className='group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
            outline-none focus:scale-105 hover:scale-110 hover:shadow-md active:scale-95 transition border border-black/10'>
            <BsLinkedin className='opacity-70 group-hover:opacity-100 group-hover:text-[#0072b1] transition'/>
          </a>

          <a href="https://github.com/notavacillator/" target= "_blank" className='group bg-white p-4 text-gray-700 text-[1.35rem] flex items-center gap-2 rounded-full
            outline-none focus:scale-105 hover:scale-110 hover:shadow-md active:scale-95 transition border border-black/10'>
            <FaGithubSquare className='opacity-70 group-hover:opacity-100 group-hover:text-black transition'/>
          </a>
        </motion.div>
    </section>
  )
}

export default Intro