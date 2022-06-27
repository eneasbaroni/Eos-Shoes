import { Link } from "react-router-dom";
import "./item.css"

//item recibe cada objeto (producto) y renderiza lo necesaior.
//show y la Imagen son link a itemDetailContainer
const Item = ({producto}) => {
  return (
    <div className="col-12 col-md-6 col-xl-3 px-2 row product">
      
      <Link to={`/item/${producto.id}`}><img src={`/images/${producto.url_1}`} className="productImg" alt="imgProduct"/></Link>
      <p className="productName col-6">{producto.product_name}</p>
      <Link to={`/item/${producto.id}`} className="productInfo col-6">Show →</Link>            
      <p className="productPrice">{`${Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 2}).format(producto.precio)}`}</p>            
      
    </div>
  )
}

export default Item; 