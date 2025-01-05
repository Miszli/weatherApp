import React from 'react'

function Settings() {
	return (
		<div className='w-full ml-7 mt-3'>
			<h1 className='min-[440px]:text-7xl text-5xl font-extrabold mb-12'>Settings</h1>

			<div className='w-10/12'>
				<h2 className='text-4xl font-bold mb-6'>Units</h2>
				<div className='bg-[#202B3B] p-4 rounded-md flex flex-col gap-8'>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>temperature</h3>
						<div className='bg-[#0B131E] flex items-center justify-center p-2 rounded-md'>
							<button className='flex items-center justify-center bg-[#202B3B] w-1/2 py-2 rounded-md text-lg'>
								<p>Celsius</p>
							</button>
							<button className='flex items-center justify-center bg-[#0B131E] w-1/2 py-2 rounded-md text-lg'>
								<p>Fahrenheit</p>
							</button>
						</div>
					</div>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>wind</h3>
						<div className='bg-[#0B131E] flex items-center justify-center p-2 rounded-md gap-8'>
							<button className='flex items-center justify-center bg-[#202B3B] w-1/3 py-2 rounded-md text-lg relative'>
								<p>m/s</p>
								<div className='h-5/6 w-px bg-[#202B3B] absolute right-[-16px]'></div>
							</button>
							<button className='flex items-center justify-center bg-[#0B131E] w-1/3 py-2 rounded-md text-lg relative'>
								<p>m/h</p>
								<div className='h-5/6 w-px bg-[#202B3B] absolute right-[-16px]'></div>
							</button>
							<button className='flex items-center justify-center bg-[#0B131E] w-1/3 py-2 rounded-md text-lg relative'>
								<p>km/h</p>
							</button>
						</div>
					</div>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>pressure</h3>
						<div className='bg-[#0B131E] flex items-center justify-center p-2 rounded-md'>
							<button className='flex items-center justify-center bg-[#202B3B] w-1/2 py-2 rounded-md text-lg'>
								<p>hPa</p>
							</button>
							<button className='flex items-center justify-center bg-[#0B131E] w-1/2 py-2 rounded-md text-lg'>
								<p>inches</p>
							</button>
						</div>
					</div>
					<div>
						<h3 className='uppercase text-base font-extrabold opacity-60 mb-4'>temperature</h3>
						<div className='bg-[#0B131E] flex items-center justify-center p-2 rounded-md'>
							<button className='flex items-center justify-center bg-[#202B3B] w-1/2 py-2 rounded-md text-lg'>
								<p>mm</p>
							</button>
							<button className='flex items-center justify-center bg-[#0B131E] w-1/2 py-2 rounded-md text-lg'>
								<p>inches</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Settings
