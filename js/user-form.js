const userForm = document.querySelector('.ad-form');
const houseTypeField = userForm.children[3];
const priceField = userForm.children[4];
const houseTypeList = houseTypeField.children[1];
const checkTime = document.querySelector('.ad-form__element--time');

const PropertyMinPrice = (type) => {
  switch (type) {
    case 'palace':
      return 10000;
    case 'bungalow':
      return 0;
    case 'house':
      return 5000;
    case 'flat':
      return 1000;
    default:
      return 0;
  }
}

const getMinPrice = (propertyType, priceField) => {
  const currentPrice = priceField.querySelector('#price')

  currentPrice.placeholder = PropertyMinPrice(propertyType.value);
  currentPrice.min = PropertyMinPrice(propertyType.value);

  houseTypeField.addEventListener('change', function() {
    currentPrice.placeholder = PropertyMinPrice(propertyType.value);
    currentPrice.min = PropertyMinPrice(propertyType.value);
    if (currentPrice.value != '' && currentPrice.value < PropertyMinPrice(propertyType.value)) {
      currentPrice.value = PropertyMinPrice(propertyType.value);
    }
  });
}

const setTime = () => {
  const checkinTime = checkTime.querySelector('#timein');
  const chckoutTime = checkTime.querySelector('#timeout');

  checkinTime.value = chckoutTime.value;

  checkinTime.addEventListener('change', function () {
    chckoutTime.value = checkinTime.value;
  });

  chckoutTime.addEventListener('change', function() {
    checkinTime.value = chckoutTime.value;
  });
}

getMinPrice(houseTypeList, priceField);
setTime();
