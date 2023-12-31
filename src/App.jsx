import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './assets/components/NavBar/NavBar'
import Container from './assets/components/Container/Container'
import Footer from './assets/components/Footer/Footer'
import Contact from './assets/components/Contact/Contact';
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Container/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
