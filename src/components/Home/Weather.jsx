import React from 'react'
import useWeather from '../../hooks/UseWeather'
import AddToFavorite from './AddToFavorite'

function Weather({ city, favorites, setFavorites }) {
	const { temp, country, condition, icon, wind, humidity, uv, feels_like, hourlyForecast, error } = useWeather(city)

	return (
		<div className='lg:w-7/12 flex flex-col overflow-hidden w-10/12'>
			<div className='flex flex-col justify-between w-full'>
				{error || city === '' ? (
					<>
						<h2 className='text-5xl font-extrabold h-[196px]'>City not found</h2>
					</>
				) : (
					<div className='flex justify-between items-start'>
						<div>
							<div className='flex items-center gap-4 max-w-[800px]'>
								<h2 className='min-[440px]:text-7xl text-5xl font-extrabold'>
									{city.charAt(0).toUpperCase() + city.slice(1)}, {country}
								</h2>
								<img className='w-24 h-24' src={icon} alt={condition} />
							</div>
							<p className='text-xl mb-8 mt-4'>{condition}</p>
							<p className='text-5xl font-bold'>{temp}°C</p>
						</div>
						<AddToFavorite favCity={city} favorites={favorites} setFavorites={setFavorites}/>
					</div>
				)}
			</div>

			<div className='w-full bg-[#202B3B] mt-8 p-4 rounded-md'>
				<p>Hourly Forecast</p>
				<div className='grid lg:grid-rows-1 lg:grid-cols-6 lg:grid-flow-row gap-8 mt-4 py-4 grid-rows-2 grid-flow-col gap-y-12'>
					{hourlyForecast.map((hour, index) => (
						<div key={index} className='flex flex-col items-center relative'>
							<p className='text-xl'>{hour.time}:00</p>
							<img className='my-2 w-16 h-16' src={hour.icon} alt={hour.condition} />
							<p className='font-bold text-xl'>{hour.temp.toFixed(0)}°C</p>
							{index < hourlyForecast.length - 1 && (
								<div className='absolute right-[-8px] h-[80%] w-[1px] bg-gray-600/30 top-[10%]'></div>
							)}
						</div>
					))}
				</div>
			</div>

			<div className='w-full bg-[#202B3B] mt-8 p-4 rounded-md'>
				<p>Conditions</p>
				<div className='w-full mt-4 py-4 grid grid-cols-2 gap-x-16 gap-y-8 max-[440px]:grid-cols-1 max-[440px]:text-center'>
					<div>
						<h2 className='text-2xl font-medium'>Feels like</h2>
						<p className='text-3xl font-extrabold'>{feels_like}°C</p>
					</div>
					<div>
						<h2 className='text-2xl font-medium'>Wind</h2>
						<p className='text-3xl font-extrabold'>{wind / (3.6).toFixed(0)} m/s</p>
					</div>
					<div>
						<h2 className='text-2xl font-medium'>Humidity</h2>
						<p className='text-3xl font-extrabold'>{humidity}%</p>
					</div>
					<div>
						<h2 className='text-2xl font-medium'>UV</h2>
						<p className='text-3xl font-extrabold'>{uv}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Weather
