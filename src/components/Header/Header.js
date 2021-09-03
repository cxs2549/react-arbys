import { useState, useRef } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { BsBag } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import './Burger/burger.css'
import useOnClickOutside from 'use-onclickoutside'
import Headroom from 'react-headroom'
import { Link, NavLink } from 'react-router-dom'

const StyledHeader = styled.div`
	height: 76px;
	top: 0;
	left: 0;
	background-color: var(--brandRed);
	width: 100%;
	transition: transform .5s;
	position: relative;
	z-index: 1000;
	/* @media (min-width: 1280px) {
		height: 88px;
	} */
	#bigWrap {
		height: 123px;
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
		max-width: var(--maxWidth);
		@media (min-width: 1280px) {
			/* justify-content: flex-start; */
			/* height: 88px; */
			gap: 2rem;
			left: 50%;
			transform: translateX(-50%);
		}
		@media (min-width: 1316px) {
			padding: 0;
		}
		.activeMenu {
			opacity: 1;
			&::after {
				position: absolute;
				content: '';
				right: 0;
				top: 24px;
				width: 100%;
				height: 4px;
				background-color: #fff;
			}
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
				top: 76px;
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
				.active {
					background: var(--brandRed);
					opacity: 1 !important;
				}
				.listItem {
					width: 100%;
					text-align: center;
					font-size: 150%;
					display: flex;
					a {
						border-radius: 4px;
						padding: 1rem;
						width: 100%;
						height: 100%;
						opacity: .5;
						&:hover {
							opacity: 1;
						}
					}
				}
			}
			#overlay {
				position: fixed;
				top: 76px;
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
			gap: 1.5rem;

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
		document.body.classList.toggle('freezeflow')
		setIsOpen(!isOpen)
	}
	const handleClose = () => {
		document.getElementById('nav-icon1').classList.remove('open')
		document.body.classList.remove('freezeflow')
		setIsOpen(false)
	}
	const bottomLinks = [
		{ name: 'home', to: '/' },
		{ name: 'menu', to: 'menu' },
		{ name: 'get deals', to: 'get_deals' },
		{ name: 'gift cards', to: 'gift_cards' },
		{ name: 'locations', to: 'locations' }
	]
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
			<div id="bigWrap" ref={headerRef}>
				<StyledHeader open={isOpen}>
					<div id="wrapper">
						<div className="flex gap-2 lg:gap-8">
							<div id="logo">
								<Link to="/">
									<img src={logo} alt="" />
								</Link>
							</div>

							<ul className="hidden md:flex gap-5 xl:gap-12 text-lg xl:text-xl font-extrabold">
								{bottomLinks.map((link, i) => (
									<li
										key={i}
										className="tracking-wide  hover:opacity-100 uppercase whitespace-nowrap"
									>
										<NavLink
											to={link.to}
											end
											activeClassName="activeMenu"
											className="opacity-80 relative"
										>
											{link.name}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						<div>
							<div className="hidden lg:flex items-center">
								<button className=" text-white opacity-90 hover:opacity-100  px-1  py-2 rounded uppercase  flex items-center  gap-1">
									<div className="opacity-80 text-2xl">
										<i className="fa fa-map-marker" aria-hidden="true" />
									</div>
									<div className="flex flex-col items-start text-sm">
										<span className="ml-4">my arby's</span>
										<div className="flex items-center justify-center rounded-full px-3 py-1  border-2 border-white">
											<p className="font-bold pt-0.5 text-xs">
												Hollywood...{' '}
											</p>
											<div className=" ml-1">
												<FiChevronDown />
											</div>
										</div>
									</div>
								</button>
							</div>
							<div id="knife">
								<Link to="/account">
									<AiOutlineUser />
								</Link>
							</div>
							<div id="location">
								<Link to="/bag">
									<BsBag />
								</Link>
							</div>
							<div id="burger" className="md:hidden" ref={menuRef}>
								<div id="nav-icon1" onClick={handleOpen}>
									<span />
									<span />
									<span />
								</div>
								<div id="menu" className="p-8 ">
									<ul className="flex flex-col items-center justify-center uppercase font-bold gap-2">
										{bottomLinks.map((link, i) => (
											<li key={i} className="listItem" onClick={handleClose}>
												<NavLink to={link.to} end>
													{link.name}
												</NavLink>
											</li>
										))}
									</ul>
								</div>
								<div id="overlay" onClick={handleClose} />
							</div>
						</div>
					</div>
				</StyledHeader>
				<div className="flex items-center text-sm font-medium py-3 px-4 justify-center gap-2 lg:hidden bg-brandBrown">
					<span className="uppercase">my arby's</span>
					<div className="opacity-80">
						<i className="fa fa-map-marker" aria-hidden="true" />
					</div>
					<div className="flex gap-2 items-center border-b border-borderColor">
						<button className="">Hollywood - W Sunset Blvd</button>
						<FiChevronDown />
					</div>
				</div>
			</div>
		</Headroom>
	)
}
export default Header
