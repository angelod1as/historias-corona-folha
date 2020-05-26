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
(function (window, document) {
	var ua = navigator.userAgent;

	function loadFontsFromStorage() {
		try {
			if ("localStorage" in window) {
				var saveFont = function (fontName, fontHash, css) {
					for (var i = 0, totalItems = localStorage.length; i < totalItems - 1; i++) {
						var key = localStorage.key(i);
						if (key.indexOf(fontStorageKey(fontName)) !== -1) {
							localStorage.removeItem(key);
							break
						}
					}
					localStorage.setItem(fontStorageKey(fontName, fontHash), JSON.stringify({
						value: css
					}))
				};
				var fetchFont = function (url, el, fontName, fontHash) {
					var xhr = new XMLHttpRequest;
					this["fspFont"] = function (fontData) {
						return fontData.css
					};
					xhr.open("GET", url, true);
					xhr.onreadystatechange = function () {
						if (xhr.readyState === 4 && xhr.status === 200) {
							var css = eval(xhr.responseText);
							useFont(el, css);
							saveFont(fontName, fontHash, css)
						}
					};
					xhr.send()
				};
				var useFont = function (el, css) {
					el.innerHTML = css
				};
				var fontStorageKey = function (fontName, fontHash) {
					fontHash = fontHash === undefined ? "" : fontHash;
					return "fsp.fonts." + fontName + "." + fontHash
				};
				var fontFormat = function () {
					var formatStorageKey = "fsp.fonts.format";
					var format = localStorage.getItem(formatStorageKey);

					function supportsWoff2() {
						if ("FontFace" in window) try {
							var f = new window.FontFace("t", 'url("data:application/font-woff2,") format("woff2")', {});
							f.load()["catch"](function () { });
							if (f.status === "loading") return true
						} catch (e) { }
						if (!/edge\/([0-9]+)/.test(ua.toLowerCase())) {
							var browser = /(chrome|firefox)\/([0-9]+)/.exec(ua.toLowerCase());
							var supportsWoff2$0 = {
								"chrome": 36,
								"firefox": 39
							};
							return !!browser && supportsWoff2$0[browser[1]] < parseInt(browser[2], 10)
						}
						return false
					}
					if (/value/.test(format)) {
						format = JSON.parse(format).value;
						localStorage.setItem(formatStorageKey, format)
					}
					if (!format) {
						format = supportsWoff2() ? "woff2" : ua.indexOf("android") > -1 ? "ttf" : "woff";
						localStorage.setItem(formatStorageKey, format)
					}
					return format
				}();
				var fonts = document.querySelectorAll(".webfont");
				var urlAttribute = "data-cache-file-" + fontFormat;
				for (var i = 0, j = fonts.length; i < j; ++i) {
					var font = fonts[i];
					var fontURL = font.getAttribute(urlAttribute);
					var fontInfo = fontURL.match(/arte\/fonts\/([^/]*?)\-(woff2|woff|ttf|eot)-([^/]*?)\.json$/);
					var fontName = fontInfo[1];
					var fontHash = fontInfo[3];
					var fontData = localStorage.getItem(fontStorageKey(fontName, fontHash));
					if (fontData) useFont(font, JSON.parse(fontData).value);
					else fetchFont(fontURL, font, fontName, fontHash)
				}
				return true
			}
		} catch (e) { }
		return false
	}

	function loadFontsAsynchronously() {
		try {
			var scripts = document.getElementsByTagName("script");
			var thisScript = scripts[scripts.length - 1];
			var fonts = document.createElement("link");
			fonts.rel = "stylesheet";
			fonts.className = "webfonts";
			fonts.href = '//arte.folha.uol.com.br/library/folhastyle/3.0/styles/fonts.css';
			window.setTimeout(function () {
				thisScript.parentNode.insertBefore(fonts, thisScript)
			})
		} catch (e) { }
	}
	var fontCookie = "FSP_fonts\x3doff; domain\x3d" + location.hostname + "; path\x3d/";

	function disableFonts() {
		document.cookie = fontCookie + "; max-age\x3d" + 60 * 60 * 24 * 365
	}

	function enableFonts() {
		document.cookie = fontCookie + "; expires\x3dThu, 01 Jan 1970 00:00:00 GMT"
	}

	function checkUserFontDisabling() {
		if (window.location.hash === "#fonts-off") disableFonts();
		else if (window.location.hash === "#fonts-on" || window.location.hash === "#check-smoothing") enableFonts()
	}
	var fontsEnabled = document.cookie.indexOf("FSP_fonts\x3doff") === -1;

	function loadFonts() {
		loadFontsFromStorage() || loadFontsAsynchronously();
	}
	loadFonts()
})(window, document);
/* eslint-enable */
