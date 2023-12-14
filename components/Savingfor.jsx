"use client";
import { Home } from 'lucide-react'
import { PlusCircle } from 'lucide-react'
import { Wine } from 'lucide-react'
import { Car } from 'lucide-react'
import { BookCopy } from 'lucide-react'
import { Plane } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Savingfor = (props) => {
    const goNext = (id) => {
        setPlan(id);
        props.changeNext();
    }
    
    const [plan, setPlan] = useState(null);
  return (
    <div className='h-screen'>
        <h1 className='pt-10 text-2xl text-center text-black w-[50%] mx-auto'>What are you saving for ?</h1>
        <Image src='/img/savebox.png' className='mx-auto' width={100} height={100}/>
        
        <button id='plane' onClick={() => goNext(plane)} className="rounded-full w-[90%] font-semibold text-lg px-5 p-2.5 shadow-md m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
            <Plane/>
            Travel
        </button>
        <button id='home' onClick={() => goNext(home)} className="rounded-full w-[90%] font-semibold text-lg px-5 p-2.5 shadow-md m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
            <Home/>
            Buy a House
        </button>
        <button id='car' onClick={() => goNext(car)} className="rounded-full w-[90%] font-semibold text-lg px-5 p-2.5 shadow-md m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
            <Car/>
            Buy a Car
        </button>
        <button id='wedding' onClick={() => goNext(wedding)} className="rounded-full w-[90%] font-semibold text-lg px-5 p-2.5 shadow-md m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
            <Wine/>
            Wedding
        </button>
        <button id='education' onClick={() => goNext(education)} className="rounded-full w-[90%] font-semibold text-lg px-5 p-2.5 shadow-md m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
            <BookCopy/>
            Education
        </button>
        <button id='other' onClick={() => goNext(other)} className="rounded-full w-[90%] font-semibold text-lg px-5 p-2.5 shadow-md m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
            <PlusCircle/>
            Other
        </button>

    </div>
  )
}

export default Savingfor