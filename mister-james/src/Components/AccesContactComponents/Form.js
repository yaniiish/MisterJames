import React from 'react'
import { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';



function Form() {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();  
      emailjs.sendForm('service_9q0lgbf', 'template_v96mtsl', form.current, 'XHVwM7FsPNcbLQ1ED')
        .then((result) => {
            console.log(result.text);
            setStatus("Message envoyé !")
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };

    const  [status, setStatus] = useState("");

  return (
    <form className='text-center mt-10' ref={form} onSubmit={sendEmail}>
        <h2 className='mb-10'>Ecris-moi</h2>
        <div className='global flex flex-col gap-8'>
            <div className='flex flex-col gap-8 lg:flex lg:flex-row lg:gap-4 mx-auto'>
                <div className='flex w-fit flex-col items-center mx-auto'>
                    <div className='self-start '>
                        <label className='underline text-lg font-semibold opacity-[80%]'>Nom </label>
                    </div>
                    <input name="nom" type='text' className='w-[300px] bg-dore border-2 focus:outline-none border-card rounded py-2 px-3'></input>
                </div>
                <div className='flex w-fit flex-col items-center mx-auto'>
                    <div className='self-start '>
                        <label className='underline text-lg font-semibold opacity-[80%]'>Prénom </label>
                    </div>
                    <input name="prenom"  type='text' className='w-[300px] bg-dore border-2 focus:outline-none border-card rounded py-2 px-3'></input>
                </div>
            </div>
            <div className='flex w-fit flex-col items-center mx-auto'>
                <div className='self-start '>
                    <label className='underline text-lg font-semibold opacity-[80%]'>E-mail </label>
                </div>
                <input name="mail" type='email' className='w-[300px] lg:w-[610px] bg-dore border-2 focus:outline-none border-card rounded py-2 px-3'></input>
            </div>
            <div className='flex w-fit flex-col items-center mx-auto'>
                <div className='self-start '>
                    <label className='underline text-lg font-semibold opacity-[80%]'>Message </label>
                </div>
                <textarea name="message" className='w-[300px] lg:w-[610px] bg-dore border-2 focus:outline-none border-card rounded py-2 px-3'></textarea>
            </div>
                    <button type='submit' className='bg-noir w-fit mx-auto text-white py-2 px-8 rounded'>Envoyer</button>
                    {status}
        </div>
    </form>

   

  )
}

export default Form