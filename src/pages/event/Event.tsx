import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Event = (props: Props) => {
    const navigation = useNavigate();
    return (
        <div className='flex items-center justify-center w-full h-full  padding-default'>
            <div className='flex flex-col items-center justify-center w-full gap-5'>
                <button className='home_btn ' onClick={() => { navigation("/event/eventPlanner") }}>
                    Create Event
                </button>
                <button className='home_btn ' onClick={() => { navigation("/event/edit") }}>
                    View/Edit Event
                </button>
            </div>
        </div>
    )
}

export default Event