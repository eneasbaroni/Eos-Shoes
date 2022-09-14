import React, { useEffect, useState } from 'react'
import news from "../../data/news";
import Novedad from '../../components/Novedades/Novedad';
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";
import { useLocation } from 'react-router-dom';


const NovedadesContainer = () => {
  const [novedadList, setNovedadList] = useState([])
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const getNovedades = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(news) 
    }, 1000);
  });

  useEffect (() => {
    getNovedades.then (data => {       
      setNovedadList(data);
      setLoading(false);
    })// eslint-disable-next-line
  },[]);

  return (
    <div className='row mt-5 mt-sm-3'>
      <div className='col-lg-1'></div>
      <div className='col-12 col-lg-11 mt-5 mt-lg-0 row'>
        {loading ? <Loader/> : <Novedad  novedad={novedadList[0]}/> } 
        {loading ? <Loader/> : <Novedad  novedad={novedadList[1]}/> }         
      </div>
      <Footer/>
    </div>
  )
}

export default NovedadesContainer