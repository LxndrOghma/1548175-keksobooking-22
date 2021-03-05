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

export {PropertyType};
