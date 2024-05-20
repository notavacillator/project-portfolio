'use client'

import React, {useEffect} from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'; 
import { useSectionInView } from '@/lib/hooks';

function About() {
    const {ref} = useSectionInView('About', 0.55); 


    return (
        <motion.section 
            ref={ref}
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-m-24'
            initial={{y: 100, opacity: 0}} 
            animate={{y: 0, opacity: 1}}
            transition={{
                delay: 0.175, 
            }}
            id='about'
        >
            <SectionHeading >About me</SectionHeading>
            <p className="mb-3">
                I'm a passionate  <span className="font-medium">JavaScript</span> enthusiast, driven by crafting beautiful and user-friendly interfaces.  My toolbox includes powerful frameworks like                 
                <span className="font-medium underline"> ReactJS, Next.js, and Tailwind CSS. </span>
                This allows me to build modern, responsive web applications with ease.
                For robust and maintainable code, I leverage  <span className="font-medium">  TypeScript</span>, ensuring strong typing and catching errors early in the development process.
                When it comes to backend development, I'm proficient in  <span className="font-medium"> Java, along with NetSuite and SuiteScript.</span> This allows me to tackle full-stack projects seamlessly.
                My passion for scalability extends to databases as well. I'm comfortable utilizing both Firebase (or Firebase-like BaaS) and MongoDB to build applications that can grow alongside your needs.
                Whether you're looking for a front-end developer who can breathe life into your designs, or a full-stack developer who can handle both the client and server sides, I'm eager to collaborate and bring your vision to life!
            </p>

            <p>
                Beyond the code, I'm a lifelong learner, fascinated by the human experience. I delve into the depths of 
                <span className="italic"> psychology, political science, and history, </span>
                constantly expanding my understanding of the world.
                <br />
                When I need a mental break, you might find me strategizing on the chessboard, 
                unleashing competitive spirit in a game of table tennis, or simply unwinding with a good movie.
            </p>
        </motion.section>
    )
}

export default About