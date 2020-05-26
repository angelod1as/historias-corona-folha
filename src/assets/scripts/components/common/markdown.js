import React from 'react';
import { Remarkable } from 'remarkable';
import PropTypes from 'prop-types';

const Markdown = ({ string }) => {
	if (string) {
		const md = new Remarkable();
		const res = md.render(string);
		// eslint-disable-next-line
	return <div dangerouslySetInnerHTML={{ __html: res }} />;
	}
	return null;
};

Markdown.propTypes = {
	string: PropTypes.string,
};

Markdown.defaultProps = {
	string: null,
};

export default Markdown;
