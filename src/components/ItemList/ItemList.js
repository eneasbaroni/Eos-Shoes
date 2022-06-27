import Item from "../Item/Item";
import "./itemList.css"

const ItemList = ({productos}) => {    
    
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
