import React, { useState, createContext } from 'react';

export const ItemsContext = createContext();

const initialState = () => [
	{
		id: 121212,
		product: 'Camera Sony alpha a6600',
		trademark: 'Sony',
		price: 1200000,
		stock: 10,
		year: 2019,
		type: 'mirrorless',
	},
];

export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState([initialState]);

	return (
		<ItemsContext.Provider value={[items, setItems]}>
			{children}
		</ItemsContext.Provider>
	);
};
