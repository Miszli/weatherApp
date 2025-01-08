import React from 'react'
import useWeather from '../../hooks/UseWeather'

function Forecast({ city }) {
	const { dailyForecast } = useWeather({ city })

	return (
		<div className='bg-secondary p-4 rounded-md lg:w-3/12 lg:mr-4 w-10/12 '>
			<h2 className='text-3xl font-semibold mb-6'>7-Day Forecast</h2>
			<div className='flex flex-col gap-y-9'>
				{dailyForecast.map((day, index) => {
					const date = new Date(day.date)
					const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })

					return (
						<div
							key={day.date}
							className='flex items-center justify-between py-4 border-b border-primary last:border-none '>
							<p className='w-12 font-medium text-2xl'>{dayName}</p>
							<img src={day.icon} alt={day.condition} className='lg:w-12 lg:h-12 w-16 h-16 min-[1200px]:w-16 min-[1200px]:h-16' />
							<div className='flex text-2xl'>
								<p className='font-bold'>{day.maxTemp}</p>
								<p className='font-medium text-secondary'> /{day.minTemp}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Forecast
