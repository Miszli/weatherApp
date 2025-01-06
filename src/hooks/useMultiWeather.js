import { useState, useEffect } from 'react'
import { useSettings } from '../contexts'

function useMultiWeather(cities) {
	const API_KEY = '5997c03de1434f6f992124506250201 '
	const { temperatureUnit } = useSettings()

	const [loading, setLoading] = useState(true)
	const [temps, setTemps] = useState([])
	const [icons, setIcons] = useState([])
	const [countries, setCountries] = useState([])
	const [locations, setLocations] = useState([])
	const [conditions, setConditions] = useState([])

	useEffect(() => {
		const fetchWeather = async () => {
			setLoading(true)
			try {
				const responses = await Promise.all(
					cities.map(city => fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`))
				)
				const data = await Promise.all(responses.map(res => res.json()))
				setTemps(data.map(item => temperatureUnit === 'celsius' ? item.current.temp_c + '°C' : item.current.temp_f + '°F'))
				setIcons(data.map(item => item.current.condition.icon))
				setCountries(data.map(item => item.location.country))
				setLocations(data.map(item => item.location.name))
				setConditions(data.map(item => item.current.condition.text))
			} catch (error) {
				console.error('Failed to fetch weather data', error)
			} finally {
				setLoading(false)
			}
		}

		fetchWeather()
	}, [cities])

	return { loading, temps, icons, countries, locations, conditions }
}

export default useMultiWeather
