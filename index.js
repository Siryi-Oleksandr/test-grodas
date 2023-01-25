// import { q } from './js/markup';
// console.log(q);

const refs = {
  lastImagesList: document.querySelector('.js-last-images'),
  featuredList: document.querySelector('.js-featured-list'),
};

// window.addEventListener('resize', onFetch);
onFeaturedFetch();
onLastImagesFetch();

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

function handleFeaturedData(data) {
  const currentViewport = window.innerWidth;
  //   if (currentViewport < 960) {
  //     console.log(currentViewport);
  //   } else {
  //     console.log('Big screen');
  //   }
  console.log(data);
  const markupFeaturedImages = createMarkupFeaturedListSm(data);

  refs.featuredList.innerHTML = markupFeaturedImages;
}

function handleLastImagesData(data) {
  const markupLastImages = createMarkupLastImages(data);
  refs.lastImagesList.innerHTML = markupLastImages;
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

function handleError(error) {
  console.log(error.message);
}

function createMarkupFeaturedListSm(data) {
  sortRating(data);
  const mobileImagesArray = data.slice(0, 3);

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

function createMarkupLastImages(data) {
  sortDate(data);
  const resentImages = data.slice(0, 2);

  return resentImages
    .map(imageElem => {
      const { id, age, image, rating, tags, title, url } = imageElem;
      const tagsToShow = handleTags(tags);

      return `<li class="last-images__item">
              <a href="${url}" class="last-images__link">
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
              </a>
            </li>`;
    })
    .join('');
}

// function createMarkupFeaturedListSm(data) {
//   sortRating(data);
//   const mobileImagesArray = data.slice(0, 5);

//   return mobileImagesArray
//     .map(imageElem => {
//       const { id, age, image, rating, tags, title, url } = imageElem;
//       const tagsToShow = handleTags(tags);

//       return `<li class="featured__item">
//               <a href="${url}" class="featured__link">
//                 <div class="img-wrapper">
//                   <img
//                     src="./images/__in/${image}"
//                     alt="${title}"
//                     class="featured__img"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div class="img__info">
//                   <p class="img__name">${title}</p>
//                   <p class="img__tags">${tagsToShow}</p>
//                 </div>
//               </a>
//             </li>`;
//     })
//     .join('');
// }
