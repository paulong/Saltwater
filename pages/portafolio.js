import styles from "../styles/portafolio.module.css"
import Head from "next/head";
import Link from "next/link";
import logotipo from "../public/LOGOTIPO.png"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



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
    <Navbar/>
    <div className={styles.hero}>
          <div><img src={logotipo.src}  alt="Logo"  /></div>
    </div>

    <div className={styles.titulos}>
      <h1>Proyecto seleccionados:</h1>
    </div>
    

    

    <div className={styles.portafolioItemCollage}>

            <img src="3.jpg"    alt="Logo"/>
             <div className={styles.portafolioItemInfo}>
            
             <h2>PHB | Control4</h2>
         
            <ul>
            <h3 className={styles.Textheilight}>Instalaciones: </h3>
              <li> Iluminacion</li>
              <li> Control de percianas</li>
              <li> Audio distribuido</li>
              <li> Seguridad</li>
              <li> Termostatos</li>
  
            </ul>
            <p> 
            <span className={styles.Textheilight}> Description: </span>  Nulla pariatur duis excepteur do quis et ad proident pariatur
              sunt labore anim. Fugiat dolor amet aliquip sint anim in dolore eu aute reprehenderit. 
              Laboris reprehenderit esse laborum dolor nisi minim. 
            </p>
              </div>
           
        </div>

        <div className={styles.separation}></div>
<div className={styles.portafolioItemCollage}>

            <img src="3.jpg"    alt="Logo"/>
             <div className={styles.portafolioItemInfo}>
            
            <h2>Casa Carlota | Control4</h2>
            
          
            <ul>
              <h3 className={styles.Textheilight}>Instalaciones: </h3>
              <li> Iluminacion</li>
              <li> Control de percianas</li>
              <li> Audio distribuido</li>
              <li> Seguridad</li>
              <li> Termostatos</li>
  
            </ul>
            <p> 
            <span className={styles.Textheilight}> Description: </span>  Nulla pariatur duis excepteur do quis et ad proident pariatur
              sunt labore anim. Fugiat dolor amet aliquip sint anim in dolore eu aute reprehenderit. 
              Laboris reprehenderit esse laborum dolor nisi minim. 
            </p>
              </div>
           
        </div>
        <div className={styles.separation}></div>

        <div className={styles.portafolioItemCollage}>

            <img src="3.jpg"    alt="Logo"/>
             <div className={styles.portafolioItemInfo}>
            
            <h2>PHA | Control4</h2>
            
          
            <ul>
            <h3 className={styles.Textheilight}>Instalaciones: </h3>
              <li> Iluminacion</li>
              <li> Control de percianas</li>
              <li> Audio distribuido</li>
              <li> Seguridad</li>
              <li> Termostatos</li>
  
            </ul>
            <p> 
            <span className={styles.Textheilight}> Description: </span>  Nulla pariatur duis excepteur do quis et ad proident pariatur
              sunt labore anim. Fugiat dolor amet aliquip sint anim in dolore eu aute reprehenderit. 
              Laboris reprehenderit esse laborum dolor nisi minim. 
            </p>
              </div>
           
        </div>
        <div className={styles.separation}></div>

        <div className={styles.portafolioItemCollage}>

            <img src="3.jpg"    alt="Logo"/>
             <div className={styles.portafolioItemInfo}>
            
            <h2>Vista Azul | Control4</h2>
            
          
            <ul>
            <h3 className={styles.Textheilight}>Instalaciones: </h3>
              <li> Iluminacion</li>
              <li> Control de percianas</li>
              <li> Audio distribuido</li>
              <li> Seguridad</li>
              <li> Termostatos</li>
  
            </ul>
            <p> 
            <span className={styles.Textheilight}> Description: </span>  Nulla pariatur duis excepteur do quis et ad proident pariatur
              sunt labore anim. Fugiat dolor amet aliquip sint anim in dolore eu aute reprehenderit. 
              Laboris reprehenderit esse laborum dolor nisi minim. 
            </p>
              </div>
           
        </div>
        <div className={styles.separation}></div>
        
        <div className={styles.portafolioItemCollage}>

            <img src="3.jpg"    alt="Logo"/>
             <div className={styles.portafolioItemInfo}>
            
            <h2>VL | Control4</h2>
            
          
            <ul>
            <h3 className={styles.Textheilight}>Instalaciones: </h3>
              <li> Iluminacion</li>
              <li> Control de percianas</li>
              <li> Audio distribuido</li>
              <li> Seguridad</li>
              <li> Termostatos</li>
  
            </ul>
            <p> 
            <span className={styles.Textheilight}> Description: </span>  Nulla pariatur duis excepteur do quis et ad proident pariatur
              sunt labore anim. Fugiat dolor amet aliquip sint anim in dolore eu aute reprehenderit. 
              Laboris reprehenderit esse laborum dolor nisi minim. 
            </p>
              </div>
           
        </div>
        <div className={styles.separation}></div>

        <div className={styles.portafolioItemCollage}>

            <img src="3.jpg"    alt="Logo"/>
             <div className={styles.portafolioItemInfo}>
            
            <h2>Casa Cu | Alexa <br/>
            
            
            </h2>
            
           
            <ul>
            <h3 className={styles.Textheilight}>Instalaciones: </h3>
              <li> Iluminacion.</li>
              <li> Control de percianas.</li>
              <li> Audio distribuido.</li>
              <li> Seguridad.</li>
              <li> Termostatos.</li>
  
            </ul>
            <p> 
            <span className={styles.Textheilight}> Description: </span> Nulla pariatur duis excepteur do quis et ad proident pariatur
              sunt labore anim. Fugiat dolor amet aliquip sint anim in dolore eu aute reprehenderit. 
              Laboris reprehenderit esse laborum dolor nisi minim. 
            </p>
              </div>
           
        </div>
        <div className={styles.separation}></div>





       



    
        <Footer/>
    </main>
    </>
    );
}