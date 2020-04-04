import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'utils';

const popup = (url, shareType = '') => {
	if (typeof shareType !== 'undefined' && (shareType === 'rss' || shareType === 'email')) {
		window.location.href = url;
	}
	window.open(url, '', 'height=400,width=600,menubar=no,toolbar=no,location=no,resizable=yes,scrollbars=auto');
};

export default class Share extends Component {
	static handleClick(shareType, url, hash, query) {
		popup(Share.getURLs(shareType, url, hash, query), shareType);
	}

	constructor(props) {
		super(props);
		this.state = {
			options: false,
			focus: false,
		};
		this.shareIcons = {
			facebook: (<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.74,19.41V13.2h2.04l0.39-2.53h-2.42V9.04c0-0.69,0.34-1.36,1.42-1.36h1.1V5.52c0,0-1-0.17-1.96-0.17c-2,0-3.3,1.21-3.3,3.4v1.92H7.79v2.53h2.22v6.21H12.74z" /></svg>),
			messenger: (<svg xmlns="https://www.w3.org/2000/svg" viewBox="-2 -2 28 28" width="24" height="24"><path d="M12,4.8c-4.18,0-7.42,3.06-7.42,7.2c0,2.16,0.89,4.03,2.33,5.32c0.12,0.11,0.19,0.26,0.2,0.42l0.04,1.32c0.01,0.42,0.45,0.69,0.83,0.53l1.47-0.65c0.13-0.06,0.26-0.07,0.4-0.03c0.68,0.19,1.4,0.29,2.15,0.29c4.18,0,7.42-3.06,7.42-7.2S16.18,4.8,12,4.8zM16.45,10.34l-2.18,3.46c-0.35,0.55-1.09,0.69-1.61,0.3l-1.73-1.3c-0.16-0.12-0.38-0.12-0.54,0l-2.34,1.78c-0.31,0.24-0.72-0.14-0.51-0.47l2.18-3.46c0.35-0.55,1.09-0.69,1.61-0.3l1.73,1.3c0.16,0.12,0.38,0.12,0.54,0l2.34-1.78C16.26,9.63,16.67,10.01,16.45,10.34z" /></svg>),
			twitter: (<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.8,18.33c5.32,0,8.23-4.41,8.23-8.23c0-0.13,0-0.25-0.01-0.37c0.56-0.41,1.06-0.92,1.45-1.5c-0.52,0.23-1.07,0.38-1.66,0.46c0.6-0.36,1.06-0.92,1.27-1.6c-0.56,0.33-1.18,0.57-1.84,0.7c-0.53-0.56-1.28-0.91-2.11-0.91c-1.6,0-2.89,1.3-2.89,2.89c0,0.23,0.02,0.45,0.08,0.66C9.92,10.3,7.79,9.15,6.36,7.4C6.11,7.82,5.97,8.32,5.97,8.85c0,1,0.51,1.89,1.29,2.41c-0.47-0.01-0.92-0.14-1.31-0.36c0,0.01,0,0.02,0,0.04c0,1.4,1,2.57,2.32,2.84c-0.24,0.07-0.5,0.1-0.76,0.1c-0.19,0-0.37-0.02-0.55-0.05c0.37,1.15,1.43,1.99,2.7,2.01c-0.99,0.77-2.24,1.24-3.59,1.24c-0.23,0-0.46-0.01-0.69-0.04C6.65,17.85,8.17,18.33,9.8,18.33" /></svg>),
			whatsapp: (<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.67,7.28c-1.26-1.26-2.93-1.96-4.72-1.96c-3.68,0-6.67,2.99-6.67,6.67c0,1.18,0.31,2.32,0.89,3.34l-0.95,3.46l3.54-0.93c0.97,0.53,2.07,0.81,3.19,0.81h0c0,0,0,0,0,0c3.68,0,6.67-2.99,6.67-6.67C18.62,10.22,17.92,8.55,16.67,7.28z M11.95,17.55L11.95,17.55c-1,0-1.97-0.27-2.82-0.77l-0.2-0.12l-2.1,0.55l0.56-2.05l-0.13-0.21C6.69,14.07,6.4,13.05,6.4,12c0-3.06,2.49-5.55,5.55-5.55c1.48,0,2.87,0.58,3.92,1.63c1.05,1.05,1.62,2.44,1.62,3.92C17.49,15.06,15,17.55,11.95,17.55z M14.99,13.4c-0.17-0.08-0.99-0.49-1.14-0.54c-0.15-0.06-0.26-0.08-0.38,0.08c-0.11,0.17-0.43,0.54-0.53,0.65s-0.19,0.13-0.36,0.04c-0.17-0.08-0.7-0.26-1.34-0.83c-0.5-0.44-0.83-0.99-0.93-1.15c-0.1-0.17-0.01-0.26,0.07-0.34c0.08-0.07,0.17-0.19,0.25-0.29c0.08-0.1,0.11-0.17,0.17-0.28c0.06-0.11,0.03-0.21-0.01-0.29s-0.38-0.9-0.51-1.24c-0.14-0.33-0.27-0.28-0.38-0.29c-0.1,0-0.21-0.01-0.32-0.01c-0.11,0-0.29,0.04-0.44,0.21C8.99,9.29,8.56,9.7,8.56,10.52c0,0.82,0.6,1.61,0.68,1.72c0.08,0.11,1.18,1.8,2.85,2.52c0.4,0.17,0.71,0.27,0.95,0.35c0.4,0.13,0.76,0.11,1.05,0.07c0.32-0.05,0.99-0.4,1.13-0.79s0.14-0.72,0.1-0.79C15.27,13.52,15.15,13.48,14.99,13.4z" /></svg>),
			linkedin: (<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.3,5.78H6.7c-0.47,0-0.89,0.41-0.95,0.89v10.66c0,0.47,0.41,0.89,0.95,0.89h10.6c0.47,0,0.89-0.41,0.95-0.89V6.67C18.25,6.19,17.84,5.78,17.3,5.78zM9.48,16.38H7.65v-5.92h1.84V16.38zM8.53,9.63c-0.59,0-1.07-0.47-1.07-1.07c0-0.59,0.47-1.07,1.07-1.07c0.59,0,1.07,0.47,1.07,1.07C9.6,9.16,9.13,9.63,8.53,9.63zM16.41,16.38h-1.84v-2.9c0-0.71,0-1.6-0.95-1.6s-1.13,0.77-1.13,1.54v2.96h-1.84v-5.92h1.78v0.83c0.36-0.59,1.01-1.01,1.72-0.95c1.9,0,2.19,1.24,2.19,2.84L16.41,16.38z" /></svg>),
			pinterest: (<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M212.0181 433.4707c3.1128-11.9766 15.9487-60.8545 15.9487-60.8545 8.3477 15.9189 32.7373 29.3955 58.6758 29.3955 77.2109 0 132.8398-71.0049 132.8398-159.2334 0-84.5718-69.0127-147.8511-157.8193-147.8511-110.4736 0-169.1475 74.1602-169.1475 154.9141 0 37.5483 19.9902 84.2935 51.9634 99.1772 4.8516 2.2539 7.4453 1.2598 8.561-3.4248.8481-3.5576 5.167-20.9453 7.1118-29.0322.6211-2.5859.3149-4.8076-1.7778-7.3428-10.5762-12.8242-19.0513-36.4199-19.0513-58.4204 0-56.4634 42.7568-111.0977 115.5942-111.0977 62.8906 0 106.9326 42.8569 106.9326 104.1494 0 69.2544-34.9756 117.231-80.4746 117.231-25.1299 0-43.9395-20.7803-37.9087-46.2617 7.2168-30.4316 21.2017-63.272 21.2017-85.2344 0-19.6631-10.5503-36.0625-32.3906-36.0625-25.6899 0-46.3228 26.5752-46.3228 62.1719 0 22.6719 7.6572 38.0068 7.6572 38.0068s-25.3662 107.2715-30.0161 127.25c-5.1475 22.1074-3.127 53.2529-.8911 73.5088 8.4287 3.2988 17.4966 6.1211 17.4966 6.1211 10.4351-17.0009 26.0377-44.874 31.817-67.1103z" /></svg>),
			email: (<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.11,9.45L12,12.64L6.89,9.45V8.17L12,11.36l5.11-3.19M17.11,6.89H6.89c-0.71,0-1.28,0.57-1.28,1.28v7.66c0,0.71,0.57,1.28,1.28,1.28h10.22c0.71,0,1.28-0.57,1.28-1.28V8.17C18.38,7.46,17.81,6.89,17.11,6.89z" /></svg>),
			rss: (
				<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
					<circle cx="172.13" cy="340.87" r="37.13" />
					<path d="M135,113v48.2c119.73,0,216.8,97.08,216.8,216.8H400C400,231.71,281.29,113,135,113zM135,209.39v48.2c66.42,0,120.41,53.99,120.41,120.41h48.2C303.61,284.84,228.16,209.39,135,209.39z" />
				</svg>
			),
			more: (<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M102.1504,211.1235C76.6172,211.1235,56,231.1709,56,256c0,24.8359,20.6172,44.877,46.1504,44.877c25.5454,0,46.1621-20.041,46.1621-44.877C148.3125,231.1709,127.6958,211.1235,102.1504,211.1235zM409.8564,211.1235c-25.54,0-46.1553,20.0474-46.1553,44.8765c0,24.8359,20.6152,44.877,46.1553,44.877C435.3916,300.877,456,280.8359,456,256C456,231.1709,435.3916,211.1235,409.8564,211.1235zM256.0059,211.1235c-25.5332,0-46.1587,20.0474-46.1587,44.8765c0,24.8359,20.6255,44.877,46.1587,44.877c25.5381,0,46.1582-20.041,46.1582-44.877C302.1641,231.1709,281.5439,211.1235,256.0059,211.1235z" /></svg>),
		};
	}

	static getURLs(socialName, url, hash, query) {
		const descriptionProp = document.querySelector('meta[name="description"]');
		const description = descriptionProp !== null ? `&description=${descriptionProp.getAttribute('content')}` : '';
		const finalURL = `${url}${hash}${query ? `?${query}` : ''}`;
		const encodedURL = encodeURIComponent(finalURL);
		switch (socialName) {
		case 'facebook':
			return `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
		case 'messenger':
			return `fb-messenger://share?link=${encodedURL}'&app_id=${encodeURIComponent('1275501329172461')}`;
		case 'twitter':
			return `https://twitter.com/intent/tweet?url=${encodedURL}&text=via%20%40folha`;
		case 'whatsapp':
			return `whatsapp://send?text=${finalURL}`;
		case 'whatsapp-desk':
			return `https://web.whatsapp.com/send?text=${encodedURL}`;
		case 'linkedin':
			return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}`;
		case 'pinterest':
			return `https://pinterest.com/pin/create/button/?url=${encodedURL}${description}`;
		case 'email':
			return `https://tools.folha.com.br/send?url=${encodedURL}`;
		case 'rss':
			return 'https://feeds.folha.uol.com.br/mundo/rss091.xml';
		default:
			return `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
		}
	}

	render() {
		const { url, hash, query } = this.props;
		const { shareIcons } = this;
		const { options, focus } = this.state;
		return (
			<div className="block__button block__button_share">
				<button
					type="button"
					onFocus={() => this.setState({ focus: true })}
					onBlur={() => {
						setTimeout(() => {
							this.setState({ focus: false });
						}, 300);
					}}
					className="share__button share__button--more"
				>
					<svg widt={24} height={24} viewBox="0 0 24 24">
						<path d="M16.82,15.29c1.28,0,2.33,1.05,2.33,2.33c0,1.28-1.05,2.37-2.33,2.37c-1.28,0-2.33-1.09-2.33-2.37c0-0.19,0-0.38,0.04-0.53l-5.68-3.31c-0.99,0.91-2.52,0.84-3.43-0.14C5,13.2,4.78,12.62,4.77,12.02c0.01-1.34,1.1-2.42,2.44-2.41c0.6,0,1.18,0.23,1.62,0.64l5.65-3.27c-0.04-0.19-0.07-0.38-0.07-0.57C14.41,5.09,15.5,4,16.82,4c1.32,0,2.41,1.09,2.41,2.41s-1.09,2.41-2.41,2.41c-0.64,0-1.2-0.26-1.66-0.68l-5.65,3.31c0.04,0.19,0.07,0.38,0.07,0.56s-0.04,0.38-0.08,0.56l5.72,3.31C15.65,15.52,16.22,15.29,16.82,15.29L16.82,15.29z" />
					</svg>
				</button>
				{focus || options ? (
					<div className={`share__options ${isMobile() ? 'share__options_mobile' : ''}`}>
						<button
							type="button"
							onClick={() => Share.handleClick('facebook', url, hash, query)}
							className="share__button share__button--fb"
						>
							{shareIcons.facebook}
						</button>
						{isMobile() ? (
							<button
								type="button"
								onClick={() => Share.handleClick('messenger', url, hash, query)}
								className="share__button share__button--messenger"
							>
								{shareIcons.messenger}
							</button>
						) : null}
						<button
							type="button"
							onClick={() => Share.handleClick(`whatsapp${isMobile() ? '' : '-desk'}`, url, hash, query)}
							className="share__button share__button--whatsapp"
						>
							{shareIcons.whatsapp}
						</button>
						<button
							type="button"
							onClick={() => Share.handleClick('twitter', url, hash, query)}
							className="share__button share__button--twitter"
						>
							{shareIcons.twitter}
						</button>
						{/* <button
							type="button"
							onClick={() => Share.handleClick('linkedin', url, hash, query)}
							onFocus={() => this.setState({ options: true })}
							onBlur={() => this.setState({ options: false })}
							className="share__button share__button--linkedin"
						>
							{shareIcons.linkedin}
						</button>
						<button
							type="button"
							onClick={() => Share.handleClick('pinterest', url, hash, query)}
							onFocus={() => this.setState({ options: true })}
							onBlur={() => this.setState({ options: false })}
							className="share__button share__button--pinterest"
						>
							{shareIcons.pinterest}
						</button> */}
						<button
							type="button"
							onClick={() => Share.handleClick('email', url, hash, query)}
							onFocus={() => this.setState({ options: true })}
							onBlur={() => this.setState({ options: false })}
							className="share__button share__button--email"
						>
							{shareIcons.email}
						</button>
						{/* <button
							type="button"
							onClick={() => Share.handleClick('rss', url, hash, query)}
							onFocus={() => this.setState({ options: true })}
							onBlur={() => this.setState({ options: false })}
							className="share__button share__button--rss"
						>
							{shareIcons.rss}
						</button> */}
					</div>
				) : null}
			</div>
		);
	}
}

Share.propTypes = {
	url: PropTypes.string,
	hash: PropTypes.string,
	query: PropTypes.string,
};

Share.defaultProps = {
	url: window.location.href,
	hash: '',
	query: '',
};
