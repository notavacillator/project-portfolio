'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'; 
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import {toast} from 'react-hot-toast'; 

function Contact() {
    const { ref } = useSectionInView('Contact');
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
        <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at {" "}
            <a className = 'underline' href="mailto:bhadauria.shivam15@gmail.com">bhadauria.shivam15@gmail.com</a> 
            {" "} or through this form.
        </p>

        <form className = 'mt-10 flex flex-col dark:text-black' 
            action={async (formData) => {
                const { data, error } = await sendEmail(formData)
                console.log('data in action of email : ' + data);
                
                if(error ){
                    console.log('error in action of email : ' + error);
                    toast.error(error); 
                    return; 
                }
                toast.success('Email sent successfully. '); 
            }} 
        >
            <input className = 'p-3 h-14 rounded-lg border border-black/10 \
            dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none' 
                type="email" required maxLength={100} placeholder = 'Your email' 
                name='senderEmail'
            />
            <textarea name ='contactMessage' placeholder = 'Your message' required maxLength={5000} 
                className = 'p-3 h-52 my-3 rounded-xl border border-black/10 \
                dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none' 
            />
            <div className='flex justify-end items-center'>
                <SubmitBtn/>
            </div>
        </form>

    </motion.section>
  )
}

export default Contact