import styled from 'styled-components'
import Hero from './Hero/Hero'
import Treat from './Treat/Treat'
const StyledHome = styled.div`color: black;`
const Home = () => {
	return (
		<StyledHome>
			<Hero />
			<Treat />
		</StyledHome>
	)
}
export default Home
