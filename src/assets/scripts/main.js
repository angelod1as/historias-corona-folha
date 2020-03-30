import Slider from './components/sliders';
import '../style/main.styl';

window.init = () => {
	const sliders = document.querySelectorAll('.persons');
	sliders.forEach((el, idx) => {
		console.log(el, idx);
		const sld = new Slider({ slider: idx, element: el });
	});
};
