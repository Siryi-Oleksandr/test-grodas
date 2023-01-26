// selected elements
const refs = {
  lastImagesList: document.querySelector('.js-last-images'),
  featuredList: document.querySelector('.js-featured-list'),
};

window.addEventListener('resize', onFeaturedFetch); // add listener on Window and listening change user viewport
onFeaturedFetch(); // request to "backEnd" for rendering Featured images list
onLastImagesFetch(); // request to "backEnd" for rendering Last images list

function onLastImagesFetch() {
  fetch('./images/__in/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(handleLastImagesData)
    .catch(handleError);
}

function onFeaturedFetch() {
  fetch('./images/__in/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(handleFeaturedData)
    .catch(handleError);
}

// handle results of the backEnd response
function handleFeaturedData(data) {
  console.log('data', data);

  const currentViewport = window.innerWidth;
  if (currentViewport < 960) {
    const markupFeaturedImages = createMarkupFeaturedListSmallDevice(data);
    refs.featuredList.innerHTML = markupFeaturedImages;
  } else {
    const markupFeaturedImages = createMarkupFeaturedListLargeDevice(data);
    refs.featuredList.innerHTML = markupFeaturedImages;
  }
}
// handle results of the backEnd response
function handleLastImagesData(data) {
  const markupLastImages = createMarkupLastImages(data);
  refs.lastImagesList.innerHTML = markupLastImages;
}

function handleError(error) {
  console.log('😥');

  console.error(error.message);
}

function handleTags(tags) {
  return tags.map(tag => `#${tag}`).join(', ');
}

function sortRating(data) {
  data.sort((firstElem, secondElem) => secondElem.rating - firstElem.rating);
}

function sortDate(data) {
  data.sort((firstElem, secondElem) => firstElem.age - secondElem.age);
}

function createMarkupFeaturedListSmallDevice(data) {
  sortRating(data);
  const mobileImagesArray = data.slice(0, 5);

  return mobileImagesArray
    .map(imageElem => {
      const { image, tags, title, id } = imageElem;
      const tagsToShow = handleTags(tags);

      return `<li class="featured__item">
            <input
              type="checkbox"
              class="img-check visually-hidden"
              id="${id}"
            />
            <span class="icon-check">
              <svg width="18" height="18">
                <use href="./images/icons/sprite.svg#star-solid"></use>
              </svg>
            </span>
            <label for="${id}">
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
            </label>
          </li>`;
    })
    .join('');
}

function createMarkupFeaturedListLargeDevice(data) {
  sortRating(data);
  const desctopImagesArray = data.slice(0, 3);

  return desctopImagesArray
    .map(imageElem => {
      const { image, tags, title, id } = imageElem;
      const tagsToShow = handleTags(tags);

      return `<li class="featured__item">
      <input
              type="checkbox"
              class="img-check visually-hidden"
              id="${id}"
            />
            <span class="icon-check">
              <svg width="18" height="18">
                <use href="./images/icons/sprite.svg#star-solid"></use>
              </svg>
            </span>
              <label for="${id}">
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
              </label>
            </li>`;
    })
    .join('');
}

function createMarkupLastImages(data) {
  sortDate(data);
  const resentImages = data.slice(0, 2);

  return resentImages
    .map(imageElem => {
      const { image, tags, title, id } = imageElem;
      const tagsToShow = handleTags(tags);

      return `<li class="last-images__item">
      <input
              type="checkbox"
              class="img-check visually-hidden"
              id="${id}"
            />
            <span class="icon-check">
              <svg width="18" height="18">
                <use href="./images/icons/sprite.svg#star-solid"></use>
              </svg>
            </span>
              <label for="${id}">
                <div class="last-images__wrapper">
                <img
                  src="./images/__in/${image}"
                  alt="${title}"
                  class="last-images__img"
                  loading="lazy"
                />
              </div>
              <div class="last-images__info">
                <p class="last-images__name">
                  ${title}
                </p>
                <p class="last-images__tags">${tagsToShow}</p>
              </div>
              </label>
            </li>`;
    })
    .join('');
}
