import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProduct from "../cardProduct/cardProduct";
import './slider.css'
export default function Sliderr({Products}){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(<>
    <div className="Card col-xl-12 g-2  container">
    <Slider {...settings}>
    

    {
        Products.map((item)=>{
            return(
                <div className="slide " style={{width:200}}>
                <div className="image-s"><img src={item.img} alt="" /></div>
                <p>{item.name}</p>
                </div>
            )
        })
    }





    </Slider>
    </div>
    </>
       
    )
}



