import { useState } from "react";
import img1 from './../../images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'
import CardProduct from "../../components/cardProduct/cardProduct";
import Pag from "../../components/page1-com/P";



export default function CardPage4(){
    
    const Products =[
       
           {
            quantity:1, id:98 ,name:"خلطة توابل كفتة Fish kofta seasoning",price:40,img:img1,des:"A concentrated mixture of spices for fish Kofta, excellent taste and beautiful aroma."
           },
           {
            quantity:1,  id:99 ,name:"خلطة توابل كفتة الجمبري Shrimps kofta seasoning",price:40,img:img1,des:"A concentrated mixture of spices for Shrimps Kofta, excellent taste and beautiful aroma."
           },{
            quantity:1,  id:100 ,name:"توابل الفلافل الشامية Falafel seasoning",price:40,img:img1,des:" Mixture of spices for Falafel , to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:101 ,name:"مرقة سي فود بودر Seafood broth powder",price:40,img:img1,des:"Seafood broth powder with our wonderful and special mixture."
           },{
            quantity:1,  id:102 ,name:"مرقة خضار بودر Vegetable broth powder",price:40,img:img1,des:"Vegetable broth powder with our wonderful and special mixture."
           },{
            quantity:1,  id:103 ,name:"مرقة ضاني بودر Lamb broth powder",price:40 ,img:img1,des:"Lamb broth powder with our wonderful and special mixture."
           },{
            quantity:1,  id:104 ,name:"خلطة توابل الجمبري بريدينج Shrimps breading seasoning",price:40 ,img:img1,des:"Shrimp breading Seasoning Blend: A concentrated mix for shrimp and seafood, to be added to flour or breadcrumbs. Easy to prepare with a great flavor."
           },{
            quantity:1,  id:105 ,name:"خلطة توابل الريزو Rizo rice spice seasoning",price:40 ,img:img1,des:"The signature Rizo spice mix, a delightful taste!"
           },{
            quantity:1,  id:106 ,name:"خلطة توابل السجق الإيطالي Italian sausage seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for Italian sausage, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:107 ,name:"توابل سجق فراخ Chicken sojok seasoning",price:40,img:img1,des:"A new concentrated spice mix for chicken sausage with high quality and amazing flavor."
           },{
            quantity:1,  id:108 ,name:"توابل تكا فراخ Chicken tikka seasoning",price:40 ,img:img1,des:"A concentrated spice mix for chicken tikka with high quality and amazing flavor."
           },{
            quantity:1,  id:109 ,name:"توابل تندوري فراخ Chicken tandoori seasoning",price:40 ,img:img1,des:"A concentrated spice mix for tandoori chicken with high quality and amazing flavor."
           },{
            quantity:1,  id:110 ,name:"خلطة توابل الفراخ عالفحم سبايسي Charcoal spicy grilled chicken seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for charcoal grilled chicken, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:111 ,name:"خلطة توابل فرانكفورت هوت دوج Frankfurt hotdog seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for Frankfurt hotdog, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:112 ,name:"خلطة توابل عجينة البيتزا Italian pizza dough seasoning",price:40 ,img:img1,des:"high-quality pizza dough spice blend from Aromata."
           },{
            quantity:1,  id:113 ,name:"صوص بيتزا بودر Pizza sauce powder",price:40 ,img:img1,des:"Pizza sauce powder, high quality, global taste, economical and easy to prepare, long shelf life."
           },{
            quantity:1,  id:114 ,name:"صلصة الطماطم بودر Tomato paste powder",price:40 ,img:img1,des:"Tomato paste powder, high quality, delicious taste, economical and easy to prepare, long shelf life, versatile"
           },{
            quantity:1,  id:115 ,name:"طماطم بودر Tomato powder",price:40 ,img:img1,des:"Tomato powder, high quality, great taste, versatile."
           },{
            quantity:1,  id:116 ,name:"خلطة توابل هوت دوج لحمة (سوسيس) Beef hotdog seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for chicken hotdog, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:117 ,name:"خلطة توابل هوت دوج الفراخ (سوسيس) Chicken hotdog seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for chicken hotdog, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:118 ,name:"بقسماط لون أبيض Breadcrumbs white color",price:40 ,img:img1,des:"High quality (white color) breadcrumbs, used for breading for chicken mosahhab , mozzarella sticks, chicken pane , scallops and many foods."
           },{
            quantity:1,  id:119 ,name:"خلطة توابل فراخ مدخنة Smoked chicken seasoning",price:40 ,img:img1,des:"Concentrated spice blend for smoked chicken with excellent taste and high quality."
           },{
            quantity:1,  id:120 ,name:"خلطة توابل لحوم مدخنة Smoked beef seasoning",price:40 ,img:img1,des:"Concentrated spice blend for smoked meats with excellent taste and high quality."
           },{
            quantity:1,  id:121 ,name:"مثبت الكوتينج (للبروستد) Coating glue (for fried chicken)",price:40 ,img:img1,des:"coating glue (binder) for fried chicken is a natural substance used to secure and bind the flour coating to the chicken"
           },{
            quantity:1,  id:122 ,name:"توابل سي فود Seafood seasoning",price:40 ,img:img1,des:"Concentrated seafood seasoning mix from Aromata, high quality and great taste."
           },{
            quantity:1,  id:123 ,name:"خلطة توابل تشيكن ناجتس Chicken nuggets seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for Chicken nuggets, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:124 ,name:"خلطة توابل برجر الفراخ Chicken burger seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for chicken burger, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:125 ,name:"خلطة توابل كفتة الفراخ Chicken kofta seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for chicken Kofta, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:126 ,name:"خلطة توابل كفتة الفراخ المدخنة Smoked chicken kofta seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for chicken Kofta, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:127 ,name:"خلطة توابل الباربكيو BBQ seasoning",price:40,img:img1,des:"A quick and instant spice mix for chicken and meat with an instant barbecue and charcoal flavor that can be added and started cooking immediately. High quality and distinctive taste."
           },{
            quantity:1,  id:128 ,name:"خلطة التوابل الإيطالية Italian mixed seasoning",price:40,img:img1,des:"High-quality Italian spice mix from Aromata for pizza, pasta, and many foods."
           },{
            quantity:1,  id:129 ,name:"خلطة توابل ستيك لحمة Beef steak seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for beef steak, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:130 ,name:"توابل الكبيبة Kobaiba seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for kobaiba coating, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:131 ,name:"خلطة توابل الكبدة الاسكندراني Liver seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for liver, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,id:132 ,name:"بقسماط لون برتقالي Breadcrumbs orange color",price:40 ,img:img1,des:"High quality (orange color) breadcrumbs, used for breading for chicken mosahhab , mozzarella sticks, chicken pane , scallops and many foods."
           },{
            quantity:1,  id:133 ,name:"بقسماط لون ذهبي Breadcrumbs golden color",price:40 ,img:img1,des:"High quality (golden color) breadcrumbs, used for breading for chicken mosahhab, mozzarella sticks, chicken pane , scallops and many foods."
           },{
            quantity:1,  id:135 ,name:"توابل جمبري مدخن Smoked shrimps seasoning",price:40 ,img:img1,des:"Concentrated smoked shrimps seasoning mix from Aromata, high quality and great taste."
           },{
            quantity:1,id:136 ,name:"توابل جمبري Shrimps seasoning",price:40 ,img:img1,des:"Concentrated shrimps seasoning mix from Aromata, high quality and great taste."
           },{
            quantity:1,  id:137 ,name:"توابل سمك مدخن Smoked fish seasoning",price:40 ,img:img1,des:"Concentrated smoked fish seasoning mix from Aromata, high quality and great taste."
           },{
            quantity:1,  id:138 ,name:"توابل سمك Fish seasoning",price:40 ,img:img1,des:"Concentrated fish seasoning mix from Aromata, high quality and great taste"
           },{
            quantity:1,  id:139 ,name:"خلطة توابل الفراخ عالفحم Charcoal grilled chicken seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for charcoal grilled chicken, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,id:140 ,name:"خلطة توابل مشاوي عالفحم Charcoal grills seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for charcoal grills, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:141 ,name:"خلطة توابل لانشون الديك الرومي Turkey luncheon seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for turkey luncheon, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:142 ,name:"خلطة توابل لانشون الفراخ المدخنة Smoked chicken luncheon seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for smoked chicken luncheon, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:143 ,name:"خلطة توابل لانشون اللحمة المدخنة Smoked beef luncheon seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for smoked beef luncheon, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:144 ,name:"خلطة توابل لانشون اللحمة Beef luncheon seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for beef luncheon, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:145 ,name:"خلطة توابل لانشون الفراخ Chicken luncheon seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for chicken luncheon, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:146 ,name:"توابل الكيجين مركزة بودر Extracted cajun seasoning",price:40 ,img:img1,des:"High-quality Cajun seasoning blend for seafood, pasta, Asian food, and many other foods."
           },{
            quantity:1,  id:147 ,name:"خلطة توابل الأرز بالزعفران Saffron rice seasoning",price:40 ,img:img1,des:"A concentrated mixture of saffron flavor for Rice, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:148 ,name:"خلطة توابل أرز مندي الفراخ Chicken mandi rice seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for mandi Rice, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:149 ,name:"مسحوق مرقة اللحمة Beef stock powder",price:40 ,img:img1,des:"Beef stock powder with our wonderful and special mixture."
           },{
            quantity:1,  id:150 ,name:"خلطة توابل أرز مندي اللحمة Mutton mandi rice seasoning",price:40 ,img:img1,des:"A concentrated mixture of spices for mandi Rice, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:151 ,name:"خلطة توابل شاورما اللحمة Beef shawarma seasoning",price:40,img:img1,des:"A concentrated mixture of spices for beef shawarma, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:152 ,name:"خلطة توابل السجق الأرمني Armani sojok seasoning",price:40,img:img1,des:"A concentrated mixture of spices for Armani sojok, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:153 ,name:"محلول نقع فراخ البروستد سبايسي Spicy chicken brine powder",price:40,img:img1,des:"Spicy broasted chicken brine removes poultry odor, enhances flavor, and maintains tenderness."
           },{
            quantity:1,  id:154 ,name:"محلول نقع فراخ البروستد Chicken brine powder",price:40,img:img1,des:"Broasted chicken brine removes poultry odor, enhances flavor, and maintains tenderness."
           },{
            quantity:1,  id:155 ,name:"خلطة توابل الأرز بالزبدة Butter rice seasoning ",price:40,img:img1,des:"A concentrated mixture of buttered spices for Rice, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:156 ,name:"خلطة توابل زنجر فراخ Chicken zinger seasoning –",price:40,img:img1,des:"A concentrated mixture of spices for Chicken zinger, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:157 ,name:"خلطة توابل البسطرمة Bustrami seasoning",price:40,img:img1,des:"A concentrated mixture of spices for bustrami, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:158 ,name:"خلطة توابل لحمة Meat seasoning",price:40,img:img1,des:"A concentrated mixture of spices for meat, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:159 ,name:"خلطة توابل فراخ Chicken seasoning",price:40,img:img1,des:"A concentrated mixture of spices for chicken, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:160 ,name:"خلطة توابل شيش طاووق Shish tawouk seasoning",price:40,img:img1,des:"A concentrated mixture of spices for shish tawouk, high quality excellent taste ."
           },{
            quantity:1,  id:161 ,name:"خلطة توابل برجر مدخن Burger seasoning smoked",price:40,img:img1,des:"A concentrated mixture of spices for smoked  burger, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:162 ,name:"خلطة توابل كفتة مدخنة Smoked kofta seasoning",price:40,img:img1,des:"A concentrated mixture of spices for smoked Kofta, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:163 ,name:"خلطة توابل الكفتة Kofta seasoning",price:40,img:img1,des:"A concentrated mixture of spices for Kofta, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:164 ,name:"خلطة توابل حواوشي مدخن Smoked hawawshi seasoning",price:40,img:img1,des:"A concentrated mixture of spices for smoked hawawshi, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:165 ,name:"خلطة توابل حواوشي Hawawshi seasoning",price:40,img:img1,des:"A concentrated mixture of spices for hawawshi, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:166 ,name:"خلطة توابل السجق الشرقي Oriental sojok seasoning",price:40,img:img1,des:"A concentrated mixture of spices for oriental sojok, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:167 ,name:"خلطة توابل الفاهيتا Chicken fajita seasoning",price:40,img:img1,des:"A concentrated mixture of spices for chicken fajita, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1, id:168 ,name:"خلطة توابل زنجر بريدينج Zinger breading seasoning",price:40,img:img1,des:"Zinger breading seasoning concentrated easy to make and super saving"
           },{
            quantity:1,  id:169 ,name:"خلطة توابل بروستد بريدينج Broasted breading seasoning",price:40,img:img1,des:"Broasted breading seasoning concentrated easy to make and super saving"
           },{
            quantity:1,  id:170 ,name:"خلطة توابل فراخ الشواية Roasted chicken seasoning",price:40,img:img1,des:"A concentrated mixture of spices for grilled chicken, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1, id:171 ,name:"خلطة توابل شاورما الفراخ Chicken shawarma seasoning",price:40,img:img1,des:"A concentrated mixture of spices for chicken shawarma, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:172 ,name:"خلطة توابل البرجر Burger spices seasoning",price:40,img:img1,des:"A concentrated mixture of spices for Burger, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,  id:173 ,name:"خلطة توابل دجاج البروستد Fried chicken seasoning",price:40,img:img1,des:"A concentrated mixture of spices for Chicken broasted, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1, id:174 ,name:"خلطة توابل الأرز Rice seasoning",price:40,img:img1,des:"A concentrated mixture of spices for Rice to ensure excellent taste and beautiful aroma."
           },{
            quantity:1, id:175 ,name:"خلطة توابل الأرز المدخن Smoked rice seasoning",price:40,img:img1,des:"A concentrated mixture of spices for smoked Rice, to ensure the excellent taste and beautiful aroma."
           },{
            quantity:1,   id:176 ,name:"خلطة توابل البطاطس French fries seasoning",price:40,img:img1,des:"A concentrated mixture of spices for French fries, to ensure the excellent taste and beautiful aroma."
           },
           {
            quantity:1, id:177 ,name:"مسحوق مرقة الفراخ Chicken stock",price:40,img:img1,des:"Chicken stock powder with our wonderful and special mixture."
           },

    ]

    const productPerPage=20;
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
                                            
                                            <CardProduct key={index} item={item}/>                                
                                        )
                                    })
                                }
                                <Pag pages={pages} currentPage={currentPage} setcurrentPage={setcurrentPage}/>
                            </div>
                        
                            
        </div>
    )
}