import {PropertyType} from './data.js';


const similarAdsTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const renderFeatures = (container, features) => {
  container.innerHTML = '';
  features.forEach (item => {
    const li = document.createElement('li');
    li.classList.add('popup__feature', 'popup__feature--' + item);
    container.appendChild(li);
  })
}

const renderImages = (container, images) => {
  container.innerHTML = '';
  images.forEach (item => {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.src = item;
    img.width = 45;
    img.height = 40;
    img.alt = 'Фотография жилья';
    container.appendChild(img);
  })
}

const getAdvertisement = (ad) => {
  const newAd = similarAdsTemplate.cloneNode(true);
  const {offer, author} = ad;

  newAd.querySelector('.popup__title').textContent = offer.title;
  newAd.querySelector('.popup__text--address').textContent = offer.address;
  newAd.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  newAd.querySelector('.popup__type').textContent = PropertyType(offer.type);
  newAd.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей';
  newAd.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;
  renderFeatures(newAd.querySelector('.popup__features'), offer.features);
  newAd.querySelector('.popup__description').textContent = offer.description;
  renderImages(newAd.querySelector('.popup__photos'), offer.photos);
  newAd.querySelector('.popup__avatar').src = author.avatar;

  return newAd;
};

export {getAdvertisement}
