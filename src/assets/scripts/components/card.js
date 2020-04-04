/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import fetchJsonp from 'fetch-jsonp';
import { prettyText } from 'utils';

import Share from './share';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemData: {},
			pageXStart: null,
			touchStarted: false,
			touchPos: 0,
		};
		this.touchStart = this.touchStart.bind(this);
		this.touchMove = this.touchMove.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate({ selected: prevSelected }) {
		const { data, selected } = this.props;
		if (data[selected].id !== data[prevSelected].id) {
			this.fetchData();
		}
	}

	fetchData() {
		const {
			data: fullData, selected, id, scrollTo,
		} = this.props;
		const self = this;
		const data = fullData[selected];
		document.querySelector(`#${id}`).focus({ preventScroll: true });
		fetchJsonp(`http://staging.media.folha.com.br/cotidiano/2020/03/31/mortescovid19/${data.id}.json`, {
		// fetchJsonp(`./json/${data.id}.json`, {
			jsonpCallbackFunction: `person${data.id}`,
		})
			.then(response => response.json())
			.then((d) => {
				if (scrollTo) {
					setTimeout(() => {
						console.log(document.querySelector(`#${id}`).offsetParent.offsetTop);
						window.scrollTo(0, document.querySelector(`#${id}`).offsetParent.parentNode.offsetTop);
					}, 300);
				}
				self.setState({ itemData: d[0] });
			})
			.catch((err) => {
				console.warn(err);
			});
	}

	touchStart(e) {
		const { onChange, selected } = this.props;

		if (e.type === 'touchstart') {
			const [{ pageX }] = e.nativeEvent.touches;
			this.setState({
				pageXStart: pageX,
				touchStarted: true,
				touchPos: 0,
			});
		} else if (e.type === 'touchend') {
			const { touchPos } = this.state;
			if (Math.abs(touchPos) > 100) {
				if (touchPos < 0) {
					onChange(selected + 1);
				} else if (touchPos > 0) {
					onChange(selected - 1);
				}
			}
			this.setState({
				pageXStart: null,
				touchStarted: false,
				touchPos: 0,
			});
		}
	}

	touchMove(e) {
		const { selected, data } = this.props;
		const { touchStarted, pageXStart } = this.state;
		if (touchStarted) {
			const [{ pageX }] = e.nativeEvent.changedTouches;
			const touchPos = (pageXStart - pageX) * -1;
			if ((selected === 0 && touchPos > 0)
					|| (selected === data.length - 1 && touchPos < 0)) {
				this.setState({ touchPos: 0 });
			} else {
				this.setState({ touchPos });
			}
		}
	}

	render() {
		const {
			data: fullData, selected, onChange, id,
		} = this.props;
		const { itemData, touchPos } = this.state;
		const data = fullData[selected];

		return (
			<div
				id={id}
				key={data.id}
				className="fsp-group__card"
				tabIndex={0}
				onTouchStart={this.touchStart}
				onTouchEnd={this.touchStart}
				onTouchMove={this.touchMove}
				onKeyUp={({ keyCode }) => {
					if (selected < fullData.length - 1 && keyCode === 39) {
						onChange(selected + 1);
					} else if (selected !== 0 && keyCode === 37) {
						onChange(selected - 1);
					}
				}}
				role="presentation"
				style={{ transform: `translateX(${Math.abs(touchPos) > 50 ? touchPos : 0}px)` }}
			>
				<figure>
					{data.picture && data.picture.trim().match(/^https?:\/\/f\.i\.uol\.com\.br/) ? (
						<img src={data.picture} width={300} height={400} alt="" />
					) : (
						<img src="./images/empty.png" width={300} height={400} alt="" />
					)}
				</figure>
				<div className="fsp-item__article">
					<header className="fsp-item__header">
						<h3>{data.name} <Share url={`${window.location.origin}${window.location.pathname}#/${data.id}`} /></h3>
						<p><strong>›</strong> {data.age} anos</p>
						{itemData.job ? (
							<p><strong>›</strong> {itemData.job}</p>
						) : null}
						<p><strong>›</strong> Faleceu em {data.death_date.format('DD.MMM.YYYY').toLowerCase()}</p>
					</header>
					{itemData && itemData.text ? (
						<div className="fsp-item__text">
							{itemData.text.split(/[\n\r]+/).map((p, i) => (
								<p key={`${data.id}-${i + 1}`}>{prettyText(p)}</p>
							))}
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	data: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	selected: PropTypes.number.isRequired,
	scrollTo: PropTypes.bool.isRequired,
};

Card.defaultProps = {
	onChange: () => {},
};

export default Card;
