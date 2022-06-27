import {  useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
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
  const [loading, setLoading] = useState(true)

  function handleLoad () {
    setLoading(false); 
  }

  return (   
    <>
      {loading
        ? <>
            <Loader/>
            <img src={`/images/all.jpg`} style={{display: "none"}} alt="preload"/>
            <img src={`/images/urban.jpg`} style={{display: "none"}} alt="preload"/>
            <img src={`/images/sport.jpg`} style={{display: "none"}} alt="preload"/>
            <img  src={`/images/mountain.jpg`} style={{display: "none"}} alt="preload" onLoad={handleLoad} />           
          </>
        :<div className='row'>
            <div className="col-lg-1"></div>                    
            <div className="col-12 col-lg-11 row categorySeletors"> 
              <CategorySelector category={"all"} />
              <CategorySelector category={"urban"} />
              <CategorySelector category={"sport"} />
              <CategorySelector category={"mountain"} />                           
            </div>
          </div> 
      }         
    </>
  )
}

export default Category
