import { useRecoilState } from 'recoil'
import './cartPage.css'
import cartAtom from '../../atom/cartAtom'
import WhatsAppButton from '../whatsapp/whatsApp';
export default function CartPage2(props){
    
    const [cart ,setCart]=useRecoilState(cartAtom)


    function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      }
      
    //   const [cart, setCart] = useState([
    //     { id: 1, name: "Product A", price: 20, quantity: 2 },
    //     { id: 2, name: "Product B", price: 15, quantity: 1 }
    //   ]);
    
      const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    
      // Function to format cart items as a WhatsApp message
      const generateWhatsAppMessage = () => {
        let message = 'Order Details:\n\n';
        cart.forEach(item => {
          message += `${item.name} - ${item.quantity} Kilo x ${item.price * item.quantity} AED\n`;
        });
        message += `\nTotal Amount: ${totalAmount} AED`;
        return message;
      };
    
      // WhatsApp phone number (replace with your actual phone number)
      const phoneNumber = '+971508151578';
    
    return(
        <div className="cart">
            <div className="container">
            <table class="table table-striped table-hover text-center mt-5">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart?.map((item,index)=>{
                            return(
                                <tr>
                                <td><img src={item.img} alt="" /></td>
                                <td>{item.name}</td>
                                <td>{item.price} AED</td>
                                <td><button class="btn btn-danger" onClick={()=>{
                                        setCart(removeItemAtIndex(cart, index))
                                }}>Delete</button></td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div >
            {/* <div>
      <h1>Send a WhatsApp Message</h1>
      <WhatsAppButton/>
    </div> */}
    <div className='whatsapp container mb-4 ' dir='rtl'>
      {/* <h3>Chech out</h3> */}
      
        {/* {cart.map(item => (
         <div className="div"  key={item.id}> {item.name} x {item.quantity} Price {item.price} AED </div>
        ))} */}
     
      <h3>Total: {totalAmount} AED</h3>
      <button  class="btn btn-success"
        onClick={() => {
          const message = generateWhatsAppMessage();
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
        }}
      >
        Send Order to WhatsApp
      </button>
    </div>

        </div>
    )
}