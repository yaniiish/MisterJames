import React from 'react'
import { useEffect } from 'react';
import { useForm } from "react-hook-form";


function Form() {

    const {register, handleSubmit, formState: {errors, isSubmitSuccessful}, reset} = useForm()

    console.log(isSubmitSuccessful);


    const onSubmit = data => {
        console.log(data);
    }

  return (
    <form className='text-center mt-10' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='mb-10'>Ecris-moi</h2>
        <div className='global flex flex-col gap-8'>
            <div className='flex flex-col gap-8 lg:flex lg:flex-row lg:gap-4 mx-auto'>
                <div className='flex w-fit flex-col items-center mx-auto'>
                    <div className='self-start '>
                        <label className='underline text-lg font-semibold opacity-[80%]'>Nom </label>
                    </div>
                    <input  {...register('nom', {required: '*Champs obligatoire'})} type='text' className='w-[300px] bg-dore border-2 focus:outline-none border-card rounded py-2 px-3'></input>
                    <span className=''>{errors.nom?.message}</span>
                </div>
                <div className='flex w-fit flex-col items-center mx-auto'>
                    <div className='self-start '>
                        <label className='underline text-lg font-semibold opacity-[80%]'>Prénom </label>
                    </div>
                    <input {...register('prenom', {required: '*Champs obligatoire'})} type='text' className='w-[300px] bg-dore border-2 focus:outline-none border-card rounded py-2 px-3'></input>
                    <span className=''>{errors.prenom?.message}</span>

                </div>
            </div>
            <div className='flex w-fit flex-col items-center mx-auto'>
                <div className='self-start '>
                    <label className='underline text-lg font-semibold opacity-[80%]'>E-mail </label>
                </div>
                <input {...register('mail', {required: '*Champs obligatoire'})} type='email' className='w-[300px] lg:w-[610px] bg-dore border-2 focus:outline-none border-card rounded py-2 px-3'></input>
                <span className=''>{errors.mail?.message}</span>

            </div>
            <div className='flex w-fit flex-col items-center mx-auto'>
                <div className='self-start '>
                    <label className='underline text-lg font-semibold opacity-[80%]'>Message </label>
                </div>
                <textarea {...register('message', {required: '*Champs obligatoire'})} className='w-[300px] lg:w-[610px] bg-dore border-2 focus:outline-none border-card rounded py-2 px-3'></textarea>
                <span className=''>{errors.message?.message}</span>

            </div>
            {!isSubmitSuccessful? 
                        <button type='submit' className='bg-noir w-fit mx-auto text-white py-2 px-8 rounded'>Envoyer</button>
                        : 'Message envoyé'}
        </div>
    </form>


  )
}

export default Form