import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import { FaCalendarPlus } from "react-icons/fa"

function Map() {
    const position = [49.149053, -0.287389]

  return (
    <div className='relative z-0'>
            <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup minWidth={120} interactive={true}>
                MISTER JAMES <br /> 2 route de Soliers, <br /> Grentheville
            </Popup>
            </Marker>
        </MapContainer>
        <div className='lg:absolute lg:top-56 lg:right-[20%] bg-card w-[220px] h-[280px] rounded-lg border-2 mt-10 drop-shadow-2xl mx-auto'>
            <div className='flex items-center mt-3 ml-4 mb-4 gap-6'>
                <FaCalendarPlus size={30}/>
                <span className='font-lora font-bold underline text-xl'>Horaires</span>
            </div>
            <div className='flex flex-col'>
                <span className='ml-2 text-lg font-bold opacity-[80%]'>Lundi : 10h - 19h </span>
                <span className='ml-2 text-lg font-bold opacity-[80%]'>Mardi : 9h - 19h </span>
                <span className='ml-2 text-lg font-bold opacity-[80%]'>Mercredi : 9h - 19h </span>
                <span className='ml-2 text-lg font-bold opacity-[80%]'>Jeudi : 9h - 19h </span>
                <span className='ml-2 text-lg font-bold opacity-[80%]'>Vendredi : 9h - 19h </span>
                <span className='ml-2 text-lg font-bold opacity-[80%]'>Samedi : Fermé </span>
                <span className='ml-2 text-lg font-bold opacity-[80%]'>Dimanche : Fermé </span>
            </div>

            </div>

    </div>
  )
}

export default Map