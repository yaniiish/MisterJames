import React from 'react'
import { PopupButton } from "react-calendly";


function BtnResa1(props) {
  return (
    // on utilise les props pour avoir un bg diffrent dans les 2 menu navbar
      <PopupButton 
      className={`${props.background} text-white px-8 py-2 uppercase font-black rounded	drop-shadow-2xl tracking-widest hover:opacity-80 stroke-noir`}
      url="https://calendly.com/test-calendlyy/prise-rdv"
      rootElement={document.getElementById("root")}
      text="Réserver"
      
        />
  )
}

export default BtnResa1