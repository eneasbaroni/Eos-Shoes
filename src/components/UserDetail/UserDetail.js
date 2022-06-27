import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import CartContext from "../../context/cartContext"
import { processOrder} from "../../data/products" 
import "./userDetail.css"

const Input = ({placeholder, name, foo}) => {
  return (
    <input required placeholder={placeholder} className="userInput py-3 ps-1 col-12 my-3" type="text" name={name} onChange={foo}></input>
  )
}

const UserDetail = () => {
  let navigate = useNavigate(); 
  const {total, emptyCart, products} = useContext(CartContext) 

  const [user, setUser] = useState({
    nombre:"",
    apellido:"",
    telefono:"",
    email:""
  })   

  const productsToBuy = products.map ((e) => ({
    id : e.id,
    nombre : e.product_name,
    color : e.colores[e.color].color_name,
    precio : e.precio,    
    talle : e.talle,    
    cantidad : e.cant,    
  }))

  // Expresiones regulares para los campos del formulario
  const nombreRegex = /^[\s\S]{2,25}$/i
  const apellidoRegex = /^[\s\S]{2,25}$/i // eslint-disable-next-line
  const telefonoRegex = /^[\+]?[0-9]{3,20}$/im // eslint-disable-next-line
  const emailRegex = /^[\w_\.-]+@[\w\.-]+\.[a-z\.]{2,6}$/i   

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
  }  

  const sendData = (event) => {
    event.preventDefault();

    const order = {
      user : user , 
      items: [...productsToBuy], 
      total: total
    }

    //se ejecuta el proceso de la orden - recibo una respuesta que se renderiza en la pagina con el sweet alert
    processOrder(products, order).then(data => 
      Swal.fire({
      html:data,
      confirmButtonText: "VOLVER AL INICIO"
    }))   
    
    //se redirecciona al home
    setTimeout(() => {
      navigate(`/`)
      emptyCart()         
    }, 1000);
  }    

  return (
    <div className="col-12 col-sm-8 mt-5 px-3 row  userInfo row ">
        <h3 className="detailTitle">DETALLE DE FACTURACION</h3> 
        <form onSubmit={sendData}>
          <Input placeholder="Nombre" name="nombre" foo={handleInputChange}/>
          <Input placeholder="Apellido" name="apellido" foo={handleInputChange}/>
          <Input placeholder="Telefono (sin guiones, sin 0 y sin 15)" name="telefono" foo={handleInputChange}/>
          <Input placeholder="E-mail" name="email" foo={handleInputChange}/>         
          {/* Si se completan todos los inputs correctamente, se habilita el botón para proceder con el pago */}
          {nombreRegex.test(user.name) && apellidoRegex.test(user.apellido) && telefonoRegex.test(user.telefono) && emailRegex.test(user.email)
          ?<button className="col-12 terminarCompra" type="submit">TERMINAR COMPRAR</button>
          :<button className="col-12 terminarCompraDisable" disabled type="submit">TERMINAR COMPRAR</button>}
          
        </form>
    </div>
  )
}

export default UserDetail
