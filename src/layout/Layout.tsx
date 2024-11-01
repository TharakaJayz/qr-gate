import React from 'react'
import NavBar from '../components/NavBar'
import TopBar from '../components/TopBar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='w-full h-full flex flex-col  justify-start relative'>

      {/* <NavBar pStyle='navBarStyle' /> */}
      {/* <TopBar pStyle='topBarStyle' /> */}

      <div className='h-[15vh]  absolute top-0 left-0 w-full flex flex-col'>
      <NavBar pStyle='navBarStyle' />
      <TopBar pStyle='topBarStyle' />
      </div>
     
      <div className=' w-full childrenStyle mt-[15vh]'>
        {children}
      </div>
    </div>
  )
}

export default Layout