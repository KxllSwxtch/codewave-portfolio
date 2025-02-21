import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header, Loader } from './components'
import { Home, Projects } from './pages'
import { useEffect, useState } from 'react'

const App = () => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 3000) // Загрузка будет длиться 3 секунды
		return () => clearTimeout(timer)
	}, [])

	if (loading) {
		return <Loader />
	}

	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</Router>
	)
}

export default App
