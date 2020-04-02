/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import fetchJsonp from 'fetch-jsonp';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemData: {},
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	componentWillReceiveProps() {
		this.setState({ itemData: {} });
	}

	componentDidUpdate({ data: prevData }) {
		const { data } = this.props;
		if (data.id !== prevData.id) this.fetchData();
	}

	fetchData() {
		const { data } = this.props;
		const self = this;
		fetchJsonp(`./json/${data.id}.jsonp`, {
			jsonpCallbackFunction: `person${data.id}`,
		})
			.then(response => response.json())
			.then((d) => {
				self.setState({ itemData: d[0] });
			})
			.catch((err) => {
				console.warn(err);
			});
	}

	render() {
		const { data } = this.props;
		const { itemData } = this.state;

		return (
			<div key={data.id} className="fsp-group__card">
				<figure><img src={data.picture} width={300} height={400} alt="" /></figure>
				<div className="fsp-item__article">
					<header className="fsp-item__header">
						<h3>{data.name}</h3>
						<p><strong>›</strong> {data.age} anos</p>
						{itemData.job ? (
							<p><strong>›</strong> Era {itemData.job}</p>
						) : null}
						<p><strong>›</strong> Faleceu em {data.death_date.format('DD.MMM.YYYY').toLowerCase()}</p>
					</header>
					{itemData && itemData.text ? (
						<div className="fsp-item__text">
							{itemData.text.split(/[\n\r]+/).map((p, i) => (
								<p key={`${data.id}-${i + 1}`}>{p}</p>
							))}
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Card;
