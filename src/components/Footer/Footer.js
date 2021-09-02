import styled from 'styled-components'
import logo from '../../assets/logo.png'

const StyledFooter = styled.footer`
	background-color: var(--brandBrown);
	padding: 2rem 1rem;
    /* padding-top: 8rem; */
    #wrapper {
        position: relative;
        max-width: var(--maxWidth);;
        margin: 0 auto;
    }
`
const Footer = () => {
	return (
		<StyledFooter>
            <div id="wrapper">
                <div className="absolute right-0 -top-0 xl:bottom-0 xl:top-auto xl:right-0 xl:left-auto">
                    <img src={logo} className="w-20" alt="" />
                </div>
                            <div className="md:grid grid-cols-4 md:border-b">
                    {new Array(3).fill(null).map((_, i) => (
                        <div key={i} className="mb-8">
                            <h3 className="mb-3 uppercase font-bold text-xl">explore our menu</h3>
                            <ul className="list-disc px-4">
                                {new Array(4)
                                    .fill(null)
                                    .map((item) => (
                                        <li className="capitalize font-medium underline">item</li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                            <div>
                                <h3 className="mb-4 uppercase font-bold text-xl">Let's connect</h3>
                                <div className="flex gap-4 border-b md:border-none pb-8">
                                    {new Array(3)
                                        .fill(null)
                                        .map((item) => <div className="bg-brandRed h-20 w-20"></div>)}
                                </div>
                            </div>
                </div>
                            <ul className="grid grid-cols-2 md:flex gap-4 py-8 border-b">
                                {new Array(7).fill(null).map((item) => <li>link</li>)}
                            </ul>
                            <p className="pt-8 text-xs">
                                &copy; 2021 Super Vision Design for Arby's IP Holder, LLC. All Rights Reserved. <br />
                                v.1 built w React
                            </p>
            </div>
		</StyledFooter>
	)
}
export default Footer
