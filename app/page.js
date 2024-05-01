import Image from "next/image";
import styles from "../styles/page.module.css";
import Head from "next/head";
import Link from 'next/link'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import logotipo from "../public/LOGOTIPO.png"
import picture7 from "../public/7.jpeg"
import picture4 from "../public/4.jpg"
import picture3 from "../public/10.png"

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
        <Navbar/>
        <div className={styles.Hero}>
          <div><img src={logotipo.src}  alt="Logo"  /></div>
        </div>
        
      {/*Spacer */}
      <div className={styles.separation}></div>
          
        <div className={styles.banners}>
          <h1> !Hola! somos  Snuglab  </h1>
          <p>Expertos en el control de hogares, oficinas o industrias.</p>
          <button name=" Quieres saber más? " >
            <lebel>
              <Link href="/servicios">  Quieres saber más?  </Link>  
            </lebel>        
          </button>
        </div>


      {/*Spacer */}
      <div className={styles.separation}></div>


        <div className={styles.containerBentos}> 
          <div className={styles.bento}>
            <div className="backgroundImage"
                 style={{ backgroundImage: 'url(/1.jpg)' }}
            >
              <div className={styles.bentoItem}>
                <h3> Diseños domoticos</h3>
                 <p>
                    Elavoramos sistemas domoticos para la wevonada de bracho
                 </p>
              </div>
              </div>
              <div className="backgroundImage"
                 style={{ backgroundImage: 'url(/3.jpg)' }}
            >  
            <div className={styles.bentoItem}>
            <h3> Control total con comando de voz</h3>
                 <p>
                    Elavoramos sistemas domoticos para la wevonada de bracho
                 </p>
              </div> 
            </div>
          </div> 
       
          <div className={styles.bentoInverted}>

          <div className="backgroundImage"
                 style={{ backgroundImage: 'url(/7.jpg)' }}
            >
            <div className={styles.bentoItem}>
            <h3>Expertos en </h3>
                 <p>
                    Elavoramos sistemas domoticos para la wevonada de bracho
                 </p>
            </div>
          </div>

          <div className="backgroundImage"
                 style={{ backgroundImage: 'url(/1.jpg)' }}
            >
            <div className={styles.bentoItem}>
            <h3> Domotica</h3>
                 <p>
                    Elavoramos sistemas domoticos para la wevonada de bracho
                 </p>



            </div>
            </div>
          </div> 
        </div>



      {/*Spacer */}
      <div className={styles.separation}></div>

        <div className={styles.section2}>
        <div  className={styles.aboutContainer}>
          <div className={styles.infoItem}>
            <h2>Conoce a <br/> Snug Lab</h2>

          <div className={styles.info}> 
            <div><h3>+7 años</h3>
                 <h3>Experiencia</h3>
            </div>
            <div>
                <h3>+30 </h3>
                <h3>obras ejecutadas</h3>
            </div>
            <div>
                <h3>+5 </h3>
                <h3>Estados en Venezuela</h3>
            </div>
          </div>
          <p>
            Occaecat commodo incididunt Lorem deserunt sunt sint voluptate elit anim. 
            Labore in pariatur labore ex aliquip dolore exercitation elit veniam enim.
            Voluptate consequat veniam incididunt ullamco anim mollit. 
          </p>
          </div>
          <img src={picture7.src}  alt="img"/>
        </div>

    </div>
       {/*Spacer */}
       <div className={styles.separation}></div>

 

{/* Call To Action*/}
<div className={styles.cta}>
  <h1> Transformamos cualquier espacio con tecnologia.</h1>
        <button name=" Portafolio? " >
            <lebel>
              <Link href="/portafolio">  Mira nuestros portafolio  </Link>  
            </lebel>        
        </button>
  

</div>


  <div className={styles.separation}></div>

  <div className={styles.banners}>
    <h5> Conoce Nuestros Servicios</h5>
  </div>
  
  <div className={styles.banners}>
  <h1> Casas Inteligentes </h1>
  </div>


  <div className={styles.containerServcio}>
    <div className="backgroundImage"  style={{ backgroundImage: 'url(https://res.cloudinary.com/control4/image/upload/e_trim:1//marketing-images/audio-video/NEEO_Lifestyle_2.jpg)' }}>
      <div className={styles.uno}>
       <h4> Diseñamos, contruimos e instalamos sistemas de hogares inteligentess </h4>
       <p> -Olvídate de las tareas repetitivas y disfruta de un mayor confort y seguridad con la domótica.
            ofrecemos soluciones personalizadas para automatizar tu hogar, desde controlar la iluminación 
            la temperatura hasta gestionar tus electrodomésticos y recibir notificaciones de seguridad.  
       </p>
      </div>
    </div>
    <div className={styles.dos}>
      <div className="backgroundImage"  style={  { backgroundImage: 'url(https://res.cloudinary.com/control4/image/upload/e_trim:1//marketing-images/Mobile/C4_Images_Mobile_8)' }}> 
       <div className={styles.dosItem } >
       
       <h4>Las casas inteligentes son el futuro  la cosa </h4>
       <p>- Consequat commodo aute non magna deserunt id do officia aute occaecat.
          Ut reprehenderit non ad occaecat deserunt sit ea consequat.
          Est do aliqua eiusmod aute consectetur ipsum.
      </p>
      </div>
      </div>
      <div className="backgroundImage"  style={{ backgroundImage: 'url(https://res.cloudinary.com/control4/image/upload/e_trim:1//marketing-images/Product/C4_Images_Product_Studio_Triad_7)' }}>
      <div className={styles.dosItem}>
      <h4>Las casas inteligentes son el futuro  la cosa </h4>
       <p>- Consequat commodo aute non magna deserunt id do officia aute occaecat.
          Ut reprehenderit non ad occaecat deserunt sit ea consequat.
          Est do aliqua eiusmod aute consectetur ipsum.
          </p>
      </div>
      </div>

    </div>


  </div>

{/*Spacer */}
<div className={styles.separation}></div>

<div className={styles.banners}>
    <h1> Redes, seguridad y control de acceso. </h1>
</div>

<div className={styles.containerServcio}>
    <div className="backgroundImage"  style={{ backgroundImage: 'url(https://res.cloudinary.com/control4/image/upload/e_trim:1//marketing-images/audio-video/NEEO_Lifestyle_2.jpg)' }}>
      <div className={styles.uno}>
       <h4>Las casas inteligentes son el futuro  la cosa </h4>
       <p>- Consequat commodo aute non magna deserunt id do officia aute occaecat.
          Ut reprehenderit non ad occaecat deserunt sit ea  .
          Est do aliqua eiusmod aute consectetur ipsum.
          </p>
      </div>
    </div>

    <div className={styles.donInverted}>
      <div className="backgroundImage"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/control4/image/upload/e_trim:1//marketing-images/Mobile/C4_Images_Mobile_8)' 
          }}> 
        <div className={styles.dosItem } >
          <h4>Las casas inteligentes son el futuro  la cosa </h4>
          <p>
            - Consequat commodo aute non magna deserunt id do officia aute occaecat.
            Ut reprehenderit non ad occaecat deserunt sit ea consequat.
            Est do aliqua eiusmod aute consectetur ipsum.
          </p>
        </div>
      </div>

      <div className="backgroundImage"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/control4/image/upload/e_trim:1//marketing-images/Product/C4_Images_Product_Studio_Triad_7)' 
          }}>
        <div className={styles.dosItem}>
          <h4>Las casas inteligentes son el futuro  la cosa </h4>
          <p>
          - Consequat commodo aute non magna deserunt id do officia aute occaecat.
          Ut reprehenderit non ad occaecat deserunt sit ea consequat.
          Est do aliqua eiusmod aute consectetur ipsum.
          </p>
        </div>
      </div>

    </div>
          
   {/*Spacer */}
   <div className={styles.separation}></div>
    <div className={styles.banners}>
    <h1> Alguna tecnologia a implementar? </h1>
    <button name=" Quieres saber más? " >
            <lebel>
              <Link href="/contacto"> No dudes en Contactanos! </Link>  
            </lebel>        
          </button>
    </div>
    {/*Spacer */}
    <div className={styles.separation}></div>


  </div>

    {/*Marcas con que trabajamos */}
    <div className={styles.section3}>

  
      <div className={styles.banners}>
        <h2> Marcas con las que trabajamos </h2>
      </div>
      <div className={styles.brandsContainer}>
        <div className={styles.brandsItem}>
        <img src={picture3.src}  alt='logo' />
          <h3> Control4 </h3> 
          
          <p> Uno de los mejores tal vergas esto y lo otro </p>  
      </div>
        <div className={styles.brandsItem}>
        <img src={picture3.src}  alt='logo' />
            <h3> lutron </h3>
           
        <p> Uno de los mejores tal vergas esto y lo otro </p>   
        
        </div>
        <div className={styles.brandsItem}>  
        <img src={picture3.src}  alt='logo' />
        <h3>Ubiquiti </h3> 
        <p> Uno de los mejores tal vergas esto y lo otro </p>  
        </div>
        <div className={styles.brandsItem}>  
        <img src={picture3.src}  alt='logo' />
        <h3>Amazon Alexa </h3> 
        <p> Uno de los mejores tal vergas esto y lo otro </p> 
    
         </div>
        <div className={styles.brandsItem}> 
        <img src={picture3.src}  alt='logo' />
         <h3>Philips Hue </h3>
       
        <p> Uno de los mejores tal vergas esto y lo otro </p> 
          </div>
        <div className={styles.brandsItem}>
        <img src={picture3.src}  alt='logo' />
            <h3>Samsung SmartThings </h3>
           
        <p> Uno de los mejores tal vergas esto y lo otro </p> 
          </div>
        <div className={styles.brandsItem}> 
        <img src={picture3.src}  alt='logo' />
         <h3>Google Home </h3>
        <p> Uno de los mejores tal vergas esto y lo otro </p>
           </div>
        <div className={styles.brandsItem}> 
        <img src={picture3.src}  alt='logo' />
         <h3>Apple home kit </h3> 
         
         <p> Uno de los mejores tal vergas esto y lo otro </p> 
        </div>
        <div className={styles.brandsItem}> 
        <img src={picture3.src}  alt='logo' />
         <h3>Tp-link</h3> 
         <p> Uno de los mejores tal vergas esto y lo otro </p> 
  
        </div>
        <div className={styles.brandsItem}> 
        <img src={picture3.src}  alt='logo' />
         <h3>Sonos</h3> 
         <p> Uno de los mejores tal vergas esto y lo otro </p> 

        </div>
        <div className={styles.brandsItem}> 
        <img src={picture3.src}  alt='logo' />
         <h3>Marantz</h3> 
         <p> Uno de los mejores tal vergas esto y lo otro </p> 
      
        </div>
        <div className={styles.brandsItem}> 
        <img src={picture3.src}  alt='logo' />
         <h3>Muchas mas</h3> 
         <p> Uno de los mejores tal vergas esto y lo otro </p> 
      
        </div>
      </div>
    </div>

   


    <Footer/>
    </main>
    </>

  );
}
