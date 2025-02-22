import { useRecoilValue } from 'recoil';
import './cartPage.css'
import cartAtom from '../../atom/cartAtom';
import { useEffect, useState } from 'react';
export default function CartPage(){


    function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      }
      

// let value=[];
// if(localStorage.getItem('cart')){
//  value=JSON.parse(localStorage.getItem('cart'))
// }
      
// localStorage.setItem('cart',JSON.stringify(cart))
// console.log( JSON.parse(localStorage.getItem('cart'))

//     )
const value=JSON.parse(localStorage.getItem('cart'))
const[cart ,setCart]=useState(value)
useEffect(()=>{
  localStorage.setItem("cart",JSON.stringify(cart))
},[cart])
console.log(cart)
    return(
        <table class="table table-success table-striped">
                <thead>
                    <th>image</th>
                    <th>name</th>
                    <th>price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    
                    {
                       cart?.map((product,index)=>{
                                 return(
                                    <tr>
                                    <td><img src={product.img} alt="" /></td>
                                    <td>{product.name}</td>
                                    <td>55</td>
                                    <td><button onClick={()=>{
                                        setCart( removeItemAtIndex(cart,index))
                                    }}>Delete</button></td>
                                    </tr>
                                     )
                                })
                    }
                    
                </tbody>
    </table>
        // <>
        // 
        // </>
    )
}