import NN_WeightsAndBias from './NnWeightsAndBiases.json';



const Initialize =(InputLayer: number[])=>{
    const pass1: number[] = MMForwardPasser(InputLayer, 1);
    const pass2: number[] = MMForwardPasser(pass1, 2);
    const pass3: number[] = MMForwardPasser(pass2, 3);

    return {
        'l0': InputLayer,
        'l1': pass1,
        'l2': pass2,
        'lf': pass3
    }

}  



const MMForwardPasser = (inputArray: number[], passNumber: number)=>{


    //processes an input layer, and returns a new layer
    let weightMatrix: number[][];
    let biasVector: number[];

    //check what layer will manipulate the input tensor.
    switch(passNumber){
        case 1:
            weightMatrix = NN_WeightsAndBias.l1w;
            biasVector = NN_WeightsAndBias.l1b;
        break;

        case 2:
            weightMatrix = NN_WeightsAndBias.l2w;
            biasVector = NN_WeightsAndBias.l2b;
        break;

        case 3:
            weightMatrix = NN_WeightsAndBias.l3w;
            biasVector = NN_WeightsAndBias.l3b;
        break;

        default:
            throw new Error('WRONG passNumber parameter, should only be 1, 2, or 3.');
    }
    

    //check if valid sizes for matrix multiplication
    if(!(weightMatrix[0].length == inputArray.length)){
        throw new Error('Invalid InputTensor and WeightTensor Size...')
    }

    //Vector @ Matrix Multiplication for forward passing.
    let x: number = 0;
    const outputArray: number[] = []; //initialize the resulting array
    for(let i: number = 0; i < weightMatrix.length; i++){
        x = 0;
        for(let j: number = 0; j < inputArray.length; j++){
            x += inputArray[j] * weightMatrix[i][j];
        }
        
        if(passNumber === 3){
            outputArray[i] =   1 / (1 + Math.exp(-(x + biasVector[i]))); //activation function
            
        }
        else{
            outputArray[i] =   Math.max(0, x + biasVector[i]); // ReLU
        
        }
        
    }

    return outputArray;
}



//simply print the row and col sizes of the weights and biases
const printWnBSizes = ()=>{
    console.log('--- DETAILS ---')

    console.log(`LayerName    | R:arr.len C:arr[0].len\n\n`)
    console.log(`InputLayer   | R:784 C:1\n\n`) //HARDCODED

    console.log(`Layer1Weight | R:${NN_WeightsAndBias.l1w.length} C:${NN_WeightsAndBias.l1w[0].length}`)
    console.log(`Layer1Bias   | R:${NN_WeightsAndBias.l1b.length} C:1\n\n`)
    
    console.log(`Layer2Weight | R:${NN_WeightsAndBias.l2w.length} C:${NN_WeightsAndBias.l2w[0].length}`)
    console.log(`Layer2Bias   | R:${NN_WeightsAndBias.l2b.length} C:1\n\n`)

    console.log(`Layer3Weight | R:${NN_WeightsAndBias.l3w.length} C:${NN_WeightsAndBias.l3w[0].length}`)
    console.log(`Layer3Bias   | R:${NN_WeightsAndBias.l3b.length} C:1\n\n`)

    console.log('---------------\n\n\n\n\n')
}

//simple code on how the vector@matrix multiplication logic works
const matrixMultiplicationTestLogic = ()=>{
    console.log('should be\n[13 26 5 22]\n\n\n')

    const mat1: number[] = [1, 2, 3];
    const mat2: number[][] =[[2, 4, 6, 8],
                             [1, 2, 3, 4],
                             [3, 6, 1, 2]]


    let x: number = 0;
    const outputmatrix: number[] = [];
    for(let i: number = 0; i < mat2[0].length; i++){
        for(let j: number = 0; j < mat1.length; j++){
            x += mat1[j] * mat2[j][i]
        }
        outputmatrix[i] = x;
        x = 0;
    }

   console.log(outputmatrix)

}

export default {Initialize, matrixMultiplicationTestLogic, printWnBSizes};
