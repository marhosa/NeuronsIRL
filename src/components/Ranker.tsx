type Layer = {
    OutputLayer: number[];
}


const Ranker = ({OutputLayer}: Layer)=>{


    
    const FinalLayer = [...OutputLayer]; //avoid referencing

    //Returns an object with the top 5 largest values and their index
    function getFive(arr: number[]) {
        const objReturn: { [key: number]: number[] } = [];
            for (let i = 0; i < 5; i++) {
                const maxVal = Math.max(...arr);
                const maxIndex = arr.indexOf(maxVal);
                objReturn[i] = [maxIndex, maxVal];
                arr[maxIndex] = Number.MIN_VALUE;
        }
    return objReturn;
    }

   //expects an object
    const topFive = getFive(FinalLayer);
    const rankFive = [];

    for(let i: number = 0 ; i < 5; i++){
        rankFive.push(<>

            <div className="flex flex-row justify-around font-medium text-lg text-[#ffffff]">
                <div>{topFive[i][0]}</div>
                <div>{Math.round(topFive[i][1] * 100)}</div>
            </div>
            


        </>)
    }

    
    return(<>
    
    <div>
        <div className="bg-[#434343] text-[#ffffff] p-[12px] rounded-sm rounded-bl-xl w-[15vw]">
            <div className=" flex flex-row justify-around font-extrabold text-[1.2vw] mb-[30px]">
                <div>Digit</div>
                <div>Points</div>
            </div>
            {rankFive}
           

        </div>


    </div>
        
    
    
    </>)
}

export default Ranker;