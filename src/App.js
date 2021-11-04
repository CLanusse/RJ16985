import React from 'react';
import  { NavBar }  from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <NavBar/>

      <ItemListContainer greeting="Hola mundo Coder!"/>
    </>
  );
}

export default App;
