import React from 'react';
import PropTypes from 'prop-types';

const Star = ({ fill }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 51 48"><path fill={fill} stroke="none" d="M25 1l6 17h18L35 29l5 17-15-10-15 10 5-17L1 18h18z" /></svg>
);

const Stars = () => (
	<div style={{
		height: 20,
	}}
	>
		<Star fill="#E50019" />
		<Star fill="#00A1ED" />
		<Star fill="#FFFFFF" />
	</div>
);

Star.propTypes = {
	fill: PropTypes.string.isRequired,
};

export default Stars;
