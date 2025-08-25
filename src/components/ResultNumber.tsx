
type Layer = {
    OutputLayer: number[];
}

const ResultNumber = ({OutputLayer}: Layer)=>{

    return(<>
    <p className = "text-[1.6vw] font-black text-[#ffffff]"
    >The predicted number is {OutputLayer.indexOf(Math.max(...OutputLayer))}</p>

    </>)
}

export default ResultNumber;