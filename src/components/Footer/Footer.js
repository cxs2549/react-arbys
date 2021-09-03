import styled from 'styled-components'
import logo from '../../assets/footer-logo.png'
import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im'
const StyledFooter = styled.footer`
	background-color: var(--brandBrown);
	padding: 2rem 1rem;
	#wrapper {
		position: relative;
		max-width: var(--maxWidth);
		margin: 0 auto;
	}
	svg {
		&:hover {
			color: var(--brandRed);
		}
	}
`
const Footer = () => {
	const linkGroup = [
		{
			name: 'explore our menu',
			links: [ 'menu', 'nutrition', 'ingredients & allergens', 'gluten free menu' ]
		},
		{
			name: 'get to know us',
			links: [ 'about us', 'franchising', 'foundation', 'our commitment to safety' ]
		},
		{ name: 'stay in touch', links: [ 'press', 'careers', 'contact us' ] }
	]
	const siteLinks = [
		'privacy policy',
		'do not sell my info',
		'terms of use',
		'sitemap',
		'accessibility',
		'california transparency in supply chain act',
		'about our ads'
	]
	return (
		<StyledFooter>
			<div id="wrapper">
				<div className="mb-8 mx-auto md:hidden">
					<img src={logo} className="w-20 mx-auto" alt="" />
				</div>
				<div className="flex flex-col md:grid grid-cols-3 lg:grid-cols-4 items-center md:items-start md:gap-4 justify-center">
					{linkGroup.map((group, i) => (
						<div key={i} className="mb-8">
							<h3 className="mb-3 uppercase font-bold text-xl text-center md:text-left">{group.name}</h3>
							<ul className="list-disc px-4 flex flex-col items-center md:items-start justify-center">
								{group.links.map((item) => (
									<li className="capitalize font-medium underline mb-1 hover:text-brandRed">{item}</li>
								))}
							</ul>
						</div>
					))}
					<div>
						<h3 className="mb-4 uppercase font-bold text-xl">Let's connect</h3>
						<div className="flex gap-8 md:border-none pb-8 text-4xl">
							<ImFacebook />
							<ImTwitter />
							<ImInstagram />
						</div>
					</div>
				</div>
                {/* sitelinks */}
				<div className="flex items-center border-b border-t border-borderColor">
					<ul className="flex flex-wrap items-center justify-center  gap-x-3 gap-y-1 py-8 lg:justify-between w-full">
						{siteLinks.map((item, i) => (
							<li key={i} className="uppercase font-bold text-xs hover:text-brandRed">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="md:flex flex-col justify-center  items-center pt-8 gap-3">
					<div className="hidden md:flex items-center">
						<img src={logo} className="w-16 mb-2" alt="" />
					</div>
					<p className=" text-xs text-center">
						&copy; 2021 SuperVision Design for Arby's IP Holder, LLC. All Rights
						Reserved. <br />
						v.1 built w React
					</p>
				</div>
			</div>
		</StyledFooter>
	)
}
export default Footer
