import { Link, useParams } from "react-router-dom";
import CardProduct from "../cardProduct/cardProduct";

import './../../images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'


export default function Search({Products}){
    const {name}=useParams();
    const product=Products.find((p)=> p.name===name)
    console.log(product)
    return(
        <>
        {
                                Products.map((item,index)=>{
                                   return (
                                        
                                        <CardProduct key={index} id={item.id}  name={item.name} price={item.price} img={item.img} />
                                        
                                        
        
                                    )
                                })
                            }
                            </>
    )
}