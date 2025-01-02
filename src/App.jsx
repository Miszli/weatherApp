import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import Weather from './components/Weather'
import Forecast from './components/Forecast'
import Menu from './components/Menu'

function App() {
	const [selectedCity, setSelectedCity] = useState('Warsaw')

	const handleCitySearch = city => {
		setSelectedCity(city)
	}

	return (
		<>
			<SearchBar onSearch={handleCitySearch} />
			<div className='flex lg:my-8 my-4 lg:justify-between gap-8 flex-col lg:flex-row justify-center items-center lg:items-stretch'>
				<Menu />
				<Weather city={selectedCity} />
				<Forecast city={selectedCity} />
			</div>
		</>
	)
}

export default App
