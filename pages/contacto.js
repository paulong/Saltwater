import  Head from "next/head"
import styles from "../styles/contacto.module.css"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


export default function (){
return(
<>
<Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      

      <title>Snug | Contacto</title>
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
        <h1> contacto</h1>

    



    <Footer/>
    </main>
</>
)
}