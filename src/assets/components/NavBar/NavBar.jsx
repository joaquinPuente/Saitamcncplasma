import React from 'react'
import styles from './NavBar.module.css'
import logo from '/public/vite.svg'
import carrito from '/public/carrito.svg'

const NavBar = () => {
  return (
    <div className={styles.navbar}>

        <div className={styles.brandLogo}>  
        <img src={logo} alt="#" />
        <h2>SaitamCnPlasma</h2>    
        </div>

        <div>
        <ul className={styles.itemList}>
            <li>
            <h3 >Inicio </h3>  
            </li>
            <li>
            <h3 >Productos</h3>
            </li>
            <li>
            <h3 >Empresa</h3> 
            </li>
            <li>
            <h3 >Contacto</h3> 
            </li>
        </ul>
        </div>

        <div className={styles.carritoIcono}>
        <img src={carrito} alt="#" />
        <h2>0</h2>
        </div>

        </div>
  )
}

export default NavBar