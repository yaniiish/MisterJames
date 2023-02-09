import React from 'react'
import Btnpresta from '../../Btnpresta'

function Section2() {
  return (
    <section className='lg:h-fit flex flex-col items-center mt-16 mb-16 gap-6 w-[70%] mx-auto lg:flex-row lg:gap-20 lg:mt-10'>
        <div className='text-center flex flex-col gap-6 lg:w-[50%]'>
            <h2 className='uppercase'>nos prestations</h2>
            <span className='opacity-[80%] font-semibold leading-7'>"Mister James" vous offre un large éventail de prestations pour répondre à tous vos besoins en matière de coiffure et de rasage. <br/> Notre équipe expérimentée est là pour vous conseiller et vous aider à obtenir le look que vous désirez.<br />
Nous proposons des coupes de cheveux pour hommes, des tailles de barbe et des rasages traditionnels à la lame. Nous utilisons les meilleurs produits et techniques pour assurer la satisfaction de nos clients.</span>
        </div>
        <div className='hidden lg:flex'>
            <img className='max-w-none w-64 h-78' src="./img/s2i1.png" alt="homme qui se fait couper" />
        </div>
        <div className='flex justify-center flex-col'>
           <img className='max-w-none w-44 h-44 lg:w-44 lg:h-44' src="./img/s2s2.png" alt="homme qui se fait couper" />
           <div>
            <a href='/prestations' className='flex mt-16 gap-2 items-center'>
              <Btnpresta />
              <span className='font-extrabold underline'>Nos prestations</span>
            </a>
           </div>
        </div>
    </section>
  )
}

export default Section2