import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styles from  "../styles/servicios.module.css";
import Head from "next/head";
import Link from "next/link";
import picture3 from "../public/6.jpg"




export default function servicios (){
    return(
<>
<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Snug | Servicios</title>
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
        <div className={styles.firtsbanner} >
        <h1> Nuestros    servicios</h1>
        </div>
   
<div className={styles.section3}>

<div className={styles.brandsContainer}>
  <div className="backgroundImage"
      style={{ backgroundImage: 'url(/6.jpg)' }}
  >
    <div className={styles.brandsItem}>
    
      <h3>  Domotica </h3> 
      <p> Uno de los mejores tal vergas esto y lo otro </p>  
      <button name=" Domotica? " >
            <lebel>
              <Link href="#domotica">  + </Link>  
            </lebel>        
      </button>
</div>
</div>

  <div className="backgroundImage"
      style={{ backgroundImage: 'url(/6.jpg)' }}
  >
    <div className={styles.brandsItem}>
      
      <h3> Redes </h3>
      <p> Uno de los mejores tal vergas esto y lo otro </p>   
      <button name=" Redes? " >
            <lebel>
              <Link href="#redes">  + </Link>  
            </lebel>        
      </button>
  </div>
  </div>

  <div className="backgroundImage"
      style={{ backgroundImage: 'url(/6.jpg)' }}
  >
    <div className={styles.brandsItem}>  
     
      <h3>Seguridad </h3> 
      <p> Uno de los mejores tal vergas esto y lo otro </p>  
      <button name=" seguridad " >
            <lebel>
              <Link href="#seguridad">  + </Link>  
            </lebel>        
      </button>
  </div>
  </div>
  <div className="backgroundImage"
      style={{ backgroundImage: 'url(/6.jpg)' }}
  >
    <div className={styles.brandsItem}>  
     
      <h3>A / V  </h3> 
      <p> Uno de los mejores tal vergas esto y lo otro </p>  
      <button name="audio y video " >
            <lebel>
              <Link href="#ayv"> &#x2b; </Link>  
            </lebel>        
      </button>
  </div>
  </div>
  
</div>



</div>

{/*Desarrollo*/}

<div className={styles.section4}>

      <div className={styles.sectioncontainer}>
      
          <div className={styles.sectioncontainerItem}>

            <div className={styles.paddingText} id="domotica">
                <h2> Domotica</h2>
           
                <p >
                  Dolore excepteur do velit consequat consectetur velit 
                  Lorem sunt occaecat incididunt reprehenderit veniam. 
                  Amet veniam dolor laborum elit eiusmod laboris 
                  laborum cillum qui irure ad. Non enim eu voluptate 
                  ullamco ullamco irure. Sint irure duis ut et quis 
                  proident est officia Lorem enim sint qui adipisicing. 
                  Sint irure duis ut et quis 
                  proident est officia Lorem enim sint qui adipisicing
                  Sint irure duis ut et quis 
                  proident est officia Lorem enim sint qui adipisicing
                
                </p>

                 <ul>
                  <li>hacemos esto </li>
                  <li>y luego hacemos esto </li>
                  <li> Despues esto hacemos esto </li>
                  <li>y chingamos estos  </li>
                  <li> Despues esto hacemos esto </li>
                  <li>y chingamos estos  </li>
                  <li> Despues esto hacemos esto </li>
                  <li>y chingamos estos  </li>
                  <li> Despues esto hacemos esto </li>
                </ul>
            </div>
            
          </div>
        

          <div className={styles.sectioncontainerItem}>
            <img src={picture3.src} />
          </div>
      </div>
      

      <div className={styles.sectioncontainer}>
          <div className={styles.sectioncontainerItem}>
            <img src={picture3.src} />
          </div>
          <div className={styles.sectioncontainerItem}>

            
          <div className={styles.paddingText} id="redes">

            <h2 > Redes </h2>
           
            <p>
               Dolore excepteur do velit consequat consectetur velit 
               Lorem sunt occaecat incididunt reprehenderit veniam. 
               Amet veniam dolor laborum elit eiusmod laboris 
               laborum cillum qui irure ad. Non enim eu voluptate 
               ullamco ullamco irure. Sint irure duis ut et quis 
               proident est officia Lorem enim sint qui adipisicing. 
               Sint irure duis ut et quis 
               proident est officia Lorem enim sint qui adipisicing
               Sint irure duis ut et quis 
               proident est officia Lorem enim sint qui adipisicing
             
            </p>

            <ul >
              <li>hacemos esto </li>
              <li>y luego hacemos esto </li>
              <li> Despues esto hacemos esto </li>
              <li>y chingamos estos  </li>
              <li> Despues esto hacemos esto </li>
              <li>y chingamos estos  </li>
              <li> Despues esto hacemos esto </li>
              <li>y chingamos estos  </li>
              <li> Despues esto hacemos esto </li>
            </ul>

             

          </div>
          </div>
      </div>

      <div className={styles.sectioncontainer}>
          <div className={styles.sectioncontainerItem}>

          <div className={styles.paddingText} id="seguridad">

              <h2> Seguridad</h2>
            
              <p>
                Dolore excepteur do velit consequat consectetur velit 
                Lorem sunt occaecat incididunt reprehenderit veniam. 
                Amet veniam dolor laborum elit eiusmod laboris 
                laborum cillum qui irure ad. Non enim eu voluptate 
                ullamco ullamco irure. Sint irure duis ut et quis 
                proident est officia Lorem enim sint qui adipisicing. 
                Sint irure duis ut et quis 
                proident est officia Lorem enim sint qui adipisicing
                Sint irure duis ut et quis 
                proident est officia Lorem enim sint qui adipisicing
              </p>

              <ul>
                <li>hacemos esto </li>
                <li>y luego hacemos esto </li>
                <li> Despues esto hacemos esto </li>
                <li>y chingamos estos  </li>
                <li> Despues esto hacemos esto </li>
                <li>y chingamos estos  </li>
                <li> Despues esto hacemos esto </li>
                <li>y chingamos estos  </li>
                <li> Despues esto hacemos esto </li>
              </ul>
            </div>
          </div>
          <div className={styles.sectioncontainerItem}>
            <img src={picture3.src} />
          </div>
         
      </div>

      <div className={styles.sectioncontainer}>
          <div className={styles.sectioncontainerItem}>
            <img src={picture3.src} />
          </div>
          <div className={styles.sectioncontainerItem}>

            
          <div className={styles.paddingText} id="ayv">

            <h2> A / V </h2>
           
            <p>
               Dolore excepteur do velit consequat consectetur velit 
               Lorem sunt occaecat incididunt reprehenderit veniam. 
               Amet veniam dolor laborum elit eiusmod laboris 
               laborum cillum qui irure ad. Non enim eu voluptate 
               ullamco ullamco irure. Sint irure duis ut et quis 
               proident est officia Lorem enim sint qui adipisicing. 
               Sint irure duis ut et quis 
               proident est officia Lorem enim sint qui adipisicing
               Sint irure duis ut et quis 
               proident est officia Lorem enim sint qui adipisicing
            </p>

            <ul>
              <li>hacemos esto </li>
              <li>y luego hacemos esto </li>
              <li> Despues esto hacemos esto </li>
              <li>y chingamos estos  </li>
              <li> Despues esto hacemos esto </li>
              <li>y chingamos estos  </li>
              <li> Despues esto hacemos esto </li>
              <li>y chingamos estos  </li>
              <li> Despues esto hacemos esto </li>
            </ul>

             

          </div>
          </div>
      </div>

      <div className={styles.sectioncontainer}>
      
          <div className={styles.sectioncontainerItem}>

            <div className={styles.paddingText} id="domotica">
                <h2> Servicios especializados </h2>
           
                <p >
                  Dolore excepteur do velit consequat consectetur velit 
                  Lorem sunt occaecat incididunt reprehenderit veniam. 
                  Amet veniam dolor laborum elit eiusmod laboris 
                  laborum cillum qui irure ad. Non enim eu voluptate 
                  ullamco ullamco irure. Sint irure duis ut et quis 
                  proident est officia Lorem enim sint qui adipisicing. 
                  Sint irure duis ut et quis 
                  proident est officia Lorem enim sint qui adipisicing
                  Sint irure duis ut et quis 
                  proident est officia Lorem enim sint qui adipisicing
                
                </p>

                 <ul>
                  <li>hacemos esto </li>
                  <li>y luego hacemos esto </li>
                  <li> Despues esto hacemos esto </li>
                  <li>y chingamos estos  </li>
                  <li> Despues esto hacemos esto </li>
                  <li>y chingamos estos  </li>
                  <li> Despues esto hacemos esto </li>
                 
                </ul>
            </div>
            
          </div>
        

          <div className={styles.sectioncontainerItem}>
            <img src={picture3.src} />
          </div>
      </div>
     

  </div>



  <div className={styles.firtsbanner}>
       <h2> Dolore excepteur do velit consequat consectetur velit   </h2> 
       <button name=" Quieres saber más? " >
            <lebel>
              <Link href="/servicios">  Quieres saber más?  </Link>  
            </lebel>        
          </button>
    </div>







   
   
   
   
   
   
   
   <Footer/>
   </main>


</>
    )
}