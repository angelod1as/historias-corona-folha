/* eslint-disable */
if (!Array.prototype.indexOf) Array.prototype.indexOf = (function (Object, max, min) {
	"use strict";
	return function indexOf(member, fromIndex) {
		if (this === null || this === undefined) throw TypeError("Array.prototype.indexOf called on null or undefined");

		var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len);
		if (i < 0) i = max(0, Len + i); else if (i >= Len) return -1;

		if (member === void 0) {
			for (; i !== Len; ++i) if (that[i] === void 0 && i in that) return i; // undefined
		} else if (member !== member) {
			for (; i !== Len; ++i) if (that[i] !== that[i]) return i; // NaN
		} else for (; i !== Len; ++i) if (that[i] === member) return i; // all else

		return -1; // if the value was not found, then return -1
	};
})(Object, Math.max, Math.min);

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

	Array.prototype.forEach = function (callback/*, thisArg*/) {

		var T, k;

		if (this == null) {
			throw new TypeError('this is null or not defined');
		}

		// 1. Let O be the result of calling toObject() passing the
		// |this| value as the argument.
		var O = Object(this);

		// 2. Let lenValue be the result of calling the Get() internal
		// method of O with the argument "length".
		// 3. Let len be toUint32(lenValue).
		var len = O.length >>> 0;

		// 4. If isCallable(callback) is false, throw a TypeError exception.
		// See: http://es5.github.com/#x9.11
		if (typeof callback !== 'function') {
			throw new TypeError(callback + ' is not a function');
		}

		// 5. If thisArg was supplied, let T be thisArg; else let
		// T be undefined.
		if (arguments.length > 1) {
			T = arguments[1];
		}

		// 6. Let k be 0.
		k = 0;

		// 7. Repeat while k < len.
		while (k < len) {

			var kValue;

			// a. Let Pk be ToString(k).
			//    This is implicit for LHS operands of the in operator.
			// b. Let kPresent be the result of calling the HasProperty
			//    internal method of O with argument Pk.
			//    This step can be combined with c.
			// c. If kPresent is true, then
			if (k in O) {

				// i. Let kValue be the result of calling the Get internal
				// method of O with argument Pk.
				kValue = O[k];

				// ii. Call the Call internal method of callback with T as
				// the this value and argument list containing kValue, k, and O.
				callback.call(T, kValue, k, O);
			}
			// d. Increase k by 1.
			k++;
		}
		// 8. return undefined.
	};
}
if (!Date.now) {
	Date.now = function now() {
		return new Date().getTime();
	};
}
/* eslint-enable */

(() => {
	// only want one resizer on the page
	// window.pymChild = '';
	document.onreadystatechange = () => {
		if (typeof window.pymChild === 'undefined' && typeof pym !== 'undefined') {
			window.pymChild = new pym.Child({
				polling: 500,
				renderCallback: (w) => {
					/*
					 * Força a largura dos Ai2HTML no iPhone
					 * (lembra aquele pau que só carregava a versão desk? Então, esse erro aí)
					 */
					if (window.location.pathname.indexOf('/graficos/') !== 0) {
						document.body.style.setProperty('min-width', `${300}px`, 'important');
						document.querySelector('html').style.setProperty('min-width', `${300}px`, 'important');
						// const interval = setInterval(() => {
						// 	if (window.innerHeight) {
						// 		document.body.style.setProperty('width', 'auto');
						// 		document.querySelector('html').style.setProperty('width', 'auto');
						// 		clearInterval(interval);
						// 	}
						// }, 150);
					}
					if (typeof window.pymChild !== 'undefined') window.pymChild.sendHeight();
				},
			});
		}

		if (window.actualHeight !== document.body.scrollHeight) {
			window.parent.postMessage({
				sentinel: 'amp',
				type: 'embed-size',
				height: document.body.scrollHeight,
			}, '*');
			window.actualHeight = document.body.scrollHeight;
		}
		if (document.readyState === 'complete') {
			if (document.getElementsByClassName('folha-loader')[0]) {
				document.getElementsByClassName('folha-loader')[0].style.display = 'none';
			}
		}
	};

	if (document.documentElement.className.indexOf('g-resizer-v4-init') > -1) return;
	document.documentElement.className += ' g-resizer-v4-init';
	// require IE9+
	if (!('querySelector' in document)) return;

	const throttle = (func, wait) => {
		const { now } = Date;
		let timeout = null;
		let previous = 0;
		const run = () => {
			previous = now();
			timeout = null;
			func();
		};
		return () => {
			const remaining = wait - (now() - previous);
			if (remaining <= 0 || remaining > wait) {
				if (timeout) {
					clearTimeout(timeout);
				}
				run();
			} else if (!timeout) {
				timeout = setTimeout(run, remaining);
			}
		};
	};

	const selectElements = (selector, parent) => {
		const selection = (parent || document).querySelectorAll(selector);
		return Array.prototype.slice.call(selection);
	};

	const setImgSrc = (img) => {
		if (img.getAttribute('data-src') && img.getAttribute('src') !== img.getAttribute('data-src')) {
			img.setAttribute('src', img.getAttribute('data-src'));
		}
	};

	const updateSize = () => {
		const elements = selectElements('.g-artboard-v4[data-min-width]');
		// var widthById = {};
		elements.forEach((el) => {
			const elem = el;
			const parent = elem.parentNode;
			// const width = widthById[parent.id] || Math.round(parent.getBoundingClientRect().width),
			const width = Math.round(parent.getBoundingClientRect().width);
			const minwidth = elem.getAttribute('data-min-width');
			const maxwidth = elem.getAttribute('data-max-width');
			// if (parent.id) widthById[parent.id] = width; // only if parent.id is set
			if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
				selectElements('.g-aiImg', el).forEach(setImgSrc);
				elem.style.display = 'block';
			} else {
				elem.style.display = 'none';
			}
		});
	};
	updateSize();
	document.addEventListener('DOMContentLoaded', updateSize);
	window.addEventListener('resize', throttle(updateSize, 200));
	// based on underscore.js
})();
