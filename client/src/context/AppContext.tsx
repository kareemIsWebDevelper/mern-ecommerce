import React, { createContext, useState } from 'react';

export const AppContext = createContext({
	isBlur: false,
	toggleBlur: () => {}
});

export const AppProvider = ({ children }) => {
	const [isBlur, setIsBlur] = useState(false);

	const toggleBlur = () => {
		setIsBlur(!isBlur);
	};

	return (
		<AppContext.Provider value={{ isBlur, toggleBlur }}>
			{children}
		</AppContext.Provider>
	);
};