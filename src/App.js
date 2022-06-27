import NavBar from './components/NavBar/NavBar';
import './App.css';
import "./grid.css"
import Home from './components/Home/Home';
import ItemListContainer from './views/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
import Category from './views/CategoryContainer/CategoryContainer';
import NovedadesContainer from './views/NovedadesContainer/NovedadesContainer';
import CartContainer from './views/CartContainer/CartContainer';
import { CartProvider } from './context/cartContext';
import CheckoutContainer from './views/CheckoutContainer/CheckoutContainer';
import ContactContainer from './views/ContactContainer/ContactContainer';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />           
            <Route path='/category' element={<Category/>}/>  
            <Route path='/category/:category' element={<ItemListContainer greeting="ZAPATILLAS"/>}/>  
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/novedades' element={<NovedadesContainer/>} />       
            <Route path='/cart' element={<CartContainer/>} />   
            <Route path='/cart/checkout' element={<CheckoutContainer/>} /> 
            <Route path='/contacto/' element={<ContactContainer/>} /> 
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
