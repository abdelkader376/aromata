import Homee from "./pages/homepage";
import img1 from './images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Page1  from "./pages/page1/page1";
import SubNavbar from "./components/navbar/subNavbar";
import Nav from "./components/navbar/nav";
import ProductDetails from "./components/page1-com/productDetails";
import Page2 from "./pages/page2/page2";
import Footer from "./components/footer/footer";
import Page3 from "./pages/page3/page3";
import Page4 from "./pages/page4/page4";
import Search from "./components/Searh/search";
import Page5 from "./pages/page5/page5";
import Page6 from "./pages/page6/page6";
import ContactPage from "./components/contactPage/contactPage";
import { useState } from "react";
import  { Toaster } from 'react-hot-toast';
import CartPage2 from "./components/cartpage/cartPage2";

function App() {
  function Sendwhatsapp(){
    var phonenumber = "+01120386278";

    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var country = document.querySelector(".country").value;
    var message = document.querySelector(".message").value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Country:* "+country+"%0a"
    +"*Message :* "+message
    +"%0a%0a"
    +"This is an example of send HTML form data to WhatsApp";

    window.open(url, '_blank').focus();
  }
  // const [cart,setCart]=useState([])
 const  Products =[
         {
             name:"توابل الفلافل الشامية Falafel seasoning",price:"105 ج.م–345 ج.م",img:img1,id:1 ,des:""
         },
         {
             id:2 , name:"مرقة سي فود بودر Seafood broth powder",price:"70 ج.م–195 ج.م",img:img1
         },
         {
             id:3 , name:"مرقة خضار بودر Vegetable broth powder",price:"70 ج.م–195 ج.م",img:img1
         },
         {
             id:4 , name:"مرقة ضاني بودر Lamb broth powder",price:"70 ج.م–195 ج.م",img:img1
         },
         {
             id:5 , name:"جيلاتين بقري خام بودر (حلال) Pure gelatin powder (HALAL)",price:"118 ج.م–375 ج.م",img:img1
         },        {
             id:6 ,  name:"ملح كرفس مركز Concentrated celery salt",price:"75 ج.م–465 ج.م",img:img1
         },        {
             id:7 ,  name:"خلطة توابل الجمبري بريدينج Shrimps breading seasoning",price:"90 ج.م–295 ج.م",img:img1
         },        {
             id:8 , name:"خلطة توابل الريزو Rizo rice spice seasoning",price:"75 ج.م–225 ج.م",img:img1
         },        {
             id:9 , name:"خلطة توابل السجق الإيطالي Italian sausage seasoning",price:"135 ج.م–385 ج.م",img:img1
         },        {
             id:10 , name:"صوص ثومية مايو سبايسي بودر Spicy garlic mayo paste powder",price:"115 ج.م–405 ج.م",img:img1
         },
         {
          id:11,  name:"نكهة التدخين (سموكي) بودر Smoke flavor powder",price:"95 ج.م–495 ج.م",img:img1
          },
           {
            id:12, name:"جبنة بارميزان بودر Parmesan cheese powder",price:"165 ج.م–490 ج.م",img:img1 
              },
              {
                id:13 ,name:"نكهة الشواء بودر BBQ flavor powder",price:"95 ج.م–495 ج.م",img:img1,
              },
              {
                id:14,  name:"مطري لحوم Meat tenderizer",price:"135 ج.م–355 ج.م",img:img1 ,
              },
              {
                id:15,  name:"ملح صيني تركيز عالي 99% Concentrated MSG",price:"130 ج.م–255 ج.م",img:img1 ,
              },
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
                 },                                 {
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
                  quantity:1 , id:230 ,name:"محسن خبز بودر Baking improver/ enhancer",price:45 ,img:img1,des:"Bread improver/ enhancer"
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
                                 
     ];
    //  const ProductsB= [
       
    //  ]

  return (
    
    <div className="App">

            <Toaster/>
      {/* <Nav  /> */}
       <SubNavbar/>
      <Routes>
      <Route index  element={<Homee />}/>
      <Route path="/توابل"  element={<Page1/>}/>
      <Route path="/صوصات"  element={<Page2/>}/>
      <Route path="/النكهات المركزة بودر" element={<Page3/>}/>
      <Route path="/النكهات المركزة زيوت" element={<Page4/>}/>
      <Route path="/خلطات توابل مركزة" element={<Page5/>}/>
      <Route path="/منتجات حلول وتقنية الأغذية" element={<Page6/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/Details/:id" element={<ProductDetails Products={Products}/>}/>
      <Route path="/search/:name" element={<Search Products={Products}/>}/>
      <Route path="/cartpage2" element={<CartPage2/>}/>
      </Routes>
      
      <Footer/>
      

    </div>
    
  );
}

export default App;
