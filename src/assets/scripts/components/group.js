import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Icons from './icons';
import Carousel from './carrousel';
import Card from './card';
import Modal from './modal';
import GroupTitle from './group-title';

class Group extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 0,
			opened: false,
			windowWidth: window.outerWidth,
		};
		this.changeSelected = this.changeSelected.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.windowResize = this.windowResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.windowResize);
	}

	windowResize() {
		this.setState({ windowWidth: window.outerWidth });
	}

	changeSelected(index, open = false) {
		const { markAsRead, data } = this.props;
		markAsRead(data[index].id);
		if (open) {
			this.setState({
				selected: index,
				opened: true,
			});
		} else {
			this.setState({
				selected: index,
			});
		}
	}

	closeModal() {
		this.setState({ opened: false });
	}

	render() {
		const { selected, windowWidth, opened } = this.state;
		const { data, week } = this.props;
		return (
			<section className="fsp-person-group">
				<GroupTitle week={week} />
				<Carousel
					selected={windowWidth > 375 || opened ? selected : null}
					data={data}
					onChange={this.changeSelected}
				/>
				<div className="fsp-group__main">
					{windowWidth > 375 ? (
						<React.Fragment>
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
						</React.Fragment>
					) : null}
					{windowWidth <= 375 && opened ? (
						<Modal title={() => (<GroupTitle week={week} />)} className="fsp-group__modal" close={this.closeModal}>
							<Carousel
								selected={windowWidth > 375 || opened ? selected : null}
								data={data}
								onChange={this.changeSelected}
								progress
							/>
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
						</Modal>
					) : null}
				</div>
			</section>
		);
	}
}

Group.propTypes = {
	data: PropTypes.array.isRequired,
	week: PropTypes.number,
	markAsRead: PropTypes.func,
};

Group.defaultProps = {
	week: null,
	markAsRead: () => { },
};

export default Group;
