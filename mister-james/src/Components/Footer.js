import React from 'react'
import Middle from './Banner/Middle'
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa"

function Footer() {


  return (
    <>
    <div className='w-[80%] opacity-[80%] font-bold gap-8 border-t-2 border-white mt-10 pb-8 mx-auto border-b-2 lg:flex lg:flex-row lg:justify-between lg:items-center lg:pr-7'>
        <div className='flex flex-col items-center gap-4 mt-6 lg:flex-row'>
            <div className='flex gap-6 items-center coordo'>
                    <FaMapMarkerAlt size={30}/>
                    <span>1 route de soliers, Grentheville</span>
            </div>
            <div className='flex gap-6 items-center'>
                    <FaPhoneAlt size={30} />
                    <span>06 xx xx xx xx</span>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 mt-6'>
            <span>Retrouve moi aussi sur intstagram :</span>
           <a href='/'><FaInstagram size={40} className=''/></a>
        </div>
    </div>
    <div className='flex flex-col items-center opacity-[80%] font-bold gap-4 mt-6 lg:flex-row w-[80%] mx-auto lg:justify-start'>
      <a href='/'><span> &copy; 2023 - Mister James</span></a>
      <span className='hidden lg:block'>|</span>
      <a href='/'><span>Informations légales</span></a>
      <span className='hidden lg:block'>|</span>
      <a href='/'><span>CGU</span></a>
    </div>
    </>
  )
}

export default Footer