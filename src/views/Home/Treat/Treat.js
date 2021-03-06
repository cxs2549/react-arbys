import styled from 'styled-components'
import bell from '../../../assets/Bell.png'

const StyledTreat = styled.div`
	padding: 3rem 1rem;
	padding-top: 2rem;
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border-top: 1px solid lightgray;

	@media (min-width: 1280px) {
		flex-flow: row;
        justify-content: space-between;
        max-width: 80%;
        margin: 0 auto;
	}
`
const Treat = () => {
	return (
		<StyledTreat>
			<img src={bell} alt="" />
			<h1 className="text-2xl xl:text-3xl uppercase font-bold text-brandRed">treat yourself</h1>
			<div className="flex flex-col items-center justify-center gap-1">
				<p className="text-xl font-medium">Java + Mocha = Jamocha Shake</p>
				<br />
				<span className="text-center md:text-sm xl:text-base md:max-w-sm opacity-80">
					If you say you don’t love coffee and chocolate, you haven’t had a Jamocha Shake
					in the last 57 years since Arby’s invented it.
				</span>
			</div>
			<button className="mt-2 uppercase font-bold border-2 rounded px-4 py-2 border-brandRed text-brandRed text-xl">
				<div className="pt-0.5">order now</div>
			</button>
		</StyledTreat>
	)
}
export default Treat
