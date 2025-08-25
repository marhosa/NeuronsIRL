const NavBar = ()=>{
    return(
        <>



<nav className="list-none bg-[#FFCC00] flex h-[7vh] justify-between items-center">
    
    <div className="flex flex-col ml-[5vw] text-[#471396] justify-center">
        <p className="text-[2.6vh] font-black m-0">NeuronsIRL</p>
        <p className="text-[1.4vh] m-0">A Neural Network Visualizer</p>
    </div>

    <div className="flex w-[25vh] justify-between mr-[5vw]">
        <div>
            <a className="text-[2.2vh] text-[#471396] relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Tips to Use</a>
        </div>

        <div>
            <a className="text-[2.2vh] text-[#471396] relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">About</a>
        </div>
    </div>







</nav>



        </>
    );
}

export default NavBar;