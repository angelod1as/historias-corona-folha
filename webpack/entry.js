import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/assets/scripts/app';

module.exports = async () => {
	const fetchJSONP = (url, name) => new Promise((rs) => {
		const script = window.document.createElement('script');

		script.src = url;
		window[name] = (json) => {
			rs(json);
			script.remove();
			delete window[name];
		};

		window.document.body.appendChild(script);
	});
	return ({
		'/content.html': ReactDOMServer.renderToStaticMarkup(
			<App
				data={await fetchJSONP(
					'http://staging.media.folha.com.br/poder/2019/02/13/promessa/index.jsonp',
					'index',
					info => info,
				)}
			/>,
		),
	});
};
