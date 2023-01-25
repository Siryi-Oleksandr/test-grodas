// 1. Визначити загальну кількість елементів у DOM-дереві.

const allDomElements = document.getElementsByTagName('*');
const totalNumberDomElements = allDomElements.length;
console.log('Total number DOM elements:', totalNumberDomElements);

const allDomTagNames = [...allDomElements].map(elem => elem.localName);

// 2. Згрупувати елементи за назвою тегу, визначити кількість елементів для кожного тегу.

function countTags(allTags) {
  return allTags.reduce((acc, tag) => {
    if (!acc.hasOwnProperty(tag)) {
      acc[tag] = 0;
    }

    acc[tag] += 1;

    return acc;
  }, {});
}

const tagCount = countTags(allDomTagNames);
console.log('List of the number of elements by name: ', tagCount);

// 3. Згрупувати елементи за кількістю символів у назві тегу, визначити кількість елементів.

function countSymbolTags(allTags) {
  return allTags.reduce((acc, tag) => {
    const charactersCount = String(tag.length);

    if (!acc.hasOwnProperty(charactersCount)) {
      acc[charactersCount] = 0;
    }

    acc[charactersCount] += 1;

    return acc;
  }, {});
}

const charactersTagCount = countSymbolTags(allDomTagNames);
console.log(
  'List of the number of characters in the element: ',
  charactersTagCount
);
