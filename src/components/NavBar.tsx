import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="list-none bg-[#FFCC00] flex flex-col sm:flex-row sm:h-[10vh] h-auto sm:justify-between sm:items-center py-2 sm:py-0">
            
            {/* Left Section */}
            <div className="flex flex-col sm:ml-[5vw] ml-4 text-[#471396] sm:w-[40vw] w-full sm:items-start items-center">
                <p className="text-[2.6vh] font-black m-0 pointer-events-none">NeuronsIRL</p>
                <p className="text-[1.4vh] m-0 text-center sm:text-left">
                    <a target="_blank" href="https://marhosa.vercel.app/">Neural Network Visualizer | Marhosa</a>
                </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col sm:flex-row sm:w-[25vh] w-full sm:justify-between sm:mr-[5vw] mt-3 sm:mt-0 items-center sm:items-end">
                <div className="mb-2 sm:mb-0">
                    <Link to="/tips">
                        <span className="text-[2.2vh] text-[#471396] relative after:bg-[#471396] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                            Drawing Tips
                        </span>
                    </Link>
                </div>

                <div>
                    <Link to="/about">
                        <span className="text-[2.2vh] text-[#471396] relative after:bg-[#471396] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                            About
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
