import React from 'react'
import styles from './NavBar.module.css'
import logo from '/public/vite.svg'
import carrito from '/public/carrito.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <Link to="/" className={styles.linkTo}>  
        <div className={styles.brandLogo}>  
        <img src={logo} alt="#" />
        <h2>SaitamCnPlasma</h2>    
        </div>
        </Link>

        <div>
        <ul className={styles.itemList}>
            <li>
            <Link to="/" className={styles.linkTo}>
              <h3>Inicio </h3>
            </Link>
            </li>

            <li>
            <Link to="/productos" className={styles.linkTo}>
            <h3 >Productos</h3>
            </Link>
            </li>

            <li>
            <Link to="/contacto" className={styles.linkTo}>
            <h3 >Contacto</h3>   
            </Link>
            </li>
        </ul>
        </div>

        <div className={styles.carritoIcono}>
        <Link to="/" className={styles.linkTo}>
         <img src={carrito} alt="#" /> 
        </Link>
        </div>

        </div>
  )
}

export default NavBar