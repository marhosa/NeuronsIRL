import { useState } from 'react'
import './styles/index.css'
import DrawingGrid from './components/DrawingGrid'
import ResetButton from './components/ResetButton'
import NNengine from './nnEngine/NNengine'
import ResultNumber from './components/ResultNumber'
import NeuralNetwork from './components/NeuralNetwork'
import NavBar from './components/NavBar'
import Ranker from './components/Ranker'

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
    

    <NavBar />

    

      <div className="flex items-center size-full m-auto pl-10 flex-wrap justify-evenly">

      
      <div className="flex flex-col items-center">
      <p className='text-[3vw] text-[#efefef] mt-[4vh] font-black'>
        Draw Here</p>
      <DrawingGrid 
      grid = {inputLayer}
      setGrid = {setInputLayer}
      />
      </div>

      <div className="flex flex-col items-left">
      <Ranker 
      OutputLayer = {NNLayers.lf}
      />
        <div className="mt-5">
        <ResetButton  
        setGrid = {setInputLayer}/>
        </div>
      </div>
      

      <div className='bg-[#441960] flex flex-col items-center pt-[5vh] rounded-[30px]'>

        <ResultNumber 
      OutputLayer={NNLayers.lf}/>

      <NeuralNetwork 
      NNLayers = {NNLayers}
      />
      </div>
      
      </div>

      

      

    

    






    </>
  )
}

export default App