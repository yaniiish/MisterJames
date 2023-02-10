import React from 'react'
import Card from './Card'

function Section1presta() {
  return (
    <section className='w-[80%] mx-auto relative mt-10'>
      <img className='w-44 absolute hidden lg:block' src="./img/barber.png" alt="barber" />
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-center'>Les prestations chez Mister James</h2>
        <span className='opacity-[80%] font-semibold leading-7 lg:w-[50%]'>Nous proposons une variétés de formules pour les besoins de tous les hommes. Les options incluent des coupes de cheveux classiques, des rasages de barbe traditionnels, ainsi qu’une formule complète.</span>
      </div>
      <div className='mt-10 flex flex-col items-center gap-2 md:flex-row justify-center md:gap-10'>
        <Card titleCard="Coupe simple" desc="(Cheveux)" price="20"/>
        <Card titleCard="Barbe simple"  price="15"/>
        <Card titleCard="Coupe complète" desc="(Cheveux + barbe)" price="30"/>
      </div>
    </section>
  )
}

export default Section1presta