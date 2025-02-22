import './productCardM.css'
import img1 from './../../images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'
import CardProduct from './cardProduct';

export default function CardProductM(props){
    const  Products =[
        {
            quantity:1,id:1 ,name:"توابل الفلافل الشامية Falafel seasoning",price:40,img:img1
        },
        {
            quantity:1, id:2 , name:"مرقة سي فود بودر Seafood broth powder",price:40,img:img1
        },
        {
            quantity:1, id:3 , name:"مرقة خضار بودر Vegetable broth powder",price:40,img:img1
        },
        {
            quantity:1, id:4 , name:"مرقة ضاني بودر Lamb broth powder",price:40,img:img1
        },
        {
            quantity:1,   id:5 , name:"جيلاتين بقري خام بودر (حلال) Pure gelatin powder (HALAL)",price:25,img:img1
        },        {
            quantity:1, id:6 ,  name:"ملح كرفس مركز Concentrated celery salt",price:25,img:img1
        },        {
            quantity:1, id:7 ,  name:"خلطة توابل الجمبري بريدينج Shrimps breading seasoning",price: 40,img:img1
        },        {
            quantity:1, id:8 , name:"خلطة توابل الريزو Rizo rice spice seasoning",price:40,img:img1
        },        {
            quantity:1, id:9 , name:"خلطة توابل السجق الإيطالي Italian sausage seasoning",price:40,img:img1
        },        {
            quantity:1, id:10 , name:"صوص ثومية مايو سبايسي بودر Spicy garlic mayo paste powder",price:45,img:img1
        },

    ];
    
    return(
        <section className='sectionProduct '>
            <h3  data-aos="fade-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">Latest Products</h3>
        <div className=' row  m-auto container'>
            {
                Products.map((item,index)=>{
                    return (
                        <CardProduct key={index} item={item}/>
                    )
                })
            }
        </div>
        </section>
    )
}