// import { q } from './js/markup';
// console.log(q);

const refs = {
  featuredContainer: document.querySelector('.js-featured-container'),
  featuredList: document.querySelector('.js-featured-list'),
};

// window.addEventListener('resize', onFetch);
onFetch();

function onFetch() {
  fetch('./images/__in/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(handleData)
    .catch(handleError);
}

function handleData(data) {
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

function handleTags(tags) {
  return tags.map(tag => `#${tag}`).join(', ');
}

function sortData(data) {
  data.sort((firstElem, secondElem) => secondElem.rating - firstElem.rating);
}

function handleError(error) {
  console.log(error.message);
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

// function createMarkupFeaturedListSm(data) {
//   sortData(data);
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
