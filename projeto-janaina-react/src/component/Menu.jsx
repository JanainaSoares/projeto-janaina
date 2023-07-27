import { Link } from 'react-router-dom'

import styles from '../styles/component/menu.module.css'

import imagem from '../assets/sobre.png'

const Menu = () => {
    return (
        <nav className={styles.menuContainer}>
            <img className={styles.menuImagem} src={imagem} alt="logo" />
            <li>
                <Link className={styles.menuLink} to='/'>Home</Link>
            </li>
            <li>
                <Link className={styles.menuLink} to='/sobre'>Sobre</Link>
            </li>
            <li>
                <Link className={styles.menuLink} to='/contato'>Contato</Link>
            </li>
            <li>
                <Link className={styles.menuLink} to='/carnes'>Carnes</Link>
            </li>
            <li>
                <Link className={styles.menuLink} to='/massas'>Massas</Link>
            </li> 
            <li>
                <Link className={styles.menuLink} to='/saladas'>Saladas</Link>
            </li>
            <li>
                <Link className={styles.menuLink} to='/doces'>Doces</Link>
            </li>   
        </nav>
    )
}

export default Menu