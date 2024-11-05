import React from 'react'
import EventForm from '../../forms/EventForm'

type Props = {}

const EventCreate = ({ }: Props) => {
    return (
        <div className='h-full'>
            <div className='padding-default flex flex-col items-center justify-start gap-1 h-full py-3   '>

            <h1 className='text-2xl sm:text-3xl h-[10%]'>Create Event</h1>
            <EventForm  />
            </div>
        </div>
    )
}

export default EventCreate