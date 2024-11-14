import React, { useState } from 'react'
import AdminForm, { AdminInterface } from '../../forms/AdminForm'
import * as apiClient from "../../api-client";
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Toast from '../../components/Toast';
import Swal from 'sweetalert2';
type Props = {}

const AdminCreate = (props: Props) => {
  const navigation = useNavigate();

  const [toastMessage,setToastMessage] = useState({type:"",message:""})
 
  const mutation = useMutation(apiClient.AdminCreate, {
    onSuccess: (response) => {
      console.log("admin creation success full");
      console.log("response",response);
      setToastMessage({ message: "Admin create Successfully", type:"SUCCESS"});
      Swal.fire({
        title: "Done!",
        text: "admin created successfully!",
        icon: "success",
        confirmButtonText:"Ok"
      }).then(()=>{
        navigation("/admin");

      })
    },
    onError: (error: Error) => {
      console.log("admin creation error", error);
      setToastMessage({message:error.message,type:"ERROR"})
    }
  })
  const onSubmit = (data: AdminInterface) =>{
    console.log("admin creation data on submission",data);
    mutation.mutate(data); // accessing backend
  }

  return (
    <div className='padding-default flex flex-col items-center justify-start gap-1 h-full py-3 '>
      <h1 className='text-2xl sm:text-3xl h-[10%]'>Create Admin</h1>
      <AdminForm pStyle='h-[90%] ' onFormSave={onSubmit} isLoading ={mutation.isLoading} />
      {toastMessage.message.length !==0 &&(
        <Toast  message={toastMessage.message} type={toastMessage.type} onClose={()=>{setToastMessage({message:"",type:""})}} />
      )
       
      }
    </div>
  )
}

export default AdminCreate