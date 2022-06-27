import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/cartContext"
import "./checkoutResume.css"

const CheckoutResume = () => {

  const {total, cartQuantity} = useContext(CartContext)   
  
  return (
    <div className="col-12 col-sm-4 px-3 mt-5 buyInfo row checkoutResumeContainer"> 
      <h3 className="resumeTitle">RESUMEN</h3> 
      <div className="checkoutBox row">
        <p className="col-6">cantidad de items:</p>
        <p className="col-6 text-right">{cartQuantity}</p>
        <p className="col-6">gasto de envio:</p>
        <p className="col-6 text-right">¡envío gratis!</p>
        <p className="col-6 totalCompra">TOTAL:</p>
       <p className="col-6 text-right totalCompra">{`${Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 2}).format(total)}`}</p> 
      </div>
      <Link to={`/cart`} className="buyInfo col-6">← Volver al Carrito </Link>                        
    </div>
  )  
}

export default CheckoutResume