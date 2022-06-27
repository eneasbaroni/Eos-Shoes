import React, { useState } from 'react';
import "./itemCount.css"

const ItemCount = ({startCount, stock, onAdd}) => {
  const [count, setCount] = useState(startCount);   

  const add = () => {        
    if (count < stock) {
      setCount (count + 1);                   
    } 
  }

  const subtract = () => {        
    if (count > startCount) {
      setCount (count - 1);        
    } 
  }

  return (
    <>
      {stock < 1 
        ? <h3 className='sinStock'>ARTICULO SIN STOCK</h3>
        :<div className="itemCount row">       
            <div className='counter col-2 row'>
              <button className="countButton col-4" onClick={subtract}>-</button>
              <p className="count col-4">{count}</p>
              <button className="countButton col-4" onClick={add}>+</button>
            </div>
            <button className="agregarButton col-9" onClick={()=> onAdd(count)}>AGREGAR A CARRITO</button> {/* onAdd pasa el dato alojado en el state count a ItemDetail para usarlo en quantity. */}      
          </div>      
      }
    </>
  )
} 


export default ItemCount;
