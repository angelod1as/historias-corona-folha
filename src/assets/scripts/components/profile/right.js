import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import Person from '../common/person';


const Right = ({ data }) => {
	const limited = data.slice(0, 6);
	return (
		<div className="right">
			<Link to="/" className="right__sub">aqueles que perdemos</Link>
			{limited.map(each => (
				<Person
					key={uuid()}
					info={each}
				/>
			))}
		</div>
	);
};

export default Right;

Right.propTypes = {
	data: PropTypes.array.isRequired,
};
