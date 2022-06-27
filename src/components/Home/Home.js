import otw from "../../assets/otw.png";
import "./home.css"

const Home = () => {
  return (
  <>
    <div className="container-fluid" id="index">
      <div className="row">
        <div className="col-12 col-lg-7 homeImg"></div>                   
        <div className="col-12 col-lg-5 home">
          <img src={otw} className="otw" alt="off the wall"></img>
        </div>  
      </div>
    </div>            
  </>
)
}

export default Home;