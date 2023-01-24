let counterValue = 0;
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
let outputValueEl = document.querySelector("#value");

const handleIncrementClick = () => {
	counterValue += 1;
	outputValueEl.textContent = counterValue;
};
const handleDecrementClick = () => {
	counterValue -= 1;
	outputValueEl.textContent = counterValue;
};

decrementEl.addEventListener("click", handleDecrementClick);
incrementEl.addEventListener("click", handleIncrementClick);
