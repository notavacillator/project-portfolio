import { useEffect} from 'react';
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import type {SectionName} from '@/lib/types';

// Created custom hook for blob animation over navbar sections 
export function useSectionInView( sectionName  : SectionName, threshold = 0.75){
    const {ref,  inView}= useInView({
        threshold,
    }); 
    const {setActiveSection, lastClickTime} = useActiveSectionContext();
    
    useEffect(() => {
      if(inView && Date.now() - lastClickTime > 1000){
          setActiveSection(sectionName);
      }
      return () => {
      }
    }, [inView, setActiveSection, lastClickTime, sectionName])
    
    return  {
        ref
    }
}