import { useState } from 'react'
import '../Estilos/MyWork.css'

const MyWork = () => {
    const Texto         = "Capabilitys"
    const TextoTrabajos = "Projects <3"
    const [mostrando, SetMostrando] = useState('Oculto')
    const Smoke = () => {
      if (document.documentElement.scrollTop > document.documentElement.scrollHeight/4*2 && document.documentElement.scrollTop < document.documentElement.scrollHeight/4*3 ) {
        SetMostrando('Visible')
      } else if (document.documentElement.scrollTop > document.documentElement.scrollHeight/4 && document.documentElement.scrollTop < document.documentElement.scrollHeight/4*2) {
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
          <div className="React"></div>
          <div className="Python"></div>
          <div className="C"></div>
          <div className="Java"></div>
          <div className="Pos"></div>
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
  