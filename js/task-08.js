const formEl = document.querySelector(".login-form");
// для кращої підтримки скрипта створюю змінні в яких буду зберігати імена полів інпутів
const labelFirst = formEl.firstElementChild.textContent.trim();
const labelLast = formEl.firstElementChild.nextElementSibling.textContent.trim();

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const outputData = {};
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("Please fill in all the fields!");
	}

	outputData[labelFirst] = email.value;
	outputData[labelLast] = password.value;

	console.log(outputData);
	event.currentTarget.reset();
}
