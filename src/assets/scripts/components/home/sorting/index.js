import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';

import SortSvg from './sortSvg';

const sortList = [
	{
		name: 'nome',
		value: 'name',
	},
	{
		name: 'data de morte',
		value: 'death',
	},
	{
		name: 'idade',
		value: 'age',
	},
];

const Sorting = ({
	order,
	setOrder,
	orderCategory,
	setOrderCategory,
}) => {
	const changeOrderCategory = useCallback((el) => {
		setOrderCategory(el.target.value);
	}, [orderCategory]);

	const changeOrder = useCallback(() => {
		setOrder(order === 'down' ? 'up' : 'down');
	}, [order]);

	return (
		<div>
			<div className="sorting">
				<button
					className="order-icon"
					type="button"
					onClick={changeOrder}
				>
					{order === 'down'
						? <SortSvg className="ascending" />
						: <SortSvg className="descending" />
					}
				</button>
				<label
					key={uuid()}
					htmlFor="order"
				>
					Ordenar por
					<select
						className="order-select"
						type="select"
						name="order"
						id="order"
						onChange={changeOrderCategory}
						value={orderCategory}
					>
						{sortList.map(({ value, name }) => (
							<option
								key={uuid()}
								value={`${value}`}
							>
								{name}
							</option>
						))}
					</select>
				</label>
			</div>
		</div>
	);
};

export default Sorting;

Sorting.propTypes = {
	orderCategory: PropTypes.string.isRequired,
	order: PropTypes.string.isRequired,
	setOrder: PropTypes.func.isRequired,
	setOrderCategory: PropTypes.func.isRequired,
};
