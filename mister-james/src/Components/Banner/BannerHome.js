import React from 'react'
import Middle from './Middle'
import BtnResa1 from '../BtnResa1'
import { FaInstagram } from "react-icons/fa"

function BannerHome() {
  return (

    <header className='lg:h-screen relative z-0'>
        <div className='flex justify-end pt-28 pr-[20%]'>
           <a href='https://www.instagram.com/mister_james_14/?hl=fr' target="_blank"  rel="noreferrer"><FaInstagram size={40} className='absolute'/></a>
        </div>
        <div className='h-fit flex justify-center w-full lg:mt-16'>
            <Middle strong='coiffeur barbier près de Caen' titre='mister james'/>
        </div>
        <div className='flex justify-center flex-col-reverse items-center gap-8 mt-12 uppercase lg:mt-20 lg:flex lg:flex-row lg:justify-start'>
            <div className='flex flex-col items-center gap-2 lg:absolute lg:ml-[18%] lg:mt-32'>
                <span className='opacity-[80%]'>En savoir plus</span>
                <div className='border w-28 h-28 rounded-full flex items-center justify-center lg:w-36 lg:h-36'>
                    <a href="#section1"><img className='w-6' src="./img/arrow 1.png" alt="logo" /></a>
                </div>
            </div>
            <div className='mx-auto'>
                <BtnResa1  background='bg-noir'/>
            </div>
        </div>
    </header>
    
  )
}

export default BannerHome