const filterData = ({ data, filters }) => {
	const final = data.filter((each) => {
		const validation = Object
			.keys(filters).map((key) => {
				const value = filters[key];

				if (key === 'name') {
					return each[key].includes(value);
				}

				if (value === 'all') {
					return true;
				}
				return each[key] === value;
			});
		return !validation.includes(false);
	});
	return final;
};

export default filterData;
