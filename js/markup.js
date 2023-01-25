export const q = 10;

export function createMarkupFeaturedListSm(data) {
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

function sortData(data) {
  data.sort((firstElem, secondElem) => secondElem.rating - firstElem.rating);
}
