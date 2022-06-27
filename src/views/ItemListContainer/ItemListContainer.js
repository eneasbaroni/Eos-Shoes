import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import ItemList from "../../components/ItemList/ItemList";
import Loader from "../../components/Loader/Loader";
import { getProductos, getProductosByCategory } from "../../data/products";
import "./itemListContainer.css"
 
const Category = ({page}) => {
  return (
    <Link to={`/category/${page}`} className="filter mx-1">{`${page.toUpperCase()}`}</Link>         
  )
}

const ItemListContainer = (props) => {
  let path = useParams(); 
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  
  useEffect (() => { 
    setLoading(true);  

    if (path.category === "all") {
      getProductos().then (data => { //funcion para obtener los datos de la base de datos. Funciones declaradas en products.js
        setProducts(data);                  
        setLoading(false);      
      })
    } else {
      getProductosByCategory(path.category).then (data => {
        setProducts(data);                  
        setLoading(false);
      })      
    }
  },[path]);
  
  return (
    <div className="row" id="zapatillas">
      <div className="col-0 col-lg-1"></div>
      <ul className='filters'>
        <Category page="urban" />
        <Category page="sport" />
        <Category page="mountain" />
        <Category page="all" />
      </ul>

      <div className="itemListContainer col-12 col-lg-11 row px-2 px-lg-5 " >
        <h2 >{props.greeting}</h2>
        {loading ? <Loader/> : <ItemList productos={products}/> }  
      </div>
      <Footer/>
    </div>
      
  )
} 

export default ItemListContainer;