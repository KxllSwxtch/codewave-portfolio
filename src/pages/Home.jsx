import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Home = () => {
	// Используем useRef для ссылки на элемент
	const typedElement = useRef(null)

	useEffect(() => {
		const typed = new Typed(typedElement.current, {
			strings: [
				'Разработка сайтов',
				'Разработка телеграм-ботов',
				'Разработка мобильных приложений под ключ',
			],
			typeSpeed: 60,
			backSpeed: 30,
			backDelay: 1500,
			startDelay: 1000,
			loop: true,
			showCursor: true,
			cursorChar: '|',
			smartBackspace: true,
		})

		// Уничтожаем Typed.js при размонтировании компонента
		return () => {
			typed.destroy()
		}
	}, [])

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-primaryBlue text-white overflow-hidden'>
			<h1 className='text-2xl md:text-6xl font-bold text-center px-5'>
				<span ref={typedElement}></span>
			</h1>
		</div>
	)
}

export default Home
