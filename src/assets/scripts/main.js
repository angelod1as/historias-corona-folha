// import Slider from './components/sliders';
import React from 'react';
import ReactDOM from 'react-dom';
import fetchJsonp from 'fetch-jsonp';
import moment from 'moment';

import '../style/main.styl';
import App from './app';

moment.locale('pt-br');
// window.init = () => {
// 	const sliders = document.querySelectorAll('.persons');
// 	sliders.forEach((el, idx) => {
// 		console.log(el, idx);
// 		const sld = new Slider({ slider: idx, element: el });
// 	});
// };

fetchJsonp('./json/index.jsonp', {
	jsonpCallbackFunction: 'home_index',
	timeout: 5000,
})
	.then(response => response.json())
	.then((data) => {
		const rootElement = document.getElementById('app');
		ReactDOM.render(<App data={data} />, rootElement);
	})
	.catch((err) => {
		console.warn(err);
	});
