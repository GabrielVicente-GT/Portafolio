import { useState } from 'react'
import '../Estilos/Talk.css'

const Talk = () => {
  const [mostrandos, SetMostrandos] = useState('Oculto')
    const Upper = () => {
      if (document.documentElement.scrollTop > document.documentElement.scrollHeight/4*3 && document.documentElement.scrollTop < document.documentElement.scrollHeight ) {
        SetMostrandos('Visible')
      } 
      else if (document.documentElement.scrollTop > document.documentElement.scrollHeight/4 && document.documentElement.scrollTop < document.documentElement.scrollHeight/4*3 ){
        SetMostrandos('Oculto')
      }
    }
    window.addEventListener('scroll', Upper)
    return (
      <div className="Talk">
        <div className="Diferente">Contact me!!!</div>
        <div className="AnimationIzquierda"></div>
        <div className="AnimationDerecha"></div>
        <div className={`Contactos  ${mostrandos}`}>
          <div className="Whatssap" onClick={() => {window.open('https://wa.me/50247249926')}}></div>
          <div className="Discord" onClick={() => {window.open('https://discord.gg/5zYpRbC5mu')}}></div>
          <div className="Linkedin" onClick={() => {window.open('https://www.linkedin.com/in/gabriel-alejandro-vicente-lorenzo-336079188/')}}></div>
          <div className="Gmail" onClick={() => {window.open('mailto:chentevilo2001@gmail.com')}}></div>
        </div>
      </div>
    )
  }
  
  export default Talk
  