import clsx from 'clsx';
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
type Props = {
  pStyle?:string
}

const NavBar = ({pStyle}: Props) => {
  const [menuLogic, setMenuLogic] = useState<boolean>(false);

  const navigation = useNavigate();

  const [selectedTitle, setSelectedTitle] = useState<"admin" | "event">("admin");
  const toggleMenuLogic = () => {
    setMenuLogic((value) => !value)
  }

  return (
    <div className={`${pStyle} flex justify-between items-center padding-default  bg-primary font-sans drop-shadow-md `}>
      <h1 className='font-extralight text-xl sm:text-2xl md:text-3xl text-white cursor-pointer flex-1  ' onClick={()=>{navigation("/home")}}>Dashboard</h1>
      
      <section className='flex-1 hidden sm:flex justify-center   sm:text-xl gap-2 '>
        <span className={clsx(` text-white cursor-pointer uppercase`, selectedTitle === "admin" && "font-semibold text-blue-700 underline")} onClick={() => { console.log("clicked admin"); setSelectedTitle("admin"); navigation("/admin") }}>Admin</span>
        <span className={clsx(` text-white cursor-pointer uppercase`, selectedTitle === "event" && "font-semibold text-blue-700 underline")} onClick={() => { console.log("clicked event"); setSelectedTitle("event"); navigation("/event") }}>Event</span>
      </section>
      <span className='relative flex-1  flex justify-end'>
        <FaUserCircle className='text-white text-3xl sm:text-[2.5rem] lg:text-[3rem] hover:cursor-pointer' onClick={toggleMenuLogic} />
        <div className={clsx(`absolute top-[120%] right-0 w-[0vw] h-0 opacity-0 cursor-pointer  bg-gray-50 border transition-all rounded-lg px-2 py-5 pb-2 flex flex-col items-start justify-end text-gray-500 origin-top`, menuLogic && "min-h-[10vh] w-[300px] opacity-100")} onClick={()=> navigation("/")}>
          Logout
        </div>
      </span>

      

    </div>
  )
}

export default NavBar