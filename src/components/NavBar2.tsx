const NavBar2 = () => {
    return (
        <div className="w-full bg-[#FFCC00] flex flex-col sm:flex-row items-center justify-between fixed h-auto sm:h-[60px] py-2 sm:py-0">
            
            {/* Left Section */}
            <div className="flex flex-col sm:ml-[5vw] ml-4 text-[#471396] justify-center sm:items-start items-center w-full sm:w-[40vw]">
                <p className="text-lg sm:text-[25px] font-black m-0 pointer-events-none">NeuronsIRL</p>
                <p className="text-xs sm:text-[12px] m-0 text-center sm:text-left">
                    <a target="_blank" href="https://marhosa.vercel.app/">
                        Neural Network Visualizer | Marhosa
                    </a>
                </p>
            </div>

            {/* Right Section (Back button) */}
            <div className="sm:mr-[5vw] mt-3 sm:mt-0">
                <div className="w-[100px] sm:w-[80px] h-[45px] bg-transparent flex items-center justify-center border-4 border-[#471396] rounded-xl font-bold shadow-lg hover:bg-[#471396] text-base sm:text-xl text-[#471396] hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
                    <button className="px-5 py-2">
                        <a href="">Back</a>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default NavBar2;
