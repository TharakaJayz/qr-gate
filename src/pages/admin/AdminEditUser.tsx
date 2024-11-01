import React from 'react'
import { useParams } from 'react-router-dom'
import AdminForm from '../../forms/AdminForm';

type Props = {}

const AdminEditUser = (props: Props) => {
    const params = useParams();
    console.log("params",params.id);
  return (
      <div className='padding-default flex flex-col items-center justify-start gap-1 h-full py-3 '>

          <h1 className='text-2xl sm:text-3xl h-[10%]'>Edit Admin</h1>
          <AdminForm pStyle='h-[90%] ' admin={{firstName:"tharaka",lastName:"prabhath",email:"th@gmail.com",address:"address",password:"12",passwordConfirm:"12"}} />
      </div>
  )
}

export default AdminEditUser