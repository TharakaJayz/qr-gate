import React from 'react'
import {FieldValues, useForm } from 'react-hook-form'
import Input from '../components/Input';

type Props = {}

const AdminForm = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            firstName: "",
            LastName: "",
            email: "",
            address: "",
            password: "",
            passwordConfirm: ""
        }
    });

  return (
      <div className='padding-default flex flex-col items-center justify-center w-full'>
        <section className='grid grid-rows-6 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 py-5  gap-5  w-[80%] sm:w-full sm:max-w-[600px]'>
              <Input label="First Name" register={register} id="firstName" errors={errors} disabled={false} />
              <Input label="Last Name" register={register} id="LastName" errors={errors} disabled={false} />
              <Input label="Email" register={register} id="firstName" errors={errors} disabled={false} />
              <Input label="Address" register={register} id="firstName" errors={errors} disabled={false} />
              <Input label="Password" register={register} id="firstName" errors={errors} disabled={false} />
              <Input label="Confirm Password" register={register} id="firstName" errors={errors} disabled={false} />
             
              
        </section>

      </div>
  )
}

export default AdminForm