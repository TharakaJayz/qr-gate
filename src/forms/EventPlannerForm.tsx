import React, { useState, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../components/Input";
import { createEventPlanner } from "../service/eventPlannerService";
import { useNavigate } from "react-router-dom";

export interface EventPlannerInterface {
    name: string,
    email: string,
    password: string,
    passwordConfirm: string,
}

type Props = {
    pStyle?: string
    eventPlanner?: EventPlannerInterface
}

const EventPlannerForm = ({ pStyle, eventPlanner }: Props) => {
    const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }
    });

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        reset(eventPlanner)
    }, [eventPlanner, reset]);

    const onSubmit = handleSubmit(async (data) => {
        try {
            setErrorMessage(null);
            const response = await createEventPlanner(data as EventPlannerInterface);
            const plannerId = response.data.id;
            console.log("Event Planner saved successfully: ", response.data);
            alert("Event Planner create successfully!");
            navigate("/event/create", { state: { plannerId } });
            reset();
        } catch (error: any) {
            const message = error.response?.data?.message || "Error savig event planner data. Please try again.";
            setErrorMessage(message);
            console.error("Error saving event planner: ", error);
        }
    });

    return (
        <form className={`padding-default flex flex-col items-center justify-center w-full gap-2  ${pStyle}`} onSubmit={onSubmit}>
            <div className='grid grid-rows-6 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2   gap-2  sm:gap-y-2   w-[80%] h-[90%] sm:w-full sm:max-w-[600px] sm:items-center ' >
                <Input label="Name" register={register} id="name" errors={errors} disabled={isSubmitting} required={true} />
                <Input label="Email" register={register} id="email" errors={errors} disabled={isSubmitting} required={true} />
                <Input type='password' label="Password" register={register} id="password" errors={errors} disabled={isSubmitting} required={true} />
                <Input label="Confirm Password" register={register} id="passwordConfirm" errors={errors} type='password' disabled={isSubmitting} required={true} />
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className='w-[80%] h-[10%] sm:w-full sm:max-w-[600px] flex items-center justify-end gap-3 '>
                <button className='form_btn' onClick={() => reset(eventPlanner)} disabled={isSubmitting}>Cancel</button>
                <button className='form_btn' type='submit' disabled={isSubmitting}>{isSubmitting ? 'saving...' : 'save'}</button>
            </div>
        </form>
    )
}

export default EventPlannerForm