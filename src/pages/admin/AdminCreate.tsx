import React from 'react'
import AdminForm from '../../forms/AdminForm'

type Props = {}

const AdminCreate = (props: Props) => {
   
  return (
      <div className='padding-default flex flex-col items-center justify-start gap-10 '>

        <h1 className='text-2xl'>Create Admin</h1>
        <AdminForm   />
      </div>
  )
}

export default AdminCreate