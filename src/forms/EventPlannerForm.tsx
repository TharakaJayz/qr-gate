import React, { useState, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../components/Input";
import { createEventPlanner } from "../service/eventPlannerService";
import { useNavigate } from "react-router-dom";
import * as apiClient from "../api-client";
import { useMutation } from "react-query";
import Swal from "sweetalert2";

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

    const mutation = useMutation(apiClient.createEventPlanner, {
        onSuccess: (response) => {
            // need to modifyyyyyyyyyyyyyyyy
            console.log("Response from event planner creation",response);
            setErrorMessage(null);
            console.log("event planner creation success full");
            // alert("Event Planner create successfully!");
            Swal.fire({
                title: "Done!",
                text: "eventPlanner created successfully!",
                icon: "success",
                confirmButtonText: "Ok"
            }).then(() => {
                navigate("/event/createEvent", { state: { id: response.event_planner.id } });
                reset();

            })
            
            // navigation("/admin");
        },
        onError: (error: Error) => {
            console.log("event planner creation error", error);
            navigate("/event/createEvent", { state: { id: "" } });
        }
         
    })

    const onSubmit = handleSubmit((data) => {

        
        mutation.mutate({ name: data.name, email: data.email, password: data.password, passwordConfirm: data.passwordConfirm })
        // const plannerId = response.data.id;


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
                <button className='form_btn capitalize' onClick={() => reset(eventPlanner)} disabled={isSubmitting}>Cancel</button>
                <button className='form_btn capitalize' type='submit' disabled={isSubmitting}>{mutation.isLoading ? 'saving...' : 'save'}</button>
            </div>
        </form>
    )
}

export default EventPlannerForm