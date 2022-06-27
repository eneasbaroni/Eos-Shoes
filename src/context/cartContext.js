import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

  const [products, setProducts] = useState([]) //state que aloja los productos a comprar
  const [total, setTotal] = useState()
  const [cartQuantity, setCartQuantity] = useState()  

  useEffect(() => {
    //funcion para calcular el $total de la compra
    setTotal(products.map(item => item.precio*item.cant).reduce((prev, curr) => prev + curr, 0));          
  }, [products])
  
  useEffect(() => {
    //funcion para calcular la cantidad de productos
    setCartQuantity(products.map(item => item.cant).reduce((prev, curr) => prev + curr, 0));
  }, [products])

  //funcion para verificar si ya existe tal producto de tal color y tal talle en el carrito 
  const someProduct = (item, color, talle) => {
    return products.some(el => (el.id === item.id) && (el.color === color) && (el.talle === talle) )
  }  

  //funcion para actualizar la cantidad de un producto existente en carrito
  const updateQuantity = (item, quantity, color, talle) => { setProducts (products.map (el => {
      if ((el.id === item.id) && (el.color === color) && (el.talle === talle)){                
        return {...el, cant: (el.cant + quantity) }
      }
      return el;
    }))    
  }

  //funcion para eliminar producto del carrito
  const deletProduct = (id, color, talle) => {
    setProducts (products.filter(el => !((el.id === id) && (el.color === color) && (el.talle === talle) )))
  }
  
  //funcion para vaciar carrito
  const emptyCart = () => {
    setProducts ([])
  }

  //funcion para agregar productos al carrito
  const addProducts = (item, cant, color, talle) => {

    if (someProduct(item, color, talle)) {
      updateQuantity (item, cant, color, talle)
    } else {      
      const newItem = {...item, cant, color, talle: talle}       
      setProducts([...products, newItem]) 
    }
  }  

  const data = {products, total, cartQuantity, addProducts, deletProduct, emptyCart}
  return <CartContext.Provider value={data} > {children}</CartContext.Provider>;
}


export {CartProvider}
export default CartContext;