import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

// Config
import getData from '../../config/getdata';

// Components
import Loading from '../common/loading';
import Error from '../common/error';
import Person from '../common/person';
import Sorting from './sorting';
import Filtering from './filtering';

// Functions
import sortData from './common/sortData';
import filterData from './common/filterData';
import buildFilters from './common/buildFilters';

const Home = () => {
	const [originalData, setOriginalData] = useState();
	const [sortedData, setSortedData] = useState();
	const [order, setOrder] = useState('down');
	const [orderCategory, setOrderCategory] = useState('death');
	const [filters, setFilters] = useState([]);
	const [chosenFilters, setChosenFilters] = useState({});
	const [error, setError] = useState();

	// Getting data from JSON
	useEffect(() => {
		getData(setOriginalData, setError);
	}, []);

	// Organizing first data
	useEffect(() => {
		// Cloning original data to sortable array
		if (originalData && !sortedData) {
			// building filters
			const newFilters = buildFilters({
				data: originalData,
				filters: [{
					name: 'idade',
					property: 'age',
				}],
			});
			setFilters(newFilters);

			// build shown data
			const newData = sortData({
				data: originalData,
				type: orderCategory,
				order,
			});
			setSortedData([...newData]);
			return;
		}

		// Resorting data
		if (sortedData) {
			const filteredData = filterData({
				data: originalData,
				filters: chosenFilters,
			});
			const finalData = sortData({
				data: filteredData,
				type: orderCategory,
				order,
			});
			setSortedData([...finalData]);
		}
	}, [originalData, order, orderCategory, chosenFilters]);

	// // Returning // //
	// Avoiding errors
	if (error) {
		return <Error error={error} />;
	}

	// Data loaded
	if (sortedData) {
		return (
			<div className="home">
				<Filtering
					filters={filters}
					setChosenFilters={setChosenFilters}
					chosenFilters={chosenFilters}
				/>

				<div>
					<Sorting
						order={order}
						setOrder={setOrder}
						orderCategory={orderCategory}
						setOrderCategory={setOrderCategory}
					/>

					<div className="people">
						{sortedData.length > 0
							? sortedData.map(each => (
								<Person
									key={uuid()}
									info={each}
								/>
							))
							: <div className="notfound">resultado não encontrado</div>
						}
					</div>
				</div>

				<div className="ad" />
			</div>
		);
	}

	// Data still loading
	return <Loading />;
};

export default Home;
