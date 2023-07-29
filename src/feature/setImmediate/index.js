console.log("first");

setTimeout(() => {
	console.log("second");
});

setImmediate(() => {
	console.log("first -v2");
});

setImmediate(() => {
	console.log("third");
});

console.log("last");
