import React from 'react'

function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='block mb-2 text-xs'>
            &copy; 2030 Aman Bhadauria. All rights reserved. 
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website : </span> built with React & Next.js ( App router & Server Actions ), 
            Typescript, Tailwind CSS, Framer Motion, Resend & Vercel hosting. 
        </p>
    </footer>
  )
}

export default Footer