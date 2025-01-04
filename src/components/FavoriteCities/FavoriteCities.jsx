import React from 'react'
import useMultiWeather from '../../hooks/useMultiWeather'

function FavoriteCities({ favorites, setFavorites }) {
	const { weatherData, loading } = useMultiWeather(favorites)

	const handleRemoveFavorite = index => {
		const newFavorites = favorites.filter(city => city !== favorites[index])
		setFavorites(newFavorites)
		localStorage.setItem('favoriteCities', JSON.stringify(newFavorites))
	}

	if (loading)
		return (
			<div className='w-full ml-6 mt-3'>
				<h1 className='min-[440px]:text-7xl text-5xl font-extrabold mb-12'>Your Favorite Cities</h1>
				<p className='text-2xl font-light'>Loading</p>
			</div>
		)

	return (
		<div className='w-full ml-6 mt-3'>
			<h1 className='min-[440px]:text-7xl text-5xl font-extrabold mb-12'>Your Favorite Cities</h1>

			{weatherData.length === 0 && <p className='text-2xl font-light'>Your favorite cities will appear here</p>}

			{weatherData.map((data, index) => (
				<div key={index} className='w-11/12 bg-[#202B3B] flex justify-between items-center p-4 rounded-md mb-6'>
					<div className='flex items-center gap-4'>
						<img className='w-24 h-24' src={data.current.condition.icon} alt={data.current.condition.text} />
						<div>
							<h2 className='text-4xl font-medium'>
								{data.location.name.charAt(0).toUpperCase() + data.location.name.slice(1)}, {data.location.country}
							</h2>
							<p className='text-xl mt-4'>{data.current.condition.text}</p>
						</div>
					</div>
					<div className='flex items-center gap-8'>
						<p className='text-5xl font-extrabold'>{data.current.temp_c}°C</p>
						<button
							onClick={() => handleRemoveFavorite(index)}
							className='text-2xl h-24 flex items-center justify-center text-red-500'>
							<i className='fa-regular fa-trash-can'></i>
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default FavoriteCities
