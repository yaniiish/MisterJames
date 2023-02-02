import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import BtnResa1 from './BtnResa1'
import './Navbar.css'

function Navbar() {

    // isOpen est de base a false, quand on click il passe a true et affiche
    const [isOpen, setIsOpen] = useState(false);

    // sert a savoir sur quel page on se trouve grâce a par la suite location.pathname
    // on peut donc ensuite ajouter des styles en fonctions de la page sur laquel on se trouve sur la navbar
    const location = useLocation()

  return (
    <>
       <nav className='h-24 w-[80%] fixed left-2/4 right-2/4 translate-x-[-50%] z-40 flex justify-between items-center border-b-[1px] border-white bg-dore'>
        <div className='' >
            <a href="/"><img className='w-28' src="./img/logo.png" alt="logo" /></a>
        </div>
    <label  class="burger" className='burger lg:hidden'
     >
        <input id="burger" type="checkbox" onClick={() => setIsOpen(!isOpen)}/> 
        {/* permet le passage de isopen de true a false */}
        <span></span>
        <span></span>
        <span></span>
    </label>
        <ul className='text-lg uppercase hidden lg:flex lg:gap-14 lg:items-center w-fit'>
            <li className={`hover:text-white  ${location.pathname === '/' ? 'border-b-[1px]' : ''}`}><a href="/">Home</a></li>
            <li className={`hover:text-white  ${location.pathname === '/prestations' ? 'border-b-[1px]' : ''}`}><a href="/prestations">prestations</a></li>
            <li className={`hover:text-white  ${location.pathname === '/acces-contact' ? 'border-b-[1px]' : ''}`}><a href="/acces-contact">accès/contact</a></li>
            <BtnResa1 background='bg-noir'/>
        </ul>
   </nav>

 {/* quand isOpen est true, on affiche sinon on affiche rien  */}
{isOpen ?  <div>
            <ul className='absolute flex justify-center item-center flex-col gap-14 items-center mx-0 z-30 h-[100vh] bg-noir text-white text-2xl uppercase w-[100%] lg:hidden'>
                <li className='hover:opacity-[60%] '><a href="/" className=''>Home</a></li>
                <li className='hover:opacity-[60%] '><a href="/prestations">prestations</a></li>
                <li className='hover:opacity-[60%] '><a href="/acces-contact">accès/contact</a></li>
                <BtnResa1 background='bg-dore' />
            </ul>
            
        </div> : ''}
     </>
   
  )
}

export default Navbar