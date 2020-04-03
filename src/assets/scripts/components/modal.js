import React from 'react';
import PropTypes from 'prop-types';

import Icons from './icons';

class Modal extends React.Component {
	componentDidMount() {
		document.body.style.overflow = 'hidden';
		document.querySelector('html').style.overflow = 'hidden';
	}

	componentWillUnmount() {
		document.body.style.overflow = 'auto';
		document.querySelector('html').style.overflow = 'auto';
	}

	render() {
		const {
			title, children, close, className,
		} = this.props;

		return (
			<div
				className={
					[
						'fsp-modal',
						className,
					].join(' ')
				}
			>
				<header>
					{title ? (
						title()
					) : null}
					<button
						type="button"
						className="fsp-button_close"
						onClick={close}
					>
						<Icons.Close />
					</button>
				</header>
				<div className="fsp-modal__body">
					{children}
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	title: PropTypes.func,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	close: PropTypes.func,
};

Modal.defaultProps = {
	title: () => null,
	className: '',
	close: () => {},
};

export default Modal;
