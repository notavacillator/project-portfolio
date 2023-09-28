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
        <p className='text-gray-700'>Please contact me directly at {" "}
            <a className = 'underline' href="mailto:bhadauria.shivam15@gmail.com">bhadauria.shivam15@gmail.com</a> 
            {" "} or through this form.
        </p>

        <form className = 'mt-10 flex flex-col' 
            action={async (formData) => {
                const { data, error } = await sendEmail(formData)

                if(error ){
                    toast.error(error); 
                    return; 
                }
                toast.success('Email sent successfully. '); 
            }}>
            <input className = 'p-3 h-14 rounded-lg border border-black/10 ' 
                type="email" required maxLength={100} placeholder = 'Your email' 
                name='senderEmail'
            />
            <textarea name ='contactMessage' placeholder = 'Your message' required maxLength={5000} 
                className = 'p-3 h-52 my-3 rounded-xl border border-black/10' 
            />
            <SubmitBtn/>
        </form>

    </motion.section>
  )
}

export default Contact