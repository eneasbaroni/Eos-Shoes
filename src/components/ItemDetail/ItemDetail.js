import { useContext, useEffect, useState } from "react"
import Talle from "../Talle/Talle"
import ItemCount from "../ItemCount/ItemCount"
import ChekCart from "../ChekCart/ChekCart"
import CartContext from "../../context/cartContext"
import "./itemDetail.css"
import { useLocation } from "react-router-dom"

const ItemDetail = ({product}) => {
  const {addProducts} = useContext (CartContext) 
  const [color, setColor] = useState(0) //useState que recibe el index del color seleccionado para poder controlar las imagenes a renderizar segun color
  const [imgGrande, setImgGrande] = useState(0)  //useState que recibe el index de la imgMini seleccionada para luego renderizarla en grande
  const [quantity, setQuantity] = useState(0)   //useState que recibe la cantidad agregada a carrito
  const [talle, setTalle] = useState(product.colores[color].talles[0]) //useState que recibe el talle seleccionado para luego destacarlo
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);  
  
  const handleColor = (e) => {        
    setColor(e.target.id)
  }   
  
  const handleImgGrande = (e) => {     
    setImgGrande(e.target.name)              
  }

  const onAdd = (amount) => {     
    setQuantity(amount)
    //addProducts es la funcion declarada en el cartContext para agregar productos al carrito 
    addProducts(product, amount, color, talle);    
  }   
  
  const selectTalle = (e) => {    
    setTalle(e.target.name)
  }

  return (
    <div className="row"> 
      <img src={`/images/${product.colores[color].images[imgGrande]}`} className="col-12 col-md-6 imgGrande" alt="imgProduct"/>
      <div className="detailContainer col-12 col-md-6 px-2 px-md-0 pe-md-5">
        <div className="row">
          <h3 className="productDetailName col-6">{product.product_name}</h3>
          <p className="productDetailPrice col-6">{`${Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 2}).format(product.precio)}`}</p>
        </div>
        {quantity === 0         
        ?<ItemCount name= {product.product_name} startCount={1} stock={product.stock} precio={product.precio} onAdd = {onAdd}/> 
        :<ChekCart/>}
        <h4 className="itemDetailTitle">Colores</h4> 
        <div className="coloresContain">
          {product.colores.map ((el, i) => {
            return (                    
              <button className="selectColor" onClick={handleColor} key={el.color_name} id={i} style={{backgroundColor:el.color_name}}/>                                        
              )
            })}
        </div>       
        <h4 className="itemDetailTitle">Talles Disponibles</h4>  
        <div className="tallesContain">
          {product.colores[color].talles.map (el => {
            return (                    
              <Talle talle={el} talleSelected={talle} key={el} selectTalle={selectTalle}  /> /* le paso como propiedad el talle selecionado para que quede pintado con otro fondo */
              )
            })}   
        </div>        
        <h4 className="itemDetailTitle">Detalle</h4>          
        <p className="itemDetalle">{product.detalle}</p> 
        <div className="imgMiniContainer col-12">
          {product.colores[color].images.map ((el, i) => { /* en [color] se alamcena el index del color */
            return (
              <img src={`/images/${el}`} className="imgMini" alt="imgProduct" key={`${i}`} name={`${i}`} onClick={handleImgGrande}/>
            )
          })} 
        </div> 
      </div>        
    </div>
  )
}

export default ItemDetail