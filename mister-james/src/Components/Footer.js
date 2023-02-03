import React from 'react'
import Middle from './Banner/Middle'
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa"

function Footer() {
  return (
    <div className='w-[80%] gap-8 border-t-2 border-white mt-10 mx-auto'>
        <div className='flex flex-col items-center gap-4 mt-6'>
            <div className='flex gap-6 items-center coordo'>
                    <FaMapMarkerAlt size={30}/>
                    <span>1 route de soliers, Grentheville</span>
            </div>
            <div className='flex gap-6 items-center'>
                    <FaPhoneAlt size={30} />
                    <span>06 xx xx xx xx</span>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 mt-6 lg:mt-0'>
            <span>Retrouve moi aussi sur intstagram :</span>
           <a href='/'><FaInstagram size={40} className=''/></a>
        </div>
       
    </div>
  )
}

export default Footer