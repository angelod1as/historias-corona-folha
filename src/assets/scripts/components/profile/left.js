import React from 'react';
import PropTypes from 'prop-types';

const Left = ({ person }) => {
	const {
		age,
		// comorbidities,
		death,
		extra_field: readMore,
		job,
		name,
		picture,
	} = person;

	// const deathLocale = moment(death, 'DD/MM/YYYY').format('D.MMM.YYYY');
	const [day, month, year] = death.split('/');
	const writtenMonth = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

	return (
		<div className="left">
			<img src={picture} alt={`foto de ${name}`} />
			<p className="name">{name}, {age}</p>
			<p>{job}</p>
			<p>faleceu em {+day}.{writtenMonth[+month - 1]}.{+year}</p>
			<p className="link">
				<a
					href={readMore}
					target="_blank"
					rel="noreferrer noopener"
				>Veja o perfil completo
				</a> →
			</p>
		</div>
	);
};

export default Left;

Left.propTypes = {
	person: PropTypes.shape({
		age: PropTypes.string,
		// comorbidities: PropTypes.string,
		death: PropTypes.string,
		extra_field: PropTypes.string,
		job: PropTypes.string,
		name: PropTypes.string,
		picture: PropTypes.string,
		text: PropTypes.string,
	}).isRequired,
};
