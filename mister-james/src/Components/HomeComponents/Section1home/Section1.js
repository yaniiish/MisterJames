import React from 'react'
import BtnResa1 from '../../BtnResa1'


function Section1() {
  return (
    <div className='lg:h-[70vh] flex flex-col mt-16 lg:-mt-20 mx-auto w-[70%] gap-6 lg:flex-row-reverse lg:justify-center lg:items-center'>
        <div className='flex flex-col gap-6 text-center lg:w-[600px] max-w-none'>
            <h2 className='uppercase'>Mister James, coiffeur barbier grentheville près de caen</h2>
            <div className='lg:hidden flex justify-center lg:justify-start  lg:mr-32'>
               <img className='max-w-none w-44 h-44 lg:w-64 lg:h-64' src="./img/s1.png" alt="homme qui se fait couper" />
            </div>
            <span className='opacity-[80%] leading-6'>Bienvenue chez "Mister James", votre salon de coiffure barbier situé à Grentheville, près de Caen. Nous sommes fiers de vous offrir un service professionnel et personnalisé pour tous vos besoins de coiffure et de rasage. <br/>
Notre équipe expérimentée est là pour vous conseiller et vous aider à obtenir le look que vous désirez. <br/>
Nous proposons également des services de rasage traditionnel à la lame pour ceux qui recherchent une expérience de barbier authentique. <br/>
Pour bénéficier d'une expérience de coiffure et de rasage de qualité supérieure, n'hésitez pas à prendre rendez-vous chez "Coupe et Barbier" à Grenteville près de Caen.</span>
            <div>
                <BtnResa1 background='bg-noir' className='w-8 p-8'/>
            </div>
        </div>
        <div className='hidden lg:flex lg:justify-start  lg:mr-32'>
               <img className='max-w-none w-44 h-44 lg:w-64 lg:h-64' src="./img/s1.png" alt="homme qui se fait couper" />
            </div>
        
    </div>
  )
}

export default Section1