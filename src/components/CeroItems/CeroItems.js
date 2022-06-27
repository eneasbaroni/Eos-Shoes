import { Link } from "react-router-dom"
import "./ceroItems.css"

const CeroItems = () => {
  return (
    <>
      <p className="noCart">OOPS! TU CARRITO ESTÁ VACÍO. POR FAVOR, AGREGÁ ALGÚN PRODUCTO PARA PODER CONTINUAR.</p>
      <Link to={`/category/all`} className="cartBoton">IR A TIENDA </Link>  
    </>
  )
}

export default CeroItems