import {useEffect} from 'react';
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export function useSectionInView(){
    const {ref,  inView}= useInView({
        threshold: 0.75,
    }); 
    const {setActiveSection, lastClickTime} = useActiveSectionContext();
    
    useEffect(() => {
      if(inView && Date.now() - lastClickTime > 1000){
          setActiveSection('About');
      }
      return () => {
      }
    }, [inView, setActiveSection, lastClickTime])
    
    return  {
        ref
    }
}