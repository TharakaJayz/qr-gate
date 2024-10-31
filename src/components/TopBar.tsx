import clsx from 'clsx';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
    pStyle?: string
}

const TopBar = ({ pStyle }: Props) => {
    const navigation = useNavigate();

    const [selectedTitle, setSelectedTitle] = useState<"admin" | "event">("admin");


    return (
        <div className={` ${pStyle}  w-full  flex justify-end items-center gap-5 padding-default border-b-2 border-b-gray-300 sm:text-xl`}>

            <span className={clsx(`cursor-pointer`, selectedTitle === "admin" && "font-semibold")} onClick={() => { console.log("clicked admin"); setSelectedTitle("admin"); navigation("/admin") }}>Admin</span>
            <span className={clsx(`cursor-pointer`, selectedTitle === "event" && "font-semibold")} onClick={() => { console.log("clicked event"); setSelectedTitle("event"); navigation("/event") }}>Event</span>

        </div>
    )
}

export default TopBar