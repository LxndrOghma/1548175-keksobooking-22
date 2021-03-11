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

export {PropertyType, PINS_MIN_COUNT};
