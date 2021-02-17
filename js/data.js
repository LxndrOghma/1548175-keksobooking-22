import {getRandomNumber, getRandomFloat, getRandomArrayElement, getUniqueRandomArray} from './utils/random.js';

const PROPERTY_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_LIST = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS_LINK = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const ADS_COUNT = 10;

const PropertyType = (type) => {
  switch (type) {
    case 'palace':
      return 'Дворец';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'flat':
      return 'Квартира';
    default:
      return 'Недвижимость';
  }
}

const createAd = () => {
  const avatarUrl = 'img/avatars/user0' + getRandomNumber(1, 8) + '.png';
  const locationX = getRandomFloat(35.65000, 35.70000, 5);
  const locationY = getRandomFloat(139.70000, 139.80000, 5);


  return {
    author: {
      avatar: avatarUrl,
    },
    offer: {
      title: 'Замечательная возможность снять недвижимость!',
      address: '' + locationX + ', ' + locationY,
      price: getRandomNumber(0, 30000),
      type: getRandomArrayElement(PROPERTY_TYPE),
      rooms: getRandomNumber(1, 3),
      guests: getRandomNumber(1, 4),
      checkin: getRandomArrayElement(CHECK_TIME),
      checkout: getRandomArrayElement(CHECK_TIME),
      features: getUniqueRandomArray(FEATURES_LIST),
      description: 'Самый лучший номер на свете! Даже не вздумайте в этом сомневаться!',
      photos: getUniqueRandomArray(PHOTOS_LINK),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
};

const ads = () => new Array(ADS_COUNT).fill(null).map(createAd);

export {ads, PropertyType};
