import React from 'react'
import styles from '../Products/Products.module.css'
import plasma from '/public/plasma.jpg'

const Products = () => {
  return (
    <div className={styles.container}>
      <div class="tarjeta">
        <div class="titulo">Una tarjeta básica</div>
        <div class="cuerpo">
        <img src={plasma}  alt="muestra" className={styles.imgcart} />
        lorem ipsum
        </div>
      <div class="pie">
        <a href="#">Más información</a>
      </div>
      </div>
    </div>
  )
}

export default Products