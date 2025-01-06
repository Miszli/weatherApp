import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { SettingsProvider } from './contexts'
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
		const storedFavorites = JSON.parse(localStorage.getItem('favoriteCities')) || []
		setFavorites(storedFavorites)
	}, [])

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
	// Load initial values from localStorage or use defaults
	const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
	const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en')
	const [time, setTime] = useState(() => localStorage.getItem('time') || '24-hour')
	const [temperatureUnit, setTemperatureUnit] = useState(() => localStorage.getItem('temperatureUnit') || 'celsius')
	const [windUnit, setWindUnit] = useState(() => localStorage.getItem('windUnit') || 'm/s')
	const [pressureUnit, setPressureUnit] = useState(() => localStorage.getItem('pressureUnit') || 'hPa')
	const [precipitationUnit, setPrecipitationUnit] = useState(() => localStorage.getItem('precipitationUnit') || 'mm')

	const changeLanguage = () => {
		const newLanguage = language === 'en' ? 'pl' : 'en'
		setLanguage(newLanguage)
		localStorage.setItem('language', newLanguage)
	}

	const changeTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	const changeTime = () => {
		const newTime = time === '24-hour' ? '12-hour' : '24-hour'
		setTime(newTime)
		localStorage.setItem('time', newTime)
	}

	const changeTemperatureUnit = () => {
		const newUnit = temperatureUnit === 'celsius' ? 'fahrenheit' : 'celsius'
		setTemperatureUnit(newUnit)
		localStorage.setItem('temperatureUnit', newUnit)
	}

	const changeWindUnit = () => {
		const newUnit = windUnit === 'm/s' ? 'km/h' : 'm/s'
		setWindUnit(newUnit)
		localStorage.setItem('windUnit', newUnit)
	}

	const changePressureUnit = () => {
		const newUnit = pressureUnit === 'hPa' ? 'in' : 'hPa'
		setPressureUnit(newUnit)
		localStorage.setItem('pressureUnit', newUnit)
	}

	const changePrecipitationUnit = () => {
		const newUnit = precipitationUnit === 'mm' ? 'in' : 'mm'
		setPrecipitationUnit(newUnit)
		localStorage.setItem('precipitationUnit', newUnit)
	}

	return (
		<SettingsProvider
			value={{
				theme,
				language,
				time,
				changeLanguage,
				changeTheme,
				changeTime,
				temperatureUnit,
				windUnit,
				pressureUnit,
				precipitationUnit,
				changeTemperatureUnit,
				changeWindUnit,
				changePressureUnit,
				changePrecipitationUnit,
			}}>
			<BrowserRouter basename='/weatherApp'>
				<AppContent />
			</BrowserRouter>
		</SettingsProvider>
	)
}

export default App
