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

const PINS_MIN_COUNT = 10;

const RENDER_DELAY = 500;

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

export {PropertyType, PINS_MIN_COUNT, RENDER_DELAY, FILE_TYPES};
