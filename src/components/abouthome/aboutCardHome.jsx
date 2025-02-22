import { useEffect } from 'react'
import './aboutCardHome.css'
import AOS from'aos'
import 'aos/dist/aos.css'
export default function AboutCardHome(props){
    useEffect(()=>{
        AOS.init();
    },[])
    return(
       
           <section >
            <div className="row m-auto  " >
           <div className="aboutCard col-md-4 col-lg-3  col-sm-10   " data-aos="fade-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" >
              <div className="headCard">
                  <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                  <h5>Innovative, high-quality, and highly concentrated products.</h5>
              </div>
              <div className="bodyCard">
                  <p>The finest natural ingredients, spice extracts, and flavors with amazing results.</p>
              </div>
          </div>
          <div className="aboutCard col-md-4 col-lg-3  col-sm-10 " data-aos="flip-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
              <div className="headCard">
              <i class="fa-regular fa-star"></i>
                  <h5>Effective and easy to prepare and operate.</h5>
              </div>
              <div className="bodyCard" > 
                  <p>Ideal for processed meats, food industries, restaurants, hotels, and catering companies.</p>
              </div>
          </div>
          <div className="aboutCard  col-sm-10 col-md-4 col-lg-3  " data-aos="fade-down" data-aos-easing="ease-out-cubic"
             data-aos-duration="2000">
              <div className="headCard">
              <i class="fa-solid fa-taxi"></i>
                  <h5>Shipping to all governorates.</h5>
              </div>
              <div className="bodyCard">
                  <p>We provide our customers with fast and easy shipping methods.</p>
              </div>
          </div>
          </div>



          
          </section>
    )
}