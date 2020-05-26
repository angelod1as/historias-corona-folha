/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { uuid } from 'uuidv4';
import React from 'react';
import PropTypes from 'prop-types';

const OtherForm = ({
	property, name, elements, handleFilter, chosenFilters,
}) => {
	let value = 'all';

	if (Object.keys(chosenFilters).includes(property)) {
		value = chosenFilters[property];
	}

	return (
		<label
			className="f-forms__label"
			htmlFor={property}
		>
			{/* Name to titleCase */}
			{name[0].toUpperCase() + name.slice(1, name.length)}
			<select
				className="f-forms__select"
				type="select"
				name={name}
				id={property}
				onChange={handleFilter}
				value={value}
			>
				<option value="all">Todos</option>
				{elements.map(each => (
					<option key={uuid()} value={each}>{each}</option>
				))}
			</select>
		</label>
	);
};


OtherForm.propTypes = {
	property: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	elements: PropTypes.array.isRequired,
	handleFilter: PropTypes.func.isRequired,
	chosenFilters: PropTypes.object.isRequired,
};

export default OtherForm;
