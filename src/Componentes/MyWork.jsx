import { useState } from 'react'
import '../Estilos/MyWork.css'

const MyWork = () => {
    const Texto         = "Capabilitys"
    const TextoTrabajos = "Projects <3"
    const [mostrando, SetMostrando] = useState('Oculto')
    const Smoke = () => {
      if (document.documentElement.scrollTop > document.documentElement.scrollHeight/4*2 -3 && document.documentElement.scrollTop < document.documentElement.scrollHeight/4*3 ) {
        SetMostrando('Visible')
      } else if (document.documentElement.scrollTop > document.documentElement.scrollHeight/4*3 && document.documentElement.scrollTop < document.documentElement.scrollHeight) {
        SetMostrando('Oculto')
      }
      else if (document.documentElement.scrollTop < document.documentElement.scrollHeight/4){
        SetMostrando('Oculto')
      }
    }
    window.addEventListener('scroll', Smoke)
    return (
      <div className="MyWork">
        <div className={`Lenguajes ${mostrando}B`}>
          <h3>{Texto}</h3>
          <div className="React"></div>
          <div className="Python"></div>
          <div className="C"></div>
          <div className="Java"></div>
          <div className="Pos"></div>
        </div>
        <div className={`Trabajos ${mostrando}C`}>
          <h3>{TextoTrabajos}</h3>
          <div className="Calculadora"  onClick={() => {window.open('https://juanelcaballo.club/20498/Laboratorio_8_20498/')}}></div>
          <div className="Pelis" onClick={() => {window.open('https://github.com/ChristopherG19/Proyecto_2_3_BD')}}></div>
          <div className="Espejo" onClick={() => {window.open('https://juanelcaballo.club/20498/Lab-CSS/index.html')}}></div>
          <div className="Laberinto" onClick={() => {window.open('http://juanelcaballo.club/20498/Laboratorio_7_20498/')}}></div>
          <div className="Lisp" onClick={() => {window.open('https://github.com/GabrielVicente-GT/Proyecto-LISP-estructura-de-datos')}}></div>
        </div>
        <div className="Contenedor" onClick={() => {window.open('https://github.com/GabrielVicente-GT')}}>
          <div className="Efecto">
            <div className={`LogoGit ${mostrando}`}></div>
          </div>
          <div className={`Texto ${mostrando}`}>
            <h3>GitHub</h3>
            
            <span>Here are all my works</span>
            <span>Take a look!</span>
          </div>
        </div>
        
      </div>
    )
  }
  
  export default MyWork
  