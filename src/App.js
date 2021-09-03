import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { GlobalStyles } from './globalStyles'
import { useRoutes } from 'react-router'
import Home from './views/Home/Home'
import Menu from './views/Home/Menu/Menu'
import NotFound from './views/NotFound/NotFound'

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/menu', element: <Menu /> },
	{ path: '*', element: <NotFound /> }
]

const App = () => {
	const element = useRoutes(routes)
	return (
		<div className="flex flex-col overflow-x-hidden">
			<GlobalStyles />
			<Header />
			<main className="flex-grow  bg-white">{element}</main>
			<Footer />
		</div>
	)
}

export default App
