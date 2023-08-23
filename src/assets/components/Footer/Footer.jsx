import React from 'react'
import styles from './Footer.module.css'
import call from '/public/call.svg'
import Whatsapp from '/public/whatsapp.svg'


const Footer = () => {
  return (
    <div className="">
      <footer className="footer">
        <div className={styles.col1}>
            <h2>SaitamCnPlasma</h2>
            <div className={styles.ic1}>
              <img src={call} alt="#" />
              <p>Telefono: 123456789 / 9876-5432</p>
            </div>
            <div className={styles.ic1}>
              <img src={Whatsapp} alt='#'/>
              <p>Whatsapp: 11223344</p>
            </div>
            <div>
              <p>Bienvenido a SaitamCnPlasma, donde el metal cobra vida y se transforma en
            creaciones que perduran en el tiempo. Tu visión es nuestro desafío, y estamos aquí para
            convertirla en realidad con habilidad y maestría metalúrgica.</p>
            </div>            
        </div>

        <div className='col2'>

        </div>

        <div className='col3'>

        </div>
      </footer>
    </div>
  )
}

export default Footer