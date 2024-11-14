import React, { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import Input from '../components/Input';
import { createAdmin } from '../service/adminService';

export interface AdminInterface {
  firstName?: string,
  lastName?: string,
  email: string,
  address: string,
  password: string,
  passwordConfirm: string
  role?: "admin",
  name?: string
}

type Props = {
  pStyle?: string
  admin?: AdminInterface,
  editMode?:boolean,
  onFormSave:(data:AdminInterface) => void;
  isLoading?:boolean
}

const AdminForm = ({ pStyle, admin, onFormSave,editMode,isLoading }: Props) => {

  const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      password: "",
      passwordConfirm: "",
      role: "admin"
    }
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    reset(admin)
  },
    [admin, reset]);

  const onSubmit = handleSubmit(async (data) => {
    console.log("admin create data", data);
    const dataToSubmit: AdminInterface = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      address: data.address,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      role: "admin"
    }

    console.log("admin create data to sumit", dataToSubmit);
    
    onFormSave(dataToSubmit);


    // try {
    //   setErrorMessage(null);
    //   const response = await createAdmin(data as AdminInterface);
    //   console.log("Admin data saved successfully: ", response.data);
    //   alert("Admin create successfully!");
    //   reset();
    // } catch (error: any) {
    //   const message = error.response?.data?.message || "Error saving admin data. Please try again.";
    //   setErrorMessage(message);
    //   console.error("Error saving admin: ", error);
    // }
  });

  return (
    <form className={`padding-default flex flex-col items-center justify-center w-full gap-2  ${pStyle}`} onSubmit={onSubmit}>
      <div className='grid grid-rows-6 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2   gap-2  sm:gap-y-2   w-[80%] h-[90%] sm:w-full sm:max-w-[600px] sm:items-center ' >
        <Input label="First Name" register={register} id="firstName" errors={errors} disabled={isLoading} required={true} />
        <Input label="Last Name" register={register} id="lastName" errors={errors} disabled={isLoading} required={true} />
        <Input label="Email" register={register} id="email" errors={errors} disabled={isLoading} required={true} />
        <Input label="Address" register={register} id="address" errors={errors} disabled={isLoading} required={true} />
        {!editMode && (<Input type='password' label="Password" register={register} id="password" errors={errors} disabled={isLoading} required={true} />)}
        {!editMode && (<Input label="Confirm Password" register={register} id="passwordConfirm" errors={errors} type='password' disabled={isLoading} required={true} />)}
       
       
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className='w-[80%] h-[10%] sm:w-full sm:max-w-[600px] flex items-center justify-end gap-3 '>
        <button className='form_btn' type='reset' onClick={() => reset(admin)} disabled={isLoading}>Cancel</button>
        <button className='form_btn' type='submit' disabled={isLoading}>{isLoading ? 'Saving...' : 'Save'}</button>
      </div>
    </form>
  )
}

export default AdminForm