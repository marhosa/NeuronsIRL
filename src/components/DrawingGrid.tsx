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
            const gridHeight = gridWidth;
            
            //converts the 'index' into a point (row,col)
            const row = Math.floor(index / gridWidth);
            const col = index % gridWidth;

            //brush size (width x height)
            const bWidth: number = 3;
            const bHeight: number = 2;

            for (let dr = 0; dr <= bHeight - 1; dr++) {
                for (let dc = 0; dc <= bWidth - 1; dc++) {
                    const r = row + dr;
                    const c = col + dc;

                    if (r >= gridHeight || c >= gridWidth) continue; //prevents overflow

                    const neighborIndex = r * gridWidth + c;
                    temp[neighborIndex] = temp[neighborIndex] >= secondBrushWeight ? 1 : secondBrushWeight;
                }
            }

            return temp;
        });
    }

    function colorHighlights(index: number) {

        // top highlighted row
        if (index >= (28 * 5) && index <= 55 + 28 * 4) {
            return `bg-[#53535F]`;
        }
        // bottom highlighted row
        else if (index >= 672 - 28 && index <= 699 - 28 ) {
            return `bg-[#53535F]`;
        }
        //two centre vertical lines
        else if(((index % 14 == 5))||((index % 14 == 8) )){
            return `bg-[#53535F]`;
        }
        else {
            return 'bg-[#090040]';
        }
    }


    const [isMouseDown, setIsMouseDown] = useState(false);


    return(<>

    
        <div className='border-1 border-[#ffffff] p-0 m-10 mt-3 cursor-pointer'>
            <div className = 
            "size-[34vw] flex flex-wrap m-0"
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
                            cellClass = 'bg-[#FFCC00]';
                        } else if (grid[index] === secondBrushWeight) {
                            cellClass = 'bg-[#c79f00]';
                        } else {
                            cellClass = colorHighlights(index); 
                        }

                        return(
                            <div className = 
                            {`${cellClass} size-[calc(34vw/28)] border border-[#000000] select-none`}

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
        </div>
    </>);
}

export default DrawingGrid;