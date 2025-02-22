import img1 from './../../images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'
import CardProduct from './cardProduct';




export default function CardProductB(){


const Products= [
    {
        quantity:1,  name:"نكهة التدخين (سموكي) بودر Smoke flavor powder",price: 40,img:img1 ,id:11
    },
    {
        quantity:1, name:"جبنة بارميزان بودر Parmesan cheese powder",price:40,img:img1 ,id:12
       },
       {
        quantity:1,  name:"نكهة الشواء بودر BBQ flavor powder",price:40,img:img1,id:13
       },
       {
        quantity:1, name:"مطري لحوم Meat tenderizer",price:45,img:img1 ,id:14
       },
       {
        quantity:1, name:"ملح صيني تركيز عالي 99% Concentrated MSG",price:45,img:img1 ,id:15
       },
]

    return(
         <section className='sectionProduct '>
                    <h3  data-aos="fade-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">Best Seller</h3>
                <div className=' row  m-auto'>
                    {
                        Products.map((item,index)=>{
                            return (
                                
                                <CardProduct key={index} item={item} />
                                
                                

                            )
                        })
                    }
                </div>
                </section>
    )
}