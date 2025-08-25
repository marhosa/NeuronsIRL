type DrawingGridProps = {
    setGrid: React.Dispatch<React.SetStateAction<number[]>>;
}

const RandomButton = ({setGrid}: DrawingGridProps)=>{

    async function getRandom(){
        const minLine = 1;
        const maxLine = 500;

        const opacityMax = 250;
        const opacityMin = 100;

        const randomLine = Math.floor(Math.random() * (maxLine - minLine) + minLine );
        const response =  await fetch('MNIST_data_set/MNIST_Number_Data.csv');
        const csvText = await response.text();
        const line = csvText.trim().split(/\r?\n/)[randomLine];
        const lineArray = line.split(',').slice(1).map(Number);
        
        

        setGrid(()=>{
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
    
        <div className="h-[50px]">
            <button className="w-[6vw] cursor-pointer transition-all bg-[#9c22ff] text-white text-[1vw] px-6 py-2 rounded-lg

            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"

            onClick = {()=>{
                        getRandom();
                    }}>
            Random
            </button>
        </div>

    
    </>);
}

export default RandomButton