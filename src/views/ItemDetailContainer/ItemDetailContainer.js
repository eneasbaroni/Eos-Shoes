import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loader from "../../components/Loader/Loader";
import { getProducto} from "../../data/products";
import "./itemDetailContainer.css"


const ItemDetailContainer = () => { 
  let id = useParams(); 
  let navigate = useNavigate(); 
  
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect (() => {        
    getProducto(id.id).then (data => { //funcion para obtener los datos de la base de dato. Funcion declarada en products.js     
        setProduct(data); 
        setLoading(false); 
    })
  },[id]);

  const closeDetail = () => navigate(-1); 

  return (
    <div className="row">
      <div className="col-lg-1"></div>
      <div className="itemDetailContainer col-12 col-lg-11">    
        {loading ? <Loader/> : <ItemDetail product={product}/> }  
        <div className="closeDetail" onClick={closeDetail}>X</div>
      </div>
    </div>
  )
}

export default ItemDetailContainer 


