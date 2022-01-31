import React,{useState, useRef} from "react";
import emailjs from "emailjs-com";
import { Redirect } from "react-router-dom";
//import "../src/components/Contact.css"
import "./CerrarSession.css"

const Result = () =>{
    return(
        <div>
            <p>Data loaded successfully</p>
        <Redirect to = "/signup"  />
        </div>
    )
}


function PageWrapper (props){
    const [result,SetResult] = useState(false)
    const form = useRef(); 
    const[isUser,setIsUser] = useState(true)
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9solm08', 'template_k4npkac', e.target, 'user_V3KKPuddQBtFMV2u8yS66')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        SetResult(true)
    };

    const clickSingOut = (event) =>{
        
        console.log("funca")
        localStorage.removeItem("jwt")
        setIsUser (null)
        window.location.reload(false)
    }

    return (
      <div>
      
<body>
  
<header>
  
  <div className="card mb-3">
    <a href="/">
  <img src="img/hero1.png" className="card-img-top" alt="Portada Serafina"/>
</a>
  </div>
      

</header>
    
        <main>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                      <a href="">
                    <img src="img/summercollection.png" className="d-block w-100" alt="Coleccion de Verano Serafina"/>
                    </a>
                  </div>
                  <div className="carousel-item">
                      <a href="">
                    <img src="img/summercollection2.png" className="d-block w-100" alt="Coleccion de verano Serafina"/>
                    </a>
                  </div>
                  <div className="carousel-item">
                      <a href="">
                    <img src="img/summercollection3.png" className="d-block w-100" alt="Coleccion de verano Serafina"/>
                    </a>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </main>
    
        <br/>
        
    
    <section>
        <div className="card mb-3">
            <a href="">
            <img src="img/bestsellers.png" className="card-img-top" alt="Best Sellers"/>
            </a>
            </div>
    </section>
    
    
    <section>
        <div className="Sale-card">
            <p>SALE 50%</p>
                 </div>
        
        </section>
        <section>
            <div className="card-group">
                <div className="row">
       {props.children}
       </div>
       </div>
        </section>
    
    
        
        
        <footer>
          <div className="container-footer">
              <div className="row-footer">
                  <div className="col-footer">
                      <p>Envios a todo el País</p>
                  </div>
                  <div className="col-footer">
                      <p>Seguinos en nuestras redes sociales</p>
                    </div>
                    <div className="row-redes">
                      <a href="https://www.instagram.com/belenlair"><img src="img/instagram.svg" alt="Link Instagram"/></a>
                      <a href="https://www.facebook.com/belulair"><img src="img/facebook.svg" alt="Link Facebook"/></a>
                      <a href=""><img src="img/twitter.svg" alt="Link Twitter"/></a>
                      </div>
              
              </div>
          </div>
      </footer> 

</body>

    </div>
    )
}

export default PageWrapper;