import styles from "../styles/portafolio.module.css"
import Head from "next/head";
import Link from "next/link";
import logotipo from "../public/LOGOTIPO.png"



export  default function Portafolio (){
    return(
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Snug | Portafolio</title>
        <meta 
            name="description"
            content="Domotica"
        />
        <meta property="og:title" content="Casas Inteligentes" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content=" " />
        <meta property="og:image" content=" " />
        <meta
            property="og:description"
            content="Diseño, ejecucion y ventas de equipos para 
            hacer tu hogar, negocio, o industria inteligente. 
            Ofrecemos los mejores servicios de Ingenieria"
        />
        <link rel="icon" href="..." />
    </Head>
    <main className={styles.main}>
    <div className={styles.Hero}>
          <div><img src={logotipo.src}  alt="Logo"  /></div>
    </div>

    <div className={styles.titulos}><h1>Projectos</h1></div>
    

    <div className={styles.containerPortafolio}>
        <div className={styles.portafolioItemNombre}> <h2>Scala</h2> </div>
        <div className={styles.portafolioItemInfo}>
            
          <h2>Projecto: PHA</h2>
          <h3>Tecnologia: Control4</h3>
          <h3>Instalaciones: </h3>
          <ul>
            <li> Iluminacion</li>
            <li> Control de percianas</li>
            <li> Audio distribuido</li>
            <li> Seguridad</li>
            <li> Termostatos</li>

          </ul>
          <p> 
            description: Nulla pariatur duis excepteur do quis et ad proident pariatur
            sunt labore anim. Fugiat dolor amet aliquip sint anim in dolore eu aute reprehenderit. 
            Laboris reprehenderit esse laborum dolor nisi minim. 
          </p>
            </div>
        <div className={styles.portafolioItemCollage}>
            <img src="3.jpg"    alt="Logo"/>
            
        </div>
    </div>

    <div className={styles.containerPortafolio}>
        <div className={styles.portafolioItemNombre}> <h2>Carlota</h2> </div>
        
        <div className={styles.portafolioItemCollage}>
            <div>
            <img src="3.jpg"    alt="Logo"/>
            <img src="3.jpg"    alt="Logo"/>
            </div>
           
            <img src="3.jpg"    alt="Logo"/>
                
            
        </div>
        <div className={styles.portafolioItemInfo}>
            
          <h2>Projecto: PHA</h2>
          <h3>Tecnologia: Control4</h3>
          <h3>Instalaciones: </h3>
          <ul>
            <li> Iluminacion</li>
            <li> Control de percianas</li>
            <li> Audio distribuido</li>
            <li> Seguridad</li>
            <li> Termostatos</li>

          </ul>
          <p> description: Nulla pariatur duis excepteur do quis et ad proident pariatur
             sunt labore anim. Fugiat dolor amet aliquip sint anim in dolore eu aute reprehenderit. 
             Laboris reprehenderit esse laborum dolor nisi minim. 
            </p>
            </div>
    </div>
        
    <div className={styles.section2}>
        <div  className={styles.aboutContainer}>
          <div>
            <h2>Edificio Scala</h2>
          <div className={styles.info}> 
            <div><h3>10</h3><h5>Apartamentes</h5></div>
            <div><h3>2 </h3><h5>Pente House</h5></div>
            <div><h3>+5 </h3><h5>Estados en Venezuela</h5></div>
          </div>
          <p>
            Occaecat commodo incididunt Lorem deserunt sunt sint voluptate elit anim. 
            Labore in pariatur labore ex aliquip dolore exercitation elit veniam enim.
             Voluptate consequat veniam incididunt ullamco anim mollit. 

            </p>
            </div>

          
            <img src="3.jpg"    alt="Logo"/>
          <div className={styles.aboutGrid}>
            
          <img src="3.jpg"    alt="Logo"/>
            
          <img src="3.jpg"    alt="Logo"/>
           
          </div>

        </div>

    </div>

    </main>
    </>
    );
}