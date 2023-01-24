const inputRange = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputRange.value = inputRange.min;
inputRange.addEventListener("input", onChangeRange);

function onChangeRange(event) {
	const currentFontSize = event.currentTarget.value;
	textEl.style.fontSize = currentFontSize + "px";
}
