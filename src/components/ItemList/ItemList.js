import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Item from "../Item/Item";
import "./itemList.css"

const ItemList = ({productos}) => { 
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);   
    
  return (
    <div className="row col-12 itemList">
      {productos.map (el => {
        return (
          <Item producto={el} key={el.id}/>                    
        )
      })}  
    </div>                
  )		
}

export default ItemList;
