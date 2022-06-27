import { useContext } from "react"
import CeroItems from "../../components/CeroItems/CeroItems"
import CheckoutResume from "../../components/CheckoutResume/CheckoutResume"
import Footer from "../../components/Footer/Footer"
import UserDetail from "../../components/UserDetail/UserDetail"
import CartContext from "../../context/cartContext"
import "./checkoutContainer.css"

const CheckoutContainer = () => {
  const {cartQuantity} = useContext(CartContext)  

  return (
    <div className='row'>
      <div className='col-lg-2'></div>
      <div className='col-12 col-lg-8 row checkoutContainer'>        
          {cartQuantity > 0 ? <><CheckoutResume/><UserDetail/></> : <CeroItems/> }
      </div>
      <div className='col-lg-2'></div>
      <Footer/>
    </div>    
  )
}

export default CheckoutContainer