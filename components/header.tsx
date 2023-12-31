'use client';

import React from 'react'
import { motion } from 'framer-motion'; 
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

function Header() {
    // Error in below code as the useContext could return a null value. 
    // const {activeSection, setActiveSection} = useContext(ActiveSectionContext); 

    const {activeSection, setActiveSection, setLastClickTime} = useActiveSectionContext(); 
    
    return (
        <header className='z-[999] relative' >
            <motion.div 
                className="fixed top-0 left-1/2 h-[4.5rem] w-full 
                    rounded-none border border-white border-opacity-4 bg-white 
                    bg-opacity-80 shadow-lg  shadow-black/[0.03] backdrop-blur-[4px]
                    sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
                    dark:bg-gray-800 dark:border-black/5 dark:bg-opacity-40"
                initial={{y: -100, x: "-50%",  opacity: 0}} // overrides the translate property -translate-x-1/2
                animate={{y: 0, x: "-50%", opacity: 1}}
                >
            </motion.div>

            <nav 
                className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 
                    sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
                <ul className='flex flex-wrap w-[22rem] items-center justify-center 
                    gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] 
                    sm:flex-nowrap sm:gap-5'>
                    {
                        links.map(link => (
                            <motion.li className = 'h-3/4 flex items-center justify-center relative' key ={link.hash}
                                initial={{y: -100, opacity: 0}} 
                                animate={{y: 0, opacity: 1}}>
                                <Link 
                                    className = {clsx(
                                        'flex items-center justify-center px-3 py-3 hover:text-gray-950 transition select-none \
                                        dark:text-gray-300 dark:hover:text-gray-300', 
                                        {
                                            "text-gray-950 dark:text-gray-100" : activeSection === link.name
                                        }
                                    )} 
                                    href = {link.hash} onClick={() => {
                                            setActiveSection(link.name)
                                            setLastClickTime(Date.now())
                                        }}>
                                        {link.name}
                                    {
                                        link.name === activeSection && (
                                            <motion.span className='bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-500/70'
                                                layoutId='activeSection' 
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 300, 
                                                    damping: 30
                                                }}>
                                            </motion.span>
                                        )
                                    }
                                </Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header