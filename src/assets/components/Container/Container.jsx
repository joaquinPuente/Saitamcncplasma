import React from 'react'
import styles from '../Container/Container.module.css'
import video from '/public/video.mp4'

const Container = () => {
  return (
    <div className={styles.container}>

      <video controls loop className={styles.video}>
        <source src={video}  type="video/mp4"/>
        Tu navegador no soporta el video.
      </video>
      <div className={styles.descripcion}>
        <h2>Cortes con Plasma</h2>
        <p>El corte de metales con plasma es un proceso industrial avanzado que utiliza un chorro de plasma
        altamente caliente para cortar materiales metálicos con precisión y eficiencia. Este método se basa
        en la generación de un estado de materia llamado plasma, que es altamente conductor y capaz de fundir
        y vaporizar metales a temperaturas extremadamente altas. El chorro de plasma resultante se dirige al 
        material a cortar, permitiendo cortes rápidos y detallados en una variedad de metales, desde acero hasta
        aluminio. El corte por plasma se destaca por su velocidad, versatilidad y capacidad para mantener la
        deformación del material al mínimo. Esta técnica encuentra aplicación en diversas industrias, incluyendo
        la construcción, la fabricación de maquinaria y la industria automotriz, donde la precisión y la eficiencia
        son fundamentales.</p>
      </div>

    </div>
  )
}

export default Container