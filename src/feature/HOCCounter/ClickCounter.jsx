import HOCCounter from "./HOCCounter";

const ClickCounter = ({ count, incrementCount }) => {
	return (
		<div>
			<div>{"By Clicking"}</div>
			<div>{count}</div>
			<button onClick={incrementCount}>plus</button>
		</div>
	);
};

const EnhancedClickCounter = HOCCounter(ClickCounter);
export default EnhancedClickCounter;
