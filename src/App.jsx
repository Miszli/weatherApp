import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Layout from './Layout'
import Weather from './components/Home/Weather'
import Forecast from './components/Home/Forecast'
import FavoriteCities from './components/FavoriteCities/FavoriteCities'
import Settings from './components/Settings/Settings'

function AppContent() {
	const [selectedCity, setSelectedCity] = useState('Warsaw')
	const navigate = useNavigate()
	const [favorites, setFavorites] = useState([])

	useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favoriteCities')) || [];
        setFavorites(storedFavorites);
    }, []);

	const handleCitySearch = city => {
		setSelectedCity(city)
		navigate('/')
	}

	return (
		<Routes>
			<Route
				path='/'
				element={
					<Layout onSearch={handleCitySearch}>
						<>
							<Weather city={selectedCity} favorites={favorites} setFavorites={setFavorites} />
							<Forecast city={selectedCity} />
						</>
					</Layout>
				}
			/>
			<Route
				path='/favorite'
				element={
					<Layout onSearch={handleCitySearch}>
						<FavoriteCities favorites={favorites} setFavorites={setFavorites} />
					</Layout>
				}
			/>
			<Route
				path='/settings'
				element={
					<Layout onSearch={handleCitySearch}>
						<Settings />
					</Layout>
				}
			/>
		</Routes>
	)
}

function App() {
	return (
		<BrowserRouter basename='/weatherApp'>
			<AppContent />
		</BrowserRouter>
	)
}

export default App
