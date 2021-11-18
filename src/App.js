import React from 'react';
import  { NavBar }  from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';
import { AppRouter } from './router/AppRouter';

function App() {


  return (
      <BrowserRouter>
     
          <NavBar/>
          <AppRouter/>

          {/* <Footer/> */}
        

      </BrowserRouter>
  );
}

export default App;


/* <Routes>
    <Route path="/" element={ <ItemListContainer /> }/>
    <Route path="/productos/:catId" element={ <ItemListContainer /> }/>
    <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
    <Route path="/cart" element={ <CartView /> } />
    <Route path="*" element={ <Navigate to="/" /> } />
  </Routes> */
