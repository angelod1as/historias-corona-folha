import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Icons from './icons';
import Carousel from './carrousel';
import Card from './card';

class Group extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: 0,
			data: props.data,
		};
		this.changeSelected = this.changeSelected.bind(this);
	}

	changeSelected(index) {
		this.setState({ visible: index });
	}

	render() {
		const { data, visible: selected } = this.state;
		const { week } = this.props;
		const monday = moment(week, 'week').format('DD.MMM.YY').toLowerCase();
		const sunday = moment(week, 'week').add(6, 'days').format('DD.MMM.YY');
		return (
			<section className="fsp-person-group">
				<h2>{`Semana de ${monday} a ${sunday}`}</h2>
				<Carousel
					selected={selected}
					data={data}
					onChange={this.changeSelected}
				/>
				<div className="fsp-group__main">
					<Card data={data[selected]} />
					<nav className="fsp-group__navigation">
						{selected > 0 ? (
							<button
								type="button"
								className="fsp-navigation__button fsp-navigation__button_left"
								onClick={() => {
									this.changeSelected(selected - 1);
								}}
							>
								<i className="fsp-icon">
									<Icons.Left />
								</i>
							</button>
						) : null}
						{selected < data.length - 1 ? (
							<button
								type="button"
								className="fsp-navigation__button fsp-navigation__button_right"
								onClick={() => {
									this.changeSelected(selected + 1);
								}}
							>
								<i className="fsp-icon">
									<Icons.Right />
								</i>
							</button>
						) : null}
					</nav>
				</div>
			</section>
		);
	}
}

Group.propTypes = {
	data: PropTypes.array.isRequired,
	week: PropTypes.number,
};

Group.defaultProps = {
	week: null,
};

export default Group;
