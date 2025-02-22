// import { BiShoppingBag } from "react-icons/bi"; 
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import {dataProduct} from '../../components/dataProduct/dataproduct'
import img1 from'./../../images/6badf483-f382-48d6-b13f-45eb50e19571.jpg'
import { useState } from 'react';
import logo from '../../images/b66-rezsized.gif'
import './../navbar/navbar.css'
function NavScrollExample() {
  const[search,setSearch]=useState('')
  const dataProduct=[
    {
               name:"توابل الفلافل الشامية Falafel seasoning",price:"105 ج.م–345 ج.م",img:img1
           },
           {
               name:"مرقة سي فود بودر Seafood broth powder",price:"70 ج.م–195 ج.م",img:img1
           },
           {
               name:"مرقة خضار بودر Vegetable broth powder",price:"70 ج.م–195 ج.م",img:img1
           },
           {
               name:"مرقة ضاني بودر Lamb broth powder",price:"70 ج.م–195 ج.م",img:img1
           },
           {
               name:"جيلاتين بقري خام بودر (حلال) Pure gelatin powder (HALAL)",price:"118 ج.م–375 ج.م",img:img1
           },        {
               name:"ملح كرفس مركز Concentrated celery salt",price:"75 ج.م–465 ج.م",img:img1
           },        {
               name:"خلطة توابل الجمبري بريدينج Shrimps breading seasoning",price:"90 ج.م–295 ج.م",img:img1
           },        {
               name:"خلطة توابل الريزو Rizo rice spice seasoning",price:"75 ج.م–225 ج.م",img:img1
           },        {
               name:"خلطة توابل السجق الإيطالي Italian sausage seasoning",price:"135 ج.م–385 ج.م",img:img1
           },        {
               name:"صوص ثومية مايو سبايسي بودر Spicy garlic mayo paste powder",price:"115 ج.م–405 ج.م",img:img1
           },
]
  return (
    
  
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img className='logo' src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
      <div class="d-flex" >
      {
      dataProduct.filter(({item})=>{
        return search.toLocaleLowerCase() === ''? item : item.name.toLocaleLowerCase.includes(search)
      })
    }
        <input  onChange={(e)=>setSearch(e.target.value) } class="form-control me-2" type="search" placeholder="Search" aria-label="Search "/>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </div>
      

      {/* <li>
                        <button class="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><BiShoppingBag /><span>{cart.length}</span></button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasRightLabel">Your Order</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body" >
                        <table class="table table-striped">
                        <thead>
<tr>
    <th>image</th>
    <th>cate</th>
    <th>price</th>
</tr>
</thead>
<tbody>
{
                   cart?.map((product)=>{
                    return(
                        <tr>
                            <td><img src={product.image} alt="" /></td>
                            <td>{product.name}</td>
                            <td>{product.userId}$</td>
                        </tr>
                    )
                   })}
</tbody>
                        </table>
                        </div>
                        </div>
                        </li> */}
    </div>
    
  </div>
  
</nav>
)
}

export default NavScrollExample;