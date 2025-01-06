import React, { useState, useEffect } from 'react'

function AddToFavorite({ favCity, favorites, setFavorites }) {
	const [buttonText, setButtonText] = useState(null)

	const handleClick = favCity => {
		const cityLower = favCity.toLowerCase()

		if (!favorites.includes(cityLower)) {
			const newFavorites = [...favorites, cityLower]
			setButtonText(<i className='fa-solid fa-heart'></i>)
			setFavorites(newFavorites)
			localStorage.setItem('favoriteCities', JSON.stringify(newFavorites))
		} else {
			const newFavorites = favorites.filter(prev => prev !== cityLower)
			setButtonText(<i className='fa-regular fa-heart'></i>)
			setFavorites(newFavorites)
			localStorage.setItem('favoriteCities', JSON.stringify(newFavorites))
		}
	}

	useEffect(() => {
		setButtonText(<i className='fa-regular fa-heart'></i>)
	}, [favCity])

	return (
		<button
			className='text-4xl h-24 flex items-center justify-center'
			onClick={() => {
				handleClick(favCity)
			}}>
			{favorites.includes(favCity.toLowerCase()) ? (
				<i className='fa-solid fa-heart'></i>
			) : (
				<i className='fa-regular fa-heart'></i>
			)}
		</button>
	)
}

export default AddToFavorite
