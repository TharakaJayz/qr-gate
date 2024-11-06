import React from 'react'

type Props = {
    title: string,
    location: string,
    onBtnClick: (btnText: "edit" | "delete", id: string) => void,
    date: string,
    id: string,
    pStyle?: string  //  for getting styles from parent
}

const EventCard = ({ title, onBtnClick, date,location, id, pStyle }: Props) => {
    return (
        <div className={` ${pStyle}  w-full flex flex-col sm:flex-row items-start justify-between flex-wrap bg-gray-100 py-6 px-5 gap-2 md:gap-0 md:px-0 border-2 hover:bg-gray-200 `}>
            <section className='sm:w-[30%]  md:w-[25%]   sm:text '>{title}</section>
            <section className='sm:w-[30%]  md:w-[25%]   sm:text'>{date}</section>
            <section className='sm:w-[30%]   md:w-[25%] sm:text'>{location}</section>
            <section className='flex items-center justify-end gap-2 w-full mt-5 md:w-[25%] md:mt-0 '>
                <button className='cardBtn_submit' onClick={() => onBtnClick("edit", id)}>Edit</button>
                <button className='cardBtn_reset' onClick={() => onBtnClick("delete", id)}>Delete</button>
            </section>
        </div>
    )
}

export default EventCard