import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route } from 'react-router-dom';

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
		this.markAsRead = this.markAsRead.bind(this);
	}

	markAsRead(id) {
		const { sortedData: data } = this.state;
		const readData = { ...data };
		Object.keys(data).some(category => data[category].some((item, j) => {
			if (item.id === id) {
				data[category][j].read = true;
				return true;
			}
			return false;
		}));
		this.setState({
			sortedData: readData,
		});
	}

	render() {
		const { sortedData } = this.state;
		if (Object.keys(sortedData).length) {
			return (
				<Router>
					<Route
						path="/:id?"
						render={({ match }) => (
							<React.Fragment>
								{Object.keys(sortedData).reverse().map(key => (
									<Group
										match={match}
										key={`week-${key}`}
										data={sortedData[key]}
										week={+key}
										markAsRead={this.markAsRead}
									/>
								))}
							</React.Fragment>
						)}
					/>
				</Router>
			);
		}
		return null;
	}
}

App.propTypes = {
	data: PropTypes.array.isRequired,
};
