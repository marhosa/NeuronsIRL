import NavBar2 from "../components/NavBar2";

const About = () => {
    return (<>

        <NavBar2 />

        <div className="pt-40 w-[90vw] min-h-[100vh] text-ellipsis mb-10 ">

            {/* THE PROJECT */}
            <p className="text-amber-50 font-bold text-xl sm:text-2xl md:text-3xl ml-4 sm:ml-10 mt-10">
                THE PROJECT
            </p>

            <p className="text-amber-50 font-normal text-base sm:text-lg md:text-xl ml-6 sm:ml-20 mt-2">
                This project demonstrates how a neural network looks and behaves in real time.
            </p>
            <p className="text-amber-50 font-normal text-base sm:text-lg md:text-xl ml-6 sm:ml-20 mt-2">
                I built it during my third year to better understand how neural networks function.
            </p>
            <p className="text-amber-50 font-normal text-base sm:text-lg md:text-xl ml-6 sm:ml-20 mt-2">
                The source code is available in my GitHub repository.
            </p>


            {/* THE MODEL */}
            <p className="text-amber-50 font-bold text-xl sm:text-2xl md:text-3xl ml-4 sm:ml-10 mt-10">
                THE MODEL
            </p>

            {/* Subheader */}
            <p className="text-amber-50 font-medium text-base sm:text-lg md:text-xl ml-6 sm:ml-20 mt-5">
                The Trained Model Origin
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                The model was trained in Python using PyTorch.
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                It uses the MNIST dataset of handwritten digits.
            </p>

            {/* Subheader */}
            <p className="text-amber-50 font-medium text-base sm:text-lg md:text-xl ml-6 sm:ml-20 mt-5">
                How it works in this web app
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                After training in PyTorch, the model’s weights and biases were exported in JSON format and imported into this web app.
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                The calculations are implemented from scratch, without external libraries, using simple forward-pass matrix multiplication.
            </p>


            {/* CALCULATION LOGIC AND CODE */}
            <p className="text-amber-50 font-bold text-xl sm:text-2xl md:text-3xl ml-4 sm:ml-10 mt-10">
                CALCULATION LOGIC AND CODE
            </p>

            {/* Subheader */}
            <p className="text-amber-50 font-medium text-base sm:text-lg md:text-xl ml-6 sm:ml-20 mt-5">
                nnEngine.tsx
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                This file contains the code for the model’s calculations.
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                It performs matrix multiplication on the weights to generate new layers, repeating until the output layer is reached.
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                The operation is a vector (layer) multiplied by a matrix (weights), producing a new vector (next layer).
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                The forward-pass and vector–matrix multiplication functions are both included here.
            </p>

            {/* Subheader */}
            <p className="text-amber-50 font-medium text-base sm:text-lg md:text-xl ml-6 sm:ml-20 mt-5">
                The Input Layer
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                The input layer has 784 nodes, corresponding to a 28×28 grid. Bright yellow squares represent a value of 1, dim yellow squares 0.6, and blank areas 0.
            </p>

            {/* Subheader */}
            <p className="text-amber-50 font-medium text-base sm:text-lg md:text-xl ml-6 sm:ml-20 mt-5">
                The Hidden Layers
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                The network has 2 hidden layers, each with 64 neurons.
            </p>

            {/* Subheader */}
            <p className="text-amber-50 font-medium text-base sm:text-lg md:text-xl ml-6 sm:ml-20 mt-5">
                The Output Layer
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                The output layer has 10 neurons, one for each digit (0–9). Values range from 0 to 1 due to the sigmoid function. The neuron with the highest value represents the predicted digit.
            </p>


            {/* THE POINT RANKER */}
            <p className="text-amber-50 font-bold text-xl sm:text-2xl md:text-3xl ml-4 sm:ml-10 mt-10">
                THE POINT RANKER
            </p>

            {/* Subheader */}
            <p className="text-amber-50 font-medium text-base sm:text-lg md:text-xl ml-6 sm:ml-20 mt-5">
                What is the point?
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                The “point” is the neuron’s value for a digit, multiplied by 100.
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                Values range from 0 to 100 because of the sigmoid function.
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                It is not a probability, but a score showing how likely the input matches a digit.
            </p>


            {/* THE NEURAL NETWORK VISUALIZER */}
            <p className="text-amber-50 font-bold text-xl sm:text-2xl md:text-3xl ml-4 sm:ml-10 mt-10">
                THE NEURAL NETWORK VISUALIZER
            </p>

            {/* Subheader */}
            <p className="text-amber-50 font-medium text-base sm:text-lg md:text-xl ml-6 sm:ml-20 mt-5">
                Why the visualized layers are smaller
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                Each neuron in the visualized layer represents the average of several neurons in the actual layer. For example, the input layer has 784 neurons, but the visualizer shows 6, each representing about 784/6 neurons.
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                Writing at the top of the canvas lights up the top input neuron in the visualizer. The output layer is shown at full size, directly indicating the predicted digit.
            </p>

            {/* Subheader */}
            <p className="text-amber-50 font-medium text-base sm:text-lg md:text-xl ml-6 sm:ml-20 mt-5">
                The Luminance
            </p>
            <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-8 sm:ml-30 mt-2">
                The luminance of a neuron in the visualizer is its value multiplied by a scaling factor, then applied to the HSL color model to make it visible.
            </p>

        </div>

    </>);
};

export default About;
