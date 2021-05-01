export const breakpoints = {
	desktop1: 800,
	desktop2: 900,
	desktop3: 1000,
	mobile1: 475,
	mobile2: 360,
	sm: 600,
};

export const mediaQueries = (key) => {
	return (style) => `@media screen and (max-width: ${breakpoints[key]}px) { ${style} }`;
};
