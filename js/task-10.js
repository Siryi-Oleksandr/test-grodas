const inputValue = document.querySelector("#controls > input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const outputBoxes = document.querySelector("#boxes");
let incrementSize = 30;

btnCreate.addEventListener("click", onCreateBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function onCreateBoxes() {
	const amount = inputValue.value;
	createBoxes(amount);
}
function destroyBoxes() {
	outputBoxes.innerHTML = "";
	incrementSize = 30;
	inputValue.value = 0;
}

function createBoxes(amount) {
	const arrayBoxes = [];

	for (let i = 1; i <= amount; i += 1) {
		arrayBoxes.push(makeOneElement());
		incrementSize += 10;
	}
	outputBoxes.append(...arrayBoxes);
}

function makeOneElement() {
	const boxMarkup = document.createElement("div");
	boxMarkup.style.width = `${incrementSize}px`;
	boxMarkup.style.height = `${incrementSize}px`;
	boxMarkup.style.marginLeft = "auto";
	boxMarkup.style.marginRight = "auto";
	boxMarkup.style.backgroundColor = getRandomHexColor();
	return boxMarkup;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
