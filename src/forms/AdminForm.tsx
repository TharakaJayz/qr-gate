import React from 'react'
import {FieldValues, useForm } from 'react-hook-form'

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
      <div className='padding-default'>AdminForm</div>
  )
}

export default AdminForm