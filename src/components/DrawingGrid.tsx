import {useState} from 'react'

const secondBrushWeight = 0.6;

type DrawingGridProps = {
    grid: number[];
    setGrid: React.Dispatch<React.SetStateAction<number[]>>;
}

const DrawingGrid = ({grid, setGrid}: DrawingGridProps)=>{

    function changeCell(index: number) {
        setGrid((current) => {
            const temp = [...current];
            const gridWidth = 28;
            const gridHeight = temp.length / gridWidth;

            const row = Math.floor(index / gridWidth);
            const col = index % gridWidth;

            for (let dr = 0; dr <= 1; dr++) {
                for (let dc = 0; dc <= 1; dc++) {
                    const r = row + dr;
                    const c = col + dc;

                    if (r >= gridHeight || c >= gridWidth) continue;

                    const neighborIndex = r * gridWidth + c;
                    temp[neighborIndex] = temp[neighborIndex] >= secondBrushWeight ? 1 : secondBrushWeight;
                }
            }

            return temp;
        });
    }





    function colorHighlights(index: number) {

        // First highlighted row
        if (index >= (28 * 5) && index <= 55 + 28 * 5) {
            return 'bg-[#B3C7FF]';
        }
        // Second highlighted row with center marker
        else if (index >= 336 + 28 * 2&& index <= 363 + 28 * 4) {
            // Compute row start index
            const rowStart = 336 + 28 * 3;
            const col = index - rowStart; // column 0..27

            // 2x2 marker at center (columns 13 and 14)
            if (col >= 13 && col <= 14) {
                return 'bg-[#DF85FF]'; // marker color
            }

            return 'bg-[#B3FFC9]';
        }
        // Third highlighted row
        else if (index >= 672 - 28 && index <= 699 ) {
            return 'bg-[#FFB3B3]';
        }
        else {
            return 'bg-[#fcfcfc]';
        }
    }


 


    const [isMouseDown, setIsMouseDown] = useState(false);

    return(<>

    

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

                let cellClass = '';

                if (grid[index] === 1) {
                    cellClass = 'bg-[#000000]';
                } else if (grid[index] === secondBrushWeight) {
                    cellClass = 'bg-[#C6C6C6]';
                } else {
                    cellClass = colorHighlights(index); 
                }

                return(
                    <div className = 
                    {`${cellClass} size-[calc(40vw/28)] border border-[#b4b4b4] select-none`}

                    onClick = {()=>{
                        changeCell(index);
                        //console.log('changed cell ' + index);
                    }}

                    onMouseEnter = {()=>{
                        if(isMouseDown){
                            changeCell(index);
                            //console.log('changed cell ' + index); 
                        }
                    }}
                    
                    >
                    
                    </div>
                );
            })


        }
        
            
        </div>
    </>);
}

export default DrawingGrid;