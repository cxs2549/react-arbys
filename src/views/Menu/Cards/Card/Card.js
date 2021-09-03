import styled from 'styled-components'

const StyledCard = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	background-color: #fff;
	cursor: pointer;
`
const Card = ({ card }) => {
	return (
		<StyledCard className="border rounded shadow p-4">
			<img src={card.img} className="sm:w-6/12" alt="" />
			<div>
				<div className="font-extrabold uppercase text-base xl:text-lg">
					<h3 className="leading-6">{card.name}</h3>
				</div>
				<div className="text-sm text-gray-600">{card.items} items</div>
				<div className="uppercase mt-2 text-xs font-bold border-b-2 border-gray-600 max-w-min whitespace-nowrap">
					view all
				</div>
			</div>
		</StyledCard>
	)
}
export default Card
