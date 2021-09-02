import { useState, useRef } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { BsBag } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import './Burger/burger.css'
import useOnClickOutside from 'use-onclickoutside'
import Headroom from 'react-headroom'

const StyledHeader = styled.div`
	height: 76px;
	top: 0;
	left: 0;
	background-color: var(--brandBrown);
	width: 100%;
	transition: transform .5s;
	position: relative;
	z-index: 1000;
	@media (min-width: 1280px) {
		height: 88px
	}

	#wrapper {
		height: 76px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 4px 1rem;
		gap: 1rem;
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		width: 100%;
		max-width: var(--maxWidth);;
		@media (min-width: 1280px) {
			/* justify-content: flex-start; */
			height: 88px;
			gap: 2rem;
			left: 50%;
			transform: translateX(-50%);
		}
		@media (min-width: 1316px) {
			padding: 0;
		}
		svg {
			font-size: 2.2rem;
		}
		> div {
			display: flex;
			align-items: center;
			height: 100%;
		}
		#burger {
			margin-right: -1rem;
			margin-left: -.8rem;
			#menu {
				position: fixed;
				width: 100%;
				top: 72px;
				right: ${(props) => (props.open ? '0' : '-100%')};
				max-width: 100%;
				transition: right .25s;
				transition-delay: .25s;
				background-color: var(--brandBrown);
				z-index: 1000;
				color: #fff;
				overflow-y: scroll;
				/* border-top: 1px solid white; */
				/* border-bottom: 1px solid lightgray; */
				.listItem {
					width: 100%;
					text-align: center;
					padding: 1rem;
					border-radius: 4px;
					font-size: 150%;
					&:hover {
						background-color: var(--brandRed);
						color: white;
					}
				}
			}
			#overlay {
				position: fixed;
				top: 72px;
				left: ${(props) => (props.open ? '0' : '-100%')};
				width: 100%;
				height: 100vh;
				background-color: rgba(0, 0, 0, .6);
				z-index: -100;
				opacity: ${(props) => (props.open ? 1 : 0)};
				transition: opacity .25s;
			}
		}

		#logo {
			background-image: url(${logo});
			/* background-size: auto; */
			background-repeat: no-repeat;
			background-position: center center;
			height: 80%;
			width: 75px;
			@media (min-width: 1280px) {
				margin-left: 0;
				/* width: 90px; */
				background-size: contain;
			}
		}

		> div:last-of-type {
			justify-self: flex-end;
			gap: 1rem;
			@media (min-width: 1024px) {
				gap: 2rem;
			}
			#knife,
			#location {
				svg {
					font-size: 1.7rem;
					color: var(--icon);
					opacity: .9;
				}
			}
		}
	}
`
const Header = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const handleOpen = () => {
		document.getElementById('nav-icon1').classList.toggle('open')
		document.body.classList.toggle('modal-open')
		setIsOpen(!isOpen)
	}
	const handleClose = () => {
		document.getElementById('nav-icon1').classList.remove('open')
		document.body.classList.remove('modal-open')
		setIsOpen(false)
	}
	const bottomLinks = [ 'menu', 'get deals', 'gift cards', 'locations' ]
	const menuRef = useRef()
	useOnClickOutside(menuRef, handleClose)

	const headerRef = useRef()
	const handlePin = () => {
		headerRef.current.style.transform = 'translateY(0%)'
	}
	const handleUnpin = () => {
		headerRef.current.style.transform = 'translateY(-100%)'
	}
	return (
		<Headroom onPin={handlePin} onUnpin={handleUnpin}>
			<StyledHeader open={isOpen} ref={headerRef}>
				<div id="wrapper">
					<div className="flex gap-2 lg:gap-8">
						<div id="logo" />
						<ul className="hidden md:flex gap-5 xl:gap-8 text-base lg:text-base xl:text-xl font-bold">
							{bottomLinks.map((link, i) => (
								<li
									key={i}
									className="tracking-wide opacity-90 hover:text-brandRed uppercase whitespace-nowrap"
								>
									{link}
								</li>
							))}
						</ul>
					</div>

					<div>
						<div className="hidden md:flex text-base">
							<button className="bg-brandRed font-extrabold px-3 py-2 rounded uppercase text-sm lg:text-base">
								Start an order
							</button>
						</div>
						<div id="knife">
							<AiOutlineUser />
						</div>
						<div id="location">
							<BsBag />
						</div>
						<div id="burger" className="md:hidden" ref={menuRef}>
							<div id="nav-icon1" onClick={handleOpen}>
								<span />
								<span />
								<span />
							</div>
							<div id="menu" className="pt-6 pb-5 px-8">
								<ul className="flex flex-col items-center justify-center uppercase font-bold">
									{bottomLinks.map((link, i) => (
										<li key={i} className="listItem">
											{link}
										</li>
									))}
								</ul>
							</div>
							<div id="overlay" onClick={handleClose} />
						</div>
					</div>
				</div>
			</StyledHeader>
		</Headroom>
	)
}
export default Header
