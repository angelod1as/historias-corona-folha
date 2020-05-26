(() => {
	const sizeRef = document.querySelector('#size-ref');
	const ratio = +sizeRef.style.fontSize.replace('px', '') / +window.getComputedStyle(sizeRef).getPropertyValue('font-size').replace('px', '');
	if (ratio !== 1) {
		document.body.style.fontSize = `${ratio * 100}%`;
		[...document.querySelectorAll('p')].forEach((element) => {
			const el = element;
			el.style.fontSize = `${Math.round(+window.getComputedStyle(el).getPropertyValue('font-size').replace('px', '') * (ratio ** 2))}px`;
			el.style.lineHeight = `${Math.round(+window.getComputedStyle(el).getPropertyValue('line-height').replace('px', '') * (ratio ** 2))}px`;
		});
	}
})();
