import "./cartCabecera.css"

const CartCabecera = () => {
  return (
    <>
      <h3 className="cartTitle">DETALLE DE COMPRA</h3>
      <div className='row mt-5'>    
        <p className="col-2 ps-3">Producto</p> 
        <p className="col-5 ps-3">Detalle</p> 
        <p className="col-2">Cant.</p> 
        <p className="col-2">Precio</p> 
     </div>
    </>         
  ) 
}

export default CartCabecera