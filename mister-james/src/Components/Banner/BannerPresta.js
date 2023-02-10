import React from 'react'
import Middle from './Middle'

function BannerPresta() {
  return (
    <header className="bg-cover bg-top lg:bg-right text-center mx-auto w-[84%] h-[75vh] flex flex-col items-center justify-center gap-6" style={{ backgroundImage: "url(./img/bannerpresta.png)" }}>
          <Middle  titre='Mister James' strong='Nos prestations' color='text-white'/>
      </header>
  )
}

export default BannerPresta