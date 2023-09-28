'use client'

import { useTheme } from '@/context/theme-context';
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'



function ThemeSwitch() {
const {theme, toggleTheme} = useTheme(); 


  return (
    <button className='fixed bottom-5 right-5 bg-gray-100 h-[2.5rem] w-[2.5rem] bg-opacity-40
     rounded-full backdrop-blur-lg border border-black/5 border-opacity-40 flex items-center justify-center
     shadow-xl hover:scale-[1.15] active:scale-105 active:shadow-none transition-all dark:bg-gray-800/60'
     onClick={toggleTheme}
     >
        {
            theme === 'light' ? <BsSun className=''/>  :  <BsMoon/>
        }
    </button>
  )
}

export default ThemeSwitch