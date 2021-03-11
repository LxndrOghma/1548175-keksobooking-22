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

const typeFilter = (ad) => (housingType.value === 'any' || ad.offer.type == housingType.value);

const priceFilter = (ad) =>
  (ad.offer.price >= priceRange[housingPrice.value].min && ad.offer.price < priceRange[housingPrice.value].max || housingPrice.value === 'any');

const roomsFilter = (ad) => (housingRooms.value === 'any' || Number(housingRooms.value) === ad.offer.rooms);

const guestFilter = (ad) => (housingGuests.value === 'any' || Number(housingGuests.value) === ad.offer.guests);

const featuresFilter = (data) => {
  let value = true;

  housingFeatures.querySelectorAll('input:checked').forEach((feature) => {
    if(data.indexOf(feature.value) === -1) {
      value = false;
    }
  });

  return value;
}

const getFilteredAds = (data) => {
  return (
    typeFilter(data) &&
    priceFilter(data) &&
    roomsFilter(data) &&
    guestFilter(data) &&
    featuresFilter(data.offer.features)
  )
}

const setFilterChange = (cb) => {
  filterForm.addEventListener('change', () => {
    cb();
  });
};

export {getFilteredAds, setFilterChange}
