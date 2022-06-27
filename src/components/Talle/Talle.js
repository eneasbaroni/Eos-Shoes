import React from 'react'
import "./talle.css"

const Talle = ({talle, talleSelected, selectTalle}) => {
  
  return ( talle === talleSelected     
    ? <button className='talleButtonActive' onClick={selectTalle} name={talle}>{talle}</button>
    : <button className='talleButton' onClick={selectTalle} name={talle}>{talle}</button>
  )
}

export default Talle