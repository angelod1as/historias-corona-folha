const buildFilters = ({ data, filters }) => {
	const result = filters.map(({ name, property }) => {
		const filterElements = [];

		data.forEach((each) => {
			const element = each[property];
			if (!filterElements.includes(element)) {
				filterElements.push(element);
			}
			return null;
		});

		filterElements.sort();
		return { name, property, elements: filterElements };
	});
	return result;
};

export default buildFilters;
