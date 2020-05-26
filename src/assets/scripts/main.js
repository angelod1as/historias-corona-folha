import React from 'react';
import { hydrate, render } from 'react-dom';
import '../style/main.styl';
import App from './app';

const rootElement = document.getElementById('app');

if (rootElement.hasChildNodes()) {
	hydrate(<App />, rootElement);
} else {
	render(<App />, rootElement);
}
