import React from 'react'
import useWeather from '../hooks/UseWeather'

function Forecast({ city }) {
	const { dailyForecast } = useWeather(city)

	return (
		<div className='bg-[#202B3B] p-4 rounded-md lg:w-3/12 mr-4 w-10/12'>
			<h2 className='text-3xl font-semibold mb-4'>7-Day Forecast</h2>
			<div className='flex flex-col gap-y-9'>
				{dailyForecast.map((day, index) => {
					const date = new Date(day.date)
					const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })

					return (
						<div
							key={day.date}
							className='flex items-center justify-between py-4 gap-x-12 border-b border-white/10 last:border-none'>
							<p className='w-12 font-medium text-2xl'>{dayName}</p>
							<img src={day.icon} alt={day.condition} className='lg:w-8 lg:h-8 w-16 h-16' />
							<div className='flex text-2xl'>
								<p className='font-bold'>{Math.round(day.maxTemp)}°</p>
								<p className='font-medium text-white/50'> /{Math.round(day.minTemp)}°</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Forecast
