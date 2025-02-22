import { Link } from 'react-router-dom'
import './../navbar/subNavbar.css'
export default function SubNavbar(){
    return(
        <div className='ll'>
            <div className="links">
       
            <div className="list">
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
    )
}