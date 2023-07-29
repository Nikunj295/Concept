import EnhancedClickCounter from "./ClickCounter";
import EnhancedHoverCounter from "./HoverCounter";

const Counter = () => {
	return (
		<div>
			<div>
				<EnhancedClickCounter />
			</div>
			<div>
				<EnhancedHoverCounter />
			</div>
		</div>
	);
};
export default Counter;
