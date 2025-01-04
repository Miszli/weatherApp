import React from 'react'
import SearchBar from './components/SearchBar'
import Menu from './components/Menu'

function Layout({ children, onSearch }) {
	return (
		<>
			<SearchBar onSearch={onSearch} />
			<div className='flex lg:my-8 my-4 lg:justify-between gap-8 flex-col lg:flex-row justify-center items-center lg:items-stretch'>
				<Menu />
				{children}
			</div>
		</>
	)
}

export default Layout
