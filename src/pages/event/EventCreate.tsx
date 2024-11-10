import React from 'react'
import EventForm from '../../forms/EventForm'
import { useLocation } from 'react-router-dom'

const EventCreate = () => {
    const location = useLocation();
    const { plannerId } = location.state || "";
    const defaultEvent = {
        title: "",
        date: "",
        location: "",
        plannerId
    }
    return (
        <div className='h-full'>
            <div className='padding-default flex flex-col items-center justify-start gap-1 h-full py-3   '>

                <h1 className='text-2xl sm:text-3xl h-[10%]'>Create Event</h1>
                <EventForm event={defaultEvent} />
            </div>
        </div>
    )
}

export default EventCreate