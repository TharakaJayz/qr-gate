import clsx from 'clsx';
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
type Props = {
  pStyle?:string
}

const NavBar = ({pStyle}: Props) => {
  const [menuLogic, setMenuLogic] = useState<boolean>(false);


  const toggleMenuLogic = () => {
    setMenuLogic((value) => !value)
  }


  return (
    <div className={`${pStyle} flex justify-between items-center padding-default  bg-primary font-sans `}>
      <h1 className='font-extralight text-xl sm:text-2xl md:text-3xl text-white'>Dashboard</h1>
      <span className='relative'>
        <FaUserCircle className='text-white text-3xl sm:text-[2.5rem] lg:text-[3rem] hover:cursor-pointer' onClick={toggleMenuLogic} />
        <div className={clsx(`absolute top-[120%] right-0 w-[30vw] h-0 opacity-0  bg-gray-50 border transition-all rounded-lg px-2 py-5 pb-2 flex flex-col items-start justify-end text-gray-500`, menuLogic && "min-h-[10vh] opacity-100")}>
          Logout
        </div>
      </span>

    </div>
  )
}

export default NavBar