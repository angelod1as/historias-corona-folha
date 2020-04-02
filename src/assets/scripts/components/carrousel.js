/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import Progress from './progress';

class Carrousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			read: props.data.filter(d => d.read).length,
		};
	}

	componentWillReceiveProps() {
		this.updateProgress();
	}

	updateProgress() {
		const { data } = this.props;

		this.setState({ read: data.filter(d => d.read).length });
	}

	render() {
		const {
			data, progress, selected, onChange,
		} = this.props;
		const { read } = this.state;
		return (
			<nav className="fsp-group__carrousel">
				<div className="fsp-carrousel__slider">
					{data.map((person, i) => (
						<figure
							key={`person${person.id}`}
							className={[
								'fsp-carrousel__item',
								(i === selected ? 'fsp-carrousel__item_selected' : ''),
								(person.read ? 'fsp-carrousel__item_read' : ''),
							].join(' ')}
							onClick={() => {
								this.updateProgress();
								onChange(i, true);
							}}
							onKeyDown={(event) => {
								if ([13, 32].indexOf(event.keyCode) >= 0) {
									event.preventDefault();
									this.updateProgress();
									onChange(i, true);
								}
							}}
							tabIndex={0}
						>
							<img src={person.picture.replace(/_md\.jpg/, '_sm.jpg')} width={300} height={400} alt="" />
						</figure>
					))}
				</div>
				{progress ? (
					<Progress total={data.length} value={read} />
				) : null}
			</nav>
		);
	}
}

Carrousel.propTypes = {
	data: PropTypes.array.isRequired,
	selected: PropTypes.number,
	progress: PropTypes.bool,
	onChange: PropTypes.func,
};

Carrousel.defaultProps = {
	onChange: () => { },
	progress: false,
	selected: null,
};

export default Carrousel;
