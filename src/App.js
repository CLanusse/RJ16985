import React from 'react';
import  { NavBar }  from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
// import { AppRouter } from './router/AppRouter';
import { Routes, Route,Navigate } from 'react-router'
import { CartProvider } from './context/CartContext';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CartView } from './components/CartView/CartView';
import { Checkout } from './components/Checkout/Checkout';

function App() {


  return (
      <CartProvider>

        <BrowserRouter>
            <NavBar/>
            
            <Routes>
              <Route path="/" element={ <ItemListContainer /> }/>
              <Route path="/productos/:catId" element={ <ItemListContainer /> }/>
              <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
              <Route path="/cart" element={ <CartView /> } />
              <Route path="/checkout" element={ <Checkout/> } />
              <Route path="*" element={ <Navigate to="/" /> } />
            </Routes> 

        </BrowserRouter>
        
      </CartProvider>
  );
}

export default App;


   /* <AppRouter/>    */
