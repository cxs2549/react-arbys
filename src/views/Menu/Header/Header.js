import styled from 'styled-components'
const StyledHeader = styled.div`
	padding: 3rem 2rem;
	color: white;
	background-color: var(--brandBrown);
    
	#wrapper {
        display: flex;
        flex-flow: column;
		max-width: var(--maxWidth);
	}
`
const Header = () => {
	return (
		<StyledHeader>
			<div id="wrapper">
				<h2 className="text-xl sm:text-2xl font-bold uppercase">Yes, we have the meats...</h2>
				<br />
				<h1 className="text-5xl sm:text-6xl mt-2 font-bold uppercase">and more</h1>
			</div>
		</StyledHeader>
	)
}
export default Header
