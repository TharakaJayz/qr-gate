import React, { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import Input from '../components/Input';
import clsx from 'clsx';
import ZoneCard from '../components/ZoneCard';
import { createEvent } from '../service/eventService';


export interface EventCreateInterface {
    title: string;
    date: string;
    location: string;
    plannerId: string;
    type?: string;
    limit?: number
}

type Props = {
    pStyle?: string;  // style from parent  
    event?: EventCreateInterface;
    eventZones?: ZoneDetail[];
    onSumission?:(data:EventCreateInterface & ZoneDetail[]) => void;
}

type ZoneDetail = {
    type: string,
    limit: number
}


const EventForm = ({ pStyle, event, eventZones }: Props) => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FieldValues>(
        {
            defaultValues: {
                title: event?.title || "",
                date: event?.date || "",
                location: event?.location || "",
                plannerId: event?.plannerId || "",
            }
        }
    );

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    useEffect(() => {
        reset(event);
        if (eventZones) {
            setZoneDetails(eventZones);
        }
    },
        [event, reset, eventZones])

    const [zoneState, setZoneState] = useState({
        type: "",
        limit: 0
    })

    // let zoneDetails:ZoneDetail[] =[{limit:67,type:"VIP"}, {limit:500,type:"FC"}]
    const [zoneDetails, setZoneDetails] = useState<ZoneDetail[]>(eventZones ? eventZones : [])
    const addBtnHandler = () => {
        console.log("addBtnHandler clicked");
        console.log("zone status to push", zoneState);
        setZoneDetails([...zoneDetails, zoneState])
        console.log("zoneDetails after change", zoneDetails);
    }


    if (!event?.plannerId) {
        setErrorMessage("planner id is required.");
        return;
    }
    const onSubmit = handleSubmit(async (data) => {
        const eventData = {
            title: data.title,
            date: data.date,
            location: data.location,
            plannerId: event?.plannerId,
            zones: zoneDetails,
        };
        try {
            setErrorMessage(null);
            const response = await createEvent(eventData);
            console.log("Event create successfully: ", response.data);
            alert("Event create successfully!");
            reset();
            setZoneDetails([]);
        } catch (error: any) {
            const message = error.response?.data?.message || "Error creating event. please try again";
            setErrorMessage(message);
            console.error("Error creating Event: ", error);
        }
    })

    const zoneCardHandler = ((type: string) => {
        setZoneDetails(zoneDetails.filter((zone) => zone.type !== type))
    })
    return (
        <form className={`w-full h-auto   ${pStyle} flex flex-col justify-start items-start px-5 py-5 gap-5 `} onSubmit={onSubmit}>
            <section className='w-full  sm:grid sm:grid-cols-2 sm:grid-rows-2 flex flex-col gap-2'>
                <Input label="Title" register={register} id="title" errors={errors} disabled={false} required={true} />
                <Input label="Date" register={register} id="date" errors={errors} disabled={false} required={true} />
                <Input label="Location" register={register} id="location" errors={errors} disabled={false} required={true} />
                <Input label="PlannerId" register={register} id="plannerId" errors={errors} disabled={true} required={true} />
            </section>
            <section className='w-full flex flex-col gap-2  md:flex-row md:justify-between'>
                <div className='flex flex-col gap-2  md:w-[50%] '>
                    <label className='text-sm font-semibold leading-6 text-gray-900 '>Zone</label>
                    <div className='flex flex-col w-full  gap-2 '>
                        <div className='flex flex-col w-full  gap-2'>
                            <div className='flex w-full justify-end items-center gap-2 '>
                                <label className='text-sm font-semibold leading-6 text-gray-900 '>Type</label>
                                <input type="text" onChange={(e) => { setZoneState({ ...zoneState, type: e.target.value }) }} className={clsx(`
                        form-input 
                    block  
                    w-[60%]
                    rounded-md
                    border-0
                    py-1.5
                    text-gray-900
                    shadow-sm
                    ring-1
                    ring-inset
                    ring-gray-300
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-sky-600
                    sm:text-sm
                    sm:leading-6
                pl-2`)} />
                            </div>
                            <div className='flex w-full justify-end items-center gap-2'>
                                <label className='text-sm font-semibold leading-6 text-gray-900 '>Limit</label>
                                <input type="number" onChange={(e) => { setZoneState({ ...zoneState, limit: parseInt(e.target.value) }) }} className={clsx(`
                        form-input 
                    block  
                    w-[60%]
                    rounded-md
                    border-0
                    py-1.5
                    text-gray-900
                    shadow-sm
                    ring-1
                    ring-inset
                    ring-gray-300
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-sky-600
                    sm:text-sm
                    sm:leading-6
                pl-2`)} />
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-end gap-1'>
                            <button className='border-2 w-[30%] rounded-md border-[#67ADE5] text-[#67ADE5] '

                                onClick={addBtnHandler}

                                type='button' >Add</button>
                            <button className='border-2 w-[30%] rounded-md border-[#67ADE5] text-[#67ADE5]   ' onClick={
                                () => { setZoneState({ limit: 0, type: "" }) }
                            } type='reset'>Clear</button>
                        </div>
                    </div>

                </div>
                <div className='w-full flex flex-col gap-2 md:w-[30%] md:h-[60%] overflow-y-scroll'>

                    {zoneDetails.map((zone, index) => <ZoneCard onClose={zoneCardHandler} limit={zone.limit} type={zone.type} key={index} />)}
                </div>
            </section>
            <section className='w-full flex justify-center gap-2 items-center'>
                <button className='form_btn'>Save</button>
                <button className='form_btn'>Cancel</button>
            </section>
        </form>
    )
}

export default EventForm;