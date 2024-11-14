import React from 'react'
import { useParams } from 'react-router-dom';
import EventForm, { Event } from '../../forms/EventForm';
import * as apiClient from "../../api-client";
import { useQuery } from 'react-query';

type Props = {}

const EventEditSingleEvent = (props: Props) => {
    const params = useParams();
    console.log("params", params.id);
    const { data: eventData }: any = useQuery("fetchEventById", () =>
        apiClient.fetchEventById(params.id!), {
        enabled: !!params.id   // query will run only if enable filed has true value 
    }
    );

    if(!eventData){
        return (<div className='w-full h-full flex  justify-center items-center'> <span>No Any Events For This id</span>
            </div>)
    }
    const onSubmit = (data: Event) => {
    }
    return (
        <div className='padding-default flex flex-col items-center justify-start gap-1 h-full py-3 '>
            <h1 className='text-2xl sm:text-3xl h-[10%]'>Edit Event</h1>
           
            <EventForm eventZones={eventData.result.zones}  event={{...eventData.result , date:eventData.result.date.split("T")[0]}}  onSave={onSubmit}   />
            {/* <EventForm eventZones={[{limit:500,type:"outDoor"}]}  event={{location:"gampaha",date:"20245-01-20",plannerId:"34",title:"FIT SIXES" ,limit:500 ,type:"match"}}  onSave={onSubmit}   /> */}
            </div>
    )
}

export default EventEditSingleEvent