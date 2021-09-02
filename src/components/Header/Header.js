import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'

const StyledHeader = styled.header`
	background-color: var(--brandBrown);
	padding: 1rem;
	padding-bottom: 0;
	@media (min-width: 768px) {
		padding: 1rem;
	}
#wrapper {
    max-width: 1300px;
    margin: 0 auto;
}
	#top {
		svg {
			font-size: 1.75rem;
		}
	}
	#logo {
		position: absolute;
		left: 50%;
		top: 65%;
		transform: translate(-50%, -50%);
		background-image: url(${logo});
		background-repeat: no-repeat;
		background-size: contain;
		height: 84px;
		width: 84px;
		@media (min-width: 768px) {
			left: 2.5rem;
			top: 50%;
			/* transform: translate(-50%); */
		}
	}
`
const Header = () => {
	const links = [ 'menu', 'get deals', 'gift cards', 'locations' ]
	return (
		<StyledHeader>
			<div id="wrapper">
                <div
                    id="top"
                    className="flex justify-between relative  border-b border-borderColor md:border-none py-3 h-16"
                >
                    <div>
                        <FiMenu className="md:hidden" />
                        <ul className="hidden md:flex items-center gap-6 md:gap-8 h-8 ml-24 text-sm lg:text-lg lg:ml-32">
                            {links.map((link, i) => (
                                <li key={i} className="uppercase font-bold whitespace-nowrap">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div id="logo" />
                    <div className="flex items-center gap-4 lg:gap-6 h-8">
                        <div className="hidden md:flex text-base">
                            <button className="bg-red-500 font-extrabold px-3 py-1 rounded uppercase text-sm lg:text-lg">
                                Start an order
                            </button>
                        </div>
                        <div className="flex items-center gap-1">
                            <AiOutlineUser />
                            <span className="font-bold text-sm hidden lg:block">Sign In</span>
                        </div>
                        <BsBag />
                    </div>
                </div>
                <div className=" h-16 py-4 flex items-center gap-4 justify-center text-sm md:hidden">
                    <div className="text-base flex items-center border-b border-borderColor">
                        <div className="text-xs">
                            <i className="fa fa-map-marker" aria-hidden="true" />
                        </div>
                        <span className="font-bold mx-2">Find an Arby's</span>
                        <div className="text-xs">
                            <i className="fa fa-chevron-down" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
		</StyledHeader>
	)
}
export default Header
