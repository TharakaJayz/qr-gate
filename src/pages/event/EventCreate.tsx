import React from 'react'
import EventForm, { Event } from '../../forms/EventForm'
import { useLocation } from 'react-router-dom'
import * as apiClient from "../../api-client";
import { useMutation } from 'react-query';
const EventCreate = () => {
    const location = useLocation();
    const { id } = location.state || "";
    console.log("plannerid",id);
    const mutation  = useMutation(apiClient.createEvent,{
        onSuccess:(response)=>{
            console.log("event creation successful");
            console.log("event create response",response);
        },
        onError:(error:Error) =>{
            console.log("event creation error",error);
        }
    });


    const onSubmit = (data:Event) =>{
        console.log("event creation submitted data",data);
        mutation.mutate(data);
    }
    return (
        <div className='h-full'>
            <div className='padding-default flex flex-col items-center justify-start gap-1 h-full py-3   '>

                <h1 className='text-2xl sm:text-3xl h-[10%]'>Create Event</h1>
                <EventForm onSave={onSubmit} plannerId={id} />
            </div>
        </div>
    )
}

export default EventCreate