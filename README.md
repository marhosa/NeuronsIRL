<img width="1060" height="86" alt="image" src="https://github.com/user-attachments/assets/44bbf7b4-9234-4598-b16c-0aeb7095c38b" />

## [💾Live WebApp Here](https://neuronsirl.vercel.app/)

---

## About  
**NeuronsIRL** is a web-app made to better understand and visualize how **neural networks** work for deep learning.  
- The forward pass is **manually built with matrix multiplication logic** in TypeScript.  
- The neural network **weights and biases** are trained in Python and exported to JSON.

---

## Neural Network  

### The model is a **fully connected feed-forward neural network** with the following structure:  
- **Input Layer**: 784 neurons (28×28 grid of pixels)  
- **Hidden Layer 1**: 128 neurons  
- **Hidden Layer 2**: 64 neurons  
- **Output Layer**: 10 neurons (digits 0–9)  

- **Input Layer** → Each pixel in the 28×28 grid is normalized between 0 and 1, representing brightness.  
- **Hidden Layers** → Learn features through weighted connections + ReLU activation.  
- **Output Layer** → Produces 10 values (0–9), each representing how strongly the network thinks the input matches that digit.  

---

## Calculation  
### You can find the Neural Network Engine [in this file](https://github.com/marhosa/NeuronsIRL/blob/main/src/nnEngine/NNengine.ts  ).

The neural network forward pass is simply:  

Layer Output = (Previous Layer × Weights) + Bias  

- Matrix multiplication of vector(layer) × matrix(weights)  
- Add bias (vector)  
- The result becomes the next layer  

### Example code (from NNengine.ts line 100):  


```ts
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
}
```

---

## Weights and Biases  

### You can find the Python Codes to train the model and export the weights and biases into a JSON file [in this repository](https://github.com/marhosa/Pytorch-NeuronsIRL/tree/main).

- The **weights and biases** are exported from a PyTorch-trained model.  
- Details about training and exported JSON file are documented in that repository.

---

## Input Layer – Drawing Grid  

<img width="333" height="333" alt="DrawingGrid" src="https://github.com/user-attachments/assets/1ae4ec2d-7140-468d-83d4-1f3cb4deff79" />  

### [👉 Grid Code](https://github.com/marhosa/NeuronsIRL/blob/main/src/components/DrawingGrid.tsx  )
- This **28×28 grid** is the **input layer**.  
- Pixel values:  
  - **Bright yellow** → 1.0  
  - **Dark yellow** → 0.6  
  - **None** → 0  
- **Horizontal and vertical lines** help align drawings (since there is no auto-center feature).  

### [Here are Examples ](https://neuronsirl.vercel.app/#/tips) on how the drawing canvas prefers each digit to be drawn.
---

## Output Layer – Ranker  

<img width="212" height="316" alt="Ranker" src="https://github.com/user-attachments/assets/80e70fde-3b96-4809-8e9c-4f2a274ef085" />  

### [👉 Ranker Code](https://github.com/marhosa/NeuronsIRL/blob/main/src/components/RandomButton.tsx  )

- The ranker shows the **output layer values**.  
- These are originally between 0 and 1 (sigmoid), then scaled ×100.  
- Buttons:  
  - **Reset** → Clears the canvas  
  - **Random** → Loads a random digit from the training dataset, optimized so its pixel values match the 1.0 / 0.6 style used in the grid.  

---

## Visualizer  

<img width="333" height="333" alt="Visualizer" src="https://github.com/user-attachments/assets/897287b2-14b8-4b62-a4c4-1a4962cab46c" />  

### [👉 Visualizer Code](https://github.com/marhosa/NeuronsIRL/blob/main/src/components/NeuralNetwork.tsx ) 
- Shows the **neural network structure**.  
- Layers are **reduced in size** for visualization:  
  - Example: Input layer is 6 neurons instead of 784.  
  - This is done by grouping subsets of neurons and taking their **mean**.  
- Helps visualize how activations propagate forward through the network.  

---

### [You can learn more about it here.](https://neuronsirl.vercel.app/#/about)

<p align="center">ayun lang naman :></p>
