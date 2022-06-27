import { useState } from "react";
import otw from "../../assets/otw.png";
import Loader from "../Loader/Loader";
import "./home.css"

const Home = () => {
  const [loading, setLoading] = useState(true)

  function handleLoad () {
    setLoading(false); 
  }

  return (
    <>
      {loading
        ? <>
            <Loader/>
            <img src={otw} style={{display: "none"}} alt="preload" onLoad={handleLoad}/>
          </>
        : <div className="container-fluid" id="index">
            <div className="row">
              <div className="col-12 col-lg-7 homeImg"></div>                   
              <div className="col-12 col-lg-5 home">
                <img src={otw} className="otw" alt="off the wall"></img>
              </div>  
            </div>
          </div> 
      }
              
    </>
  )
}

export default Home;
