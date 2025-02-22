import { useState } from "react";
import img1 from './../../images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'
import CardProduct from "../../components/cardProduct/cardProduct";
import Pag from "../../components/page1-com/P";



export default function CardPage4(){
    
    const Products =[
       
           {
            quantity:1,  id:178 ,name:"مطري فراخ بروستد Chicken broasted tenderizer",price:45,img:img1,des:"Broasted chicken tenderizer is a natural product that breaks down the fibers and tissues of the chicken to achieve tender meat, ensuring perfect cooking and reducing frying time."
           },
           {
            quantity:1,    id:179 ,name:"زيت نكهة البندق Hazelnut oil flavor",price:45,img:img1,des:"Hazelnut oil flavor (concentrated)"
           },
           {
            quantity:1, id:180 ,name:"جيلاتين بقري خام بودر (حلال) Pure gelatin powder (HALAL)",price:45,img:img1,des:"Pure halal beef powdered gelatin, a wonderful and versatile ingredient for cooking, desserts, and processed meats such as luncheon meat, corned beef, and many other foods."
           },
           {
            quantity:1,  id:181 ,name:"ملح كرفس مركز Concentrated celery salt",price:45,img:img1,des:"Concentrated celery salt for fried chicken seasoning blends and various foods."
           },
           {
            quantity:1, id:182 ,name:"زيت شطة مركز Chili concentrated oil",price:45,img:img1,des:"Chili concentrated oil"
           },
           {
            quantity:1, id:183 ,name:"زيت نكهة الجمبري Shrimps flavor oil",price:45,img:img1,des:" Shrimps flavor oil"
           },
           {
            quantity:1, id:184 ,name:"زيت نكهة سجق أرمني (اسكندراني) Armenian sojok flavor oil",price:45,img:img1,des:" Armenian sojok flavor oil"
           },
           {
           quantity:1, id:185 ,name:"نشاء البطاطس Potato starch",price:45,img:img1,des:"Potato starch, versatile for cheese products, sauces, sweets and food industries."
           }, {
            quantity:1, id:186 ,name:"شرش اللبن بودر Whey powder",price:45,img:img1,des:"whey powder, versatile for meat products, food industries, and nutritional supplements."
           }, {
            quantity:1, id:187 ,name:"صويا أيزوليت مركز Soy isolate concentrate",price:45,img:img1,des:"Concentrated soy protein powder, versatile for meat products and nutritional supplements"
           }, {
            quantity:1, id:188 ,name:"خلطة توابل عجينة البيتزا Italian pizza dough seasoning",price:45,img:img1,des:"high-quality pizza dough spice blend from Aromata."
           }, {
            quantity:1, id:189 ,name:"صوص بيتزا بودر Pizza sauce powder",price:45,img:img1,des:"Pizza sauce powder, high quality, global taste, economical and easy to prepare, long shelf life."
           }, {
            quantity:1, id:190 ,name:"صلصة الطماطم بودر Tomato paste powder",price:45,img:img1,des:"Tomato paste powder, high quality, delicious taste, economical and easy to prepare, long shelf life, versatile"
           }, {
            quantity:1, id:191 ,name:"طماطم بودر Tomato powder",price:45,img:img1,des:"Tomato powder, high quality, great taste, versatile."
           }, {
            quantity:1, id:192 ,name:"مسحوق تماسك الفراخ Chicken binder",price:45,img:img1,des:"Burger meat binder to make minced chicken ingredients sticky and holding up firm, texture and shape."
           }, {
            quantity:1, id:193 ,name:"بقسماط لون أبيض Breadcrumbs white color",price:45,img:img1,des:"High quality (white color) breadcrumbs, used for breading for chicken mosahhab , mozzarella sticks, chicken pane , scallops and many foods."
           }, {
            quantity:1, id:194 ,name:"نكهة زيت الزيتون بودر Olive oil flavor powder",price:45,img:img1,des:"Olive oil Flavor, just a light sprinkle for salads, appetizers, and many types of food."
           }, {
            quantity:1, id:195 ,name:"مثبت الكوتينج (للبروستد) Coating glue (for fried chicken)",price:45,img:img1,des:"coating glue (binder) for fried chicken is a natural substance used to secure and bind the flour coating to the chicken"
           }, {
            quantity:1, id:196 ,name:"زيت نكهة فرايد تشيكن (مركز) Fried chicken flavor oil",price:45,img:img1,des:"Fried chicken flavor oil"
           }, {
            quantity:1, id:197 ,name:"زيت نكهة التدخين المركزة Smoke oil flavor",price:45,img:img1,des:"Enjoy real smoked flavor in minutes from natural apple woodwhich, easy to useWith just a small pinch, you get smoked chicken, meat, sausage, kofta, turkey or smoked fish, and many types of food.. .."
           }, {
            quantity:1, id:198 ,name:"زيت نكهة تشيكن ناجتس (مركز) Chicken nuggets flavor oil",price:45,img:img1,des:" Chicken nuggets flavor oil"
           }, {
            quantity:1, id:199 ,name:"بديل الملح الصيني الطبيعي (أومامي 66) Umami 66 (Natural alternative for MSG)",price:45,img:img1,des:"Umami 66 is a 100% natural and healthy alternative to monosodium glutamate (MSG), commonly known as Chinese salt. It is designed to enhance, improve, and impart a delicious flavor to foods. Derived from beetroots and sugar cane, it boasts a high nutritional value, rich in plant proteins and vitamins."
           }, {
            quantity:1, id:200 ,name:"رابط صوص بودر Sauce binder powder",price:45,img:img1,des:"Nutritional yeast powder is 100% natural and contains excellent vegetable proteins and vitamins."
           }, {
            quantity:1, id:201 ,name:"نكهة الجمبري بودر Shrimps flavor powder",price:45,img:img1,des:"Get the wonderful natural shrimp flavor and use it with complete ease Just a light sprinkle for many types of food."
           }, {
            quantity:1, id:202 ,name:"نكهة الزبدة بودر Butter flavor powder",price:45,img:img1,des:"Enjoy real butter flavor, great food, and use it with complete ease With just a light sprinkle, you get the natural butter taste"
           }, {
            quantity:1, id:203 ,name:"بقسماط لون برتقالي Breadcrumbs orange color",price:45,img:img1,des:"High quality (orange color) breadcrumbs, used for breading for chicken mosahhab , mozzarella sticks, chicken pane , scallops and many foods."
           }, {
            quantity:1, id:204 ,name:"بقسماط لون ذهبي Breadcrumbs golden color",price:45,img:img1,des:"High quality (golden color) breadcrumbs, used for breading for chicken mosahhab, mozzarella sticks, chicken pane , scallops and many foods."
           }, {
            quantity:1, id:205 ,name:"نكهة لحمة بودر Beef flavor powder",price:45,img:img1,des:"Enjoy the delicious, real meaty flavor of your food and use it with total ease With just a light pinch you get the natural taste of beef."
           }, {
            quantity:1, id:206 ,name:"صفار بيض بودر Egg yulk powder",price:45,img:img1,des:"Natural egg Yolk Powder Extract from Fresh Eggs Egg yolk powder is the ideal alternative to traditional egg yolks."
           }, {
            quantity:1, id:207 ,name:"نكهة الفستق بودر Pistachio flavor powder",price:45,img:img1,des:"Pistachio flavor is versatile and can be used in many types of food and sweets"
           }, {
            quantity:1, id:208 ,name:"نكهة حليب بودر Milk flavor powder",price:45,img:img1,des:"Powdered milk flavor is versatile and can be used in many types of food and sweets"
           }, {
            quantity:1, id:209 ,name:"نكهة الفلفل الأخضر بودر Green chili flavor powder",price:45,img:img1,des:"Enjoy the delicious, real green chili flavor of your food and use it with total ease With just a light pinch you get the natural taste of green chili."
           }, {
            quantity:1, id:210 ,name:"نكهة ضاني بودر Lamb flavor powder",price:45,img:img1,des:"Enjoy the delicious, real lamb flavor of your food and use it with total ease With just a light pinch you get the natural taste of lamb."
           }, {
            quantity:1, id:211 ,name:"نكهة فراخ بودر Chicken flavor powder",price:45,img:img1,des:"Enjoy the delicious, real chicken flavor of your food and use it with total ease With just a light pinch you get the natural taste of chicken."
           }, {
            quantity:1, id:212 ,name:"تشيكن برو بودر Chicken pro powder",price:45,img:img1,des:"Chicken Pro Powder enhances the flavor, stabilizes and improves the texture of the meat, preserves the juices and moisture inside the meat without affecting the taste."
           }, {
            quantity:1, id:213 ,name:"بيف برو بودر Beef pro powder",price:45,img:img1,des:"Beef Pro Meat Powder enhances the flavor, stabilizes and improves the texture of the meat, preserves the juices and moisture inside the meat without affecting the taste."
           }, {
            quantity:1, id:214 ,name:"مسحوق تماسك الحواوشي Hawawshi meat binder",price:45,img:img1,des:"Luncheon meat binder to make minced meat ingredients sticky and holding up firm, texture and shape."
           }, {
            quantity:1, id:215 ,name:"مسحوق تماسك اللانشون Luncheon meat binder",price:45,img:img1,des:"Luncheon meat binder to make minced meat ingredients sticky and holding up firm, texture and shape."
           }, {
            quantity:1, id:216 ,name:"زيت نكهة ديك رومي (مركز) Turkey flavor oil",price:45 ,img:img1,des:" Turkey flavor oil"
           }, {
            quantity:1, id:217 ,name:"زيت نكهة االلية الضاني (مركز) Lamb fat flavor oil",price:45,img:img1,des:" Lamb fat flavor oil"
           }, {
            quantity:1, id:218 ,name:"زيت نكهة الفلفل الأخضر (مركز) Green pepper flavor oil",price:45,img:img1,des:"Green pepper flavor oil"
           }, {
            quantity:1, id:219 ,name:"زيت نكهة كفتة (مركز) Kofta flavor oil",price:45 ,img:img1,des:"Kofta flavor oil"
           }, {
            quantity:1, id:220 ,name:"زيت نكهة برجر (مركز) Burger flavor oil",price:45 ,img:img1,des:"Burger flavor oil"
           }, {
            quantity:1, id:221 ,name:"زيت نكهة كبدة (مركز) Liver flavor oil",price:45,img:img1,des:"Liver flavor oil"
           }, {
            quantity:1, id:222 ,name:"زيت نكهة سجق (مركز) Sojok flavor oil",price:45 ,img:img1,des:"Sojok flavor oil"
           }, {
            quantity:1, id:223 ,name:"زيت نكهة بسطرما (مركز) Bastrami flavor oil",price:45 ,img:img1,des:"Bastrami flavor oil"
           }, {
            quantity:1, id:224 ,name:"زيت نكهة بلو بيف (مركز) Bull beef flavor oil",price:45 ,img:img1,des:"Bull beef flavor oil"
           }, {
            quantity:1, id:225 ,name:"زيت نكهة لانشون لحمة (مركز) Beef luncheon flavor oil",price:45 ,img:img1,des:" Beef luncheon flavor oil"
           }, {
            quantity:1, id:226 ,name:"زيت نكهة لانشون فراخ (مركز) Chicken luncheon flavor oil",price:45 ,img:img1,des:"Chicken luncheon flavor oil"
           }, {
            quantity:1, id:227 ,name:"زيت نكهة الفستق (مركز) Pistachio flavor oil",price:45 ,img:img1,des:"Pistachio flavor oil"
           }, {
            quantity:1, id:228 ,name:"زيت نكهة الشواء (مركز) BBQ flavor oil",price:45 ,img:img1,des:"BBQ flavor oil"
           }, {
            quantity:1, id:229 ,name:"مانع عفونة المخبوزات Baking mold inhibitor powder",price:45 ,img:img1,des:"Baking mold inhibitor powder is a food-grade powder that is added to baked goods to prevent the growth of mold and other harmful microorganisms."
           }, {
            quantity:1, id:230 ,name:"محسن خبز بودر Baking improver/ enhancer",price:45 ,img:img1,des:"Bread improver/ enhancer"
           }, {
            quantity:1, id:231 ,name:"فيلر توابل Spices Filler",price:45 ,img:img1,des:"Spices filler to reduce the intensity of spices"
           }, {
            quantity:1, id:232 ,name:"نكهة ليمون بودر Lemon flavor powder",price:45 ,img:img1,des:"Concentrated natural lemon flavor powder"
           }, {
            quantity:1, id:233 ,name:"فيلر لحمة Meat Filler",price:45 ,img:img1,des:"Soy substitute meat filler extracted from soybeans that increases the volume of minced meat or chicken tastless. very economical and easy to use"
           }, {
            quantity:1, id:234 ,name:"مسحوق تماسك البرجر Burger meat binder",price:45 ,img:img1,des:"Burger meat binder to make minced meat (Burger) ingredients sticky and holding up firm, texture and shape."
           }, {
            quantity:1, id:235 ,name:"بياض بيض بودر Egg white powder",price:45 ,img:img1,des:"Natural egg white powder extracted from fresh eggs, ideal alternative to traditional egg whites. It gives aNat double amount of foam. It is used for cakes, baked goods, garlic dip, sauces, spices, and many foods, or as a food supplement rich in protein."
           }, {
            quantity:1, id:236 ,name:"نكهة التدخين (سموكي) بودر Smoke flavor powder",price:45,img:img1,des:"Enjoy real smoked flavor in minutes from apple wood, easy to use With just a small pinch, you get smoked chicken, meat, sausage, kofta, turkey or smoked fish and many types of food"
           }, {
            quantity:1, id:237 ,name:"مسحوق تماسك شاورما السجق والدونر Meat binder powder for minced shawarma sojok & doner",price:45 ,img:img1,des:"Meat binder powder to make minced meat shawarma (doner) ingredients sticky and holding up firm, texture and shape."
           }, {
            quantity:1, id:238 ,name:"مسحوق تماسك الكفتة Meat binde for kofta",price:45 ,img:img1,des:"Meat binde to make minced meat (Kofta) ingredients sticky and holding up firm, texture and shape."
           }, {
            quantity:1, id:239 ,name:"مطري لحوم Meat tenderizer",price:45 ,img:img1,des:"Meat tenderizer naturally derived enzyme powder. The enzyme most commonly used is papain, Meat is sprinkled with the powder, and the enzymes help to break down the meat fibers. Perfect result."
           }, {
            quantity:1, id:240 ,name:"مسحوق مزيل الزفارة Odor neutralizer powder",price:45,img:img1,des:"Concentrated MSG 99% (Chinese Salt)"
           }, {
            quantity:1, id:241 ,name:"بيض كامل بودر Whole egg powder",price:45 ,img:img1,des:"Natural whole egg powder extracted from fresh eggs Whole egg powder is the ideal alternative to traditional eggs."
           }, {
            quantity:1, id:242 ,name:"نكهة الشواء بودر BBQ flavor powder",price:45 ,img:img1,des:"About this item Enjoy real BBQ flavor . Delicious on so many kinds of food."
           }, {
            quantity:1, id:243 ,name:"نكهة الزبدة المركزة Concentrated butter oil",price:45 ,img:img1,des:"Concentrated butter oil is made from milk produced by cows. High concentration and very saving."
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