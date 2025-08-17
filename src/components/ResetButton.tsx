
type DrawingGridProps = {
    setGrid: React.Dispatch<React.SetStateAction<number[]>>;
}

const ResetButton = ({setGrid}: DrawingGridProps)=>{
    return(<>
        <button className = 
        "rounded-full bg-[#3d0066] text-amber-50 px-[10px] py-[5px] font-bold"
        onClick = {()=>{
            setGrid(()=>{
                return Array(784).fill(0);
            });
        }}
        >Reset</button>
        
        </>);
}

export default ResetButton;