import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaFish } from "react-icons/fa6";
import {AiOutlineMenu} from 'react-icons/ai';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
	
	const toggleNavbar = () => {
		console.log("click me")
		setCollapsed(!collapsed);
	};

	return (
		// border-4 border-[#48c5ff]  bottom-2 left-2 right-2  fixed overflow-hidden md:top-4 md:left-4 md:bottom-4 md:h-auto md:w-64 md:block
		<div className={`text-white md:p-1 transition-all duration-500 bg-[#48c5ff] rounded-2xl overflow-hidden flex flex-col fixed md:top-4 bottom-4 left-4 right-4 md:w-60`}>
			
			{/* ${collapsed ? 'hidden' : 'md:block'} */}
			<div className='rounded-t-xl flex-grow flex-1 hidden md:flex justify-center items-center  bg-[#64CCC5]'>
				<button onClick={toggleNavbar}>
					<AiOutlineMenu className='' size={30} color='black'/>
				</button>
				<h2 className='text-xl mx-2'> My Projects </h2>
			</div>

			<ul className={`flex-grow h-2/3 md:block bg-slate-100 flex font-bold rounded-lg`}>
				
				<li className='flex-1 md:flex md:justify-normal md:m-2 hover:bg-[#8bdaff] md:rounded-xl'> 
					<button type='button' className='inline-flex w-full h-full md:px-4  md:flex-1'> 
						<FaFish color='080202' size={50} className='md:m-0 mx-auto'/>
						<h2 className='hidden md:block mx-4 my-auto text-slate-600 font-bold'> Game 1 </h2>
					</button>
				</li>

				<li className='flex-1 md:flex md:justify-normal md:m-2 hover:bg-[#8bdaff] md:rounded-xl'> 
					<button type='button' className='inline-flex w-full h-full md:px-4  md:flex-1'> 
						<FaFish color='080202' size={50} className='md:m-0 mx-auto'/>
						<h2 className='hidden md:block mx-4 my-auto text-slate-600 font-bold'> Game 2 </h2>
					</button>
				</li> 

				<li className='flex-1 md:flex md:justify-normal md:m-2 hover:bg-[#8bdaff] md:rounded-xl'> 
					<button type='button' className='inline-flex w-full h-full md:px-4  md:flex-1'> 
						<FaFish color='080202' size={50} className='md:m-0 mx-auto'/>
						<h2 className='hidden md:block mx-4 my-auto text-slate-600 font-bold'> Game 3 </h2>
					</button>
				</li> 

			</ul>

			<div className='rounded-b-xl flex-grow flex-1 hidden md:block border-[#48c5ff] bg-[#64CCC5] p-4'>
				<h2 className='text-lg items-center'>About</h2>
			</div>

		</div>
	)
}

export default Navbar;
