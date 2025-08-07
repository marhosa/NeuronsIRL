import {useState} from 'react'


type DrawingGridProps = {
    grid: number[];
    setGrid: React.Dispatch<React.SetStateAction<number[]>>;
}

const DrawingGrid = ({grid, setGrid}: DrawingGridProps)=>{

    function changeCell(index: number, value: number){
        setGrid((current)=>{
            const temp = [...current]
            temp[index] = value
            return temp;
        });
    }


    function colorHighlights(index: number){
        if(index >= 16 && index <= 31){
            return 'bg-[#e3e8ff]';
        }
        else if(index >= 113 && index <= 126 ){
            return 'bg-[#dbffe4]';
        }
        else if(index >= 224 && index <= 239){
            return 'bg-[#ffe3e9]';
        }
        else{
            return 'bg-[#fcfcfc]';
        }
    }   

    const [isMouseDown, setIsMouseDown] = useState(false);

    return(<>

    
    <div className="">

        <div className = 
        "size-[40vw] m-[2vw] flex flex-wrap"
        onMouseDown={()=>{
            setIsMouseDown(()=>{
                return true;
            });
        }}
        onMouseUp = {()=>{
            setIsMouseDown(()=>{
                return false;
            });
        }}
        onMouseLeave = {()=>{
            setIsMouseDown(()=>{
                return false;
            });
        }}
        >

        {
            grid.map((_, index)=>{
                return(
                    <div className = 
                    {`${grid[index] === 1 ? 'bg-[#001C0A]' : colorHighlights(index)} size-[calc(40vw/16)] border border-[#b4b4b4] select-none`}

                    onMouseEnter = {()=>{
                        if(isMouseDown){
                            changeCell(index, 1);
                            console.log('changed cell ' + index); //neuron changed
                        }
                    }}>
                    
                    </div>
                );
            })


        }
        
            
        </div>

        <div >
            <button className = 
        "rounded-full bg-[#3d0066] text-amber-50 px-[10px] py-[5px] font-bold"
        onClick = {()=>{
            setGrid(()=>{
                return Array(256).fill(0);
            });
        }}
        >Reset</button>
        </div>

    </div>
    </>);
}

export default DrawingGrid;