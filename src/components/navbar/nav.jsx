import img from './../../images/logo.jpeg'
import '../../components/navbar/nav.css'
import { Link } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import cartAtom from '../../atom/cartAtom'
import { useState } from 'react'
import img1 from './../../images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'

export default function Nav(){
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
               id:16,    name:"جيلاتين بقري خام بودر (حلال) Pure gelatin powder (HALAL)",price:"25 AED",img:img1,des:"Pure halal beef powdered gelatin, a wonderful and versatile ingredient for cooking, desserts, and processed meats such as luncheon meat, corned beef, and many other foods."
              },
              {
               id:17,   name:"ملح كرفس مركز Concentrated celery salt",price:"25 AED",img:img1,des:"Concentrated celery salt for fried chicken seasoning blends and various foods."
              },
              {
                id:18,  name:"خلطة توابل عجينة البيتزا Italian pizza dough seasoning",price:"25 AED",img:img1,des:"high-quality pizza dough spice blend from Aromata."
              },        {
              id:19,    name:"مسحوق شطة عالي التركيز Concentrated chili powder",price:"25 AED",img:img1,des:"Concentrated chili powder, highly soluble in oil and water."
              },        {
                 id:20, name:"بديل الملح الصيني الطبيعي (أومامي 66) Umami 66 (Natural alternative for MSG)",price:"25 AED",des:"Umami 66 is a 100% natural and healthy alternative to monosodium glutamate (MSG), commonly known as Chinese salt. It is designed to enhance, improve, and impart a delicious flavor to foods. Derived from beetroots and sugar cane, it boasts a high nutritional value, rich in plant proteins and vitamins.",img:img1
              },        {
                id:21,  name:"خلطة السبع بهارات المركزة Seven spices mixture",price:"25 AED",img:img1,des:"Concentrated seven spices mixture powder from Aromata."
              },        {
                id:22,  name:"كاري بودر مركز Concentrated curry powder",price:"25 AED",img:img1,des:"Concentrated curry mixture powder from Aromata"
              },        {
               id:23,   name:"خلطة التوابل الإيطالية Italian mixed seasoning",price:"25 AED",img:img1,des:"High-quality Italian spice mix from aromata for pizza, pasta, and many foods."
              },        {
               id:24,   name:"كرفس مركز بودر Extracted celery powder",price:"25 AED",img:img1,des:"Extracted celery powder high concentration."
              },        {
                id:25,  name:"توابل الكيجين مركزة بودر Extracted cajun seasoning",price:"25 AED",img:img1,des:"High-quality Cajun seasoning blend for seafood, pasta, Asian food, and many other foods."
              },        {
                id:26,  name:"بابريكا مدخنة مركزة بودر Concentrated smoked babrika powder",price:"25 AED",img:img1,des:"Beirut 66’s Concentrated smoked babrika powder .multi us"
              },        {
               id:27 ,  name:"زعتر مركز بودر Extracted thyme powder",price:"25 AED",img:img1,des:"Extracted thyme powder high concentration."
              },        {
                 id:28, name:"مستكة مركزة بودر Extracted mustic powder",price:"25 AED",img:img1,des:"Extracted mustic powder high concentration."
              },        {
               id:29 ,  name:"حبهان مركز بودر Extracted cardamom powder",price:"25 AED",img:img1,des:"Extracted cardamom powder high concentration."
              },        {
                id:30,  name:"كمون مركز بودر Extracted cumin powder",price:"25 AED",img:img1,des:"Extracted cumin powder high concentration."
              },        {
                 id:31, name:"كزبرة مركزة بودر Extracted coriander powder",price:"25 AED",img:img1,des:"Extracted coriander powder high concentration."
              },        {
                id:32,  name:"جوزة الطيب مركزة بودر Extracted nutmeg powder",price:"25 AED",img:img1,des:"Extracted nutmeg powder high concentration."
              },        {
                id:33,  name:"قرنفل مركز بودر Extracted clove powder",price:"25 AED",img:img1,des:"Extracted clove powder high concentration."
              },        {
                id:34,  name:"زنجبيل مركز بودر Extracted ginger powder",price:"25 AED",img:img1,des:"Extracted ginger powder high concentration."
              },        {
                id:35,  name:"ثوم بودر مركز Concentrated garlic powder",price:"25 AED",img:img1,des:"Beirut 66’s concentrated natural garlic powder"
              },        {
                 id:36, name:"بصل بودر مركز Onion powder",price:"25 AED",img:img1,des:"Aromta’s concentrated natural onion powder."
              },        {
                id:37,  name:"فلفل أبيض مركز Extracted white pepper powder",price:"25 AED",img:img1,des:"Extracted white pepper powder high concentration."
              },
              {
                  id:38,   name:"فلفل أسود مركز Extracted black pepper powder",price:"25 AED",img:img1,des:"Extracted black pepper powder high concentration."
              },
              {
                id:39,  name:"ملح صيني تركيز عالي 99% Concentrated MSG",price:"25 AED",img:img1,des:"Concentrated MSG 99% (Chinese Salt)"
              },
                      {
                              id:40 ,    name:"جيلاتين بقري خام بودر (حلال) Pure gelatin powder (HALAL)",price:"45 AED",img:img1,des:"جيلاتين بودر بقري خام حلال رائع متعدد الاستخدامات للطبخ والحلويات ومصنعات اللحوم كاللانشون والبلوبيف وأطعمة كثيرة."
                             },
                             {
                              id:41 ,    name:"ملح كرفس مركز Concentrated celery salt",price:"45 AED",img:img1,des:"ملح كرفس مركز لخلطات توابل الفرايد تشيكن وأطعمة متعددة."
                             },
                             {
                              id:42 ,    name:"خلطة توابل عجينة البيتزا Italian pizza dough seasoning",price:"45 AED",img:img1,des:"خلطة توابل عجينة البيتزا الرائعة عالية الجودة من اروماتا"
                             },
                             {
                                 id:43 ,    name:"مسحوق شطة عالي التركيز Concentrated chili powder",price:"45 AED",img:img1
                             },
                             {
                                 id:44 ,    name:"بديل الملح الصيني الطبيعي (أومامي 66) Umami 66 (Natural alternative for MSG)",price:"45 AED",img:img1
                                },
                                {
                                 id:45 ,    name:"خلطة السبع بهارات المركزة Seven spices mixture",price:"45 AED",img:img1
                                },
                                {
                                 id:46 ,    name:"كاري بودر مركز Concentrated curry powder",price:"45 AED",img:img1
                                },
                                {
                                 id:47 ,    name:"خلطة التوابل الإيطالية Italian mixed seasoning",price:"45 AED",img:img1
                                },
                                {
                                 id:48 ,    name:"كرفس مركز بودر Extracted celery powder",price:"45 AED",img:img1
                                },
                                {
                                 id:49 ,    name:"توابل الكيجين مركزة بودر Extracted cajun seasoning",price:"45 AED",img:img1
                                },
                                {
                                 id:50 ,    name:"بابريكا مدخنة مركزة بودر Concentrated smoked babrika powder",price:"45 AED",img:img1
                                },
                                {
                                 id:51 ,    name:"زعتر مركز بودر Extracted thyme powder",price:"45 AED",img:img1
                                },
                                {
                                 id:52 ,    name:"مستكة مركزة بودر Extracted mustic powder",price:"45 AED",img:img1
                                },
                                {
                                 id:53 ,    name:"حبهان مركز بودر Extracted cardamom powder",price:"45 AED",img:img1
                                },
                                {
                                 id:54 ,    name:"كمون مركز بودر Extracted cumin powder",price:"45 AED",img:img1
                                },
                                {
                                 id:55 ,    name:"كزبرة مركزة بودر Extracted coriander powder",price:"45 AED",img:img1
                                },
                                {
                                 id:56 ,    name:"جوزة الطيب مركزة بودر Extracted nutmeg powder",price:"45 AED",img:img1
                                },
                                {
                                 id:57 ,    name:"قرنفل مركز بودر Extracted clove powder",price:"45 AED",img:img1
                                },
                                {
                                 id:58 ,    name:"زنجبيل مركز بودر Extracted ginger powder",price:"45 AED",img:img1
                                },
                                {
                                 id:59 ,    name:"ثوم بودر مركز Concentrated garlic powder",price:"45 AED",img:img1
                                },
                                {
                                 id:60 ,    name:"بصل بودر مركز Onion powder",price:"45 AED",img:img1
                                },
                                {
                                 id:61 ,    name:"فلفل أبيض مركز Extracted white pepper powder",price:"45 AED",img:img1
                                },
                                {
                                 id:62 ,    name:"فلفل أسود مركز Extracted black pepper powder",price:"45 AED",img:img1
                                },
                                {
                                 id:63 ,    name:"ملح صيني تركيز عالي 99% Concentrated MSG",price:"45 AED",img:img1
                                },
                                {
                                            id:64 ,name:"نكهة زيت الزيتون بودر Olive oil flavor powder",price:"",img:img1
                                           },
                                           {
                                            id:65 ,name:"نكهة فرايد تشيكن بودر Fried chicken flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:66 ,name:"نكهة الجمبري بودر Shrimps flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:67 ,name:"نكهة الزبدة بودر Butter flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:68 ,name:"نكهة البسطرمة بودر Bastrami flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:69 ,name:"نكهة السجق الأرمني بودر Armani sojok flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:70 ,name:"نكهة لحمة بودر Beef flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:71 ,name:"نكهة الفستق بودر Pistachio flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:72 ,name:"نكهة حليب بودر Milk flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:73 ,name:"نكهة الفلفل الأخضر بودر Green chili flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:74 ,name:"نكهة ضاني بودر Lamb flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:75 ,name:"نكهة فراخ بودر Chicken flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:76 ,name:"نكهة ليمون بودر Lemon flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:77 ,name:"نكهة التدخين (سموكي) بودر Smoke flavor powder",price:"",img:img1
                                            },
                                            {
                                            id:78 ,name:"نكهة الشواء بودر BBQ flavor powder",price:"",img:img1
                                            },
                                             {
                                                        id:79 ,name:"زيت نكهة البندق Hazelnut oil flavor",price:"",img:img1
                                                       },
                                                       {
                                                        id:80 ,name:"زيت شطة مركز Chili concentrated oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:81 ,name:"زيت نكهة الجمبري Shrimps flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:82 ,name:"زيت نكهة سجق أرمني (اسكندراني) Armenian sojok flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:83 ,name:"زيت نكهة فرايد تشيكن (مركز) Fried chicken flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:84 ,name:"زيت نكهة التدخين المركزة Smoke oil flavor",price:"",img:img1
                                                       },
                                                       {
                                                        id:85 ,name:"زيت نكهة تشيكن ناجتس (مركز) Chicken nuggets flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:86 ,name:"زيت نكهة ديك رومي (مركز) Turkey flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:87 ,name:"زيت نكهة االلية الضاني (مركز) Lamb fat flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:88 ,name:"زيت نكهة الفلفل الأخضر (مركز) Green pepper flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:89 ,name:"زيت نكهة كفتة (مركز) Kofta flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:90 ,name:"زيت نكهة برجر (مركز) Burger flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:91 ,name:"زيت نكهة سجق (مركز) Sojok flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:92 ,name:"زيت نكهة بسطرما (مركز) Bastrami flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:93 ,name:"زيت نكهة لانشون لحمة (مركز) Beef luncheon flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:94 ,name:"زيت نكهة لانشون فراخ (مركز) Chicken luncheon flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:95 ,name:"زيت نكهة الفستق (مركز) Pistachio flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:96 ,name:"زيت نكهة الشواء (مركز) BBQ flavor oil",price:"",img:img1
                                                       },
                                                       {
                                                        id:97 ,name:"نكهة الزبدة المركزة Concentrated butter oil",price:"",img:img1
                                                       },
                                                       {
                                                                   id:98 ,name:"خلطة توابل كفتة Fish kofta seasoning",price:"",img:img1
                                                                  },
                                                                  {
                                                                   id:99 ,name:"خلطة توابل كفتة الجمبري Shrimps kofta seasoning",price:"",img:img1
                                                                  },{
                                                                   id:100 ,name:"توابل الفلافل الشامية Falafel seasoning",price:"",img:img1
                                                                  },{
                                                                   id:101 ,name:"مرقة سي فود بودر Seafood broth powder",price:"",img:img1
                                                                  },{
                                                                   id:102 ,name:"مرقة خضار بودر Vegetable broth powder",price:"",img:img1
                                                                  },{
                                                                   id:103 ,name:"مرقة ضاني بودر Lamb broth powder",price:"",img:img1
                                                                  },{
                                                                   id:104 ,name:"خلطة توابل الجمبري بريدينج Shrimps breading seasoning",price:"",img:img1
                                                                  },{
                                                                   id:105 ,name:"خلطة توابل الريزو Rizo rice spice seasoning",price:"",img:img1
                                                                  },{
                                                                   id:106 ,name:"خلطة توابل السجق الإيطالي Italian sausage seasoning",price:"",img:img1
                                                                  },{
                                                                   id:107 ,name:"توابل سجق فراخ Chicken sojok seasoning",price:"",img:img1
                                                                  },{
                                                                   id:108 ,name:"توابل تكا فراخ Chicken tikka seasoning",price:"",img:img1
                                                                  },{
                                                                   id:109 ,name:"توابل تندوري فراخ Chicken tandoori seasoning",price:"",img:img1
                                                                  },{
                                                                   id:110 ,name:"خلطة توابل الفراخ عالفحم سبايسي Charcoal spicy grilled chicken seasoning",price:"",img:img1
                                                                  },{
                                                                   id:111 ,name:"خلطة توابل فرانكفورت هوت دوج Frankfurt hotdog seasoning",price:"",img:img1
                                                                  },{
                                                                   id:112 ,name:"خلطة توابل عجينة البيتزا Italian pizza dough seasoning",price:"",img:img1
                                                                  },{
                                                                   id:113 ,name:"صوص بيتزا بودر Pizza sauce powder",price:"",img:img1
                                                                  },{
                                                                   id:114 ,name:"صلصة الطماطم بودر Tomato paste powder",price:"",img:img1
                                                                  },{
                                                                   id:115 ,name:"طماطم بودر Tomato powder",price:"",img:img1
                                                                  },{
                                                                   id:116 ,name:"خلطة توابل هوت دوج لحمة (سوسيس) Beef hotdog seasoning",price:"",img:img1
                                                                  },{
                                                                   id:117 ,name:"خلطة توابل هوت دوج الفراخ (سوسيس) Chicken hotdog seasoning",price:"",img:img1
                                                                  },{
                                                                   id:118 ,name:"بقسماط لون أبيض Breadcrumbs white color",price:"",img:img1
                                                                  },{
                                                                   id:119 ,name:"خلطة توابل فراخ مدخنة Smoked chicken seasoning",price:"",img:img1
                                                                  },{
                                                                   id:120 ,name:"خلطة توابل لحوم مدخنة Smoked beef seasoning",price:"",img:img1
                                                                  },{
                                                                   id:121 ,name:"مثبت الكوتينج (للبروستد) Coating glue (for fried chicken)",price:"",img:img1
                                                                  },{
                                                                   id:122 ,name:"توابل سي فود Seafood seasoning",price:"",img:img1
                                                                  },{
                                                                   id:123 ,name:"خلطة توابل تشيكن ناجتس Chicken nuggets seasoning",price:"",img:img1
                                                                  },{
                                                                   id:124 ,name:"خلطة توابل برجر الفراخ Chicken burger seasoning",price:"",img:img1
                                                                  },{
                                                                   id:125 ,name:"خلطة توابل كفتة الفراخ Chicken kofta seasoning",price:"",img:img1
                                                                  },{
                                                                   id:126 ,name:"خلطة توابل كفتة الفراخ المدخنة Smoked chicken kofta seasoning",price:"",img:img1
                                                                  },{
                                                                   id:127 ,name:"خلطة توابل الباربكيو BBQ seasoning",price:"",img:img1
                                                                  },{
                                                                   id:128 ,name:"خلطة التوابل الإيطالية Italian mixed seasoning",price:"",img:img1
                                                                  },{
                                                                   id:129 ,name:"خلطة توابل ستيك لحمة Beef steak seasoning",price:"",img:img1
                                                                  },{
                                                                   id:130 ,name:"توابل الكبيبة Kobaiba seasoning",price:"",img:img1
                                                                  },{
                                                                   id:131 ,name:"خلطة توابل الكبدة الاسكندراني Liver seasoning",price:"",img:img1
                                                                  },{
                                                                   id:132 ,name:"بقسماط لون برتقالي Breadcrumbs orange color",price:"",img:img1
                                                                  },{
                                                                   id:133 ,name:"بقسماط لون ذهبي Breadcrumbs golden color",price:"",img:img1
                                                                  },{
                                                                   id:134 ,name:"بقسماط لون ذهبي Breadcrumbs golden color",price:"",img:img1
                                                                  },{
                                                                   id:135 ,name:"توابل جمبري مدخن Smoked shrimps seasoning",price:"",img:img1
                                                                  },{
                                                                   id:136 ,name:"توابل جمبري Shrimps seasoning",price:"",img:img1
                                                                  },{
                                                                   id:137 ,name:"توابل سمك مدخن Smoked fish seasoning",price:"",img:img1
                                                                  },{
                                                                   id:138 ,name:"توابل سمك Fish seasoning",price:"",img:img1
                                                                  },{
                                                                   id:139 ,name:"خلطة توابل الفراخ عالفحم Charcoal grilled chicken seasoning",price:"",img:img1
                                                                  },{
                                                                   id:140 ,name:"خلطة توابل مشاوي عالفحم Charcoal grills seasoning",price:"",img:img1
                                                                  },{
                                                                   id:141 ,name:"خلطة توابل لانشون الديك الرومي Turkey luncheon seasoning",price:"",img:img1
                                                                  },{
                                                                   id:142 ,name:"خلطة توابل لانشون الفراخ المدخنة Smoked chicken luncheon seasoning",price:"",img:img1
                                                                  },{
                                                                   id:143 ,name:"خلطة توابل لانشون اللحمة المدخنة Smoked beef luncheon seasoning",price:"",img:img1
                                                                  },{
                                                                   id:144 ,name:"خلطة توابل لانشون اللحمة Beef luncheon seasoning",price:"",img:img1
                                                                  },{
                                                                   id:145 ,name:"خلطة توابل لانشون الفراخ Chicken luncheon seasoning",price:"",img:img1
                                                                  },{
                                                                   id:146 ,name:"توابل الكيجين مركزة بودر Extracted cajun seasoning",price:"",img:img1
                                                                  },{
                                                                   id:147 ,name:"خلطة توابل الأرز بالزعفران Saffron rice seasoning",price:"",img:img1
                                                                  },{
                                                                   id:148 ,name:"خلطة توابل أرز مندي الفراخ Chicken mandi rice seasoning",price:"",img:img1
                                                                  },{
                                                                   id:149 ,name:"مسحوق مرقة اللحمة Beef stock powder",price:"",img:img1
                                                                  },{
                                                                   id:150 ,name:"خلطة توابل أرز مندي اللحمة Mutton mandi rice seasoning",price:"",img:img1
                                                                  },{
                                                                   id:151 ,name:"خلطة توابل شاورما اللحمة Beef shawarma seasoning",price:"",img:img1
                                                                  },{
                                                                   id:152 ,name:"خلطة توابل السجق الأرمني Armani sojok seasoning",price:"",img:img1
                                                                  },{
                                                                   id:153 ,name:"محلول نقع فراخ البروستد سبايسي Spicy chicken brine powder",price:"",img:img1
                                                                  },{
                                                                   id:154 ,name:"محلول نقع فراخ البروستد Chicken brine powder",price:"",img:img1
                                                                  },{
                                                                   id:155 ,name:"خلطة توابل الأرز بالزبدة Butter rice seasoning ",price:"",img:img1
                                                                  },{
                                                                   id:156 ,name:"خلطة توابل زنجر فراخ Chicken zinger seasoning –",price:"",img:img1
                                                                  },{
                                                                   id:157 ,name:"خلطة توابل البسطرمة Bustrami seasoning",price:"",img:img1
                                                                  },{
                                                                   id:158 ,name:"خلطة توابل لحمة Meat seasoning",price:"",img:img1
                                                                  },{
                                                                   id:159 ,name:"خلطة توابل فراخ Chicken seasoning",price:"",img:img1
                                                                  },{
                                                                   id:160 ,name:"خلطة توابل شيش طاووق Shish tawouk seasoning",price:"",img:img1
                                                                  },{
                                                                   id:161 ,name:"خلطة توابل برجر مدخن Burger seasoning smoked",price:"",img:img1
                                                                  },{
                                                                   id:162 ,name:"خلطة توابل كفتة مدخنة Smoked kofta seasoning",price:"",img:img1
                                                                  },{
                                                                   id:163 ,name:"خلطة توابل الكفتة Kofta seasoning",price:"",img:img1
                                                                  },{
                                                                   id:164 ,name:"خلطة توابل حواوشي مدخن Smoked hawawshi seasoning",price:"",img:img1
                                                                  },{
                                                                   id:165 ,name:"خلطة توابل حواوشي Hawawshi seasoning",price:"",img:img1
                                                                  },{
                                                                   id:166 ,name:"خلطة توابل السجق الشرقي Oriental sojok seasoning",price:"",img:img1
                                                                  },{
                                                                   id:167 ,name:"خلطة توابل الفاهيتا Chicken fajita seasoning",price:"",img:img1
                                                                  },{
                                                                   id:168 ,name:"خلطة توابل زنجر بريدينج Zinger breading seasoning",price:"",img:img1
                                                                  },{
                                                                   id:169 ,name:"خلطة توابل بروستد بريدينج Broasted breading seasoning",price:"",img:img1
                                                                  },{
                                                                   id:170 ,name:"خلطة توابل فراخ الشواية Roasted chicken seasoning",price:"",img:img1
                                                                  },{
                                                                   id:171 ,name:"خلطة توابل شاورما الفراخ Chicken shawarma seasoning",price:"",img:img1
                                                                  },{
                                                                   id:172 ,name:"خلطة توابل البرجر Burger spices seasoning",price:"",img:img1
                                                                  },{
                                                                   id:173 ,name:"خلطة توابل دجاج البروستد Fried chicken seasoning",price:"",img:img1
                                                                  },{
                                                                   id:174 ,name:"خلطة توابل الأرز Rice seasoning",price:"",img:img1
                                                                  },{
                                                                   id:175 ,name:"خلطة توابل الأرز المدخن Smoked rice seasoning",price:"",img:img1
                                                                  },{
                                                                   id:176 ,name:"خلطة توابل البطاطس French fries seasoning",price:"",img:img1
                                                                  },
                                                                  {
                                                                   id:177 ,name:"مسحوق مرقة الفراخ Chicken stock",price:"",img:img1
                                                                  },
                                                                  {
                                                                              id:178 ,name:"مطري فراخ بروستد Chicken broasted tenderizer",price:"",img:img1
},
{
 id:179 ,name:"زيت نكهة البندق Hazelnut oil flavor",price:"",img:img1
},
{
 id:180 ,name:"جيلاتين بقري خام بودر (حلال) Pure gelatin powder (HALAL)",price:"",img:img1
},
{
 id:181 ,name:"ملح كرفس مركز Concentrated celery salt",price:"",img:img1
},
{
 id:182 ,name:"زيت شطة مركز Chili concentrated oil",price:"",img:img1
},
{
 id:183 ,name:"زيت نكهة الجمبري Shrimps flavor oil",price:"",img:img1
},
{
 id:184 ,name:"زيت نكهة سجق أرمني (اسكندراني) Armenian sojok flavor oil",price:"",img:img1
},
{
 id:185 ,name:"نشاء البطاطس Potato starch",price:"",img:img1
}, {
 id:186 ,name:"شرش اللبن بودر Whey powder",price:"",img:img1
}, {
 id:187 ,name:"صويا أيزوليت مركز Soy isolate concentrate",price:"",img:img1
}, {
 id:188 ,name:"خلطة توابل عجينة البيتزا Italian pizza dough seasoning",price:"",img:img1
}, {
 id:189 ,name:"صوص بيتزا بودر Pizza sauce powder",price:"",img:img1
}, {
 id:190 ,name:"صلصة الطماطم بودر Tomato paste powder",price:"",img:img1
}, {
 id:191 ,name:"طماطم بودر Tomato powder",price:"",img:img1
}, {
 id:192 ,name:"مسحوق تماسك الفراخ Chicken binder",price:"",img:img1
}, {
 id:193 ,name:"بقسماط لون أبيض Breadcrumbs white color",price:"",img:img1
}, {
 id:194 ,name:"نكهة زيت الزيتون بودر Olive oil flavor powder",price:"",img:img1
}, {
 id:195 ,name:"مثبت الكوتينج (للبروستد) Coating glue (for fried chicken)",price:"",img:img1
}, {
 id:196 ,name:"زيت نكهة فرايد تشيكن (مركز) Fried chicken flavor oil",price:"",img:img1
}, {
 id:197 ,name:"زيت نكهة التدخين المركزة Smoke oil flavor",price:"",img:img1
}, {
 id:198 ,name:"زيت نكهة تشيكن ناجتس (مركز) Chicken nuggets flavor oil",price:"",img:img1
}, {
 id:199 ,name:"بديل الملح الصيني الطبيعي (أومامي 66) Umami 66 (Natural alternative for MSG)",price:"",img:img1
}, {
 id:200 ,name:"رابط صوص بودر Sauce binder powder",price:"",img:img1
}, {
 id:201 ,name:"نكهة الجمبري بودر Shrimps flavor powder",price:"",img:img1
}, {
 id:202 ,name:"نكهة الزبدة بودر Butter flavor powder",price:"",img:img1
}, {
 id:203 ,name:"بقسماط لون برتقالي Breadcrumbs orange color",price:"",img:img1
}, {
 id:204 ,name:"بقسماط لون ذهبي Breadcrumbs golden color",price:"",img:img1
}, {
 id:205 ,name:"نكهة لحمة بودر Beef flavor powder",price:"",img:img1
}, {
 id:206 ,name:"صفار بيض بودر Egg yulk powder",price:"",img:img1
}, {
 id:207 ,name:"نكهة الفستق بودر Pistachio flavor powder",price:"",img:img1
}, {
 id:208 ,name:"نكهة حليب بودر Milk flavor powder",price:"",img:img1
}, {
 id:209 ,name:"نكهة الفلفل الأخضر بودر Green chili flavor powder",price:"",img:img1
}, {
 id:210 ,name:"نكهة ضاني بودر Lamb flavor powder",price:"",img:img1
}, {
 id:211 ,name:"نكهة فراخ بودر Chicken flavor powder",price:"",img:img1
}, {
 id:212 ,name:"تشيكن برو بودر Chicken pro powder",price:"",img:img1
}, {
 id:213 ,name:"بيف برو بودر Beef pro powder",price:"",img:img1
}, {
 id:214 ,name:"مسحوق تماسك الحواوشي Hawawshi meat binder",price:"",img:img1
}, {
 id:215 ,name:"مسحوق تماسك اللانشون Luncheon meat binder",price:"",img:img1
}, {
 id:216 ,name:"زيت نكهة ديك رومي (مركز) Turkey flavor oil",price:"",img:img1
}, {
 id:217 ,name:"زيت نكهة االلية الضاني (مركز) Lamb fat flavor oil",price:"",img:img1
}, {
 id:218 ,name:"زيت نكهة الفلفل الأخضر (مركز) Green pepper flavor oil",price:"",img:img1
}, {
 id:219 ,name:"زيت نكهة كفتة (مركز) Kofta flavor oil",price:"",img:img1
}, {
 id:220 ,name:"زيت نكهة برجر (مركز) Burger flavor oil",price:"",img:img1
}, {
 id:221 ,name:"زيت نكهة كبدة (مركز) Liver flavor oil",price:"",img:img1
}, {
 id:222 ,name:"زيت نكهة سجق (مركز) Sojok flavor oil",price:"",img:img1
}, {
 id:223 ,name:"زيت نكهة بسطرما (مركز) Bastrami flavor oil",price:"",img:img1
}, {
 id:224 ,name:"زيت نكهة بلو بيف (مركز) Bull beef flavor oil",price:"",img:img1
}, {
 id:225 ,name:"زيت نكهة لانشون لحمة (مركز) Beef luncheon flavor oil",price:"",img:img1
}, {
 id:226 ,name:"زيت نكهة لانشون فراخ (مركز) Chicken luncheon flavor oil",price:"",img:img1
}, {
 id:227 ,name:"زيت نكهة الفستق (مركز) Pistachio flavor oil",price:"",img:img1
}, {
 id:228 ,name:"زيت نكهة الشواء (مركز) BBQ flavor oil",price:"",img:img1
}, {
 id:229 ,name:"مانع عفونة المخبوزات Baking mold inhibitor powder",price:"",img:img1
}, {
 id:230 ,name:"محسن خبز بودر Baking improver/ enhancer",price:"",img:img1
}, {
 id:231 ,name:"فيلر توابل Spices Filler",price:"",img:img1
}, {
 id:232 ,name:"نكهة ليمون بودر Lemon flavor powder",price:"",img:img1
}, {
 id:233 ,name:"فيلر لحمة Meat Filler",price:"",img:img1
}, {
 id:234 ,name:"مسحوق تماسك البرجر Burger meat binder",price:"",img:img1
}, {
 id:235 ,name:"بياض بيض بودر Egg white powder",price:"",img:img1
}, {
 id:236 ,name:"نكهة التدخين (سموكي) بودر Smoke flavor powder",price:"",img:img1
}, {
 id:237 ,name:"مسحوق تماسك شاورما السجق والدونر Meat binder powder for minced shawarma sojok & doner",price:"",img:img1
}, {
 id:238 ,name:"مسحوق تماسك الكفتة Meat binde for kofta",price:"",img:img1
}, {
 id:239 ,name:"مطري لحوم Meat tenderizer",price:"",img:img1
}, {
 id:240 ,name:"مسحوق مزيل الزفارة Odor neutralizer powder",price:"",img:img1
}, {
 id:241 ,name:"بيض كامل بودر Whole egg powder",price:"",img:img1
}, {
 id:242 ,name:"نكهة الشواء بودر BBQ flavor powder",price:"",img:img1
}, {
 id:243 ,name:"نكهة الزبدة المركزة Concentrated butter oil",price:"",img:img1
    },
                                
    ];
    // const cart =useRecoilValue(cartAtom)
    const cart=useSetRecoilState(cartAtom)
    const[search,setSearch]=useState('')
    console.log(search)
    return(
        <div className=" nn " >
            <div className="logo">
            <Link to={"/"}><img src={img} alt="" /></Link>
            </div>
            <div className="search">
                <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='بحث' className='text-center ss' />
            </div>
            <div className="icon">
            <div className="drop">
                <Link to={'/cartpage2'} class="btn btn-success"><i class="fa-solid fa-suitcase"></i></Link>
                <span>{cart.length}</span>
            </div>
            <div className="linkss">
<button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-regular fa-rectangle-list"></i></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Pages</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body ">
  <div className="linkss container">
  <ul>
                <li>       <Link to="/"  className='mm'>Home</Link></li>
                <li>       <Link to="/توابل"  className='mm'>Concentrated spices (powder)</Link></li>
                <li>       <Link to="/صوصات" className='mm'>Sauces and Cheeses (Powder)</Link></li>
                <li>       <Link to="/النكهات المركزة بودر"  className='mm'>Concentrated Flavors (Powder)</Link></li>
                <li>       <Link to="/النكهات المركزة زيوت"  className='mm'>Concentrated Flavors (oils)</Link></li>
                <li>       <Link to="/خلطات توابل مركزة"  className='mm'>Concentrated Spice Mixes</Link></li>
                <li>       <Link to="/منتجات حلول وتقنية الأغذية"  className='mm'>Food Solutions and Technology Products</Link></li>
                <li>       <Link to="/contact"  className='mm'>Contact Us</Link></li>
                </ul>
                </div>
  </div>
</div>
              </div>
              </div>
              {/* <div>
                <table>
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>price</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                        Products.filter((item)=>{
                           if(search==''){
                            return item
                           }else if(item.name.toLowerCase().includes(search.toLowerCase())){
                            return item;
                           }
                        })
                        .map((item)=>{
                            <tr>
                                <td>{item.img}55</td>
                                <td>{item.name}</td>
                            </tr>
                        })
                }
                </tbody>
                </table>
              </div> */}
        </div>

    )
}