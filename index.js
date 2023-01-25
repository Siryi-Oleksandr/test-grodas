fetch('./images/__in/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(handleData)
  .catch(handleError);

function handleData(data) {
  console.log(data);
  sortData(data);

  //   const { id, age, image, rating, tags, title, url } = data;
}

function handleError(error) {
  console.log(error.message);
}

function sortData(data) {
  data.sort((firstElem, secondElem) => secondElem.rating - firstElem.rating);
}
