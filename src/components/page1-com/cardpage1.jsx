import { useState } from "react";
import CardProduct from "../cardProduct/cardProduct"
import img1 from './../../images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'
import Pag from "./P";
export default function CardPage1(){
    const Products =[
        {
          quantity:1,     id:16,    name:"جيلاتين بقري خام بودر (حلال) Pure gelatin powder (HALAL)",price:25,img:img1,des:"Pure halal beef powdered gelatin, a wonderful and versatile ingredient for cooking, desserts, and processed meats such as luncheon meat, corned beef, and many other foods."
        },
        {
          quantity:1,     id:17,   name:"ملح كرفس مركز Concentrated celery salt",price:25,img:img1,des:"Concentrated celery salt for fried chicken seasoning blends and various foods."
        },
        {
          quantity:1, id:18,  name:"خلطة توابل عجينة البيتزا Italian pizza dough seasoning",price:25,img:img1,des:"high-quality pizza dough spice blend from Aromata."
        },        {
          quantity:1,   id:19,    name:"مسحوق شطة عالي التركيز Concentrated chili powder",price:25,img:img1,des:"Concentrated chili powder, highly soluble in oil and water."
        },        {
          quantity:1,     id:20, name:"بديل الملح الصيني الطبيعي (أومامي 66) Umami 66 (Natural alternative for MSG)",price:25,des:"Umami 66 is a 100% natural and healthy alternative to monosodium glutamate (MSG), commonly known as Chinese salt. It is designed to enhance, improve, and impart a delicious flavor to foods. Derived from beetroots and sugar cane, it boasts a high nutritional value, rich in plant proteins and vitamins.",img:img1
        },        {
          quantity:1,    id:21,  name:"خلطة السبع بهارات المركزة Seven spices mixture",price:25,img:img1,des:"Concentrated seven spices mixture powder from Aromata."
        },        {
          quantity:1,   id:22,  name:"كاري بودر مركز Concentrated curry powder",price:25,img:img1,des:"Concentrated curry mixture powder from Aromata"
        },        {
          quantity:1,  id:23,   name:"خلطة التوابل الإيطالية Italian mixed seasoning",price:25,img:img1,des:"High-quality Italian spice mix from aromata for pizza, pasta, and many foods."
        },        {
          quantity:1,  id:24,   name:"كرفس مركز بودر Extracted celery powder",price:25,img:img1,des:"Extracted celery powder high concentration."
        },        {
          quantity:1,   id:25,  name:"توابل الكيجين مركزة بودر Extracted cajun seasoning",price:25,img:img1,des:"High-quality Cajun seasoning blend for seafood, pasta, Asian food, and many other foods."
        },        {
          quantity:1,   id:26,  name:"بابريكا مدخنة مركزة بودر Concentrated smoked babrika powder",price:25,img:img1,des:"Beirut 66’s Concentrated smoked babrika powder .multi us"
        },        {
          quantity:1,  id:27 ,  name:"زعتر مركز بودر Extracted thyme powder",price:25,img:img1,des:"Extracted thyme powder high concentration."
        },        {
          quantity:1,    id:28, name:"مستكة مركزة بودر Extracted mustic powder",price:25,img:img1,des:"Extracted mustic powder high concentration."
        },        {
          quantity:1,  id:29 ,  name:"حبهان مركز بودر Extracted cardamom powder",price:25,img:img1,des:"Extracted cardamom powder high concentration."
        },        {
          quantity:1,   id:30,  name:"كمون مركز بودر Extracted cumin powder",price:25,img:img1,des:"Extracted cumin powder high concentration."
        },        {
          quantity:1,    id:31, name:"كزبرة مركزة بودر Extracted coriander powder",price:25,img:img1,des:"Extracted coriander powder high concentration."
        },        {
          quantity:1,   id:32,  name:"جوزة الطيب مركزة بودر Extracted nutmeg powder",price:25,img:img1,des:"Extracted nutmeg powder high concentration."
        },        {
          quantity:1,   id:33,  name:"قرنفل مركز بودر Extracted clove powder",price:25,img:img1,des:"Extracted clove powder high concentration."
        },        {
          quantity:1,   id:34,  name:"زنجبيل مركز بودر Extracted ginger powder",price:25,img:img1,des:"Extracted ginger powder high concentration."
        },        {
          quantity:1,   id:35,  name:"ثوم بودر مركز Concentrated garlic powder",price:25,img:img1,des:"Beirut 66’s concentrated natural garlic powder"
        },        {
          quantity:1,    id:36, name:"بصل بودر مركز Onion powder",price:25,img:img1,des:"Aromta’s concentrated natural onion powder."
        },        {
          quantity:1,   id:37,  name:"فلفل أبيض مركز Extracted white pepper powder",price:25,img:img1,des:"Extracted white pepper powder high concentration."
        },
        {
          quantity:1,    id:38,   name:"فلفل أسود مركز Extracted black pepper powder",price:25,img:img1,des:"Extracted black pepper powder high concentration."
        },
        {
          quantity:1,  id:39,  name:"ملح صيني تركيز عالي 99% Concentrated MSG",price:25,img:img1,des:"Concentrated MSG 99% (Chinese Salt)"
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