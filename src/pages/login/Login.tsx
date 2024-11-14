import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as apiClient from "../../api-client";
import { useMutation } from 'react-query';
import Toast from '../../components/Toast';
type Props = {}

export type LoginFormData = {
    email: string
    password: string;
}


const Login = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
    const [error,setError] = useState<string>("")

    const navigation = useNavigate();
    // acces backend

    const mutation = useMutation(apiClient.login, {
        onSuccess: (data) => {
            setError("")
            
            navigation("/home")
        },
        onError: (error: Error)=> {
            console.log("login error",error);
            setError(error.message)
            
            // alert(error)
        }
    })
    const onSubmit = handleSubmit((data) => {
        // console.log("submittted data", data);
        if (data) {
            mutation.mutate(data);
            
        }
        // neeed to access API
    })
    return (

        <div className='bg-primary w-full h-full flex justify-center items-center'>


            <div className='bg-white rounded-xl py-[10vh] px-[5vw] flex flex-col items-center justify-center gap-10 w-full mx-2 ssm:min-w-[350px] ssm:w-auto ssm:px-5  '>
                <h3 className='font-semibold text-2xl w-[100%] text-left '>Login</h3>
                <form className='flex flex-col justify-start items-start gap-6   w-[100%] ' onSubmit={onSubmit}>
                    <section className='flex flex-col gap-5 w-full '>
                        <div className='w-full flex flex-col gap-2 '>
                            <input type="email" className=' max-w-[300px] w-full border-b-2 outline-none placeholder:text-gray-500 border-gray-200' placeholder='Email' {...register("email", { required: "This is required field" })} />
                            {errors.email && (
                                <span className='text-red-500 text-sm'>{errors.email.message}</span>
                            )}
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <input type="password" className=' max-w-[300px] w-full border-b-2 outline-none border-gray-200 placeholder:text-gray-500' placeholder='Password' {...register("password", { required: "This is required field" })} />
                            {errors.password && (
                                <span className='text-red-500 text-sm'>{errors.password.message}</span>
                            )}
                        </div>


                    </section>
                    <div className='flex items-center justify-start w-full '>
                        <button className='btn-submit' >Submit</button>

                    </div>
                </form>
            </div>
            {error.length !==0 && (
                <Toast
                    message={error}
                    type={"ERROR"}
                    onClose={()=>{setError("");}}
                />
            )}

        </div>
    )
}

export default Login