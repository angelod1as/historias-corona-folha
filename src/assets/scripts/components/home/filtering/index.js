import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';

import OtherForm from './otherForm';
import NameForm from './nameForm';
import FilterSvg from './filterSvg';

const Filtering = ({ filters, setChosenFilters, chosenFilters }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleFilter = useCallback((el) => {
		const newState = Object.assign({}, chosenFilters);
		newState[el.target.id] = el.target.value;
		setChosenFilters(newState);
	});

	const handleButton = useCallback(() => {
		setIsOpen(!isOpen);
	});

	return (
		<>
			<form className="filtering f-forms">
				<button
					type="button"
					onClick={handleButton}
					className="toggle-button"
				>Filtrar <FilterSvg fill="#999" />
				</button>
				<div className={`${isOpen ? 'open' : 'closed'}`}>
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
				</div>
			</form>
		</>
	);
};

export default Filtering;

Filtering.propTypes = {
	filters: PropTypes.array.isRequired,
	setChosenFilters: PropTypes.func.isRequired,
	chosenFilters: PropTypes.object.isRequired,
};
