import React from 'react'
import AdminForm from '../../forms/AdminForm'

type Props = {}

const AdminCreate = (props: Props) => {
   
  return (
      <div className='padding-default flex flex-col items-center justify-start gap-1 h-full py-3 '>

        <h1 className='text-2xl sm:text-3xl h-[10%]'>Create Admin</h1>
        <AdminForm  pStyle='h-[90%] '  />
      </div>
  )
}

export default AdminCreate