import  Head from "next/head"
import styles from "../styles/contacto.module.css"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import logotipo from "../public/LOGOTIPO.png"
import Link from "next/link"
import Popup from 'reactjs-popup';



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
 
      


    <div className={styles.Titulo}> 

      <h2>Llena el formulario, pronto nos comunicaremos contigo</h2>
    </div>

<div className={styles.contact}>
    <div className={styles.contactItem} value='form' >
    <form id="first-section"  value='form' >
        <label className={styles.contactLabel}> Hola, mi nombre es 
        <input
          name="user_name" 
         
          placeholder='Tu nombre'
           
        />
        </label>
       
        <label className={styles.contactLabel}> y quisera saber mas sobre
        <input
          name="message" 
          maxLength="100"
          
          placeholder='Cual Servicio?'
          

        /> 
        </label> 
          
        <label className={styles.contactLabel}>. 
        
          Puedes encontrarme  
        <input  
          name="user_email"
         
          placeholder='tu-email'
          
        /> 
        </label>
       y
        <label className={styles.contactLabel}> mi teleofno es   
        <input  
          name="message"
          placeholder='+1 111111111'
          style={{textAlign: "center"}}
           
        /> 
         </label>
        <br/>

      <Popup
        trigger={
        

        <button  
          value="Send" 
          type="submit"
          > 
          <Link href='' className={styles.buttons1} scroll={false}>
              Enviar info &#8594;
          </Link>
         
          
        </button>}
          modal
          nested
          
        >
    {close => (
      <div className={styles.containerPopUp}>
         <button className={styles.close} onClick={close}>
          &times;
        </button> 
      <div className={styles.TextPopUp} >
        <h3> Gracias por contactarnos<span className={styles.SmallFont}> &#x2661;</span>
        </h3>
        

      </div>


      </div>
    )} 
  </Popup>
 
      
    </form>
    </div>

    </div>
    


    <div className={styles.hero}>
          <div><img src={logotipo.src}  alt="Logo"  /></div>
    </div>
    <Footer/>
    </main>
</>
)
}