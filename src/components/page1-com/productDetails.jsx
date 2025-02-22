import { useParams } from "react-router-dom"
import '../page1-com/productDetails.css'
import { useEffect, useState } from "react";
import Sliderr from "../slider/slider";
import toast from "react-hot-toast";
import { useRecoilState, useSetRecoilState } from "recoil";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardProduct from "../cardProduct/cardProduct";
import cartAtom from "../../atom/cartAtom";
export default function ProductDetails({Products,props}){
  const setCart = useSetRecoilState(cartAtom)

const {id}=useParams();
const product=Products.find((p)=> p.id=== parseInt(id))

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
 return(
        <>
        <h2>{product.name}</h2>
            <div className="container pro row m-auto mt-4">
                        <div className="image-1 col-lg-6 col-md-12 col-sm-12" >
                            <img src={product.img} alt="" />
                        </div>
                        <div className="text col-lg-6 col-md-12">
                            <h6>{product.name}</h6>
                            <p className="mt-3">{product.price}</p>
                            <p className="mt-3 f-5">{product.des}</p>
                            {/* <p className="mt-3">{product.id}</p> */}
                            <button onClick={()=>{
                            toast.success("Product ADD")
                            setCart((olditem)=>{
                            localStorage.setItem("cart" ,JSON.stringify([...olditem,product]))
                            return[...olditem,product]
                            })
                            }} class="btn btn-success mt-4">Add To Cart</button>
                        </div>
            </div>

           <div className="work">
            <h1></h1>
            <p>{product.work}</p>
           </div>
        
        <div className="title text-center">
          <h3>Related products</h3>
        </div>
            <Carousel responsive={responsive}>
       
        {
        Products.map((item )=>{
            return(
              <div className="container slider ">
                <div className="slide " style={{width:180}}>
                <div className="image-s"><img src={item.img} alt="" /></div>
                <p>{item.name}</p>
                </div>
                </div>
                // <CardProduct  id={item.id} name={item.name} price={item.price} img={item.img} des={item.des} />
            )
        })
    }
        
  
</Carousel>;
        </>
    )
}