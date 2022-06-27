import "./footer.css"
import instagram from "../../assets/instagram_icon.svg";
import linkedin from "../../assets/linkedin_icon.svg";
import github from "../../assets/github_icon.svg";

const Footer = () => {
  return (
    
    <div className="row">
      <div className="col-lg-1"></div>
      <div className="row col-12 col-lg-11">
        <p className="footerText col-12 text-center">© 2022 EOS-SHOES. Todos los Derechos Reservados</p>
        <p className="footerText col-12 text-center">Desarollado por Eneas Baroni</p>
        <div className="col-12 text-center">
          <a href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer"><img src={github} className="footerImg px-1" alt="hithub" height="20"></img></a>
          <a href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer"><img src={linkedin} className="footerImg px-1" alt="linkedin" height="20"></img></a>
          <a href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer"><img src={instagram} className="footerImg px-1" alt="instagram" height="20"></img></a>
        </div>
      </div>      
    </div>
    
  )
}

export default Footer