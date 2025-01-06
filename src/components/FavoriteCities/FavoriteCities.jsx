import React from 'react'
import useMultiWeather from '../../hooks/useMultiWeather'
import { Link } from 'react-router-dom'

function FavoriteCities({ favorites, setFavorites }) {
	const { loading, temps, icons, countries, conditions } = useMultiWeather(favorites)

	const handleRemoveFavorite = index => {
		const newFavorites = favorites.filter(city => city !== favorites[index])
		setFavorites(newFavorites)
		localStorage.setItem('favoriteCities', JSON.stringify(newFavorites))
	}

	if (loading)
		return (
			<div className='w-full ml-7 mt-3'>
				<h1 className='min-[440px]:text-7xl text-5xl font-extrabold mb-12'>Your Favorite Cities</h1>
				<p className='text-2xl font-light'>Loading</p>
			</div>
		)

	return (
		<div className='w-full ml-7 mt-3'>
			<h1 className='min-[440px]:text-7xl text-5xl font-extrabold mb-12'>Your Favorite Cities</h1>

			{favorites.length === 0 && <p className='text-2xl font-light'>Your favorite cities will appear here</p>}

			{favorites.map((location, index) => (
				<div key={index} className='w-11/12 bg-[#202B3B] flex justify-between items-center p-4 rounded-md mb-6'>
					<Link to={`/${location}`} className='flex items-center gap-4 flex-grow'>
						<img className='w-24 h-24' src={icons[index]} alt={conditions[index]} />
						<div>
							<h2 className='text-4xl font-medium'>
								{location.charAt(0).toUpperCase() + location.slice(1)}, {countries[index]}
							</h2>
							<p className='text-xl mt-4'>{conditions[index]}</p>
						</div>
					</Link>
					<div className='flex items-center gap-6'>
						<p className='text-5xl font-extrabold'>{temps[index]}</p>
						<button
							onClick={() => handleRemoveFavorite(index)}
							className='text-2xl p-2 flex items-center justify-center text-red-500'>
							<i className='fa-regular fa-trash-can'></i>
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default FavoriteCities
