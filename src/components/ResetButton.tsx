
type DrawingGridProps = {
    setGrid: React.Dispatch<React.SetStateAction<number[]>>;
}

//button design is From Uiverse.io by carlosepcc
const ResetButton = ({setGrid}: DrawingGridProps)=>{
    return(<> 

<div className="h-[50px]">
<button className="w-[6vw] cursor-pointer transition-all bg-[#9c22ff] text-white text-[1vw] px-6 py-2 rounded-lg

border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"

onClick = {()=>{
            setGrid(()=>{
                return Array(784).fill(0);
            });
        }}>
  Reset
</button>
</div>


        </>);
}

export default ResetButton;



