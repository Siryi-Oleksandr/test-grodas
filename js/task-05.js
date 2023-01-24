const nameLabel = document.querySelector("#name-output");
const inputEl = document.querySelector("#name-input");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
	const nameValue = event.currentTarget.value.trim();

	if (nameValue === "") {
		nameLabel.textContent = "Anonymous";
	} else {
		nameLabel.textContent = nameValue;
	}
}

// Необов'язкова частина

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
	event.currentTarget.value = "";
	inputEl.placeholder = "You can change your name";
}
