import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaCircle, FaChevronDown} from "react-icons/fa"


function Middle(props) {
  return (
    <div className={`${props.color} w-[70%] lg:w-[50%] `}>
        <div className='flex flex-col p-0 my-10 lg:my-14 items-center'>
            <h1>{props.titre}</h1>
            <strong className='-m-2 opacity-[80%]'>{props.strong}</strong>
        </div>
        <div className='border-l w-full text-base px-10 flex flex-col sm:items-center gap-10 lg:px-20 mx-auto opacity-[80%] md:text-xl'>
            <div className='flex gap-6 items-center  coordo'>
                <FaMapMarkerAlt size={30}/>
                <span>1 route de soliers, Grentheville</span>
            </div>
            <div className='flex flex-col gap-10 coordo lg:flex-row'>
                <div className='flex gap-6 items-center'>
                    <FaPhoneAlt size={30} />
                    <span>06 xx xx xx xx</span>
                 </div>
                <div className='flex gap-6 items-center' >
                    
                    <FaCircle size={20} color='green'/>
                   <span className='whitespace-nowrap block	'>Ouvert aujourd'hui :<br /> de 10h à 19h </span>
                   <a href='/acces-contact' className='self-end -ml-[58px]'><FaChevronDown /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Middle