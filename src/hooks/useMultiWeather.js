import { useState, useEffect } from 'react'

function useMultiWeather(cities) {
	const API_KEY = '5997c03de1434f6f992124506250201 '

	const [weatherData, setWeatherData] = useState([])
	const [loading, setLoading] = useState(true)
	

	useEffect(() => {
		const fetchWeather = async () => {
			setLoading(true)
			try {
				const responses = await Promise.all(
					cities.map(city => fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`))
				)
				const data = await Promise.all(responses.map(res => res.json()))
				setWeatherData(data)
			} catch (error) {
				console.error('Failed to fetch weather data', error)
			} finally {
				setLoading(false)
			}
		}

		fetchWeather()
	}, [cities])

	return { weatherData, loading }
}

export default useMultiWeather
    