import React, { useState, useEffect } from 'react'

function AddToFavorite({ favCity, favorites, setFavorites }) {
	const [buttonText, setButtonText] = useState(null)
	const [index, setIndex] = useState(0)

	const handleClick = favCity => {
		setIndex(index + 1)
		const cityLower = favCity.toLowerCase()

		if (index % 2 === 0) {
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
		setIndex(0)
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
