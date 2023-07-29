import { createContext, useContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
	const [value, setValue] = useState("nikunj");
	return (
		<MyContext.Provider
			value={{
				value: value,
				setValue: setValue,
			}}>
			{children}
		</MyContext.Provider>
	);
};

const CustomComponent = () => {
	const { value } = useContext(MyContext);

	return <span>{value}</span>;
};

const ContextApiExample = () => {
	const value = useContext(MyContext);
	return (
		<MyProvider>
			<div>used in same file: {JSON.stringify(value)}</div>
			<div>used in child file: {<CustomComponent />}</div>
		</MyProvider>
	);
};

export default ContextApiExample;
