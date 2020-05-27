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
			<div className="person-age">{age}</div>
			<div className="person-anos">anos</div>
			<div className="person-name">{name.trim()}</div>
			<div className="person-subtitle">subtitle not found</div>
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
