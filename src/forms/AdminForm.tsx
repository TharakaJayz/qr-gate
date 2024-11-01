import React from 'react'
import {FieldValues, useForm } from 'react-hook-form'
import Input from '../components/Input';

type Props = {
  pStyle?:string
}

const AdminForm = ({pStyle}: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            password: "",
            passwordConfirm: ""
        }
    });

    const onSubmit = handleSubmit((data)=>{
        console.log("submitted data create admin",data);
    })

  return (
      <form className={`padding-default flex flex-col items-center justify-center w-full   ${pStyle}`} onSubmit={onSubmit}>
      <div className='grid grid-rows-6 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2   gap-2  sm:gap-y-0   w-[80%] h-[90%] sm:w-full sm:max-w-[600px] sm:items-center ' >
              <Input label="First Name" register={register} id="firstName" errors={errors} disabled={false} required ={true} />
              <Input label="Last Name" register={register} id="lastName" errors={errors} disabled={false} required={true} />
              <Input label="Email" register={register} id="email" errors={errors} disabled={false} required={true} />
              <Input label="Address" register={register} id="address" errors={errors} disabled={false} required={true} />
              <Input label="Password" register={register} id="password" errors={errors} disabled={false} required={true} />
              <Input label="Confirm Password" register={register} id="passwordConfirm" errors={errors} disabled={false} required={true} />
             
              
        </div>

          <div className='w-[80%] h-[10%] sm:w-full sm:max-w-[600px] flex items-center justify-end gap-3 '>
            <button className='form_btn'>Cancel</button>
            <button className='form_btn' type='submit'>Save</button>
         </div>

      </form>
  )
}

export default AdminForm