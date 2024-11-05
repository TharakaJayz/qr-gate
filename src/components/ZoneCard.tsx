import React from 'react'
import { FaWindowClose } from "react-icons/fa";
type Props = {
    type:string;
    limit:number;
    onClose: (type:string) => void
    pStyle?:string
}

const ZoneCard = ({limit,onClose,type,pStyle}: Props) => {
  return (
    <div className={`w-full  h-[60%] min-h-[30px] ${pStyle} flex gap-1 justify-end`}>
        
        <section className='w-[80%] flex items-center justify-between px-3 border-2 border-gray-600 rounded-sm'>
            <span>{type}</span>
            <span>{limit}</span>
        </section>
          <button type='button' className='h-[100%] cursor-pointer' onClick={()=>{onClose(type)}}> <FaWindowClose className='h-full w-auto'/></button>
    </div>
  ) 
}

export default ZoneCard