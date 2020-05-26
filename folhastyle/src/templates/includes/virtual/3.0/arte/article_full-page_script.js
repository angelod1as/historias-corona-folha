/* eslint-disable */
if (!Array.prototype.indexOf)  Array.prototype.indexOf = (function(Object, max, min){
  "use strict";
  return function indexOf(member, fromIndex) {
    if(this===null||this===undefined)throw TypeError("Array.prototype.indexOf called on null or undefined");

    var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len);
    if (i < 0) i = max(0, Len+i); else if (i >= Len) return -1;

    if(member===void 0){ for(; i !== Len; ++i) if(that[i]===void 0 && i in that) return i; // undefined
    }else if(member !== member){   for(; i !== Len; ++i) if(that[i] !== that[i]) return i; // NaN
    }else                           for(; i !== Len; ++i) if(that[i] === member) return i; // all else

    return -1; // if the value was not found, then return -1
  };
})(Object, Math.max, Math.min);
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

  Array.prototype.map = function(callback/*, thisArg*/) {

    var T, A, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this|
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let A be a new array created as if by the expression new Array(len)
    //    where Array is the standard built-in constructor with that name and
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal
        //     method of callback with T as the this value and argument
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback/*, thisArg*/) {

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
/* eslint-enable */


const headerHeight = document.querySelector('.f-header').offsetHeight;

let lastScrollTop = 0;
let offset = 0;
const tolerance = 40;

const header = document.querySelector('.f-header');
const body = document.querySelector('body');

const jsHeader = document.createElement('div');
jsHeader.setAttribute('class', 'js__f-header');
jsHeader.setAttribute('ariaHidden', true);
jsHeader.style.height = `${headerHeight}px`;
header.parentNode.insertBefore(jsHeader, header.nextSibling);

const share = document.querySelector('.f-toolbar_header');
const hideShareTools = function hideShareTools() {
	if (share) {
		share.classList.add('is-hidden');
	}
};

const showShareTools = function showShareTools() {
	if (share) {
		share.classList.remove('is-hidden');
	}
};

const contract = function contract() {
	header.classList.remove('is-expanded');
	header.classList.add('is-contracted');
	body.classList.remove('js_header-is-expanded');
	body.classList.add('js_header-is-contracted');
	hideShareTools();
};

const expand = function expand() {
	header.classList.remove('is-contracted');
	header.classList.add('is-expanded');
	body.classList.add('js_header-is-expanded');
	body.classList.remove('js_header-is-contracted');
	showShareTools();
};

const toleranceExceeded = function toleranceExceeded(currentScrollTop) {
	return Math.abs(currentScrollTop - lastScrollTop) >= tolerance;
};

function copyToClipboard(str) {
	// Create new element
	const el = document.createElement('textarea');
	// Set value (string to be copied)
	el.value = str;
	// Set non-editable to avoid focus and move outside of view
	el.setAttribute('readonly', '');
	el.style = { position: 'absolute', left: '-9999px' };
	document.body.appendChild(el);
	// Select text inside element
	el.select();
	// Copy text to clipboard
	document.execCommand('copy');
	// Remove temporary element
	document.body.removeChild(el);
}

const setGiftLink = () => {
	const giftLink = [...document.querySelectorAll('.f-share__item_gift')];
	if (giftLink
			&& window.paywall
			&& window.paywall.data.logged === 'yes'
			&& window.paywall.data.subscriber === 'yes') {
		giftLink.forEach((el) => {
			el.classList.remove('is-hidden');
			[...el.querySelectorAll('.f-share__text_login')].forEach((element) => {
				element.classList.add('is-hidden');
			});
			[...el.querySelectorAll('.f-share__title, .f-share__list')].forEach((element) => {
				element.classList.remove('is-hidden');
			});
		});
	} else if (giftLink) {
		giftLink.forEach((el) => {
			el.classList.remove('is-hidden');
			[...el.querySelectorAll('.f-share__title, .f-share__list')].forEach((element) => {
				element.classList.add('is-hidden');
			});
			[...el.querySelectorAll('.f-share__text_login')].forEach((element) => {
				element.classList.remove('is-hidden');
			});
		});
	}
};

// eslint-disable-next-line func-names
// document.onreadystatechange = () => {
// 	setGiftLink();
// };

// No scroll mostra o esconde a barra da folha
// Se não tiver o elemento de toolbar pega a altura da viewport
const toolbar = document.querySelector('.f-toolbar');

if (toolbar && typeof toolbar.offsetTop !== 'undefined') {
	offset = toolbar.offsetTop + toolbar.offsetHeight;
} else {
	offset = window.innerHeight / 2;
}

window.addEventListener('scroll', () => {
	const currentScrollTop = window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
	if (currentScrollTop >= offset) {
		header.classList.add('f-header_affixed');
		if (!toleranceExceeded(currentScrollTop)) {
			return;
		}
		if (currentScrollTop > lastScrollTop) {
			contract();
		} else if (currentScrollTop + window.innerHeight < document.documentElement.offsetHeight) {
			expand();
		}
	} else if (currentScrollTop + header.offsetHeight <= offset) {
		header.classList.remove('f-header_affixed', 'is-expanded');
		hideShareTools();
	}
	lastScrollTop = currentScrollTop;
});


const moreOptionsButton =	document.querySelectorAll('button.f-share__button:not([data-social])');
for (let i = 0; i < moreOptionsButton.length; i += 1) {
	const t = {};
	// const btn = moreOptionsButton[i];
	moreOptionsButton[i].addEventListener('click', (e) => {
		setGiftLink();
		t.t = e.target.parentNode;
		e.target.parentNode.querySelector('.f-modal__content_drop').classList.add('is-box');
	});
	document.body.addEventListener('click', (e) => {
		const open = document.querySelectorAll('.f-modal__content_drop.is-box');
		for (let j = 0; j < open.length; j += 1) {
			if (e.target.parentNode !== open[j].parentNode) {
				open[j].classList.remove('is-box');
			}
		}
	});
}


const buttonSocial = document.querySelectorAll('.f-share__button');
const socialInfo = {
	facebook: {
		url: 'https://www.facebook.com/sharer/sharer.php?',
		params: {
			u: '[urlShare]utm_source=facebook&utm_medium=social&utm_campaign=compfb',
		},
	},
	whatsapp: {
		url: 'https://wa.me/?',
		params: {
			text: ('[urlShare]utm_source=whatsapp&utm_medium=social&utm_campaign=compwa'),
		},
	},
	whatsapp_web: {
		url: 'https://web.whatsapp.com/send?',
		params: {
			text: ('[urlShare]utm_source=whatsapp&utm_medium=social&utm_campaign=compwa'),
		},
	},
	twitter: {
		url: 'https://twitter.com/intent/tweet?',
		params: {
			url: '[urlShare]utm_source=twitter&utm_medium=social&utm_campaign=comptw',
			via: 'folha',
		},
	},
	messenger: {
		url: 'fb-messenger://share?',
		params: {
			link: ('[urlShare]utm_source=messenger&utm_medium=social&utm_campaign=compme'),
			app_id: 728453243911067,
		},
	},
	linkedin: {
		url: 'https://www.linkedin.com/shareArticle?',
		params: {
			mini: !0,
			url: ('[urlShare]utm_source=linkedin&utm_medium=social&utm_campaign=compli'),
		},
	},
	email: {
		url: 'https://tools.folha.com.br/send?',
		params: {
			url: '[urlShare]utm_source=email&utm_medium=social&utm_campaign=compem',
		},
	},
	link: {
		url: '[urlShare]',
	},
};

const defaultOpen = {
	height: 450,
	width: 750,
	left: 0,
	top: 0,
	toolbar: 0,
	status: 0,
};

const getUrl = (t, type) => {
	const social = socialInfo[t];
	let queryString = '';
	if (t === 'link') {
		return social.url.replace('[urlShare]', window.location.href);
	}
	const finalURL = (matches, giftToken) => {
		const {
			search,
			hash,
			pathname,
		} = window.location;
		let output = `${window.location.protocol}//${window.location.host}${pathname}`;
		const outputQuery = [
			search && search !== '?' ? search.replace(/^\?.+/, '') : null,
			matches[3] && matches[3] !== '?' ? matches[3] : null,
		].filter(el => el !== null);
		if (outputQuery.length && giftToken) {
			output += `?${giftToken}&${outputQuery.join('&')}`;
		} else if (outputQuery.length) {
			output += `?${search.replace(/^\?.+/, '')}`;
		}
		if (hash && hash !== '#') {
			output += `${outputQuery.length ? '/' : ''}${hash}`;
		}
		return output.replace(/&{2,}/, '&');
	};
	queryString = Object.keys(social.params).map((key) => {
		let item = social.params[key];
		if (typeof social.params[key] === 'string') {
			if (item.indexOf('[titleShare]') > -1 && document.querySelector('.f-headline')) {
				item = item.replace('[titleShare]', document.querySelector('.f-headline').innerHTML);
			} else if (item.indexOf('[titleShare]') > -1) {
				item = item.replace('[titleShare]', document.title);
			}
			if (item.indexOf('[urlShare]') > -1) {
				let giftToken = '';
				if (type === 'gift') {
					try {
						giftToken = window.paywall.data.gift.token;
					} catch (e) { console.warn('No token availble'); }
				}
				item = item.replace(/^(.+)?(\[urlShare\])(.+)?$/g, (...matches) => {
					if (t.indexOf('whatsapp') >= 0 && type === 'gift') {
						return `Você acabou de ter o acesso liberado, por um assinante da Folha, para ler o artigo abaixo:\n\n${finalURL(matches, giftToken)}`;
					}
					return finalURL(matches, giftToken);
				});
			}
		}
		return `${key}=${encodeURIComponent(item)}`;
	}).join('&');
	return social.url + queryString;
};

for (let i = 0; i < buttonSocial.length; i += 1) {
	const btn = buttonSocial[i];
	if (btn.dataset.social) {
		// eslint-disable-next-line no-loop-func
		buttonSocial[i].addEventListener('click', (bt) => {
			if (
				/^(staging|localhost|local\.|(\d+\.)?(dev|sandbox)\.)/i.test(window.location.hostname)
			) {
				window.alert('Página local.');
				throw new Error('You cannot share local pages.');
			} else {
				const { type, social: t } = bt.target.dataset;
				if (t === 'link') {
					copyToClipboard(getUrl(t));
				} else {
					window.open(getUrl(t, type), 'sharer', Object.keys(defaultOpen).map(e => `${e}=${defaultOpen[e]}`).join(','));
				}
			}
		});
	}
}
