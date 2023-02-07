import React from 'react'
import Middle from './Middle'

function BannerPresta() {
  return (
    <div className="bg-cover bg-right text-center mx-auto w-[84%] h-[75vh] flex flex-col items-center justify-center gap-6" style={{ backgroundImage: "url(./img/bannerpresta.png)" }}>
          <Middle  titre='Mister James' strong='Nos prestations' color='text-white'/>
      </div>
  )
}

export default BannerPresta