`use strict`;

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

const actualImg = $$(`.img__box--gif`);
const description = $$(`.img__box--desc`);
const leftP = $$(`.leftP`);
const rightP = $$(`.rightP`);
const buttons = $$$(`button`);

let imagesArray = [];

const getImagesData = async () => {
  try {
    const response = await fetch('./scripts/images.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    imagesArray = data.images;
    return imagesArray;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
};

getImagesData().then(() => {
  const mappedArray = imagesArray.map((image, index) => {
    return { ...image, id: index };
  });
  console.log(mappedArray);

  let currentGif = 0;

  actualImg.setAttribute(`src`, mappedArray[currentGif].src);
  actualImg.setAttribute(`alt`, mappedArray[currentGif].alt);
  description.innerHTML = mappedArray[currentGif].alt;

  let loadPhoto = photoNumber => {
    actualImg.setAttribute(`src`, mappedArray[photoNumber].src);
    actualImg.setAttribute(`alt`, mappedArray[photoNumber].alt);
    description.innerHTML = mappedArray[photoNumber].alt;

    buttons.forEach((btn, i) => {
      if (i !== photoNumber) {
        btn.classList.remove(`clicked`);
      } else {
        btn.classList.add(`clicked`);
      }
    });
  };

  buttons.forEach((button, index) => {
    button.setAttribute(`data-number`, index);
    button.innerHTML = `<img src="${mappedArray[index].src}" alt="${mappedArray[index].alt}" />`;

    button.addEventListener(`click`, () => {
      currentGif = index;
      loadPhoto(currentGif);
    });
  });

  rightP.addEventListener('click', () => {
    currentGif = (currentGif + 1) % mappedArray.length;
    loadPhoto(currentGif);
  });

  leftP.addEventListener(`click`, () => {
    if (currentGif > 0) {
      currentGif--;
    } else {
      currentGif = mappedArray.length - 1;
    }
    loadPhoto(currentGif);
  });
});