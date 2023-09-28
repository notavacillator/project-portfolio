'use client'

import React, { useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = "light" | "dark";

function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark'); 
        } else{
            setTheme('light'); 
        }
    }

  return (
    <button className='fixed bottom-5 right-5 bg-gray-100 h-[2.5rem] w-[2.5rem] bg-opacity-40
     rounded-full backdrop-blur-lg border border-black/5 border-opacity-40 flex items-center justify-center
     shadow-xl hover:scale-[1.15] active:scale-105 active:shadow-none transition-all'
     onClick={toggleTheme}
     >
        {
            theme === 'light' ? <BsSun className=''/>  :  <BsMoon/>
        }
    </button>
  )
}

export default ThemeSwitch