import { useState } from "react";
import img1 from './../../images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'
import CardProduct from "../../components/cardProduct/cardProduct";
import Pag from "../../components/page1-com/P";
export default function CardPage2(){
    const Products =[
        {
            quantity:1,  id:40 ,name:"جبنة قشقوان بودر Kashkaval cheese powder",price:45,img:img1,des:"Aromata’s Premium Kashkaval cheese powder, super testy and gluten-free, no artificial colours."
        },
        {
            quantity:1,    id:41 ,    name:"صوص ثومية مايو سبايسي بودر Spicy garlic mayo paste powder",price:45 ,img:img1,des:"The delicious spicy garlic paste. It’s added to mayonnaise for shawarma, shish tawook, grilled chicken, sandwiches, broasted chicken, burgers, and many other dishes."
        },
        {
            quantity:1,     id:42 ,name:"صوص ثومية مايو بودر Garlic mayo paste powder",price:45 ,img:img1,des:"The delicious garlic paste. It’s added to mayonnaise for shawarma, shish tawook, grilled chicken, sandwiches, broasted chicken, burgers, and many other dishes."
        },
        {
            quantity:1,    id:43 ,     name:"صوص ترافل مايو بودر Truffle mayo sauce powder",price:45,img:img1,des:"The amazing truffle mayo sauce. It’s added to mayonnaise for burgers, salads, sandwiches, pizza, broasted chicken, steak, seafood, and many other dishes."
        },
        {
            quantity:1,   id:44 ,name:"صوص جبنة رومي مدخنة بودر Smoked romi cheese sauce powder",price:45,img:img1,des:"Aromata’s Premium smoked romi cheese powder, super testy and gluten free."
           },
           {
            quantity:1,    id:45 , name:"صوص جبنة رومي بودر Romi cheese sauce powder",price:45,img:img1,des:"Aromata’s Premium romi cheese powder, super testy and gluten free."
           },
           {
            quantity:1,   id:46 ,    name:"صوص جبنة شيدر مدخنة بودر Smoked cheddar sauce powder",price:45,img:img1,des:"Aromata’s Premium smoked cheddar cheese powder, super testy and gluten free."
           },
           {
            quantity:1,     id:47 ,     name:"صوص بيتزا بودر Pizza sauce powder",price:45,img:img1,des:"Pizza sauce powder, high quality, global taste, economical and easy to prepare, long shelf life."
           },
           {
            quantity:1,    id:48 ,     name:"صلصة الطماطم بودر Tomato paste powder",price:45,img:img1,des:"Tomato paste powder, high quality, delicious taste, economical and easy to prepare, long shelf life, versatile"
           },
           {
            quantity:1,    id:49 ,     name:"مسحوق صوص ديمي جلاس Demi-glace sauce powder",price:45,img:img1,des:"Demi-glace sauce powder easy to prepare great taste and great savings."
           },
           {
            quantity:1,    id:50 ,    name:"صوص جبنة أمريكية بودر American cheese sauce powder",price:45,img:img1,des:"American cheese powder sauce. It is used to make a wonderful American cheese sauce for burgers, fries, and fried chicken, or sprinkle powder on various foods such as pasta, pizza, potatoes, popcorn, etc. It is very economical and easy to prepare and use."
           },
           {
            quantity:1,    id:51 ,    name:"صوص الفلفل الأخضر (سبايسي) بودر Green chilli sauce powder",price:45,img:img1,des:"Aromata’s Green chilli sauce powder, easy to make, super testy."
           },
           {
            quantity:1,    id:52 ,     name:"سيزر صوص بودر Caesar sauce powder",price:45,img:img1,des:"The wonderful caesar sauce. It is added to mayonnaise for pizza, salads, sandwiches, burgers, broasted, steak, seafood, and many other dishes."
           },
           {
            quantity:1,    id:53 ,     name:"جبنة ريكفورد بودر Roquefort cheese powder",price:45,img:img1,des:"Aromata’s Premium Roquefort cheese powder, super testy and gluten-free, no artificial colours."
           },
           {
            quantity:1,    id:54 ,    name:"رانش صوص بودر Ranch sauce powder",price:45,img:img1,des:"The wonderful ranch sauce. It is added to mayonnaise for pizza, salads, sandwiches, burgers, broasted, steak, seafood, and many other dishes."
           },
           {
            quantity:1,    id:55 ,     name:"وايت صوص بودر White sauce powder",price:45,img:img1,des:"Delicious White powder sauce for pasta, pane, scallops, steak, and many other foods. Easy to prepare with a wonderful taste."
           },
           {
            quantity:1,    id:56 ,     name:"مشروم وايت صوص بودر Mushroom white sauce powder",price:45,img:img1,des:"Delicious white mushroom powder sauce for pasta, pane, scallops, steak, and many other foods. Easy to prepare with a wonderful taste."
           },
           {
            quantity:1,    id:57 ,     name:"ستيك بيبر صوص بودر Steak pepper sauce powder",price:45,img:img1,des:"Aromata Powdered Pepper Steak Sauce is easy to prepare, with great taste and high quality"
           },
           {
            quantity:1,    id:58 ,     name:"صوص جمبري بودر Shrimps sauce powder",price:45,img:img1,des:"Shrimp powder sauce from Aromata, easy to prepare and use"
           },
           {
            quantity:1,    id:59 ,    name:"صوص سلطة الفتوش بودر Fattoush salad sauce powder",price:45,img:img1,des:"Aromata’s Fattoush salad sauce powder, easy to make, super testy."
           },
           {
            quantity:1,    id:60 ,     name:"صوص شطة وليمون بودر Lemon chilli sauce powder",price:45,img:img1,des:"Aromata’s Lemon chilli sauce powder, easy to make, super testy."
           },
           {
            quantity:1,    id:61 ,    name:"صوص بيستو بودر Pesto sauce powder",price:45,img:img1,des:"Premium Aromata Pesto sauce Powder with the original Italian flavor, used for pasta, macaroni, pizza, seafood, meats, sandwiches, salads, and many other types of food, Very cost-effective and easy to prepare and use."
           },
           {
            quantity:1,    id:62 ,     name:"صوص سويس مشروم بودر Swiss mushroom sauce powder",price:45,img:img1,des:"Swiss mushroom sauce powder for burgers and steaks, easy to prepare with a great taste and big savings"
           },
           {
            quantity:1,    id:63 ,     name:"باربكيو صوص بودر BBQ sauce powder",price:45,img:img1,des:"Aromata’s BBQ sauce powder, easy to make, super testy."
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