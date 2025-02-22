import img1 from './../../images/fresh-and-dried-seasoning-herbs-and-spices-TV9EN5U-7.png'
import img2 from './../../images/Pioneer-22.png'
import img3 from './../../images/fresh-and-dried-seasoning-herbs-and-spices-TV9EN5U-26.png'
import img4 from './../../images/Pioneer-9.png'
import img5 from './../../images/fresh-and-dried-seasoning-herbs-and-spices-TV9EN5U-8.png'
import img6 from './../../images/fresh-and-dried-seasoning-herbs-and-spices-TV9EN5U-5-768x815.png'
import CardLinksHome from './cardLinksHome'
import './cardLinksHomeM.css'

export default function CardLinksHomeM(){
    const dataLinks=[
        {title: "Concentrated spices (powder)" ,img:img5},
        {title: "Sauces and Cheeses (Powder)" ,img:img2},
        {title: "Concentrated Flavors (Powder)" ,img:img3},
        {title: "Concentrated Flavors (oils)" ,img:img4},
        {title: "Concentrated Spice Mixes" ,img:img1}
        ,{title: "Food Solutions and Technology Products" ,img:img6},
    ]
    return(
        <div className="row  m-auto container  ">
            
            {
                dataLinks.map((item,index)=>{
                    return(
                        <CardLinksHome key={index}  title={item.title} img={item.img}/>
                        
                    )
                })
            }
           
     </div>
    )
}