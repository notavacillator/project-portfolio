'use client'

import React from 'react'
import {
    Html,
    Body,
    Head, 
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    message : string,
    senderEmail : string, 
}

function ContactFormEmail({message, senderEmail } : ContactFormEmailProps) {
  return (
   <Html>
    <Head/>
    <Preview>New message from you portfolio site</Preview>
    <Tailwind>
        <Body>
            <Container>
                <Section>
                    <Heading>You received the following message from the contact form</Heading>
                    <Text>{message}</Text>
                    <Hr/>
                    <Text>The sender's email is : {senderEmail}</Text>
                </Section>
            </Container>
        </Body>
    </Tailwind>
   </Html>
    
  )
}

export default ContactFormEmail