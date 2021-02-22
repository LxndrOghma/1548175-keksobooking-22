const adForm = document.querySelector('.ad-form');
const adFormFields = adForm.querySelectorAll('fieldset');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormFields = mapFiltersForm.querySelectorAll('.map__filter, .map__features');
const currentPrice = document.querySelector('#price')
const houseTypeList = document.querySelector('#type');
const checkInTime = document.querySelector('#timein');
const checkOutTime = document.querySelector('#timeout');
const addressField = adForm.querySelector('#address');

// Form inactive

adForm.classList.add('ad-form--disabled');
adFormFields.forEach((field) => {
  field.setAttribute('disabled', '');
});

mapFiltersForm.classList.add('map__filters--disabled');
mapFiltersFormFields.forEach((field) => {
  field.setAttribute('disabled', '');
});

// Form activation function

const getActivatedForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFields.forEach((field) => {
    field.removeAttribute('disabled', '');
  });
  addressField.setAttribute('readonly', '');
  mapFiltersForm.classList.remove('map__filters--disabled');
  mapFiltersFormFields.forEach((field) => {
    field.setAttribute('disabled', '');
  });
}

// Check in and check out fields link

const onCheckInTimeChange = () => {
  checkOutTime.value = checkInTime.value;
}

const onCheckOutTimeChange = () => {
  checkInTime.value = checkOutTime.value;
}

// house type and price fields link

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

export {getActivatedForm};
