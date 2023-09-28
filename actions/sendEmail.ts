'use server'

import React from 'react';
import { getErrorMessage, validateData } from '@/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async(formData : FormData) => {
    const senderEmail = formData.get('senderEmail'); 
    const contactMessage = formData.get('contactMessage');

    // Null and type check for contact message and sender email 
    // Simple server side validation 
    if(!validateData(senderEmail, 100 )){
      return {
        error : 'Invalid sender email.'
      }
    }
    
    if(!validateData(contactMessage, 5000)){
      return {
        error : 'Invalid contact message.'
      }
    }
    
    let data; 
    try {
      // console.log('sender email : ' + senderEmail);
      // console.log('contact message : ' + contactMessage);
      
      const emailContent = `
        New message from the contact form:
        Contact Message: \n${contactMessage}
        Sender's Email: ${senderEmail}
      `;

      data = await resend.emails.send({
        from: 'Contact form  <onboarding@resend.dev>',
        to: 'bhadauria.shivam15@gmail.com',
        subject: 'Message from contact form of portfolio.',
        // text: contactMessage as string,
        reply_to: senderEmail as string,
        text: emailContent as string,
        // react : React.createElement(ContactFormEmail, {            // CAUSES ERROR SERVER CLIENT 
        //   contactMessage: contactMessage as string, 
        //   senderEmail : senderEmail as string, 
        // })
      });
    } catch (error : unknown) {
      return {
        error: getErrorMessage(error)
      }
    }
    return {
      data
    }; 
}