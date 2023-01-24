// * task 1

const listElements = document.querySelector("#categories");
const arrayOfElements = listElements.children;

const countElementsOfCategories = categories => {
	const quantity = categories.length;
	console.log(`Number of categories: ${quantity}`);
};

countElementsOfCategories(arrayOfElements);

// * task 2

const getInfoAboutCategories = () =>
	[...arrayOfElements].forEach(elem => {
		const nameOfCategories = elem.firstElementChild.textContent;
		console.log(`Category: ${nameOfCategories}`);

		const itemElements = elem.lastElementChild.children;
		console.log(`Elements: ${itemElements.length}`);
	});

getInfoAboutCategories();
