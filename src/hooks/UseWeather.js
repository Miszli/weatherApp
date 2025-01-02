import { useState, useEffect } from 'react'

const useWeather = city => {
	const API_KEY = '5997c03de1434f6f992124506250201 '
	const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`

	const [temp, setTemp] = useState('')
	const [condition, setCondition] = useState('')
	const [icon, setIcon] = useState('')
	const [wind, setWind] = useState('')
	const [humidity, setHumidity] = useState('')
	const [uv, setUv] = useState('')
	const [feels_like, setFeelsLike] = useState('')
	const [hourlyForecast, setHourlyForecast] = useState([])
	const [dailyForecast, setDailyForecast] = useState([])
	const [error, setError] = useState(false)

	useEffect(() => {
		const fetchWeather = async () => {
			if (!city || city.trim() === '') return

			try {
				setError(false)
				const response = await fetch(API_URL)

				if (!response.ok) {
					throw new Error('City not found')
				}

				const data = await response.json()
				const hour = Number(data.location.localtime.slice(11).split(':')[0])

				setTemp(data.current.temp_c)
				setCondition(data.current.condition.text)
				setIcon(data.current.condition.icon)
				setWind(data.current.wind_kph)
				setHumidity(data.current.humidity)
				setUv(data.current.uv)
				setFeelsLike(data.current.feelslike_c)

				// Get daily forecast data
				const dailyData = data.forecast.forecastday.map(day => ({
					date: day.date,
					maxTemp: day.day.maxtemp_c,
					minTemp: day.day.mintemp_c,
					condition: day.day.condition.text,
					icon: day.day.condition.icon,
				}))
				setDailyForecast(dailyData)

				// Get next 6 hours forecast
				const forecast = []
				for (let i = 0; i < 6; i++) {
					let forecastHour = hour + i
					let dayIndex = 0

					// If hour goes past midnight, get data from next day
					if (forecastHour >= 24) {
						forecastHour = forecastHour - 24
						dayIndex = 1
					}

					const hourData = data.forecast.forecastday[dayIndex].hour[forecastHour]
					forecast.push({
						time: forecastHour,
						temp: hourData.temp_c,
						icon: hourData.condition.icon,
						condition: hourData.condition.text,
					})
				}
				setHourlyForecast(forecast)
			} catch (error) {
				setError(true)
			}
		}

		fetchWeather()
	}, [city])

	return {
		temp,
		condition,
		icon,
		wind,
		humidity,
		uv,
		feels_like,
		hourlyForecast,
		dailyForecast,
		error,
	}
}

export default useWeather
