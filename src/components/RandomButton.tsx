/*
the random digits are actually from the csv training data located at `public/MNIST_data_set`
it converts a line in the csv into an array which will then be given to the input layer.
*/

type DrawingGridProps = {
    setGrid: React.Dispatch<React.SetStateAction<number[]>>;
}

const RandomButton = ({setGrid}: DrawingGridProps)=>{

    async function getRandom(){

        //used for processing the csv file, limits 
        const minLine = 1;
        const maxLine = 500;

        /*
        since the input layer can only take in 0.6 or 1,
        these values determine what should be the minimum opacity for the input layer to be
        1 or 0.6
        */
        const opacityMax = 250; //1
        const opacityMin = 100; //0.6

        const randomLine = Math.floor(Math.random() * (maxLine - minLine) + minLine );
        const response =  await fetch('MNIST_data_set/MNIST_Number_Data.csv');
        const csvText = await response.text();
        const line = csvText.trim().split(/\r?\n/)[randomLine];
        const lineArray = line.split(',').slice(1).map(Number);
        
        setGrid(()=>{
            //
            return lineArray.map((current)=>{
                if (current > opacityMax){
                    return 1;
                }
                else if(current > opacityMin){
                    return 0.6;
                }
                else{
                    return 0;
                }
            })
        });
    }

    return(<>
    
        <div className="h-[50px] flex items-center justify-center">
            <button 
                className="
                    cursor-pointer transition-all bg-[#9c22ff] text-white 
                    text-xs sm:text-sm md:text-base lg:text-lg
                    px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3
                    rounded-lg
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                "
                onClick={()=>{
                    getRandom();
                }}
            >
                Random
            </button>
        </div>

    </>);
}

export default RandomButton
