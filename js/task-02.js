const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listElements = document.querySelector("#ingredients");

const makeMarkupCategories = ingredients => {
	return ingredients.map(ingr => {
		const itemEl = document.createElement("li");
		itemEl.classList.add("item");
		itemEl.textContent = ingr;

		return itemEl;
	});
};

const itemsElement = makeMarkupCategories(ingredients);
listElements.append(...itemsElement);
