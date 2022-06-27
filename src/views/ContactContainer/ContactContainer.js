import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { createCommentary} from "../../data/products"
import Footer from "../../components/Footer/Footer"
import "./contactContainer.css"

const Input = ({placeholder, name, foo}) => {
  return (
    <input required placeholder={placeholder} className="userInput py-3 ps-1 col-12 my-3" type="text" name={name} onChange={foo}></input>
  )
}

const ContactContainer = () => { 

  let navigate = useNavigate();
  const [contact, setContact] = useState({
    nombre:"",
    apellido:"",
    telefono:"",
    email:"",
    comentario:""
  })  
  
  // Expresiones regulares para los campos del formulario
  const nombreRegex = /^[\s\S]{2,25}$/i
  const apellidoRegex = /^[\s\S]{2,25}$/i // eslint-disable-next-line
  const telefonoRegex = /^[\+]?[0-9]{3,20}$/im // eslint-disable-next-line
  const emailRegex = /^[\w_\.-]+@[\w\.-]+\.[a-z\.]{2,6}$/i 
  const comentarioRegex = /^[\s\S]{1,300}$/i
  
  const handleInputChange = (event) => {
    setContact({
      ...contact,
      [event.target.name] : event.target.value
    })
  }  

  const sendCommentary = (event) => {
    event.preventDefault();

    const comment = {
      contact : contact      
    }
    
    createCommentary(comment).then(data => 
      Swal.fire({
      html:data,
      confirmButtonText: "VOLVER AL INICIO"
    }))   
    
    setTimeout(() => {
      navigate(`/`)              
    }, 900);
  }    

  return (
    <div className="row justify-content-center">
      <div className="col-lg-1"></div>
      <div className="col-12 col-lg-8 mt-5 px-3 row commentInfo  row text-center justify-content-center">
          <h3 className="commentTitle">DEJANOS TU DUDA O COMENTARIO</h3> {/* cambiar nombre de clase */}
          <form onSubmit={sendCommentary}>
            <Input placeholder="Nombre" name="nombre" foo={handleInputChange}/>
            <Input placeholder="Apellido" name="apellido" foo={handleInputChange}/>
            <Input placeholder="Telefono (sin guiones, sin 0 y sin 15)" name="telefono" foo={handleInputChange}/>
            <Input placeholder="E-mail" name="email" foo={handleInputChange}/>             
            <textarea required placeholder="Dejanos tu Comentario (máximo 300 caracteres)" className="userInput commnet py-3 ps-1 col-12 my-3" type="text" name="comentario" onChange={handleInputChange}></textarea>        
            {nombreRegex.test(contact.name) && apellidoRegex.test(contact.apellido) && telefonoRegex.test(contact.telefono) && emailRegex.test(contact.email) && comentarioRegex.test(contact.comentario)
            ?<button className="col-12 enviarComentario" type="submit">Enviar Comentario</button>
            :<button className="col-12 enviarComentarioDisable" disabled type="submit">Enviar Comentario</button>}            
          </form>
      </div>
      <Footer/>
    </div>
  )
}
export default ContactContainer

