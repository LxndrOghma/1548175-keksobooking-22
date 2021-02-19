const currentPrice = document.querySelector('#price')
const houseTypeList = document.querySelector('#type');
const checkinTime = document.querySelector('#timein');
const chckoutTime = document.querySelector('#timeout');

const propertyMinPrice = (type) => {
  const minPrice = {
    palace: 10000,
    bungalow: 0,
    house: 5000,
    flat: 1000,
  }
  return minPrice[type];
}

currentPrice.placeholder = propertyMinPrice(houseTypeList.value);
currentPrice.min = propertyMinPrice(houseTypeList.value);

houseTypeList.addEventListener('change', () => {
  currentPrice.placeholder = propertyMinPrice(houseTypeList.value);
  currentPrice.min = propertyMinPrice(houseTypeList.value);
  if (currentPrice.value != '' && currentPrice.value < propertyMinPrice(houseTypeList.value)) {
    currentPrice.value = propertyMinPrice(houseTypeList.value);
  }
})

checkinTime.value = chckoutTime.value;

checkinTime.addEventListener('change', function () {
  chckoutTime.value = checkinTime.value;
});

chckoutTime.addEventListener('change', function() {
  checkinTime.value = chckoutTime.value;
});
