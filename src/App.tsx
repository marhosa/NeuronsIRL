import { useState } from 'react'
import './styles/index.css'
import DrawingGrid from './components/DrawingGrid'
import ResetButton from './components/ResetButton'
import NNengine from './nnEngine/NNengine'
import ResultNumber from './components/ResultNumber'


function App() { 
  
  //This is the Input Layer 28 * 28 grid
  const [inputLayer, setInputLayer] = useState(Array(784).fill(0));

  //Neural Network Layers Json File:

  const NNLayers = NNengine.Initialize(inputLayer);
  
  /*  Prints out details about the tensors/json, and used for debugging.
  NNengine.printWnBSizes();
  NNengine.matrixMultiplicationTestLogic();
  */

  return (
    <>


    <div className="flex">
    
    <DrawingGrid 
    grid = {inputLayer}
    setGrid = {setInputLayer}
    />

    <ResultNumber 
    OutputLayer={NNLayers.lf}/>

    </div>

     <ResetButton 
    setGrid = {setInputLayer}/>

    






    </>
  )
}

export default App