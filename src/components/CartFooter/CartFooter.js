import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/cartContext"
import "./cartFooter.css"


export const CartFooter = () => {
    const {total, cartQuantity, emptyCart} = useContext(CartContext)

  return (
    <div className="row">
        <p className="vaciarBoton col-8" onClick={emptyCart}>x vaciar carrito x</p>
        <div className="col-4 cartFooterInfo row">
            <p className="col-6">cantidad de items:</p>
            <p className="col-6 text-right">{cartQuantity}</p>
            <p className="col-6">gasto de envío:</p>
            <p className="col-6 text-right">¡envío gratis!</p>
            <p className="col-6 totalCompra">TOTAL:</p>
            <p className="col-6 text-right totalCompra">{`${Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 2}).format(total)}`}</p>                           
        </div>
        <div className="col-8"></div> 
        <Link to={`checkout`}  className="cartBoton col-4">CHECKOUT </Link>
        <div className="col-8"></div> 
        <Link to={`/category/all`} className="cartFooterInfo col-4">← Seguir Comprando </Link>
    </div>
  )
}
