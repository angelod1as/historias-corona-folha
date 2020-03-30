import { isMobile } from 'utils';
import Person from './person';

export default class Slider {
	constructor(props) {
		const { slider, element, idx } = props;

		const cont = document.createElement('div');
		if (isMobile()) {
			cont.classList.add('persons__slide-mobile');
			const cln = element.cloneNode(true);
			const h3 = cln.querySelector('h3');

			this.cls = this.cls.bind(this);
			const close = document.createElement('button');
			close.classList.add('close');
			close.innerHTML = '×';
			close.addEventListener('click', this.cls);
			h3.after(h3, close);
			cont.appendChild(cln);
		}
		element.appendChild(cont);
		cont.classList.add('persons__slide');

		const content = document.createElement('div');
		content.classList.add('slide');

		// next
		const bNext = document.createElement('button');
		bNext.classList.add('next');
		bNext.innerHTML = '<svg width="9" height="15" viewBox="0 0 9 15"><path class="a" d="M8.59,19.225,14.153,13.5,8.59,7.762,10.3,6l7.287,7.5L10.3,21Z" transform="translate(-8.59 -6)"/></svg>';
		this.next = this.next.bind(this);
		bNext.addEventListener('click', this.next);

		// prev
		const bPrev = document.createElement('button');
		bPrev.classList.add('prev');
		bPrev.innerHTML = '<svg width="10" height="16" viewBox="0 0 10 16"><path class="a" d="M8.59,20.107,14.771,14,8.59,7.88,10.493,6l8.1,8-8.1,8Z" transform="translate(18.59 22) rotate(180)"/></svg>';
		this.prev = this.prev.bind(this);
		bPrev.addEventListener('click', this.prev);

		cont.appendChild(bPrev);
		cont.appendChild(content);
		cont.appendChild(bNext);

		if (isMobile()) {
			const title = element.querySelector('h3');
			const warn = document.createElement('p');
			warn.classList.add('persons__lead');
			title.after(title, warn);
			warn.innerHTML = 'clique para ler a historia de cada um';
		}

		this.config = {
			el: element,
			content,
			actual: 0,
			padding: 40,
			index: slider,
			elActual: false,
			elActual2: false,
		};
		this.persons = [...element.querySelectorAll('.person')].map((a, idd) => new Person({ el: a, par: this, idx: idd }));

		this.setActive();
	}

	setActive() {
		const {
			content,
			actual,
			elActual,
			elActual2,
		} = this.config;
		const person = this.persons[actual];
		if (isMobile()) {
			const person2 = this.persons[actual + this.persons.length / 2];
			if (elActual2) {
				elActual2.el.classList.remove('person__active');
				elActual2.el.classList.add('person__visited');
			}

			person2.el.classList.add('person__active');
			this.config.elActual2 = person2;
		}
		if (elActual) {
			elActual.el.classList.remove('person__active');
			elActual.el.classList.add('person__visited');
		}
		person.el.classList.add('person__active');
		this.config.elActual = person;
		content.innerHTML = `
			<img
				src="./images/${person.id}.jpg"
				alt="${person.name}"
				onerror="this.onerror=null;this.src='./images/placeholder.png';" />
			<div class="slide__content">
				<p class="slide__title">${person.name}</p>
				${person.profit ? `<p>› ${person.profit}</p>` : ''}
				${person.state ? `<p>› ${person.state}</p>` : ''}
				<p>› preso erroneamente por ${person.error}</p>
				<p class="slide__time">› solto após ${person.time}</p>
				<p class="slide__txt">${person.txt}</p>
				<div class="slide__button">
					${person.folha
		? `<a href="${person.folha}" class="f-forms__button f-forms__button_secondary" target="_blank">Leia Mais</a>`
		: `<a href="${person.other}" class="f-forms__button f-forms__button_secondary" target="_blank">Leia Mais</a>`}
				</div>
			</div>
		`;
	}

	next() {
		if (isMobile() && this.config.actual === (this.persons.length / 2) - 1) this.config.actual = 0;
		if (!isMobile() && this.config.actual === this.persons.length - 1) this.config.actual = 0;
		else this.config.actual += 1;
		this.setActive();
	}

	prev() {
		if (isMobile() && this.config.actual === 0) this.config.actual = (this.persons.length / 2) - 1;
		if (this.config.actual === 0) this.config.actual = this.persons.length - 1;
		else this.config.actual -= 1;
		this.setActive();
	}

	activeThis(val) {
		this.config.actual = val;
		if (isMobile()) {
			this.config.actual = val > this.persons.length / 2 ? val - this.persons.length / 2 : val;
			const a = document.querySelectorAll('.persons__slide-mobile')[this.config.index];
			a.classList.add('persons__slide-mobile-show');
		}
		this.setActive();
	}

	cls() {
		const a = document.querySelectorAll('.persons__slide-mobile')[this.config.index];
		a.classList.remove('persons__slide-mobile-show');
	}
}
