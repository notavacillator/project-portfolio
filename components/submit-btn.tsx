import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus} from 'react-dom';

function SubmitBtn() {
const  { pending } = useFormStatus(); 

  return (
    <button 
    className = 'group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-800 \
     text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 hover:shadow-md active:scale-95 hover:bg-gray-950 \
     disabled:bg-opacity-60 disabled:scale-100 dark:bg-white dark:bg-opacity-20' 
    type="submit" disabled={pending}>
        {
            pending ? ( 
                <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'>
                    
                </div> 
            ) : (
                <>
                    Submit 
                    <FaPaperPlane className='opacity-90 text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 ease-out'/>
                </>
               )
        }
         </button>
  )
}

export default SubmitBtn