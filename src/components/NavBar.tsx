import { Link } from 'react-router-dom';

const NavBar = ()=>{
    return(
        <>



<nav className="list-none bg-[#FFCC00] flex h-[10vh] justify-between items-center">
    
    
        <div className="flex flex-col ml-[5vw] text-[#471396] justify-center items-right w-[40vw]">
            <p className="text-[2.6vh] font-black m-0 pointer-events-none">NeuronsIRL</p>
            <a target="_blank" href="https://marhosa.vercel.app/"><p className="text-[1.4vh] m-0">Neural Network Visualizer by Marhosa | Santos M.</p> </a>
        </div>
    

    <div className="flex w-[25vh] justify-between mr-[5vw]">
        <div>
            <Link to="/tips">
                <a className="text-[2.2vh] text-[#471396] relative after:bg-[#471396] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Drawing Tips</a>
            </Link>
        </div>

        <div>
            <Link to="/about">
                <a className="text-[2.2vh] text-[#471396] relative after:bg-[#471396] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">About</a>
            </Link>
        </div>
    </div>

</nav>



        </>
    );
}

export default NavBar;