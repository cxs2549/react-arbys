import styled from 'styled-components'
import Cards from './Cards/Cards'
import Header from './Header/Header'
const StyledMenu = styled.div`
	/* height: 20vh; */
	/* background-color: blue; */

	color: #333;
	#wrapper {
		max-width: var(--maxWidth);
		margin: 0 auto;
	}
`
const Menu = () => {
	return (
		<StyledMenu>
			<Header />
			<div id="wrapper">
				<Cards />
			</div>
		</StyledMenu>
	)
}
export default Menu
