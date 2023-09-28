'use client'

import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = "light" | "dark";

function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark'); 
            window.localStorage.setItem('theme', 'dark'); 
            document.documentElement.classList.add('dark');
        } else{
            setTheme('light'); 
            window.localStorage.setItem('theme', 'light'); 
            document.documentElement.classList.remove('dark');
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null ; 
        if(localTheme){
            setTheme(localTheme); 
            if(localTheme === 'dark'){
                document.documentElement.classList.add('dark');
            }
        } else if(window.matchMedia('(prefers-color-scheme : dark)')){
            setTheme('dark')
            document.documentElement.classList.add('dark');
        }
    },[])

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