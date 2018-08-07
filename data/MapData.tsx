import * as React from 'react'
import { slice, map } from 'lodash' // Importing slice and map from lodash

const Airports = [
	{ data: 'Hartsfield–Jackson Atlanta International Airport' },
	{ data: 'Beijing Capital International Airport' },
	{ data: 'Dubai International Airport' },
	{ data: 'Los Angeles International Airport' },
	{ data: 'Tokyo International Airport' },
	{ data: "O'Hare International Airport" },
	{ data: 'Heathrow Airport' },
	{ data: 'Hong Kong International Airport' },
	{ data: 'Shanghai Pudong International Airport' },
	{ data: 'Charles de Gaulle Airport' },
	{ data: 'Dallas/Fort Worth International Airport' },
	{ data: 'Amsterdam Airport Schiphol' },
	{ data: 'Frankfurt Airport' },
	{ data: 'Istanbul Atatürk Airport' },
	{ data: 'Guangzhou Baiyun International Airport' },
	{ data: 'John F. Kennedy International Airport' },
	{ data: 'Singapore Changi Airport' },
	{ data: 'Denver International Airport' },
	{ data: 'Seoul Incheon International Airport' },
	{ data: 'Suvarnabhumi Airport' },
	{ data: 'Indira Gandhi International Airport' },
	{ data: 'Soekarno–Hatta International Airport' },
	{ data: 'San Francisco International Airport' },
	{ data: 'Kuala Lumpur International Airport' },
	{ data: 'Madrid Barajas Airport' },
	{ data: 'McCarran International Airport' },
	{ data: 'Chengdu Shuangliu International Airport' },
	{ data: 'Seattle-Tacoma International Airport' },
	{ data: 'Chhatrapati Shivaji International Airport' },
	{ data: 'Miami International Airport' },
	{ data: 'Charlotte Douglas International Airport' },
	{ data: 'Toronto Pearson International Airport' },
	{ data: 'Barcelona–El Prat Airport' },
	{ data: 'Phoenix Sky Harbor International Airport' },
	{ data: 'Gatwick Airport' },
	{ data: 'Taiwan Taoyuan International Airport' },
	{ data: 'Munich Airport' },
	{ data: 'Kunming Changshui International Airport' },
	{ data: "Shenzhen Bao'an International Airport" },
	{ data: 'Orlando International Airport' },
	{ data: 'Sydney Kingsford-Smith Airport' },
	{ data: 'Leonardo da Vinci–Fiumicino Airport' },
	{ data: 'Benito Juárez International Airport' },
	{ data: 'George Bush Intercontinental Airport' },
	{ data: 'Shanghai Hongqiao International Airport' },
	{ data: 'Newark Liberty International Airport' },
	{ data: 'Ninoy Aquino International Airport' },
	{ data: 'Narita International Airport' },
	{ data: 'Minneapolis/St Paul International Airport' },
	{ data: 'Hamad International Airport' }
]

const list: React.CSSProperties = {
	padding: 0,
	margin: 0,
	minHeight: '100%',
	display: 'flex',
	flexDirection: 'column',
	borderWidth: 1,
	borderColor: 'blue',
	borderStyle: 'sold'
}

const listItem: React.CSSProperties = {
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	height: 'auto',
	padding: '10px 5px',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
	color: '#8855FF',
	background: 'rgba(136, 85, 255, 0.1)'
}

/**
 *
 *
 * @export
 * @class MapData
 * @extends {React.Component}
 */
export class MapData extends React.Component {
	render() {
		const pickSomeAirports = slice(Airports, 0, 10) // Slicing with the first 10 values from the array.

		/**
		 *
		 *	Main takeaways:
		 *	1.	Use React.Fragment to avoid using a <div> container.
		 *	2.	Everytime we loop a new node using map or forEach, we need to create a unique identifier,
		 *		so in this case, we create a `i` and we pass it as a key prop.
		 */
		return (
			<React.Fragment>
				<ul style={list}>
					{map(pickSomeAirports, (data, i) => (
						<li key={i} style={listItem}>
							{data.data}
						</li>
					))}
				</ul>
			</React.Fragment>
		)
	}
}
