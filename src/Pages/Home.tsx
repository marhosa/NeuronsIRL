import { useState } from 'react'
import DrawingGrid from '../components/DrawingGrid'
import ResetButton from '../components/ResetButton'
import NNengine from '../nnEngine/NNengine'
import ResultNumber from '../components/ResultNumber'
import NeuralNetwork from '../components/NeuralNetwork'
import NavBar from '../components/NavBar'
import Ranker from '../components/Ranker'
import RandomButton from '../components/RandomButton'



function Home() { 
  
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

    
    <div className="flex flex-col pt-[20vh] items-center md:hidden text-amber-50 w-[95vw] h-[95vh]">
      <p>Your Screen Size is not supported to run this.</p>
      <p>Please open the web-app on your desktop instead.</p>
      <p>How about read the about section instead?</p>
      <img src="gifs/NeuronsIRL.gif" className='w-[70vw]'></img>
    </div>

    <div className="hidden md:flex items-center size-full m-auto pl-10 flex-wrap justify-evenly">

    
    <div className="flex flex-col items-center">
    <p className='text-[3vw] text-[#efefef] mt-[4vh] font-black'>
      Drawing Canvas</p>
    <DrawingGrid 
    grid = {inputLayer}
    setGrid = {setInputLayer}
    />
    </div>

    <div className="flex flex-col items-center">
    <Ranker 
    OutputLayer = {NNLayers.lf}
    />
      <div className="mt-5 flex justify-center gap-[1vw]">
      <ResetButton  
      setGrid = {setInputLayer}/>
      <RandomButton
      setGrid = {setInputLayer}/>
      </div>
    </div>
    

    <div className='bg-[#240c34] flex flex-col items-center pt-[5vh] rounded-[30px]'>

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

export default Home;