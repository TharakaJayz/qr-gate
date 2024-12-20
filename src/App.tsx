import React from 'react'
import Login from './pages/login/Login'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Admin from './pages/admin/Admin'
import Event from './pages/event/Event'
import AdminCreate from './pages/admin/AdminCreate'
import AdminEdit from './pages/admin/AdminEdit'
import AdminEditUser from './pages/admin/AdminEditUser'
import EventCreate from './pages/event/EventCreate'
import EventEdit from './pages/event/EventEdit'
import EventEditSingleEvent from './pages/event/EventEditSingleEvent'

type Props = {}

const App = (props: Props) => {
  return (
    <div className='font-sans w-full h-[100vh]'>

      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Layout>
          {<Admin />}
        </Layout>} />

        {/* EVENT ROUTES */}

        <Route path='/event' element={<Layout>
          {<Event />}
        </Layout>} />
        <Route path='/event/create' element={<Layout>
          {<EventCreate />}
        </Layout>} />
        <Route path='/event/edit' element={<Layout>
          {<EventEdit />}
        </Layout>} />

        <Route path='/event/edit/:id' element={<Layout>
          {<EventEditSingleEvent />}
        </Layout>} />

        {/* EVENT ROUTES */}

        <Route path='/admin' element={<Layout>
          {<Admin />}
        </Layout>} />
        <Route path='/admin/create' element={<Layout>
          {<AdminCreate />}
        </Layout>} />
        <Route path='/admin/edit' element={<Layout>
          {<AdminEdit />}
        </Layout>} />
        <Route path='/admin/edit/:id' element={<Layout>
          {<AdminEditUser />}
        </Layout>} />

      </Routes>


    </div>
  )
}

export default App