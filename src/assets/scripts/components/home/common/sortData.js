import { slugfy } from '../../../../../../utils';

// Sorting function
const sortData = ({ data, type, order }) => {
	const isDate = type === 'death';

	const getDate = (date) => {
		const [day, month, year] = slugfy(date).split('-');
		const fullDate = new Date(year, month - 1, day, 0, 0, 0, 0);
		return fullDate.getTime();
	};

	const method = (a, b) => {
		let first = '';
		let second = '';

		if (isDate) {
			first = getDate(a[type]);
			second = getDate(b[type]);
		} else {
			first = slugfy(a[type]);
			second = slugfy(b[type]);
		}

		const orderWay = order === 'down' ? -1 : 1;

		if (first < second) {
			return -1 * orderWay;
		}
		if (first > second) {
			return 1 * orderWay;
		}
		return 0;
	};
	data.sort(method);
	return data;
};

export default sortData;
