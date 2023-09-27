'use server'
import { getErrorMessage, validateData } from '@/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

// console.log('api key : ' + process.env.RESEND_API_KEY);
// console.log(resend)

export const sendEmail = async(formData : FormData) => {
    'use server'

    const senderEmail = formData.get('senderEmail'); 
    const contactMessage = formData.get('contactMessage');

    // Null and type check for contact message and sender email 
    // Simple server side validation 
    if(!validateData(senderEmail, 100 )){
      return {
        error : 'Invalid sender email.'
      }
    }
    
    if(!validateData(contactMessage, 1000)){
      return {
        error : 'Invalid contact message.'
      }
    }

    try {
      resend.emails.send({
        from: 'Contact form  <onboarding@resend.dev>',
        to: 'bhadauria.shivam15@gmail.com',
        subject: 'Message from contact form of portfolio.',
        // text: contactMessage as string,
        reply_to: senderEmail as string, 
        react : React.createElement(ContactFormEmail, {
          message: contactMessage as string, 
          senderEmail : senderEmail as string, 
        })
        // react: <ContactFormEmail message={contactMessage} senderEmail={senderEmail}/>
      });
    } catch (error : unknown) {
      return {
        error: getErrorMessage(error)
      }
    }
}