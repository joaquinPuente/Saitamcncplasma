import React from 'react'
import styles from './Footer.module.css'
import call from '/public/call.svg'
import Whatsapp from '/public/whatsapp.svg'
import facebook from '/public/facebook.svg'
import instagram from '/public/instagram.svg'
import correo from '/public/correo.svg'

const Footer = () => {
  return (
    <div className="">
      <footer className={styles.footer}>
        <div className={styles.col1}>
            <h2>SaitamCnPlasma</h2>
            <div className={styles.ic1}>
              <img src={Whatsapp} alt='#'/>
              <p>Whatsapp:</p>
            </div>
            <div className={styles.ic1}>
              <img src={instagram} alt='#'/>
              <p>Instagram:</p>
            </div>
            <div className={styles.ic1}>
              <img src={facebook} alt='#'/>
              <p>Facebook:</p>
            </div>
            <div className={styles.ic1}>
              <img src={correo} alt='#'/>
              <p>Correo:</p>
            </div>
            <div className={styles.ic1}>
              <img src={call} alt="#" />
              <p>Telefono: 123456789 / 9876-5432</p>
            </div>
            <div>
            </div>            
        </div>

        <div className={styles.col2}>
            <p className={styles.textF}>Bienvenido a SaitamCnPlasma, donde el metal cobra vida y se transforma en
            creaciones que perduran en el tiempo. Tu visión es nuestro desafío, y estamos aquí para
            convertirla en realidad con habilidad y maestría metalúrgica.</p>
        </div>

        <div className={styles.col3}>
            <h2>CATEGORIAS</h2>
            <ul>
              <li>Carteles</li>
              <li>--------</li>
              <li>--------</li>
              <li>--------</li>
              <li>--------</li>
              <li>--------</li>
              <li>--------</li>
            </ul>
        </div>

        <div className={styles.col4}>
            <h2>DESTACADOS</h2>
            <ul>
              <li>--------</li>
              <li>--------</li>
              <li>--------</li>
              <li>--------</li>
              <li>--------</li>
              <li>--------</li>
              <li>--------</li>
              <li>--------</li>
            </ul>
        </div>

      </footer>
    </div>
  )
}

export default Footer