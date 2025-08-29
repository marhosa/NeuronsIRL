type connectionz = {
     x1: number 
     y1: number 
     x2: number 
     y2: number
}

type NNLayer = {
  l0: number[]
  l1: number[]
  l2: number[]
  lf: number[]
}


const NeuralNetwork = ({ NNLayers }: { NNLayers: NNLayer }) => {
  // Network architecture
  const layers = [
    { name: "Input", neurons: 6 },
    { name: "Hidden 1", neurons: 8},
    { name: "Hidden 2", neurons: 8},
    { name: "Output", neurons: 10}
  ]

  const svgWidth = 500
  const svgHeight = 400
  const layerSpacing = 120
  const neuronRadius = 15

  // Calculate neuron positions
  const getLayerPositions = (layerIndex: number, neuronCount: number) => {
    const x = layerSpacing * (layerIndex + 1)
    const startY = (svgHeight - (neuronCount - 1) * 40) / 2

    return Array.from({ length: neuronCount }, (_, i) => ({
      x,
      y: startY + i * 40,
    }))
  }

  // Generate all neuron positions
  const allPositions = layers.map((layer, index) => getLayerPositions(index, layer.neurons))

  // Generate connections between layers
  const connections: connectionz[] = []
  for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex++) {
    const currentLayer = allPositions[layerIndex]
    const nextLayer = allPositions[layerIndex + 1]

    currentLayer.forEach((currentNeuron) => {
      nextLayer.forEach((nextNeuron) => {
        connections.push({
          x1: currentNeuron.x + neuronRadius,
          y1: currentNeuron.y,
          x2: nextNeuron.x - neuronRadius,
          y2: nextNeuron.y,
        })
      })
    })
  }

  //returns an array of nums, where each num is the mean of a subarray
  //arr = main array, size = number of means to return
  const chunkMeans = (arr: number[], chunkCount: number) => {
    if (arr.length === 0) return [];  // avoid NaN

    const chunkedArray: number[] = [];
    const chunkSize = Math.ceil(arr.length / chunkCount);

    for (let i = 0; i < chunkCount; i++) {
      const start = i * chunkSize;
      const end = start + chunkSize;
      const chunk = arr.slice(start, end);

      if (chunk.length > 0) {
        const sum = chunk.reduce((a, b) => a + b, 0);
        chunkedArray.push(sum / chunk.length);
      }
    }

    return chunkedArray;
  };



  const neuronColorChanger = (layer: number, layerIndex: number)=>{
    let CurrentLayer: number[];
    let neuronCount: number;
    let scaler: number; 
    switch(layer){
      case 0:
        CurrentLayer = NNLayers.l0;
        neuronCount = 6;
        scaler = 320;
      break;
      case 1:
        CurrentLayer = NNLayers.l1;
        neuronCount = 8;
        scaler = 200;
      break;
      case 2:
        CurrentLayer = NNLayers.l2;
        neuronCount = 8;
        scaler = 160;
      break;
      case 3:
        CurrentLayer = NNLayers.lf;
        neuronCount = 10;
        scaler = 70;
      break;
      default:
        throw new Error('Invalid layer number, must only be 0-3');
    }
    const currentNeuronMean: number = (chunkMeans(CurrentLayer, neuronCount)[layerIndex]);
    const colorValued: number =  Math.round((currentNeuronMean - Math.min(...CurrentLayer))/((Math.max(...CurrentLayer))-(Math.min(...CurrentLayer)))*scaler); //normalzied
    

    return `hsl(271,100%,${colorValued}%)` 
  }

  return (
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="pr-20"
        >

          {connections.map((connection, index) => (
            <line
              key={index}
              x1={connection.x1}
              y1={connection.y1}
              x2={connection.x2}
              y2={connection.y2}
              stroke="#e5e7eb"
              strokeWidth="2"
              opacity="1"
            />
          ))}

          // draw neurons
          {layers.map((_, layerIndex) =>
            allPositions[layerIndex].map((position, neuronIndex) => (
              <circle
                key={`${layerIndex}-${neuronIndex}`}
                cx={position.x}
                cy={position.y}
                r={neuronRadius}
                className={`stroke-[#F5FAE1] stroke-1`}
                style={{ fill: `${neuronColorChanger(layerIndex, neuronIndex)}` }}
              />
            )),
          )}
        </svg>

  )
}

export default NeuralNetwork
