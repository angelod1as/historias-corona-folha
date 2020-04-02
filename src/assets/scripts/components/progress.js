import React from 'react';
import PropTypes from 'prop-types';

class Progress extends React.Component {
	render() {
		const { total, value } = this.props;

		return (
			<div className="fsp-progress">
				<p className="fsp-progress__label">
					<span className="fsp-progress__value">{value}</span>
					<span className="fsp-progress__division">/</span>
					<span className="fsp-progress__total">{total}</span>
				</p>
				<div className="fsp-progress__bar">
					<div className="fsp-progress__background" />
					<div className="fsp-progress__evolution" style={{ width: `${value / total * 100}%` }} />
				</div>
			</div>
		);
	}
}

Progress.propTypes = {
	total: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

export default Progress;
