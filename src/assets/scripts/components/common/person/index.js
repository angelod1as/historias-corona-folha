import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { slugfy } from '../../../../../../utils';

const Person = ({
	info: {
		id, name, age,
	},
}) => {
	const url = slugfy(`/${id}-${name}`);
	return (
		<Link
			className="person"
			to={url}
		>
			<div className="age-column">
				<div className="age">{age}</div>
				<div>anos</div>
			</div>
			<div>
				<div className="name">{name.trim()}</div>
				<div className="subtitle">subtitle not found</div>
			</div>
		</Link>
	);
};


Person.propTypes = {
	info: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		age: PropTypes.string,
		death: PropTypes.string,
	}).isRequired,
};

export default Person;
