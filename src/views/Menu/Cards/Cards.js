import styled from 'styled-components'
import meals from '../../../assets/cards/meals.png'
import chicken from '../../../assets/cards/chicken.png'
import desserts from '../../../assets/cards/desserts.png'
import kids from '../../../assets/cards/kids.png'
import market from '../../../assets/cards/market.png'
import sides from '../../../assets/cards/sides.png'
import sliders from '../../../assets/cards/sliders.png'
import slowroast from '../../../assets/cards/slowroast.png'
import drinks from '../../../assets/cards/drinks.png'

import Card from './Card/Card'
const StyledCards = styled.div`
	padding: 1rem;
	display: flex;
	flex-flow: column;
	gap: 1rem;
	background-color: #fff;
	@media (min-width: 640px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (min-width: 1280px) {
		padding: 1rem 0;
	}
`
const Cards = () => {
	const cards = [
		{ img: meals, name: 'meals', items: 32 },
		{ img: chicken, name: 'crispy juicy chicken', items: 9 },
		{ img: desserts, name: 'desserts', items: 10 },
		{ img: kids, name: 'kids', items: 10 },
		{ img: market, name: 'market fresh', items: 13 },
		{ img: sides, name: 'sides & snacks', items: 7 },
		{ img: sliders, name: 'sliders', items: 5 },
		{ img: slowroast, name: 'slow roasted beef', items: 10 },
		{ img: drinks, name: 'beverages', items: 14 }
	]
	return <StyledCards>{cards.map((card, i) => <Card key={i} card={card} />)}</StyledCards>
}
export default Cards
