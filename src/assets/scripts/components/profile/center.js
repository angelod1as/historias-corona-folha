import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../common/markdown';
import Stars from '../common/star';

const Center = ({ person }) => {
	const {
		// age,
		// comorbidities,
		// death,
		// extra_field: ReadMore,
		// job,
		// name,
		// picture,
		text,
	} = person;
	// console.log(person);

	return (
		<div className="text">
			{/* {age} */}
			{/* {comorbidities} */}
			{/* {death} */}
			{/* {ReadMore} */}
			{/* {job} */}
			{/* {name} */}
			{/* {picture} */}
			<Markdown string={text} />
			<div className="stars">
				<Stars />
			</div>

		</div>
	);
};

export default Center;

Center.propTypes = {
	person: PropTypes.shape({
		age: PropTypes.string,
		comorbidities: PropTypes.string,
		death: PropTypes.string,
		extra_field: PropTypes.string,
		job: PropTypes.string,
		name: PropTypes.string,
		picture: PropTypes.string,
		text: PropTypes.string,
	}).isRequired,
};
