import { Link } from "react-router-dom";
import "./chekCart.css"

const ChekCart = () => { 

  return (
    <div className="itemCount row justify-content-between">       
      <Link to={`/cart`} className="checkButton">Ver Carrito</Link>         
      <Link to={`/category/all`} className="checkButton">Seguir Comprando</Link>         
    </div>
)
} 


export default ChekCart;