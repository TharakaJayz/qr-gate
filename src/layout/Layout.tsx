import React from 'react'
import NavBar from '../components/NavBar'
import TopBar from '../components/TopBar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='w-full h-full flex flex-col  justify-start'>
      <NavBar pStyle='navBarStyle' />
      <TopBar pStyle='topBarStyle' />
      <div className=' w-full childrenStyle '>
        {children}
      </div>
    </div>
  )
}

export default Layout