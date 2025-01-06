import React, { useState } from 'react'

function SearchBar({ onSearch }) {
	const [city, setCity] = useState('')

	const handleSearch = () => {
		onSearch(city.toLowerCase())
	}

	const handleEnterSearch = e => {
		if (e.key === 'Enter') {
			handleSearch()
		}
	}

	return (
		<div className='w-10/12 mx-auto flex bg-secondary mt-4 px-2 rounded-md'>
			<input
				type='text'
				placeholder='Search for a city'
				value={city}
				onChange={e => setCity(e.target.value)}
				onKeyDown={handleEnterSearch}
				className='w-full p-4 py-3 rounded-md bg-transparent outline-none text-2xl'
			/>
		</div>
	)
}

export default SearchBar
