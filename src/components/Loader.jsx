import { useState, useEffect } from 'react'

const Loader = () => {
	const [exit, setExit] = useState(false)

	useEffect(() => {
		const exitTimer = setTimeout(() => {
			setExit(true)
		}, 2500) // Начинаем анимацию выхода за 0.5 секунд до конца загрузки
		return () => clearTimeout(exitTimer)
	}, [])

	return (
		<div
			className={`fixed inset-0 bg-primaryBlue flex items-center justify-center z-50 transition-all duration-500 ${
				exit ? 'animate-fade-out' : ''
			}`}
		>
			<div className='flex space-x-2 text-primaryRed text-5xl font-bold'>
				<span className='animate-wave inline-block'>C</span>
				<span className='animate-wave animation-delay-200 inline-block'>O</span>
				<span className='animate-wave animation-delay-400 inline-block'>D</span>
				<span className='animate-wave animation-delay-600 inline-block'>E</span>
				<span className='animate-wave animation-delay-800 inline-block'>W</span>
				<span className='animate-wave animation-delay-1000 inline-block'>
					A
				</span>
				<span className='animate-wave animation-delay-1200 inline-block'>
					V
				</span>
				<span className='animate-wave animation-delay-1400 inline-block'>
					E
				</span>
			</div>
		</div>
	)
}

export default Loader
