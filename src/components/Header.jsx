import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
	const [navOpen, setNavOpen] = useState(false)

	const toggleNav = () => {
		setNavOpen(!navOpen)
	}

	return (
		<header className='w-full bg-primaryBlue text-white  fixed top-0 left-0 z-50'>
			<div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
				{/* Логотип */}
				<Link to='/' className='flex items-center'>
					<img
						src='https://res.cloudinary.com/pomegranitedesign/image/upload/v1740130968/portfolio/logo.png'
						alt='CodeWave Logo'
						className='h-10 md:h-25 hover:scale-110 transition-transform duration-300'
					/>
				</Link>

				{/* Меню для десктопов */}
				<nav className='hidden md:flex space-x-6'>
					<Link to='/' className='relative group'>
						главная
						<span className='block h-0.5 bg-primaryRed absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500'></span>
					</Link>
					<Link to='/projects' className='relative group'>
						проекты
						<span className='block h-0.5 bg-primaryRed absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500'></span>
					</Link>
				</nav>

				{/* Иконка бургера для мобильных */}
				<div className='md:hidden' onClick={toggleNav}>
					{navOpen ? (
						<AiOutlineClose className='text-3xl cursor-pointer transition-transform duration-300 transform hover:rotate-90' />
					) : (
						<AiOutlineMenu className='text-3xl cursor-pointer transition-transform duration-300 transform hover:rotate-90' />
					)}
				</div>
			</div>

			{/* Overlay затемнение */}
			<div
				className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
					navOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
				onClick={toggleNav}
			></div>

			{/* Мобильное меню */}
			<nav
				className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-primaryBlue text-white z-50 p-6 shadow-lg transition-transform duration-500 transform ${
					navOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<ul className='space-y-6 text-lg'>
					<li>
						<Link
							to='/'
							onClick={toggleNav}
							className='block hover:text-primaryRed transition-colors duration-300'
						>
							главная
						</Link>
					</li>
					<li>
						<Link
							to='/projects'
							onClick={toggleNav}
							className='block hover:text-primaryRed transition-colors duration-300'
						>
							проекты
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
