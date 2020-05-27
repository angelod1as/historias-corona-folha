import React from 'react';
import PropTypes from 'prop-types';

const SortSvg = ({ fill, className }) => <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className={`order-svg ${className}`}><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" fill={fill} /><path d="M0 0h24v24H0z" fill="none" /></svg>;

export default SortSvg;

SortSvg.propTypes = {
	fill: PropTypes.string,
	className: PropTypes.string,
};

SortSvg.defaultProps = {
	fill: '#FFF',
	className: 'ascending',
};
