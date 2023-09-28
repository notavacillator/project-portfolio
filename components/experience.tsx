'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import ThemeContextProvider, { useTheme } from '@/context/theme-context'

const Experience : React.FC = () => {
    const {ref} =  useSectionInView('Experience');
    const {theme} = useTheme(); 
    return (
    <section ref = {ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline animate={ true } lineColor=''>
            {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: theme === 'light' 
                                            ? "#f3f4f6" 
                                            : 'rgba(255, 255, 255, 0.1)',
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05",
                                padding: "1.3rem 2rem",
                                textAlign: "left"
                            }}
                            contentArrowStyle={{
                                borderRight: theme === 'light' 
                                            ?  "0.4rem solid #9ca3af" 
                                            :  '0.4rem solid rgba(255, 255, 255, 0.5)', 
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: theme === 'light' 
                                            ? "white" 
                                            : "rgba(255, 255, 255, 0.5)", 
                                fontSize: "1.5rem",
                            }}
                            visible={ true }
                        >
                            <h3 className='font-semibold capitalize'>{item.title}</h3>
                            <p className='font-normal !mt-0'>{item.location}</p>
                            <p className='text-gray-600 dark:text-white/60 !font-normal !mt-1'>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                    ))
            }
        </VerticalTimeline>
    </section>
  )
}

export default Experience