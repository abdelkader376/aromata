import { useEffect } from "react";
import AOS from'aos'
import 'aos/dist/aos.css'
import './contactPage.css'
import WhatsAppButton from "../whatsapp/whatsApp";
export default function ContactPage(){
    useEffect(()=>{
            AOS.init();
        },[])
    
    return(
        <section >
            <h4>Contact Us</h4>
        <div className="row m-auto  " >
       <div className="aboutCard col-md-4 col-lg-3  col-sm-10   " data-aos="fade-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" >
          <div className="headCard">
          <i class="fa-solid fa-location-dot"></i>
              <h5>Address</h5>
          </div>
          <div className="bodyCard">
              <p>3-80, AL dyaar bulding, AL Wasl, Business bay, Dubai, UAE</p>
          </div>
      </div>
      <div className="aboutCard col-md-4 col-lg-3  col-sm-10 " data-aos="flip-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
          <div className="headCard">
          <i class="fa-regular fa-star"></i>
              <h5>Email</h5>
          </div>
          <div className="bodyCard" > 
              <p>info@Aromatafoods.com</p>
          </div>
      </div>
      <div className="aboutCard  col-sm-10 col-md-4 col-lg-3  " data-aos="fade-down" data-aos-easing="ease-out-cubic"
         data-aos-duration="2000">
          <div className="headCard">
          <i class="fa-solid fa-taxi"></i>
              <h5>Phone</h5>
          </div>
          <div className="bodyCard">
              <p><WhatsAppButton/></p>
          </div>
      </div>
      </div>



      
      </section>
    )
}