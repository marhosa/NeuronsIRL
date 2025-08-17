
type Layer = {
    OutputLayer: number[];
}

const ResultNumber = ({OutputLayer}: Layer)=>{

    return(<>
    <p className = "text-[10vw] font-black"
    >{OutputLayer.indexOf(Math.max(...OutputLayer))}</p>

    </>)
}

export default ResultNumber;