import React from 'react'
import BtnResa1 from '../BtnResa1'

function Card(props) {
  return (
    <div className='bg-card w-[180px] h-[250px] rounded-lg border-2 drop-shadow-2xl'>
        <div className='flex w-full justify-center items-center gap-2 mt-5'>
            <img className='w-4 h-4' src="./img/ci.png" alt="imgCard" />
            <span className='text-base font-black'>{props.titleCard}</span>
        </div>
        <div className='text-center'>
            {props.desc}
        </div>
        <div className='text-center mt-5 flex flex-row items-center justify-center'>
            <span className='text-8xl font-extrabold'>{props.price}</span>
            <span className='text-xl font-extrabold'>€</span>
        </div>
        <div className='text-center mt-5'>
            <BtnResa1 background="bg-noir" px='px-4' py='py-1'/>
        </div>
        
    </div>
  )
}

export default Card