'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';


const Experience : React.FC = () => {
    const {ref} =  useSectionInView('Experience');

    return (
    <section ref= {ref} id='experience' className='scroll-mt-28'>
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline animate={ true } lineColor=''>
            {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05",
                                padding: "1.3rem 2rem",
                                textAlign: "left"
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af", 
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: "white", 
                                fontSize: "1.5rem",
                            }}
                            visible={ true }
                        >
                            <h3 className='font-semibold capitalize'>{item.title}</h3>
                            <p className='font-normal !mt-0'>{item.location}</p>
                            <p className='text-gray-600 !font-normal !mt-1'>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                    ))
            }
        </VerticalTimeline>
    </section>
  )
}

export default Experience