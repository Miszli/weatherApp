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
		<div className='w-full ml-7 mt-3 flex flex-col gap-12'>
			<div className='flex justify-between items-center w-10/12'>
				<h1 className='min-[440px]:text-7xl text-5xl font-extrabold'>Settings</h1>
				<button className='text-3xl font-extrabold text-red-500 py-1 px-4 hover:text-red-700' onClick={resetSettings}>
					reset
				</button>
			</div>

			<div className='w-10/12'>
				<h2 className='text-4xl font-bold mb-6'>Units</h2>
				<div className='bg-[#202B3B] p-4 rounded-md flex flex-col gap-8'>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>temperature</h3>
						<div className='bg-[#0B131E] flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									temperatureUnit === 'celsius' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
								}`}
								onClick={changeTemperatureUnit}>
								<p>Celsius</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									temperatureUnit === 'fahrenheit' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
								}`}
								onClick={changeTemperatureUnit}>
								<p>Fahrenheit</p>
							</button>
						</div>
					</div>

					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>wind</h3>
						<div className='bg-[#0B131E] flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									windUnit === 'm/s' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
								}`}
								onClick={changeWindUnit}>
								<p>m/s</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									windUnit === 'km/h' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
								}`}
								onClick={changeWindUnit}>
								<p>km/h</p>
							</button>
						</div>
					</div>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>pressure</h3>
						<div className='bg-[#0B131E] flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									pressureUnit === 'hPa' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
								}`}
								onClick={changePressureUnit}>
								<p>hPa</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									pressureUnit === 'in' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
								}`}
								onClick={changePressureUnit}>
								<p>inches</p>
							</button>
						</div>
					</div>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>temperature</h3>
						<div className='bg-[#0B131E] flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									precipitationUnit === 'mm' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
								}`}
								onClick={changePrecipitationUnit}>
								<p>mm</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									precipitationUnit === 'in' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
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
				<div className='bg-[#202B3B] p-4 rounded-md flex flex-col gap-8'>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>theme</h3>
						<div className='bg-[#0B131E] flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									theme === 'dark' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
								}`}
								onClick={changeTheme}>
								<p>dark</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									theme === 'light' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
								}`}
								onClick={changeTheme}>
								<p>light</p>
							</button>
						</div>
					</div>

					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>language</h3>
						<div className='bg-[#0B131E] flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									language === 'en' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
								}`}
								onClick={changeLanguage}>
								<p>English</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									language === 'pl' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
								}`}
								onClick={changeLanguage}>
								<p>Polish</p>
							</button>
						</div>
					</div>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>time</h3>
						<div className='bg-[#0B131E] flex items-center justify-center p-2 rounded-md'>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									time === '24-hour' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
								}`}
								onClick={changeTime}>
								<p>24-hour</p>
							</button>
							<button
								className={`flex items-center justify-center w-1/2 py-2 rounded-md text-lg ${
									time === '12-hour' ? 'bg-[#202B3B]' : 'bg-[#0B131E]'
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
