"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";
import { useSectionInView } from "@/lib/hooks";

function Projects() {
  //   const {ref} = useSectionInView('Projects', 0.1);
  //     return (
  //       <section ref={ref} id='projects' className='scroll-m-24 mb-10'>
  //           <SectionHeading>My Projects</SectionHeading>
  //           <div>
  //               {
  //                   projectsData.map((project, index) => (
  //                       <React.Fragment key = {index}>
  //                           <Project {...project}/>
  //                       </React.Fragment>
  //                   ))
  //               }
  //           </div>
  //       </section>
  //     )
}

export default Projects;
