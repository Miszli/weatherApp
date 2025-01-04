import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
	return (
		<div className='ml-4 bg-[#202B3B] rounded-md w-[120px] p-4 h-[772px]'>
			<nav className='h-full flex flex-col justify-around items-center'>
				<NavLink 
					to="/" 
					className={({ isActive }) => 
						`text-lg ${isActive ? 'text-white font-bold' : 'text-white/50'} hover:text-white transition-colors flex flex-col items-center`
					}
				>
					<i className="fa-solid fa-cloud-sun text-4xl"></i>
					<p className='text-2xl mb-2'>Weather</p>
				</NavLink>
				<NavLink 
					to="/favorite" 
					className={({ isActive }) => 
						`text-lg ${isActive ? 'text-white font-bold' : 'text-white/50'} hover:text-white transition-colors flex flex-col items-center`
					}
				>
					<i className="fa-regular fa-star text-4xl"></i>
					<p className='text-2xl mb-2'>Favorite</p>
				</NavLink>
				<NavLink 
					to="/settings" 
					className={({ isActive }) => 
						`text-lg ${isActive ? 'text-white font-bold' : 'text-white/50'} hover:text-white transition-colors flex flex-col items-center`
					}
				>
					<i className="fa-solid fa-gear text-4xl"></i>
					<p className='text-2xl mb-2'>Settings</p>
				</NavLink>
			</nav>
		</div>
	)
}

export default Menu
