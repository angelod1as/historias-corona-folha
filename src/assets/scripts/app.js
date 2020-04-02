import React, { Component } from 'react';
import PropTypes from 'prop-types';

import filterData from './components/filter-data';
import Group from './components/group';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortedData: {},
		};
	}

	componentDidMount() {
		const { data } = this.props;
		this.setState({
			sortedData: filterData(data),
		});
	}

	render() {
		const { sortedData } = this.state;
		if (Object.keys(sortedData).length) {
			return Object.keys(sortedData).reverse().map(key => (
				<Group
					data={sortedData[key]}
					week={key}
				/>
			));
		}
		return null;
	}
}

App.propTypes = {
	data: PropTypes.array.isRequired,
};
