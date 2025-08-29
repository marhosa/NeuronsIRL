type DrawingGridProps = {
    setGrid: React.Dispatch<React.SetStateAction<number[]>>;
}

//button design is From Uiverse.io by carlosepcc
const ResetButton = ({setGrid}: DrawingGridProps)=>{
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
                    setGrid(()=>{
                        return Array(784).fill(0);
                    });
                }}
            >
                Reset
            </button>
        </div>

    </>);
}

export default ResetButton;
