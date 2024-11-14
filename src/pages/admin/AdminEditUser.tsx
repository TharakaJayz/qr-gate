import React from 'react'
import { useParams } from 'react-router-dom'
import AdminForm, { AdminInterface } from '../../forms/AdminForm';
import * as apiClient from "../../api-client";
import { useQuery } from 'react-query';
import Layout from '../../layout/Layout';

type Props = {}


const AdminEditUser = (props: Props) => {

    const params = useParams();
    
    const { data: adminData, isLoading  }: any = useQuery("fetchAdminById", () =>
        apiClient.fetchAdminById(params.id!), {
        enabled: !!params.id   // query will run onlly if enable filed has true value 
    }
    );
    if (!adminData) {

        return (<div className='w-full h-full flex  justify-center items-center'> <span>No Any Admins For This id</span></div>)
    }

    const onSubmit = (data: AdminInterface) => {
        console.log("admin creation data on submission", data);
    }

    return (
        <div className='padding-default flex flex-col items-center justify-start gap-1 h-full py-3 '>

            <h1 className='text-2xl sm:text-3xl h-[10%]'>Edit Admin</h1>
            <AdminForm isLoading={isLoading} pStyle='h-[90%]' admin={{ firstName: adminData.data.name.split(" ")[0], lastName: adminData.data.name.split(" ")[1] || "", email: adminData.data.email, address: adminData.data.address || "", password: "", passwordConfirm: ""}} onFormSave={onSubmit} editMode ={true}/>
        </div>
    )
}

export default AdminEditUser