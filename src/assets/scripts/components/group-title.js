import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const GroupTitle = ({ week }) => {
	const sunday = moment(week, 'week');
	const saturday = moment(week, 'week').add(6, 'days');
	let sundayFormat = 'DD';

	if (sunday.month() !== saturday.month()) {
		sundayFormat += '.MMM';
	}
	sundayFormat = sunday.format(sundayFormat).toLowerCase();
	const saturdayFormat = saturday.format('DD.MMM.YYYY').toLowerCase();

	return (
		<h2>
			{`Semana de ${sundayFormat} a ${saturdayFormat}`}
		</h2>
	);
};

GroupTitle.propTypes = {
	week: PropTypes.object.isRequired,
};

export default GroupTitle;
