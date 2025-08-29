type Layer = {
    OutputLayer: number[];
}

const Ranker = ({ OutputLayer }: Layer) => {

    console.log(OutputLayer)

    const FinalLayer = [...OutputLayer]; // avoid referencing

    // Returns an object with the top 5 largest values and their index
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

    // expects an object
    const topFive = getFive(FinalLayer);
    const rankFive = [];

    for (let i: number = 0; i < 5; i++) {
        const point = (topFive[i][1] * 100).toFixed(1);

        rankFive.push(
            <div
                key={i}
                className={`flex flex-row justify-around font-medium ${
                    i == 0
                        ? `${Number(point) > 95 ? 'text-[#ffc400]' : 'text-[#f05a5a]'} 
                           text-lg sm:text-xl md:text-2xl lg:text-3xl`
                        : 'text-[#ffffff] text-sm sm:text-base md:text-lg'
                }`}
            >
                <div>{topFive[i][0]}</div>
                <div>{point}</div>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-[#434343] text-[#ffffff] p-3 sm:p-4 md:p-6 rounded-sm rounded-bl-xl w-[70vw] sm:w-[40vw] md:w-[25vw] lg:w-[15vw]">
                <div className="flex flex-row justify-around font-extrabold text-xs sm:text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-[30px]">
                    <div>Digit</div>
                    <div>Points</div>
                </div>
                {rankFive}
            </div>
        </div>
    );
}

export default Ranker;
