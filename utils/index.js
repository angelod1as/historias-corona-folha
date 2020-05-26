/* eslint-disable */
export const prettyText = (txt) => {
	const result = [];
	const fixText = value => value
		.replace(/--/g, '\u2013')
		.replace(/([a-zA-ZÀ-ý])'([a-zA-ZÀ-ý,.])/g, '$1\u2019$2')
		.replace(/^'([0-9a-zA-Z¼-ý[])/g, '\u2018$1')
		.replace(/^"([0-9a-zA-Z¼-ý[])/g, '\u201c$1')
		.replace(/\s'([0-9a-zA-Z¼-ý[])/g, ' \u2018$1')
		.replace(/\s"([0-9a-zA-Z¼-ý[])/g, ' \u201c$1')
		.replace(/([0-9a-zA-Z¼-ý\].,;?!])'([\s.;!?,)\]])/g, '$1\u2019$2')
		.replace(/([0-9a-zA-Z¼-ý\].,;?!])"([\s.;!?,)\]])/g, '$1\u201d$2')
		.replace(/([0-9a-zA-Z¼-ý\].,;?!])'$/g, '$1\u2019')
		.replace(/([0-9a-zA-Z¼-ý\].,;?!])"$/g, '$1\u201d')
		.replace(/\sm3/g, ' m³')
		.replace(/\sm2/g, ' m²')
		.replace(/(\.{3})/g, '…')
		.replace(/R\$ /g, 'R$\xa0');

	if (txt.indexOf('<') >= 0 && txt.indexOf('>') >= 0) {
		const text = txt.split(/<(.*?)>/g);

		text.forEach((val, i) => {
			if (i === 0) {
				result.push(fixText(val));
			} else if (i !== text.length - 1) {
				if (i % 2 === 0) {
					result.push(`>${fixText(val)}`);
				} else {
					result.push(`<${val}`);
				}
			} else {
				result.push(`>${fixText(val)}`);
			}
		});
	} else {
		result.push(fixText(txt));
	}
	return result.join('');
};

export const slugfy = (word, options = { hyphens: true, url: true }) => {
	const hyphens = typeof options.hyphens !== 'undefined' ? options.hyphens : true;
	const url = typeof options.url !== 'undefined' ? options.url : true;
	const from = 'ªãàáäâẽèéëêìíïîºõòóöôøùúüûñç';
	const to = 'aaaaaaeeeeeiiiiooooooouuuunc';

	let w = word.toLowerCase().trim().replace(/\$/g, 's');

	if (url) {
		w = w
			.replace(/1º/g, 'primeiro')
			.replace(/2º/g, 'segundo')
			.replace(/(\d)%/g, '$1-por-cento')
			.replace(/%/g, 'porcentagem');
	}

	for (let i = 0, l = from.length; i < l; i += 1) {
		w = w.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	if (hyphens) {
		return w.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
	}
	return w.replace(/[^a-z0-9]+/g, '');
};

export const getBrowser = (property) => {
	const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
	let browser = ua.match(/(seamonkey|opera|chrome|safari|firefox|msie|trident)\/?\s*(\d+)/i) || [];
	let tem;
	let output = { browser: 'Unknown' };
	if (/trident/i.test(browser[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		output = {
			browser: 'IE',
			version: tem[1],
			class: `browser-ie browser-ie-${slugfy(tem[1])}`,
		};
	} else if (browser[1] === 'Chrome') {
		if (ua.match(/\bOPR\/(\d+)/) != null || ua.match(/\bopera\/(\d+)/i) != null) {
			tem = ua.match(/\bOPR\/(\d+)/) ? ua.match(/\bOPR\/(\d+)/) : ua.match(/\bopera\/(\d+)/i);
			output = {
				browser: 'Opera',
				version: tem[1],
			};
		} else if (ua.match(/\bedge\/(\d+)/i) != null) {
			tem = ua.match(/\bedge\/(\d+)/i);
			output = {
				browser: 'Edge',
				version: tem[1],
			};
		} else {
			tem = ua.match(/\bchrome\/(\d+)/i);
			output = {
				browser: 'Chrome',
				version: tem[1],
			};
		}
	} else if (browser) {
		browser = browser[2] ? [browser[1], browser[2]] : [navigator.appName, navigator.appVersion];
		output = {
			browser: browser[0],
			version: browser[1],
		};
	}
	output.class = `browser-${slugfy(output.browser)} browser-${slugfy(output.browser)}-${slugfy(output.version)}`;
	return property ? output[property] : output;
};

export const hex2rgba = (color, opacity = 1) => {
	let finalColor = [];
	const match = /^#?([a-f\d]+)/.exec(color.trim(/\s/g, '')) || /^rgb\(?(\d+,\d+,\d+)\)/.exec(color.replace(/\s/g, ''));

	if (match && match.length > 1 && match[1].length === 6) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
		finalColor = [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), opacity];
	} else if (match && match.length > 1 && match[1].length === 3) {
		const result = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(color);
		finalColor = [parseInt(result[1] + result[1], 16), parseInt(result[2] + result[2], 16), parseInt(result[3] + result[3], 16), opacity];
	} else if (match && match[0].includes('rgb(')) {
		finalColor = match[1].split(/,\s?/g).concat(opacity);
	} else {
		finalColor = [0, 0, 0, opacity];
	}

	return `rgba(${finalColor.join()})`;
};
export const isMobile = () => navigator && navigator.userAgent.match(/Android|webOS|iPhone|iPod|BlackBerry|Windows Phone/i);

export const folhaDate = (date, year = new Date().getFullYear()) => {
	const dateArray = date.split(/\.|\//);
	let outputYear = year;
	if (dateArray.length > 2 && dateArray[2].length === 2) {
		const filledYear = +(`20${dateArray[2]}`);
		if (filledYear > outputYear) {
			outputYear = +(`19${dateArray[2]}`);
		} else {
			outputYear = filledYear;
		}
	}
	dateArray[2] = outputYear;
	const monthValue = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
	dateArray[1] = monthValue.indexOf(dateArray[1]) >= 0 ? monthValue.indexOf(dateArray[1]) + 1 : null;
	if (dateArray.indexOf(null) < 0) return new Date(dateArray.reverse().join('/'));
	return null;
};

export const styleNumber = (number, decimal = { length: 2, separator: ',' }) => {
	decimal.length = typeof decimal.length !== 'undefined' ? decimal.length : 2;
	decimal.separator = typeof decimal.separator !== 'undefined' ? decimal.separator : ',';
	const thousandSeparator = decimal.separator === ',' ? '.' : ',';
	const decimalPattern = /(\d+)(\d{3})$/g;
	const [int] = number.toString().split('.');
	let dec = number.toString().split('.')[1];

	let fixedDecimal = '';
	if (!dec && decimal.length > 0) dec = 0;
	if (dec !== undefined && dec.toString().length < decimal.length) {
		fixedDecimal = decimal.separator + dec + '0'.repeat(decimal.length - dec.toString().length);
	} else if (dec !== undefined) {
		fixedDecimal = decimal.separator + dec;
	}

	if (int.length > 3) {
		const [, rest, thousand] = decimalPattern.exec(int);
		return styleNumber(rest, { length: 0 }) + thousandSeparator + thousand + fixedDecimal;
	}
	return int + (decimal.length ? fixedDecimal : '');
};

export const queryAsObject = (query = window.location.search) => {
	const output = {};
	if (query !== '' && query !== '?') {
		const params = query.match(/([a-zA-Z0-9\-]+=[a-zA-Z0-9\-%]+)/g);

		for (let i = 0; i < params.length; i++) {
			const [param, value] = params[i].split('=');

			output[param] = decodeURIComponent(value);
		}
	}

	return output;
};

const utils = {
	prettyText,
	slugfy,
	getBrowser,
	hex2rgba,
	isMobile,
	folhaDate,
	styleNumber,
	queryAsObject,
};

export default utils;
