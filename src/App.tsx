import { useState } from 'react'
import './styles/index.css'
import DrawingGrid from './components/DrawingGrid'

function App() { 
  
  //This is the Input Layer (16x16 or single array with 256 elements)
  const [inputLayer, setInputLayer] = useState(Array(256).fill(0));


  return (
    <>
    <DrawingGrid 
    grid = {inputLayer}
    setGrid = {setInputLayer}

    />
      
    </>
  )
}

export default App
