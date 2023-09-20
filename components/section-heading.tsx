import React from 'react'

type SectionHeadingProps = {
    children : React.ReactNode; 
}

function SectionHeading({children} : SectionHeadingProps ) {
  return (
    <h2 className='capitalize text-3xl font-medium mb-8'>{children}</h2>
  )
}

export default SectionHeading