import React from 'react'

type Props = {
    name: string,
    onBtnClick: (btnText: "edit" |"delete" ,id:string) => void,
    email: string,
    id: string,
    pStyle?: string  //  for getting styles from parent
}

const AdminCard = ({ name, onBtnClick, email, id, pStyle }: Props) => {
    return (
        <div className={` ${pStyle}  w-full flex flex-col sm:flex-row items-start justify-between flex-wrap bg-gray-100 py-6 px-5 gap-2 border-2 hover:bg-gray-200`}>
            <section className='sm:w-[45%] md:w-[15%] sm:text capitalize'>{name}</section>
            <section className='sm:w-[45%] md:w-[20%] sm:text'>{email}</section>
            <section className='flex items-center justify-end gap-2 w-full mt-5 md:w-[30%] md:mt-0'>
                <button className='cardBtn_submit'  onClick={() => onBtnClick("edit",id)}>Edit</button>
                <button className='cardBtn_reset'  onClick={() => onBtnClick("delete",id)}>Delete</button>
            </section>
        </div>
    )
}

export default AdminCard