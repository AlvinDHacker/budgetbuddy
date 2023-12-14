import React from 'react'
import Login from '../../../components/Login'
import SignUp from '../../../components/SignUp'
import Navbar from '../../../components/Navbar'

function page() {
  return (
    <div className='h-full bg-green-400'>
        <Navbar/>
        <Login/>
        <SignUp/>
    </div>
  )
}

export default page