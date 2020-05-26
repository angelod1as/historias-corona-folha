/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';

const nameForm = ({ handleFilter, name }) => (
	<label
		className="f-forms__label"
		htmlFor="name"
	>
		Buscar
		<input
			key="name"
			className="f-forms__text"
			type="text"
			name="nome"
			id="name"
			placeholder="Nome"
			onChange={handleFilter}
			value={name}
		/>
	</label>
);


nameForm.propTypes = {
	// property: PropTypes.string.isRequired,
	// name: PropTypes.string.isRequired,
	name: PropTypes.string,
	handleFilter: PropTypes.func.isRequired,
};

nameForm.defaultProps = {
	name: '',
};

export default nameForm;
