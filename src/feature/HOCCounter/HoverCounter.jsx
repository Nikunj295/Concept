import HOCCounter from "./HOCCounter";

const HoverCounter = ({ count, incrementCount }) => {
	return (
		<div>
			<div>{"By Hovering"}</div>
			<div>{count}</div>
			<button onMouseOver={incrementCount}>plus</button>
		</div>
	);
};

const EnhancedHoverCounter = HOCCounter(HoverCounter);
export default EnhancedHoverCounter;
