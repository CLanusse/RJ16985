import React, { useState } from 'react';
import  { NavBar }  from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Clicker } from './ejemplos/Clicker/Clicker';

function App() {

  const [greeting, setGreeting] = useState('Hola mundo Coder!')

  setTimeout(() => {
    setGreeting('Chau mundo Coder!')
  }, 5000)

  const [mostrarClicker, setMostrarClicker] = useState(true)

  const handleMostrar = () => {
    setMostrarClicker(!mostrarClicker)
  }

  return (
    <>
      <NavBar/>

      <ItemListContainer greeting={greeting}/>

      <button onClick={handleMostrar}>Mostrar</button>

      {mostrarClicker && <Clicker/>}
      
    </>
  );
}

export default App;
