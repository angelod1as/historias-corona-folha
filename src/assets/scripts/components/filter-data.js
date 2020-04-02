import moment from 'moment';

const filterData = (data) => {
	const sortedData = data
		.map(a => ({
			...a,
			death_date: moment(a.death, 'DD/MM/YYYY'),
		}))
		.sort((a, b) => {
			if (a.death_date.isBefore(b.death_date)) return 1;
			if (a.death_date.isAfter(b.death_date)) return -1;
			return 0;
		});
	const categorizedData = {};
	sortedData.forEach((d) => {
		if (categorizedData[d.death_date.week()]) {
			categorizedData[d.death_date.week()].push(d);
		} else {
			categorizedData[d.death_date.week()] = [d];
		}
	});
	return categorizedData;
};

export default filterData;
