import React from 'react'

function Section2() {
  return (
    <div className='flex flex-col mt-16 gap-6 w-[70%] mx-auto lg:flex-row'>
        <div>
            <h2 className='uppercase'>nos prestations</h2>
            <span className='opacity-[80%] leading-6'>"Mister James" vous offre un large éventail de prestations pour répondre à tous vos besoins en matière de coiffure et de rasage. Notre équipe expérimentée est là pour vous conseiller et vous aider à obtenir le look que vous désirez.
Nous proposons des coupes de cheveux pour hommes, des tailles de barbe et des rasages traditionnels à la lame. Nous utilisons les meilleurs produits et techniques pour assurer la satisfaction de nos clients.</span>
        </div>
        <div className='hidden lg:flex'>
            <img className='max-w-none w-44 h-44 lg:w-64 lg:h-64' src="./img/s2i1.png" alt="homme qui se fait couper" />
        </div>
        <div className='flex justify-center'>
           <img className='max-w-none w-44 h-44 lg:w-64 lg:h-64' src="./img/s2s2.png" alt="homme qui se fait couper" />
        </div>
    </div>
  )
}

export default Section2