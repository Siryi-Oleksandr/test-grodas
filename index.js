const refs = {
  featuredContainer: document.querySelector('.js-featured-container'),
  featuredList: document.querySelector('.js-featured-list'),
};

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
  const markupFeaturedImages = createMarkupFeaturedListSm(data);

  refs.featuredList.innerHTML = markupFeaturedImages;
}

function sortData(data) {
  data.sort((firstElem, secondElem) => secondElem.rating - firstElem.rating);
}

function createMarkupFeaturedListSm(data) {
  sortData(data);
  const mobileImagesArray = data.slice(0, 5);

  return mobileImagesArray
    .map(imageElem => {
      const { id, age, image, rating, tags, title, url } = imageElem;
      const tagsToShow = handleTags(tags);

      return `<li class="featured__item">
              <a href="${url}" class="featured__link">
                <div class="img-wrapper">
                  <img
                    src="./images/__in/${image}"
                    alt="${title}"
                    class="featured__img"
                    loading="lazy"
                  />
                </div>
                <div class="img__info">
                  <p class="img__name">${title}</p>
                  <p class="img__tags">${tagsToShow}</p>
                </div>
              </a>
            </li>`;
    })
    .join('');
}

function handleTags(tags) {
  return tags.map(tag => `#${tag}`).join(', ');
}

function handleError(error) {
  console.log(error.message);
}
