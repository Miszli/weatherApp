import { createContext, useContext } from 'react'

export const SettingsContext = createContext({
	temperatureUnit: 'celsius',
	windUnit: 'm/s',
	pressureUnit: 'hPa',
	precipitationUnit: 'mm',
	changeTemperatureUnit: () => {},
	changeWindUnit: () => {},
	changePressureUnit: () => {},
	changePrecipitationUnit: () => {},

	theme: 'dark',
	language: 'en',
	time: '24-hour',
	changeTheme: () => {},
	changeLanguage: () => {},
	changeTime: () => {},
})

export const useSettings = () => {
	return useContext(SettingsContext)
}

export const SettingsProvider = SettingsContext.Provider
