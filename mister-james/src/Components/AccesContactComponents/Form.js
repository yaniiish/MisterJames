import React from 'react'

function Form() {
  return (
    <form className='text-center mt-10'>
        <h2>Ecris-moi</h2>
        <div className='global flex flex-col gap-8'>
            <div className='flex flex-col gap-8 lg:flex lg:flex-row lg:gap-4 mx-auto'>
                <div className='flex w-fit flex-col items-center mx-auto'>
                    <div className='self-start '>
                        <label className='underline text-lg font-semibold opacity-[80%]'>Nom </label>
                    </div>
                    <input type='text' className='w-[300px] bg-dore border-2 focus:outline-none border-card rounded py-2 px-3'></input>
                </div>
                <div className='flex w-fit flex-col items-center mx-auto'>
                    <div className='self-start '>
                        <label className='underline text-lg font-semibold opacity-[80%]'>Prénom </label>
                    </div>
                    <input type='text' className='w-[300px] bg-dore border-2 focus:outline-none border-card rounded py-2 px-3'></input>
                </div>
            </div>
            <div className='flex w-fit flex-col items-center mx-auto'>
                <div className='self-start '>
                    <label className='underline text-lg font-semibold opacity-[80%]'>E-mail </label>
                </div>
                <input type='text' className='w-[300px] lg:w-[610px] bg-dore border-2 focus:outline-none border-card rounded py-2 px-3'></input>
            </div>
            <div className='flex w-fit flex-col items-center mx-auto'>
                <div className='self-start '>
                    <label className='underline text-lg font-semibold opacity-[80%]'>Message </label>
                </div>
                <textarea className='w-[300px] lg:w-[610px] bg-dore border-2 focus:outline-none border-card rounded py-2 px-3'></textarea>
            </div>
        </div>
    </form>


  )
}

export default Form