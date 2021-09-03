import styled from 'styled-components'
import hero from '../../../assets/hero.png'

const StyledHero = styled.div`
	padding: 3rem 1.5rem;
	display: grid;
	gap: 2rem;
	@media (min-width: 1280px) {
		grid-template-columns: 1fr 1fr;
        gap: 0;
		max-width: 75%;
		margin: 0 auto;
	}
	img {
		object-fit: cover;
	}
`
const Hero = () => {
	return (
		<StyledHero>
			<img
				src={hero}
				className="max-w-xs xl:max-w-full  mx-auto xl:order-2"
				alt=""
			/>
			<div className=" xl:flex xl:flex-col items-center justify-center">
				<h1 className="uppercase text-center text-4xl md:text-6xl font-bold text-gray-900 opacity-90">
					meaty. <br className="hidden xl:block" /> cheesy.
				</h1>
				<p className="text-center mt-3 opacity-80 md:max-w-sm md:mx-auto">
					Sliced prime rib steak and onions with melted cheese. Topped with fire-roasted
					red and yellow peppers. Prime Rib Cheesesteak is back, baby!
				</p>
				<br />
				<span className="text-xs text-gray-500 text-center block">1200 cals</span>
				<div className="flex items-center justify-center mt-4">
					<button className="bg-brandRed font-bold rounded px-8 py-3 mx-auto uppercase text-white text-xl">
						<div className="transform translate-y-0.5">view item</div>
					</button>
				</div>
			</div>
		</StyledHero>
	)
}
export default Hero
