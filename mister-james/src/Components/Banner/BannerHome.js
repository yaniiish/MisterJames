import React from 'react'
import Middle from './Middle'
import BtnResa1 from '../BtnResa1'

function BannerHome() {
  return (

    <div className='h-screen'>
        <div className='h-fit pt-16 flex justify-center w-full lg:pt-24'>
            <Middle strong='coiffeur barbier près de Caen'/>
        </div>
        <div className='flex justify-center flex-col-reverse items-center gap-8 mt-12 uppercase lg:mt-20 lg:flex-row'>
            <div className='flex flex-col items-center gap-2 '>
                <span className='opacity-[80%]'>En savoir plus</span>
                <div className='border w-32 h-32 rounded-full flex items-center justify-center'>
                    <a href="/"><img className='w-6' src="./img/arrow 1.png" alt="logo" /></a>
                </div>
            </div>
            <div className=''>
                <BtnResa1  background='bg-noir'/>
            </div>
        </div>
            
       
        
    </div>
    
  )
}

export default BannerHome