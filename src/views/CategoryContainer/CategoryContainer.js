import { Link } from 'react-router-dom'
import "./categoryContainer.css"

const CategorySelector = ({category}) => {
  return (
    <div className="col-12 col-sm-6">
      <Link to={`/category/${category}`}> 
        <div className="categorySeletor" style={{backgroundImage: `url(/images/${category}.jpg)`}}> {`${category.toUpperCase()}`} </div>               
      </Link>
    </div>
  )
}

const Category = () => {
  return (    
    <div className='row'>
      <div className="col-lg-1"></div>                    
      <div className="col-12 col-lg-11 row categorySeletors"> 
        <CategorySelector category={"all"} />
        <CategorySelector category={"urban"} />
        <CategorySelector category={"sport"} />
        <CategorySelector category={"mountain"} />
      </div>
    </div>    
  )
}

export default Category