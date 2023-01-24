const bodyEl = document.body;
const btnEl = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

btnEl.addEventListener("click", onChangeColor);

function onChangeColor() {
	bodyEl.style.backgroundColor = getRandomHexColor();
	colorValue.textContent = bodyEl.style.backgroundColor;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
