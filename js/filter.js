import {clearPins, renderPins} from './map.js';
import {PINS_MIN_COUNT} from './data.js';

const priceRange = {
  low : {
    min : 0,
    max : 10000,
  },
  middle : {
    min : 10000,
    max : 50000,
  },
  high: {
    min : 50000,
    max : Infinity,
  },
  any: {
    min: 0,
    max: Infinity,
  },
}

const filterForm = document.querySelector('.map__filters');
const housingType = filterForm.querySelector('#housing-type');
const housingPrice = filterForm.querySelector('#housing-price');
const housingRooms = filterForm.querySelector('#housing-rooms');
const housingGuests = filterForm.querySelector('#housing-guests');
const housingFeatures = filterForm.querySelector('#housing-features');

const typeFilter = (ad, filter) => (filter === 'any' || ad.offer.type == filter) ? true : false;

const priceFilter = (ad, filter) =>
  (ad.offer.price >= priceRange[filter].min && ad.offer.price < priceRange[filter].max || filter === 'any') ? true : false;

const roomFilter = (ad, filter) => (filter === 'any' || Number(filter) === ad.offer.rooms) ? true : false;

const guestFilter = (ad, filter) => (filter === 'any' || Number(filter) === ad.offer.guests) ? true : false;

const featureFilter = (ad, features) => {
  for (const feature of features) {
    if(!ad.offer.features.includes(feature)) {
      return false
    }
  }
  return true;
};

const filterAds = (pins, offers) => {
  let type = 'any';
  let price = 'any';
  let rooms = 'any';
  let guest = 'any';
  let featuresList = [];
  let filteredAd = offers;

  const updatePins = () => {
    clearPins(pins);
    const newPins = filteredAd.length < PINS_MIN_COUNT ?
      filteredAd : filteredAd.slice(0, PINS_MIN_COUNT);
    pins = renderPins(newPins);
  }

  const filteringOffers = () => filteredAd = offers
    .filter((offer) => typeFilter(offer, type))
    .filter((offer) => priceFilter(offer, price))
    .filter((offer) => roomFilter(offer, rooms))
    .filter((offer) => guestFilter(offer, guest))
    .filter((offer) => featureFilter(offer, featuresList));

  housingType.addEventListener('change', (evt) => {
    type = evt.target.value;
    filteringOffers();
    updatePins();
  })

  housingPrice.addEventListener('change', (evt) => {
    price = evt.target.value;
    filteringOffers();
    updatePins();
  })

  housingRooms.addEventListener('change', (evt) => {
    rooms = evt.target.value;
    filteringOffers();
    updatePins();
  })

  housingGuests.addEventListener('change', (evt) => {
    guest = evt.target.value;
    filteringOffers();
    updatePins();
  })

  housingFeatures.addEventListener('change', () => {
    featuresList = Array
      .from(housingFeatures.querySelectorAll('input:checked'))
      .map((ad) => ad.value);
    filteringOffers();
    updatePins();
  })

}

export {filterAds};
