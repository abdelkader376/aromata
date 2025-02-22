import { useState } from "react";
import img1 from './../../images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'
import CardProduct from "../../components/cardProduct/cardProduct";
import Pag from "../../components/page1-com/P";

export default function CardPage3(){
    const Products =[
       
           {
            quantity:1,     id:64 ,name:"نكهة زيت الزيتون بودر Olive oil flavor powder",price:40,img:img1,des:"Olive oil Flavor, just a light sprinkle for salads, appetizers, and many types of food."
           },
           {
            quantity:1,    id:65 ,name:"نكهة فرايد تشيكن بودر Fried chicken flavor powder",price:40,img:img1,des:"Concentrated fried chicken flavor for wonderful aromatic taste and smell."
            },
            {
                quantity:1,  id:66 ,name:"نكهة الجمبري بودر Shrimps flavor powder",price:40,img:img1,des:"Get the wonderful natural shrimp flavor and use it with complete ease"
            },
            {
                quantity:1,  id:67 ,name:"نكهة الزبدة بودر Butter flavor powder",price:40,img:img1,des:"Enjoy real butter flavor, great food, and use it with complete ease With just a light sprinkle, you get the natural butter taste."
            },
            {
                quantity:1,  id:68 ,name:"نكهة البسطرمة بودر Bastrami flavor powder",price:40,img:img1,des:"A concentrated powdered original flavor for bastrami, to ensure the excellent taste and beautiful aroma."
            },
            {
                quantity:1, id:69 ,name:"نكهة السجق الأرمني بودر Armani sojok flavor powder",price:40,img:img1,des:"A concentrated powdered original flavor for Armani sojok, to ensure the excellent taste and beautiful aroma."
            },
            {
                quantity:1, id:70 ,name:"نكهة لحمة بودر Beef flavor powder",price:40,img:img1,des:"Enjoy the delicious, real meaty flavor of your food and use it with total easeWith just a light pinch you get the natural taste of beef"
            },
            {
                quantity:1, id:71 ,name:"نكهة الفستق بودر Pistachio flavor powder",price:40,img:img1,des:"Pistachio flavor is versatile and can be used in many types of food and sweets"
            },
            {
                quantity:1, id:72 ,name:"نكهة حليب بودر Milk flavor powder",price:40,img:img1,des:"Powdered milk flavor is versatile and can be used in many types of food and sweets"
            },
            {
                quantity:1, id:73 ,name:"نكهة الفلفل الأخضر بودر Green chili flavor powder",price:40,img:img1,des:"Enjoy the delicious, real green chili flavor of your food and use it with total easeWith just a light pinch you get the natural taste of green chili."
            },
            {
                quantity:1, id:74 ,name:"نكهة ضاني بودر Lamb flavor powder",price:40,img:img1,des:"Enjoy the delicious, real lamb flavor of your food and use it with total easeWith just a light pinch you get the natural taste of lamb"
            },
            {
                quantity:1, id:75 ,name:"نكهة فراخ بودر Chicken flavor powder",price:40,img:img1,des:""
            },
            {
                quantity:1, id:76 ,name:"نكهة ليمون بودر Lemon flavor powder",price:40,img:img1,des:""
            },
            {
                quantity:1,id:77 ,name:"نكهة التدخين (سموكي) بودر Smoke flavor powder",price:40,img:img1,des:"Enjoy the delicious, real chicken flavor of your food and use it with total easeWith just a light pinch you get the natural taste of chicken."
            },
            {
                quantity:1, id:78 ,name:"نكهة الشواء بودر BBQ flavor powder",price:40,img:img1,des:"About this item Enjoy real BBQ flavor . Delicious on so many kinds of food."
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