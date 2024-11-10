import React from "react";
import EventPlannerForm from "../../forms/EventPlannerForm";

type Props = {}

const EventPlannerCreate = (props: Props) => {
    return (
        <div className='padding-default flex flex-col items-center justify-start gap-1 h-full py-3 ' >
            <h1 className='text-2xl sm:text-3xl h-[10%]' > Create Event Planner </h1>
            < EventPlannerForm pStyle='h-[90%] ' />
        </div>
    )
}

export default EventPlannerCreate