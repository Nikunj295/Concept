import { useState } from "react";

const HOCCounter = (WrappedComponent) => {
	const WithCounter = (props) => {
		const [count, setCount] = useState(0);

		const incrementCount = () => {
			setCount(count + 1);
		};

		return <WrappedComponent count={count} incrementCount={incrementCount} {...props} />;
	};

	return WithCounter;
};

export default HOCCounter;
