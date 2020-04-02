/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

class Carrousel extends React.Component {
	render() {
		const { data, selected, onChange } = this.props;
		return (
			<nav className="fsp-group__carrousel">
				{data.map((person, i) => (
					<figure
						key={`person${person.id}`}
						className={[
							'fsp-carrousel__item',
							(i === selected ? 'fsp-carrousel__item_selected' : ''),
						].join(' ')}
						onClick={() => {
							onChange(i);
						}}
						onKeyDown={(event) => {
							if ([13, 32].indexOf(event.keyCode) >= 0) {
								event.preventDefault();
								onChange(i);
							}
						}}
						tabIndex={0}
					>
						<img src={person.picture} alt="" />
					</figure>
				))}
			</nav>
		);
	}
}

Carrousel.propTypes = {
	data: PropTypes.array.isRequired,
	selected: PropTypes.number.isRequired,
	onChange: PropTypes.func,
};

Carrousel.defaultProps = {
	onChange: () => { },
};

export default Carrousel;
