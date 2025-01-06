import React from 'react'
import { useSettings } from '../../contexts'

function Settings() {
	const {
		temperatureUnit,
		windUnit,
		pressureUnit,
		precipitationUnit,
		changeTemperatureUnit,
		changeWindUnit,
		changePressureUnit,
		changePrecipitationUnit,
		theme,
		language,
		time,
		changeTheme,
		changeLanguage,
		changeTime,
	} = useSettings()

	const resetSettings = () => {
		localStorage.setItem('temperatureUnit', 'celsius')
		localStorage.setItem('windUnit', 'm/s')
		localStorage.setItem('pressureUnit', 'hPa')
		localStorage.setItem('precipitationUnit', 'mm')
		localStorage.setItem('theme', 'dark')
		localStorage.setItem('language', 'en')
		localStorage.setItem('time', '24-hour')
		window.location.reload()
	}

	return (
		<div className='w-full lg:ml-7 mt-3 flex flex-col gap-12 justify-center items-center lg:items-start'>
			<div className='flex lg:justify-between lg:items-center w-10/12 lg:flex-row flex-col align-start justify-start gap-4'>
				<h1 className='min-[440px]:text-7xl text-5xl font-extrabold'>Settings</h1>
				<button
					className='text-3xl font-extrabold text-red-500 py-1 lg:px-4 text-left hover:text-red-700 duration-300'
					onClick={resetSettings}>
					reset
				</button>
			</div>

			<div className='w-10/12'>
				<h2 className='text-4xl font-bold mb-6'>Units</h2>
				<div className='bg-secondary p-4 rounded-md flex flex-col gap-8'>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>temperature</h3>
						<div className='bg-primary flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									temperatureUnit === 'celsius' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changeTemperatureUnit}>
								<p>Celsius</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									temperatureUnit === 'fahrenheit' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changeTemperatureUnit}>
								<p>Fahrenheit</p>
							</button>
						</div>
					</div>

					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>wind</h3>
						<div className='bg-primary flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									windUnit === 'm/s' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changeWindUnit}>
								<p>m/s</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									windUnit === 'km/h' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changeWindUnit}>
								<p>km/h</p>
							</button>
						</div>
					</div>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>pressure</h3>
						<div className='bg-primary flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									pressureUnit === 'hPa' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changePressureUnit}>
								<p>hPa</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									pressureUnit === 'in' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changePressureUnit}>
								<p>inches</p>
							</button>
						</div>
					</div>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>temperature</h3>
						<div className='bg-primary flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									precipitationUnit === 'mm' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changePrecipitationUnit}>
								<p>mm</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									precipitationUnit === 'in' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changePrecipitationUnit}>
								<p>inches</p>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='w-10/12'>
				<h2 className='text-4xl font-bold mb-6'>General</h2>
				<div className='bg-secondary p-4 rounded-md flex flex-col gap-8'>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>theme</h3>
						<div className='bg-primary flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									theme === 'dark' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changeTheme}>
								<div className='flex items-center gap-2'>
									<p>dark</p>
								</div>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									theme === 'light' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changeTheme}>
								<div className='flex items-center gap-2'>
									<p>light</p>
								</div>
							</button>
						</div>
					</div>

					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>language</h3>
						<div className='bg-primary flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									language === 'en' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changeLanguage}>
								<p>English</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									language === 'pl' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changeLanguage}>
								<p>Polish</p>
							</button>
						</div>
					</div>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>time</h3>
						<div className='bg-primary flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									time === '24-hour' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changeTime}>
								<p>24-hour</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									time === '12-hour' ? 'bg-secondary' : 'bg-primary'
								}`}
								onClick={changeTime}>
								<p>12-hour</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Settings
