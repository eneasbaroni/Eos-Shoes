import "./novedades.css"

const Novedad = ({novedad}) => {    
    
  return (
    <>
      <div className='novedadContainer'>
        <h3 className='novedadTitle col-12'>{novedad.new_name}</h3>
        <p className='col-12 col-md-5 novedadP'>{novedad.paragraph_01}</p>
        <p className='col-12 col-md-5 novedadP'>{novedad.paragraph_02}</p>
        <img src={`/images/news/${novedad.url_1}`} className="novedadImg col-12 col-md-6" alt="imgNovedad"/>
        <img src={`/images/news/${novedad.url_2}`} className="novedadImg col-12 col-md-6" alt="imgNovedad"/>
      </div>        
    </>      
  )
}

export default Novedad