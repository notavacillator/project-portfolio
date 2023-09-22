'use client'

import React, {useEffect} from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from '@/components/project'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

function Projects() {
    const {ref,  inView}= useInView({
        threshold: 0.5,
    }); 
    const {setActiveSection, lastClickTime} = useActiveSectionContext();
    
    useEffect(() => {
      if(inView && Date.now() - lastClickTime > 1000){
          setActiveSection('Projects');
      }
      return () => {
      }
    }, [inView, setActiveSection, lastClickTime])
    
  return (
    <section ref={ref} id='projects' className='scroll-m-24'>
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key = {index}>
                        <Project {...project}/>
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}


export default Projects