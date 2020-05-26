import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';

import OtherForm from './otherForm';
import NameForm from './nameForm';

const Filtering = ({ filters, setChosenFilters, chosenFilters }) => {
	// const filter = useCallback(({ target: { id } }) => {
	// 	console.log('filter');
	// 	// const sortingType = id.split('sort-')[1];
	// 	// const isDate = sortingType === 'death';
	// 	// const result = sortData(sortedData, sortingType, isDate);
	// 	// setSortedData([...result]);
	// });

	const handleFilter = useCallback((el) => {
		const newState = Object.assign({}, chosenFilters);
		newState[el.target.id] = el.target.value;
		setChosenFilters(newState);
	});

	return (
		<form className="filtering f-forms">
			{/* Name */}
			<NameForm
				handleFilter={handleFilter}
				name={chosenFilters.name}
			/>

			{/* Other filters */}
			{filters.map(({ property, name, elements }) => (
				<OtherForm
					key={uuid()}
					property={property}
					name={name}
					elements={elements}
					handleFilter={handleFilter}
					chosenFilters={chosenFilters}
				/>
			))}

		</form>
	);
};

export default Filtering;

Filtering.propTypes = {
	filters: PropTypes.array.isRequired,
	setChosenFilters: PropTypes.func.isRequired,
	chosenFilters: PropTypes.object.isRequired,
};
