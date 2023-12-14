"use client";
import React, { useState } from 'react'
import Savingfor from '../../../components/Savingfor'
import Savingwhen from '../../../components/Savingwhen'

function page() {
  const [next, setNext] = useState(false);

  const changeNext = () => {
    setNext(!next);
  }
  return (
    <div className='h-full bg-green-400'>
      {
        next ?
        <Savingwhen/> : <Savingfor changeNext={changeNext} />
        
      }
    </div>
  )
}

export default page