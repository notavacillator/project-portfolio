'use client'

import React, { useState, createContext, useContext} from 'react'
import { links } from '@/lib/data';

type SectionName = typeof links[number]['name']; 

type ActiveSectionContextProviderProps = {
    children : React.ReactNode,
}

type ActiveSectionContextType = {
    activeSection : SectionName; 
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    lastClickTime: number;
    setLastClickTime : React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null); 

function ActiveSectionContextProvider({children} : ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home'); 
    const [lastClickTime, setLastClickTime] = useState(0); 

    return (
        <ActiveSectionContext.Provider 
            value={{
                activeSection,
                setActiveSection,
                lastClickTime, 
                setLastClickTime
            }}> 
            {children}
        </ActiveSectionContext.Provider>
    )
}

export default ActiveSectionContextProvider

// Custom hook
export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

    if(context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context; 
}