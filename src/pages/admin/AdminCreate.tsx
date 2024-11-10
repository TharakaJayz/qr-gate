import React from 'react'
import AdminForm, { AdminInterface } from '../../forms/AdminForm'
import * as apiClient from "../../api-client";
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
type Props = {}

const AdminCreate = (props: Props) => {
  const navigation = useNavigate()
  const mutation = useMutation(apiClient.AdminCreate, {
    onSuccess: () => {
      console.log("admin creation success full");
      navigation("/admin");
    },
    onError: (error: Error) => {
      console.log("login error", error);
    }
  })
  const onSubmit = (data: AdminInterface) =>{
    console.log("admin creation data on submission",data);
    mutation.mutate(data); // accessing backend
  }

  return (
    <div className='padding-default flex flex-col items-center justify-start gap-1 h-full py-3 '>
      <h1 className='text-2xl sm:text-3xl h-[10%]'>Create Admin</h1>
      <AdminForm pStyle='h-[90%] ' onFormSave={onSubmit} />
    </div>
  )
}

export default AdminCreate