import Link from 'next/link'
import styles from "../styles/navbar.module.css"


export default function Navbar (){
    return(
        <>
        <div className={styles.container}> 
            <ul>
                <li>
                    <Link href='/'>Home</Link> 
                </li>
                <li>
                    <Link href='/servicios'>Servicios</Link>
                </li>
                <li>
                    <Link href='/portafolio'>Portafolio</Link> 
                </li>
                <li>
                    <Link href='/contacto'>Contacto</Link> 
                </li>
                
            </ul>
        </div>
        </>
    )
}