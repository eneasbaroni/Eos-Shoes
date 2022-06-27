import { useContext } from "react"
import CartContext from "../../context/cartContext"
import CartCabecera from "../../components/CartCabecera/CartCabecera"
import { CartFooter } from "../../components/CartFooter/CartFooter"
import CartItem from "../../components/CartItem/CartItem"
import CeroItems from "../../components/CeroItems/CeroItems"
import Footer from "../../components/Footer/Footer"
import "./cartCont.css"

const CartContainer = () => {

  const {products, deletProduct} = useContext(CartContext)
  
  return (
    <div className='row '>
      <div className='col-lg-1'></div>
      <div className='col-12 col-lg-11 row cartCont'>
        <div className="col-md-2"></div>
        <div className="col-12 col-lg-8 px-1 px-md-5 px-lg-0 row">          
          {products.length > 0 ? <CartCabecera/> : <CeroItems/>}            
          {products.map (el => { 
            return ( 
              <CartItem item={el} key={`${el.id}${el.color}${el.talle}`} delet={deletProduct}/>  )
            })}          
          {products.length > 0 && <CartFooter /> }         
        </div>
        <div className="col-md-2"></div>
      </div>
      <Footer/>
    </div>
  )
}

export default CartContainer