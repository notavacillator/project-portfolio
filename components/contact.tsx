'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'; 
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

function Contact() {
    const {ref} = useSectionInView('Contact');

    return (
    <motion.section ref = {ref} id = 'contact' 
        className='scroll-mt-24 mb-28 sm:mb-36 w-[min(100%,38rem)]'
        initial={{
            opacity: 0, 
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration : 1, 
        }}
        viewport={{
            once: true
        }}
    >
        <SectionHeading>
            Contact me
        </SectionHeading>
        <p className='text-gray-700'>Please contact me directly at {" "}
            <a className = 'underline' href="mailto:bhadauria.shivam15@gmail.com">bhadauria.shivam15@gmail.com</a> 
            {" "} or through this form.
        </p>

        <form className = 'mt-10 flex flex-col' 
            action={async (formData) => {
                await sendEmail(formData)
            }}>
            <input className = 'p-3 h-14 rounded-lg border border-black/10 ' 
                type="email" required maxLength={100} placeholder = 'Your email' 
                name='senderEmail'
            />
            <textarea name ='contactMessage' placeholder = 'Your message' required maxLength={1000} 
                className = 'p-3 h-52 my-3 rounded-xl border border-black/10' 
            />
            <button 
                className = 'group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-800  text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 hover:shadow-md active:scale-95 hover:bg-gray-950' 
                type="submit">
                    Submit 
                <FaPaperPlane className='opacity-90 text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 ease-out'/>
            </button>
        </form>

    </motion.section>
  )
}

export default Contact