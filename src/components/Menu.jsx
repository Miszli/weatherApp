import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
	return (
		<div className='ml-4 bg-[#202B3B] rounded-md w-[120px]'>
			<Link to='/'>
				<p>Home</p>
			</Link>
		</div>
	)
}

export default Menu
