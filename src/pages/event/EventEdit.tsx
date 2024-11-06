
import { useNavigate } from 'react-router-dom'
import EventCard from '../../components/EventCard'

type Props = {}

const EventEdit = (props: Props) => {
    const navigation = useNavigate();
    const handleCardClick = (btnText: "edit" | "delete", id: string) => {
        if (btnText === 'edit') {
            navigation(`${id}`)
        }
        if (btnText === 'delete') {

        }
        console.log("btn txt", btnText);
        console.log("id", id);
    }
    return (
        <div className='padding-default flex flex-col items-center justify-start gap-1 h-full pt-3 sm:py-3   '>

            <h1 className='text-2xl sm:text-3xl h-[10%] '>View Event</h1>
            <div className='w-full h-[90%] '>
                <section className='w-full pt-2 sm:pt-5 sm:pb-5 hidden sm:flex items-center justify-between md:justify-start gap-2 px-5 md:px-0 md:gap-0 h-[10%]'>
                    <span className='text-sm w-[50%] sm:w-[30%]   md:w-[25%]   '>Title</span>
                    <span className='text-sm w-[50%] sm:w-[30%]  md:w-[25%]     md:text-left '>Date</span>
                    <span className='text-sm w-[50% sm:w-[30%]  md:w-[25%]    md:text-left  '>Location</span>
                    <span className='text-sm w-[50%] md:w-[25%] border-2 text-center md:text-left opacity-0 sm:hidden md:flex'>Email</span>
                </section>

                <section className='w-full max-h-[90%]  overflow-y-scroll  flex flex-col gap-2 sm:pt-0 border-2 '>
                    <EventCard onBtnClick={handleCardClick} date="2024-05-20"
                        location='location'
                        title='title'

                        id='id1'
                        pStyle='px-10'
                    />
                    <EventCard onBtnClick={handleCardClick} date="date"
                        location='location'
                        title='title'

                        id='id1'
                        pStyle='px-10'
                    />
                    <EventCard onBtnClick={handleCardClick} date="date"
                        location='location'
                        title='title'

                        id='id1'
                        pStyle='px-10'
                    />

                </section>
            </div>
        </div>
    )
}

export default EventEdit