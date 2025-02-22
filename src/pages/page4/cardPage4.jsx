import { useState } from "react";
import img1 from './../../images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'
import CardProduct from "../../components/cardProduct/cardProduct";
import Pag from "../../components/page1-com/P";


export default function CardPage4(){
    const Products =[
       
           {
            quantity:1,  id:79 ,name:"زيت نكهة البندق Hazelnut oil flavor",price:40,img:img1,des:"Hazelnut oil flavor (concentrated)"
           },
           {
            quantity:1,  id:80 ,name:"زيت شطة مركز Chili concentrated oil",price:40,img:img1,des:"Chili concentrated oil"
           },
           {
            quantity:1,  id:81 ,name:"زيت نكهة الجمبري Shrimps flavor oil",price:40,img:img1,des:"Shrimps flavor oil"
           },
           {
            quantity:1,  id:82 ,name:"زيت نكهة سجق أرمني (اسكندراني) Armenian sojok flavor oil",price:40,img:img1,des:" Armenian sojok flavor oil"
           },
           {
            quantity:1,  id:83 ,name:"زيت نكهة فرايد تشيكن (مركز) Fried chicken flavor oil",price:40,img:img1,des:"Fried chicken flavor oil"
           },
           {
            quantity:1,   id:84 ,name:"زيت نكهة التدخين المركزة Smoke oil flavor",price:40,img:img1,des:"Enjoy real smoked flavor in minutes from natural apple woodwhich, easy to use"
           },
           {
            quantity:1, id:85 ,name:"زيت نكهة تشيكن ناجتس (مركز) Chicken nuggets flavor oil",price:40,img:img1,des:"Chicken nuggets flavor oil"
           },
           {
            quantity:1, id:86 ,name:"زيت نكهة ديك رومي (مركز) Turkey flavor oil",price:40,img:img1,des:" Turkey flavor oil"
           },
           {
            quantity:1, id:87 ,name:"زيت نكهة االلية الضاني (مركز) Lamb fat flavor oil",price:40,img:img1,des:"Lamb fat flavor oil"
           },
           {
            quantity:1, id:88 ,name:"زيت نكهة الفلفل الأخضر (مركز) Green pepper flavor oil",price:40,img:img1,des:"Green pepper flavor oil"
           },
           {
            quantity:1, id:89 ,name:"زيت نكهة كفتة (مركز) Kofta flavor oil",price:40,img:img1,des:"Kofta flavor oil"
           },
           {
            quantity:1, id:90 ,name:"زيت نكهة برجر (مركز) Burger flavor oil",price:40,img:img1,des:"Burger flavor oi"
           },
           {
            quantity:1, id:91 ,name:"زيت نكهة سجق (مركز) Sojok flavor oil",price:40,img:img1,des:" Sojok flavor oil"
           },
           {
            quantity:1, id:92 ,name:"زيت نكهة بسطرما (مركز) Bastrami flavor oil",price:40,img:img1,des:" Bastrami flavor oil"
           },
           {
            quantity:1, id:93 ,name:"زيت نكهة لانشون لحمة (مركز) Beef luncheon flavor oil",price:40,img:img1,des:"  Beef luncheon flavor oil"
           },
           {
            quantity:1, id:94 ,name:"زيت نكهة لانشون فراخ (مركز) Chicken luncheon flavor oil",price:40,img:img1,des:"Chicken luncheon flavor oil"
           },
           {
            quantity:1, id:95 ,name:"زيت نكهة الفستق (مركز) Pistachio flavor oil",price:40,img:img1,des:" Pistachio flavor oil"
           },
           {
            quantity:1, id:96 ,name:"زيت نكهة الشواء (مركز) BBQ flavor oil",price:40,img:img1,des:" BBQ flavor oil"
           },
           {
            quantity:1, id:97 ,name:"نكهة الزبدة المركزة Concentrated butter oil",price:40,img:img1,des:"Concentrated butter oil is made from milk produced by cows. High concentration and very saving."
           },
    ]

    const productPerPage=12;
    const pages =Math.ceil(Products.length/productPerPage)
    const [currentPage,setcurrentPage]=useState(1)
    const startIndex =(currentPage -1) * productPerPage;
    const finishIndex =currentPage * productPerPage;
    const orderProducts = Products.slice(startIndex,finishIndex);
    return(
        <div className="page1Section">
            <div className=' row  m-auto mt-5 mb-5'>
                                {
                                    orderProducts.map((item,index)=>{
                                        return (
                                            
                                            <CardProduct key={index} item={item} />                                
                                        )
                                    })
                                }
                                <Pag pages={pages} currentPage={currentPage} setcurrentPage={setcurrentPage}/>
                            </div>
                        
                            
        </div>
    )
}