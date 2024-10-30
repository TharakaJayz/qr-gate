import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Props = {}

export type LoginFormData = {
    email: string
    password: string;
}


const Login = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
    const navigation = useNavigate();
    const onSubmit = handleSubmit((data) => {
        console.log("submittted data",data);
        if(data){
            navigation("/home")
        }
        // neeed to access API
    })
    return (
        <div className='bg-primary w-full h-full flex justify-center items-center'>


            <div className='bg-white rounded-xl py-[10vh] px-[5vw] flex flex-col items-center justify-center gap-10'>
                <h3 className='font-semibold text-2xl w-full text-left'>Login</h3>
                <form className='flex flex-col justify-start items-center gap-6 ' onSubmit={onSubmit}>
                    <section className='flex flex-col gap-5 '>
                        <div className='w-full flex flex-col gap-2'>
                            <input type="email" className=' border-b-2 outline-none placeholder:text-gray-500 border-gray-200' placeholder='Email' {...register("email", { required: "This is required field" })} />
                            {errors.email && (
                                <span className='text-red-500 text-sm'>{errors.email.message}</span>
                            )}
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <input type="password" className=' border-b-2 outline-none border-gray-200 placeholder:text-gray-500' placeholder='Password' {...register("password", { required: "This is required field" })} />
                            {errors.password && (
                                <span className='text-red-500 text-sm'>{errors.password.message}</span>
                            )}
                        </div>
                        
                       
                    </section>
                    <div className='flex items-center justify-start w-full'>
                        <button className='btn-submit' >Submit</button>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login