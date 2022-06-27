import "./cartItem.css"

const CartItem = ({item, delet}) => { 
  return (      
    <div className='cartItem row'>    
        <img src={`/images/${item.colores[item.color].images[0]}`} className="col-2 cartImage" alt="imgProduct"/> 
        <div className='col-5'>
          <p className='itemDetail'> Zapatillas modelo "{item.product_name}" </p> 
          <p className='itemDetail'> Color: <button className="itemColor" style={{backgroundColor:item.colores[item.color].color_name}}/> </p>
          <p className='itemDetail'> Talle: {item.talle} </p>
        </div>
        <p className='col-2 itemInfo'> Cant.: {item.cant} </p>
        <div className='col-2'>
          <p className='itemInfo p-1'> Precio: {`${Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 2}).format(item.precio)}`} </p>
          <p className='itemInfo p-1'> TOTAL: {`${Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 2}).format(item.precio*item.cant)}`} </p>
        </div>
        <p className='col-1 botonEliminar' onClick={() => delet(item.id, item.color, item.talle)}> X</p>
    </div> 
  )
}

export default CartItem