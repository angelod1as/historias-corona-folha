
const states = {
	AC: 'Acre',
	AL: 'Alagoas',
	AP: 'Amapá',
	AM: 'Amazonas',
	BA: 'Bahia',
	CE: 'Ceará',
	DF: 'Distrito Federal',
	ES: 'Espírito Santo',
	GO: 'Goiás',
	MA: 'Maranhão',
	MT: 'Mato Grosso',
	MS: 'Mato Grosso do Sul',
	MG: 'Minas Gerais',
	PA: 'Pará',
	PB: 'Paraíba',
	PR: 'Paraná',
	PE: 'Pernambuco',
	PI: 'Piauí',
	RJ: 'Rio de Janeiro',
	RN: 'Rio Grande do Norte',
	RS: 'Rio Grande do Sul',
	RO: 'Rondônia',
	RR: 'Roraima',
	SC: 'Santa Catarina',
	SP: 'São Paulo',
	SE: 'Sergipe',
	TO: 'Tocantins',
};

export default class Person {
	constructor(props) {
		const { el, par, idx } = props;

		const {
			name,
			state,
			error,
			time,
			group,
			ano,
			profit,
			txt,
			folha,
			other,
		} = el.dataset;
		this.par = par;
		this.id = el.id;
		this.el = el;
		this.name = name;
		this.state = states[state.trim()] || '';
		this.error = error;
		this.time = time;
		this.group = group;
		this.ano = ano;
		this.profit = profit;
		this.txt = txt;
		this.folha = folha;
		this.other = other;
		this.idx = idx;
		this.visited = false;

		el.addEventListener('click', () => par.activeThis(this.idx));
	}

	// thisActive() {
	// 	par.config.actual = this.
	// }
}
