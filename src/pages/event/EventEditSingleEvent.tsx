import React from 'react'
import { useParams } from 'react-router-dom';
import EventForm from '../../forms/EventForm';

type Props = {}

const EventEditSingleEvent = (props: Props) => {
    const params = useParams();
    console.log("params", params.id);
    return (
        <div className='padding-default flex flex-col items-center justify-start gap-1 h-full py-3 '>
            <h1 className='text-2xl sm:text-3xl h-[10%]'>Edit Event</h1>
            <EventForm eventZones={[{limit:500,type:"outDoor"}]}  event={{location:"gampaha",date:"20245-01-20",plannerId:"34",title:"FIT SIXES" ,limit:500 ,type:"match"}}    />
            </div>
    )
}

export default EventEditSingleEvent