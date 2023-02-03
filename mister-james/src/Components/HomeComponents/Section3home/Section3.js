import React from 'react'

function section3() {
  return (
    <div className="bg-top text-center mx-auto bg-cover w-[80%] h-[50vh] flex flex-col items-center justify-center gap-6" style={{ backgroundImage: "url(./img/s3.png)" }}>
        <span className='text-white font-lora text-xl font-bold'>Pour toutes autres informations, vous pouvez m’envoyer un message</span>
       <a href='/acces-contact'><button className='bg-dore text-noir px-8 py-2 uppercase font-black rounded	drop-shadow-2xl tracking-widest hover:opacity-8'>Ecris-moi</button></a>
    </div>
  )
}

export default section3