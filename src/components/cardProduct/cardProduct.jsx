import './cardProduct.css'
import { useEffect } from 'react'
import AOS from'aos'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import cartAtom from '../../atom/cartAtom'
import toast from "react-hot-toast";
import { atom } from "recoil";

export default function CardProduct(props){
  
let value=[];
if(localStorage.getItem('cart')){
 value=JSON.parse(localStorage.getItem('cart'))
}
const cartAtom = atom({
    key: 'cartATom', // unique ID (with respect to other atoms/selectors)
    default: value, // default value (aka initial value)
  });


     useEffect(()=>{
            AOS.init();
        },[])
        const setCart = useSetRecoilState(cartAtom)
        
    return(
        
       
        <div className="cardproduct col-xl-3  col-lg-3 col-md-4 col-sm-5"data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <div className="producthead">
                <img src={props.item.img} alt="" />
                <div className="link"><Link to={`/Details/${props.item.id}`}>Product Details</Link></div>
            </div>
            <div className="productbody">
               <a to=""><h6>{props.item.name}</h6></a> 
                <p>{props.item.price} AED</p>
                {/* <p>{props.item.id}</p> */}
                <button onClick={()=>{
                toast.success("Product ADD")
                setCart((olditem)=>{
                    localStorage.setItem("cart" ,JSON.stringify([...olditem,props.item]))
                return[...olditem,props.item]
                    })
                }}  >Add To Cart</button>
                
            </div>
        </div>
            
        
    )
}

// <button onClick={()=>{
//     toast.success("Product ADD")
// setCart((olditem)=>{
// return[...olditem,props.item]
// })
// }}>add to cart</button>