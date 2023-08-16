import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './assets/components/NavBar/NavBar'
import Container from './assets/components/Container/Container'
import Footer from './assets/components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Container/>
      <Footer/>
    </>
  )
}

export default App
