const PINS_MIN_COUNT = 10;
const RENDER_DELAY = 500;
const DEFAULT_USER_AVATAR = 'img/muffin-grey.svg'
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

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

export {PropertyType, PINS_MIN_COUNT, RENDER_DELAY, FILE_TYPES, DEFAULT_USER_AVATAR};
