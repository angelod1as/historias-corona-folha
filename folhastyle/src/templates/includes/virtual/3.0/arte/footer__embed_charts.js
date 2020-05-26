(() => {
	// only want one resizer on the page
	let pymChild;
	let actualHeight = document.body.scrollHeight;
	document.onreadystatechange = () => {
		if (typeof pymChild === 'undefined' && typeof pym !== 'undefined') {
			pymChild = new pym.Child({
				polling: 500,
				renderCallback: (w) => {
					// document.body.style.width = `${w}px`;
					if (typeof pymChild !== 'undefined') {
						pymChild.sendHeight();
					}
				},
			});
		}
		if (document.readyState === 'complete') {
			if (document.getElementsByClassName('folha-loader')[0]) {
				document.getElementsByClassName('folha-loader')[0].style.display = 'none';
			}
		}
	};

	setInterval(() => {
		if (actualHeight !== document.body.scrollHeight) {
			window.parent.postMessage({
				sentinel: 'amp',
				type: 'embed-size',
				height: document.body.scrollHeight,
			}, '*');
			actualHeight = document.body.scrollHeight;
		}
	}, 500);
})();
