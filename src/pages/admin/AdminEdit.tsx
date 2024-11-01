import React from 'react'
import AdminCard from '../../components/AdminCard'

type Props = {}

const AdminEdit = (props: Props) => {
    const handleCardClick = (btnText:string,id:string) =>{

    }
  return (
      <div className='padding-default flex flex-col items-center justify-start gap-1 h-full pt-3 sm:py-3   '>

          <h1 className='text-2xl sm:text-3xl h-[10%] '>View Admin</h1>
          <div className='w-full h-[90%] '>
            <section  className='w-full pt-2 sm:pt-5 sm:pb-5 hidden sm:flex items-center justify-between md:justify-start gap-5 px-10 h-[10%]'>
                  <span className='text-sm w-[50%]  md:w-[30%]'>Full Name</span>
                  <span className='text-sm w-[50%] md:w-[30%] text-center md:text-left '>Email</span>
            </section>

            <section className='w-full h-[90%]  overflow-y-scroll  flex flex-col gap-2 sm:pt-0 border-2 '>
                <AdminCard  name='Tharaka prabhath' onBtnClick={handleCardClick} email='tharakaprabhath300@gmail.com' id='id1' 
                pStyle='px-10'
                />
                <AdminCard  name='Tharaka prabhath' onBtnClick={handleCardClick} email='tharakaprabhath300@gmail.com' id='id1' 
                pStyle='px-10'
                />
                <AdminCard  name='Tharaka prabhath' onBtnClick={handleCardClick} email='tharakaprabhath300@gmail.com' id='id1' 
                pStyle='px-10'
                />
                <AdminCard  name='Tharaka prabhath' onBtnClick={handleCardClick} email='tharakaprabhath300@gmail.com' id='id1' 
                pStyle='px-10'
                />
                <AdminCard  name='Tharaka prabhath' onBtnClick={handleCardClick} email='tharakaprabhath300@gmail.com' id='id1' 
                pStyle='px-10'
                />
                <AdminCard  name='Tharaka prabhath' onBtnClick={handleCardClick} email='tharakaprabhath300@gmail.com' id='id1' 
                pStyle='px-10'
                />
            </section>
          </div>
      </div>
  )
}

export default AdminEdit