const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0) {
    throw new Error('Ошибка! Минимальное значение меньше 0!')
  }

  if (min > max) {
    throw new Error('Ошибка! Минимальное значение не меньше максимального! Проверьте введённые параметры!')
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max, accuracy) => {

  if (min < 0) {
    throw new Error('Ошибка! Минимальное значение меньше 0!')
  }

  if (min >= max) {
    throw new Error('Ошибка! Минимальное значение не меньше максимального! Проверьте введённые параметры!')
  }

  let number = Math.random() * (max - min) + min;

  return Number(number.toFixed(accuracy));
};

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

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length -1)];
};

const getShuffledArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i +1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getUniqueRandomArray = (array) => {
  const length = getRandomNumber(1, array.length);
  return getShuffledArray(array).slice(0 , length)
}

const createAd = () => {
  const avatarUrl = 'img/avatar/user0' + getRandomNumber(1, 8) + '.png';
  const locationX = getRandomFloat(35.65000, 35.70000, 5);
  const locationY = getRandomFloat(139.70000, 139.80000, 5);


  return {
    author: {
      avatar: avatarUrl,
    },
    offer: {
      title: 'Замечательная возможность снять недвижимость!',
      adress: '' + locationX + ', ' + locationY,
      price: getRandomNumber(0, 100000),
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

// eslint-disable-next-line no-unused-vars
const Ads = new Array(ADS_COUNT).fill(null).map(() => createAd());
