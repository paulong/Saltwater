import Image from "next/image";
import styles from "../styles/page.module.css";
import Head from "next/head";
import Link from 'next/link'
import Footer from "../Components/Footer";
import logotipo from "../public/LOGOTIPO.png"
import picture7 from "../public/7.jpeg"
import picture4 from "../public/4.jpg"
import picture3 from "../public/3.jpg"

export default function Home() {
  return (

    <>  
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      

      <title>Snug</title>
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
        
      {/*Spacer */}
      <div className={styles.separation}></div>
          
        <div className={styles.banners}>
          <h1> Expertos en el control de hogares, oficinas o industrias. </h1>
          <button name=" Quieres saber más? " >
            <lebel>
            <Link href="/portafolio">  Quieres saber más?  </Link>  
            </lebel>        
          </button>
        </div>

        {/*Spacer */}
      <div className={styles.separation}></div>
     

               {/*Spacer */}
        <div className={styles.containerBentos}> 
          <div className={styles.bento}>
            <div className={styles.bentoItem}><img src="5.jpg"    alt="Logo"/></div>
            <div className={styles.bentoItem}><img src="3.jpg"    alt="Logo"/></div> 
          </div> 
       
          <div className={styles.bentoInverted}>
            <div className={styles.bentoItem}><img src="7.jpeg"  alt="Logo"/></div>
            <div className={styles.bentoItem}><img src="1.jpg"  alt="Logo"/></div>
          </div>

          <div className={styles.bento}>
            <div className={styles.bentoItem}><img src="5.jpg"    alt="Logo"/></div>
            <div className={styles.bentoItem}><img src="3.jpg"    alt="Logo"/></div> 
          </div> 
        </div>

 
    <div className={styles.section2}>
        <div  className={styles.aboutContainer}>
          <div>
            <h2>Conoce a <br/> Snug</h2>
          <div className={styles.info}> 
            <div><h3>+7 años</h3><h5>Experiencia</h5></div>
            <div><h3>+30 </h3><h5>obras ejecutadas</h5></div>
            <div><h3>+5 </h3><h5>Estados en Venezuela</h5></div>
          </div>
          <p>
            Occaecat commodo incididunt Lorem deserunt sunt sint voluptate elit anim. 
            Labore in pariatur labore ex aliquip dolore exercitation elit veniam enim.
             Voluptate consequat veniam incididunt ullamco anim mollit. 

            </p>
            </div>

          <img src={picture7.src}  alt="img"/>
          <div className={styles.aboutGrid}>
            <img src={picture3.src}  alt="img"/>
            <img src={picture3.src}  alt="img"/>
           
          </div>

        </div>

    </div>

{/* Portofio*/}




    <div>
        <p>
            Occaecat commodo incididunt Lorem deserunt sunt sint voluptate elit anim. 
            Labore in pariatur labore ex aliquip dolore exercitation elit veniam enim.
             Voluptate consequat veniam incididunt ullamco anim mollit. 

            </p>
        </div>


        <Footer/>
    </main>
    </>

  );
}
