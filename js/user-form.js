const currentPrice = document.querySelector('#price')
const houseTypeList = document.querySelector('#type');
const checkInTime = document.querySelector('#timein');
const checkOutTime = document.querySelector('#timeout');

const onCheckInTimeChange = () => {
  checkOutTime.value = checkInTime.value;
}

const onCheckOutTimeChange = () => {
  checkInTime.value = checkOutTime.value;
}

const onHouseTypeChange = () => {
  currentPrice.placeholder = minPrice[houseTypeList.value];
  currentPrice.min = minPrice[houseTypeList.value];
  if (currentPrice.value != '' && currentPrice.value < minPrice[houseTypeList.value]) {
    currentPrice.value = minPrice[houseTypeList.value];
  }
}

const minPrice = {
  palace: 10000,
  bungalow: 0,
  house: 5000,
  flat: 1000,
}

currentPrice.placeholder = minPrice[houseTypeList.value];
currentPrice.min = minPrice[houseTypeList.value];

houseTypeList.addEventListener('change', onHouseTypeChange);

checkInTime.value = checkOutTime.value;
checkInTime.addEventListener('change', onCheckInTimeChange);
checkOutTime.addEventListener('change', onCheckOutTimeChange);
