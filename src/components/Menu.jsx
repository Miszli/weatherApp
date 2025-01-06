import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Menu() {
	const location = useLocation()

	// Check if we're on the home page or a city page
	const isWeatherActive =
		location.pathname === '/' || !['favorite', 'settings'].some(path => location.pathname.includes(path))

	return (
		<div className='ml-4 bg-secondary rounded-md w-[120px] p-4 h-[772px]'>
			<nav className='h-full flex flex-col justify-around items-center'>
				<NavLink
					to='/'
					className={
						isWeatherActive
							? 'text-lg text-primary font-bold hover:text-primary transition-colors flex flex-col items-center'
							: 'text-lg text-secondary hover:text-primary transition-colors flex flex-col items-center'
					}>
					<i className='fa-solid fa-cloud-sun text-4xl'></i>
					<p className='text-2xl mb-2'>Weather</p>
				</NavLink>
				<NavLink
					to='/favorite'
					className={({ isActive }) =>
						`text-lg ${
							isActive ? 'text-primary font-bold' : 'text-secondary'
						} hover:text-primary transition-colors flex flex-col items-center`
					}>
					<i className='fa-regular fa-star text-4xl'></i>
					<p className='text-2xl mb-2'>Favorite</p>
				</NavLink>
				<NavLink
					to='/settings'
					className={({ isActive }) =>
						`text-lg ${
							isActive ? 'text-primary font-bold' : 'text-secondary'
						} hover:text-primary transition-colors flex flex-col items-center`
					}>
					<i className='fa-solid fa-gear text-4xl'></i>
					<p className='text-2xl mb-2'>Settings</p>
				</NavLink>
			</nav>
		</div>
	)
}

export default Menu
